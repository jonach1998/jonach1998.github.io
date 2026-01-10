import type { BaseComponentProps } from "../types";

interface SectionProps extends BaseComponentProps {
  readonly id?: string;
  readonly title?: string;
}

export function Section({
  id,
  title,
  children,
  className = "",
}: SectionProps): React.ReactElement {
  return (
    <section id={id} className={`py-8 ${className}`}>
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        {title && (
          <h2 className="mb-12 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
