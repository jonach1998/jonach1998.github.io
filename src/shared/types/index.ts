export interface BaseComponentProps {
  readonly children?: React.ReactNode;
  readonly className?: string;
}

export interface LinkProps {
  readonly href: string;
  readonly label: string;
  readonly isExternal?: boolean;
}
