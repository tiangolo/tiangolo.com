# GitHub FastAPI

The [FastAPI GitHub organization](https://github.com/fastapi){target=_blank} was created by me ([@tiangolo](https://github.com/tiangolo){target=_blank}) to hold and manage the open source projects.

I normally give the final review to each PR before merging them. I make the final decisions on the the project, I'm the <a href="https://en.wikipedia.org/wiki/Benevolent_dictator_for_life" class="external-link" target="_blank"><abbr title="Benevolent Dictator For Life">BDFL</abbr></a>. 😅

## Repository Management

There's a team of people that help manage and maintain the repositories.

They have different levels of permissions and specific instructions.

Some of the tasks they can perform include:

* Adding labels to PRs.
* Editing PR titles.
* Adding commits on top of PRs to tweak them.
* Marking answers in GitHub Discussions questions, etc.
* Merging some specific types of PRs.

Joining the team is by invitation only, and I could update or remove permissions, instructions, or membership.

Each project has specific guidelines about how to help.

Most of the work can be done by anyone (e.g. answering questions). Some tasks require some permissions (e.g. adding labels) that can only be accomplished by team members.

## Team

This is the current list of team members. 😎

<div class="user-list user-list-center">
{% for user in members["members"] %}

<div class="user"><a href="https://github.com/{{ user.login }}" target="_blank"><div class="avatar-wrapper"><img src="https://github.com/{{ user.login }}.png"/></div><div class="title">@{{ user.login }}</div></a></div>
{% endfor %}

</div>

Additional to them, there's a large community of people helping each other and getting involved in the projects in different ways.
