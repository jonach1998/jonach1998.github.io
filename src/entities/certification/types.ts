export interface Certification {
  readonly name: string;
  readonly issuer: string;
  readonly issueDate?: string;
  readonly status: "completed" | "in-progress";
}
