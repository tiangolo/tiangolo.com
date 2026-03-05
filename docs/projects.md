# Projects

I've created a few open source projects. ✨

## FastAPI GitHub

Projects in the [FastAPI GitHub organization](https://github.com/fastapi).

{% for project in projects["fastapi"] %}

* <small>⭐️ {{ project.stargazers_count }}</small> [{{ project.name }}]({{ project.html_url }}) {{ "- " + project.description if project.description }}

{% endfor %}

## tiangolo's GitHub

Projects in my [personal GitHub profile: @tiangolo](https://github.com/tiangolo).

{% for project in projects["tiangolo"] %}

* <small>⭐️ {{ project.stargazers_count }}</small> [{{ project.name }}]({{ project.html_url }}) {{ "- " + project.description if project.description }}

{% endfor %}
