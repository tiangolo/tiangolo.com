import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLink({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: IconDefinition;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="text-green-600 hover:text-green-700 block h-6 my-4 mx-4 duration-150"
    >
      <FontAwesomeIcon
        className="h-full"
        title={title}
        icon={icon}
      ></FontAwesomeIcon>
    </a>
  );
}
