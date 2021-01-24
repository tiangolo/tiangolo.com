import {
    faDev,
    faGithub,
    faLinkedin,
    faMedium,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import ExternalLink from "./external-link";
import InternalLink from "./internal-link";

const siteDescription = "tiangolo (Sebastián Ramírez) personal website";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={siteDescription} />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta name="og:title" content={siteDescription} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="h-2 bg-green-500" />
      <div className="text-lg px-7">
        <header>
          {home ? (
            <>
              <img
                src="/images/profile.jpg"
                className="rounded-full h-80 w-80 mx-auto my-20"
                alt="tiangolo (Sebastián Ramírez)"
              />
            </>
          ) : (
            <>
              <InternalLink href="/">
                <div className="m-3 text-center lg:max-w-6xl mx-auto relative">
                  <img
                    src="/images/profile.jpg"
                    className="rounded-full float-left h-24 w-24 sm:absolute sm:left-6"
                    alt="tiangolo (Sebastián Ramírez)"
                  />
                  <h1 className="text-xl py-6">
                    tiangolo's personal boring website
                  </h1>
                </div>
              </InternalLink>
              <div className="clear-both"></div>
            </>
          )}
        </header>
        <main className="lg:max-w-6xl mx-auto">{children}</main>
      </div>
      <div className="text-center flex justify-center space-x-6 text-2xl mb-4">
        <ExternalLink href="https://twitter.com/tiangolo">
          <FontAwesomeIcon title="Twitter" icon={faTwitter}></FontAwesomeIcon>
        </ExternalLink>
        <ExternalLink href="https://github.com/tiangolo">
          <FontAwesomeIcon title="GitHub" icon={faGithub}></FontAwesomeIcon>
        </ExternalLink>
        <ExternalLink href="mailto:tiangolo@gmail.com">
          <FontAwesomeIcon title="Email" icon={faEnvelope}></FontAwesomeIcon>
        </ExternalLink>
        <ExternalLink href="https://linkedin.com/in/tiangolo">
          <FontAwesomeIcon title="Email" icon={faLinkedin}></FontAwesomeIcon>
        </ExternalLink>
        <ExternalLink href="https://dev.to/tiangolo">
          <FontAwesomeIcon title="Dev" icon={faDev}></FontAwesomeIcon>
        </ExternalLink>
        <ExternalLink href="https://tiangolo.medium.com/">
          <FontAwesomeIcon title="Medium" icon={faMedium}></FontAwesomeIcon>
        </ExternalLink>
      </div>
      <footer className="text-sm m-5 text-center">
        © All rights reserved. And all that stuff. 🤷
      </footer>
    </div>
  );
}
