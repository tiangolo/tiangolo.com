export default function ExternalLink({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener" className="text-green-600 hover:underline">
      {children}
    </a>
  );
}
