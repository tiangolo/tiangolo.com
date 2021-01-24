import Link from "next/link";

export default function InternalLink({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <a className="text-green-500 hover:underline">{children}</a>
    </Link>
  );
}
