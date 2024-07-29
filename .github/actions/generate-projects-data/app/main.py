import logging
import subprocess
import sys
from pathlib import Path

import github
import github.Repository
import yaml
from github import Github
from pydantic import BaseModel, SecretStr, TypeAdapter
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    input_token: SecretStr
    input_github_user: str
    input_github_org: str
    github_repository: str


class Project(BaseModel):
    stargazers_count: int
    html_url: str
    name: str
    description: str | None = None


projects_list_ta = TypeAdapter(list[Project])
projects_data_ta = TypeAdapter(dict[str, list[Project]])


def get_projects_data(repos: list[github.Repository.Repository]) -> list[Project]:
    non_fork_repos = [repo for repo in repos if not repo.fork]
    non_archived_repos = [repo for repo in non_fork_repos if not repo.archived]
    non_archived_repos.sort(key=lambda repo: repo.stargazers_count, reverse=True)

    projects_list = projects_list_ta.validate_python(
        non_archived_repos, from_attributes=True
    )
    return projects_list


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    settings = Settings()
    logging.info(f"Using config: {settings.model_dump_json()}")
    g = Github(settings.input_token.get_secret_value())

    user = g.get_user(settings.input_github_user)
    org = g.get_organization(settings.input_github_org)

    user_repos = list(user.get_repos())
    user_projects = get_projects_data(user_repos)

    org_repos = list(org.get_repos())
    org_projects = get_projects_data(org_repos)

    projects_data = projects_data_ta.validate_python(
        {settings.input_github_user: user_projects, settings.input_github_org: org_projects},
        from_attributes=True,
    )
    projects_content = yaml.dump(
        projects_data_ta.dump_python(projects_data),
        sort_keys=False,
        width=200,
        allow_unicode=True,
    )

    # For local development
    # projects_path = Path("../../../../data/projects.yml")
    projects_path = Path("data/projects.yml")
    projects_old_content = projects_path.read_text(encoding="utf-8")
    if projects_old_content != projects_content:
        projects_path.write_text(projects_content, encoding="utf-8")

    if projects_old_content == projects_content:
        logging.info("The data hasn't changed, finishing.")
        sys.exit(0)

    logging.info("Setting up GitHub Actions git user")
    subprocess.run(["git", "config", "user.name", "github-actions"], check=True)
    subprocess.run(
        ["git", "config", "user.email", "github-actions@github.com"], check=True
    )
    branch_name = "update-data-repos"
    logging.info(f"Creating a new branch {branch_name}")
    subprocess.run(["git", "checkout", "-b", branch_name], check=True)
    logging.info("Adding updated file")
    subprocess.run(["git", "add", str(projects_path)], check=True)
    logging.info("Committing updated file")
    message = "🔧 Update projects data"
    result = subprocess.run(["git", "commit", "-m", message], check=True)
    logging.info("Pushing branch")
    subprocess.run(["git", "push", "origin", branch_name], check=True)
    logging.info("Creating PR")
    repo = g.get_repo(settings.github_repository)
    pr = repo.create_pull(title=message, body=message, base="master", head=branch_name)
    logging.info(f"Created PR: {pr.number}")
    logging.info("Finished")
