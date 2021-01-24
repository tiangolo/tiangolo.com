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
            I currently work at{" "}
            <ExternalLink href="https://explosion.ai/">Explosion</ExternalLink>{" "}
            in Berlin. 🇩🇪
          </div>
          <div className="my-3">
            I have been building APIs and tools for Machine Learning and data
            systems, in Latin America, the Middle East, and now Europe. 🌎
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
        </div>
      </Layout>
    </>
  );
}
