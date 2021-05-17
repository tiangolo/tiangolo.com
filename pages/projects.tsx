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
        <div className="my-3 text-center">
            If my open source projects are useful for your <strong>product/company</strong> you can also sponsor my work on them. ☕
          </div>
          <div className="my-5 text-center">
            <iframe className="text-center inline-block" src="https://github.com/sponsors/tiangolo/button" title="Sponsor tiangolo" height="35" width="116" style={{border: 0}}></iframe>
          </div>
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
