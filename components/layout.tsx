import {
  faDev,
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import ExternalLink from "./external-link";
import InternalLink from "./internal-link";
import SocialLink from "./social-link";

const siteDescription =
  "tiangolo's (Sebastián Ramírez) boring personal website";

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
      <div className="h-2 bg-green-600" />
      <div className="text-lg px-7">
        <header>
          {home ? (
            <>
              <img
                src="/images/profile.jpg"
                className="rounded-full max-h-80 mx-auto my-20"
                alt="tiangolo (Sebastián Ramírez)"
              />
            </>
          ) : (
            <>
              <InternalLink href="/">
                <div className="m-3 text-center lg:max-w-6xl mx-auto relative">
                  <img
                    src="/images/profile.jpg"
                    className="rounded-full float-left max-h-24 sm:absolute sm:left-6"
                    alt="tiangolo (Sebastián Ramírez)"
                  />
                  <h1 className="text-xl py-6">
                    tiangolo's boring personal website
                  </h1>
                </div>
              </InternalLink>
              <div className="clear-both"></div>
            </>
          )}
        </header>
        <main className="lg:max-w-6xl mx-auto">{children}</main>
      </div>
      <div className="text-center flex justify-center flex-wrap text-2xl m-4 mb-4">
        <SocialLink
          href="https://twitter.com/tiangolo"
          title="Twitter"
          icon={faTwitter}
        />
        <SocialLink
          href="https://github.com/tiangolo"
          title="GitHub"
          icon={faGithub}
        />
        <SocialLink
          href="mailto:tiangolo@gmail.com"
          title="Email"
          icon={faEnvelope}
        />
        <SocialLink
          href="https://linkedin.com/in/tiangolo"
          title="LinkedIn"
          icon={faLinkedin}
        />
        <SocialLink href="https://dev.to/tiangolo" title="Dev" icon={faDev} />
        <SocialLink
          href="https://tiangolo.medium.com/"
          title="Medium"
          icon={faMedium}
        />
      </div>
      <footer className="text-sm m-5 text-center">
        © All rights reserved. And all that stuff. 🤷
      </footer>
    </div>
  );
}
