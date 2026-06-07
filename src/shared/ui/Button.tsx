import type { BaseComponentProps } from "../types";

interface ButtonProps extends BaseComponentProps {
  readonly href?: string;
  readonly onClick?: () => void;
  readonly variant?: "primary" | "secondary" | "outline";
  readonly type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  className = "",
  href,
  onClick,
  variant = "primary",
  type = "button",
}: ButtonProps): React.ReactElement {
  const baseClasses =
    "inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] focus:ring-[var(--accent)] shadow-lg hover:shadow-xl",
    secondary:
      "bg-[var(--card-bg)] text-foreground border border-[var(--card-border)] hover:bg-[var(--background)] focus:ring-[var(--accent)]",
    outline:
      "border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white focus:ring-[var(--accent)]",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
