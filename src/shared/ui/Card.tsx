import type { BaseComponentProps } from "../types";

export function Card({
  children,
  className = "",
}: BaseComponentProps): React.ReactElement {
  return (
    <div
      className={`rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8 backdrop-blur-xl transition-all duration-300 hover:shadow-lg ${className}`}
      style={{
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
      }}
    >
      {children}
    </div>
  );
}
