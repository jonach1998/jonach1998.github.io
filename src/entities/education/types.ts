export interface Education {
  readonly degree: string;
  readonly institution: string;
  readonly location: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly isCurrent: boolean;
  readonly status: "Completed" | "In progress";
  readonly logo?: string;
  readonly logoVariant?: "wordmark" | "emblem";
}
