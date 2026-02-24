# Library Agent Skills

This is a complement to [https://agentskills.io](https://agentskills.io){target="_blank"}, to allow library authors to define a canonical directory to include skills for their libraries, bundled with them, that agents can find and use.

## Library Skills

Agents working in a programming environment such as Python or JavaScript (TypeScript) with access to installed libraries can scan those libraries for skills defined by them and use the functionality provided by those libraries.

Each library can define its own skills in a `.agents/skills/` directory inside of its own package.

For example, a Python library like `fastapi` could include a skill at

```
fastapi/.agents/skills/fastapi/SKILL.md
```

If the Python virtual environment being used is at `.venv`, the agent could find that skill in a directory like

```
.venv/lib64/python3.14/site-packages/fastapi/.agents/skills/fastapi/SKILL.md
```

In this case using Python 3.14 and a 64-bit environment.

A JavaScript library like `@tanstack/react-router` could include a skill at

```
@tanstack/react-router/.agents/skills/tanstack-router/SKILL.md
```

The agent could find that skill in a directory like

```
node_modules/@tanstack/react-router/.agents/skills/tanstack-router/SKILL.md
```

## Benefits

Libraries can provide their **official** skills instructing how to work with them this way. They can define multiple skills if needed.

By using library skills, agents can make sure they follow the **best practices** defined by those libraries, **up to date** with their **latest versions**.

## Agents Using Library Skills

Agents can scan those local environments the same way they scan source code in them.

They might prompt the user and suggest the available skills, mentioning which installed library provides them.

They could also have a predefined set of allowed library skills for commonly known packages if they are found installed.

Or they could use the official skills provided by libraries by default when explicitly working with those libraries.

### Security

As the libraries found in the local environment are already installed and can be executed, the risk of prompt injection is not higher than the risk of executing code from those libraries, nevertheless, agents should apply their own security measures and policies when using those skills.

## Examples

FastAPI provides an official skill

```
fastapi/.agents/skills/fastapi/SKILL.md
```

bundled with the library when installed.

The [source code for the FastAPI skill is in GitHub](https://github.com/tiangolo/fastapi/tree/master/fastapi/.agents/skills/fastapi){target="_blank"}. It is kept up to date with the latest features of FastAPI in each version, so that agents using it can keep using best practices when working with it.
