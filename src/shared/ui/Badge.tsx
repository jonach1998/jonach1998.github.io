import type { BaseComponentProps } from "../types";

interface BadgeProps extends BaseComponentProps {
  readonly variant?: "default" | "secondary" | "outline";
}

export function Badge({
  children,
  className = "",
  variant = "default",
}: BadgeProps): React.ReactElement {
  const variantClasses = {
    default: "bg-foreground text-background",
    secondary: "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
    outline: "border border-foreground text-foreground",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
