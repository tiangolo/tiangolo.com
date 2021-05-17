import Head from "next/head";
import ExternalLink from "../components/external-link";
import InternalLink from "../components/internal-link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Layout home>
        <Head><title>tiangolo's boring personal website</title></Head>
        <div className="text-center">
          <h1 className="text-3xl">
            Hey! I'm{" "}
            <strong>
              <ExternalLink href="https://twitter.com/tiangolo">
                @tiangolo
              </ExternalLink>{" "}
              (Sebastián Ramírez)
            </strong>{" "}
            👋
          </h1>
          <div className="my-3">I'm a software developer from Colombia. 🇨🇴</div>
          <div className="my-3">
            I currently live in Berlin, Germany. 🇩🇪
          </div>
          <div className="my-3">
            I have been building APIs and tools for Machine Learning and data
            systems, in Latin America, the Middle East, and now Europe, with different teams and organizations. 🌎
          </div>
          <div className="my-3">
            I created{" "}
            <ExternalLink href="https://fastapi.tiangolo.com/">
              <strong>FastAPI</strong>
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://typer.tiangolo.com/">
              <strong>Typer</strong>
            </ExternalLink>{" "}
            and a bunch of other{" "}
            <InternalLink href="/projects/">open source tools</InternalLink>. 🚀
          </div>
          <div className="my-3">
            I like to build things with Deep Learning/Machine Learning,
            distributed systems, SQL and NoSQL databases, Docker, Python,
            TypeScript (and JavaScript), modern backend APIs, and modern
            frontend frameworks. 🤖
          </div>
          <div className="my-9 text-2xl">
            You are probably looking for my{" "}
            <InternalLink href="/projects/">open source projects</InternalLink>.
          </div>
          <div className="my-3">
          </div>
          <div className="my-3">
            I'm currently dedicating a high percentage of my time to FastAPI, Typer, and my other open source projects. At the same time, I'm also helping a limited number of teams and organizations as an <strong>external consultant</strong>. If you would like to have my help with your team and product, feel free to <strong>contact me</strong>. 🤓
          </div>
          <div className="my-3">
            If my open source projects are useful for your <strong>product/company</strong> you can also sponsor my work on them. ☕
          </div>
          <div className="my-3">
            <iframe className="text-center inline-block" src="https://github.com/sponsors/tiangolo/button" title="Sponsor tiangolo" height="35" width="116" style={{border: 0}}></iframe>
          </div>
        </div>
      </Layout>
    </>
  );
}
