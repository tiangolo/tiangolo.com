export default function ExternalLink({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" className="text-green-500 hover:underline">
      {children}
    </a>
  );
}
