import Layout from "../components/layout";
import { getProjects, ProjectsData, Project } from "../lib/projects";
import ExternalLink from "../components/external-link";
import dynamic from "next/dynamic";
import Head from "next/head";

const GitHubButtion = dynamic(() => import("react-github-btn"), { ssr: false });

export function getStaticProps() {
  return {
    props: {
      projects: getProjects(),
    },
  };
}

export default function Projects({ projects }: { projects: ProjectsData }) {
  return (
    <Layout>
      <Head>
        <title>tiangolo's open source projects</title>
      </Head>
      <div>
        <h1 className="text-center text-2xl my-12">Open source projects</h1>
        <ul>
          {projects.source.map((project: Project) => (
            <li key={project.name} className="my-10">
              <GitHubButtion data-show-count href={project.link}>
                Star
              </GitHubButtion>
              <div>
                <ExternalLink href={project.link}>
                  <strong>{project.name}</strong>
                </ExternalLink>{" "}
                - <span>{project.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
