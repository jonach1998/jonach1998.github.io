export interface WorkExperience {
  readonly title: string;
  readonly company: string;
  readonly location: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly isCurrent: boolean;
  readonly achievements: readonly string[];
  readonly logo?: string;
  readonly logoVariant?: "wordmark" | "emblem";
}
