import type { BaseComponentProps } from "../types";

export function Card({
  children,
  className = "",
}: BaseComponentProps): React.ReactElement {
  return (
    <div
      className={`rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 ${className}`}
    >
      {children}
    </div>
  );
}
