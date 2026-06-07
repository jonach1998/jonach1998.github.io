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
    default: "bg-[var(--foreground)] text-[var(--background)]",
    secondary: "bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--card-border)]",
    outline: "border border-[var(--border)] text-[var(--foreground)] bg-transparent",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-sm ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
