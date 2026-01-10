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
    <section id={id} className={`py-16 ${className}`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="mb-8 text-3xl font-bold text-foreground">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}
