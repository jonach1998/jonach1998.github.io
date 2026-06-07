import Link from "next/link";
import type { BaseComponentProps } from "../types";

interface ExternalLinkProps extends BaseComponentProps {
  readonly href: string;
  readonly target?: "_blank" | "_self" | "_parent" | "_top";
  readonly rel?: string;
}

export function ExternalLink({
  href,
  children,
  className = "",
  target = "_blank",
  rel = "noopener noreferrer",
}: ExternalLinkProps): React.ReactElement {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
  );
}
