export interface ProjectLink {
  readonly label: string;
  readonly href: string;
}

export interface Project {
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly tech: readonly string[];
  readonly links: readonly ProjectLink[];
}
