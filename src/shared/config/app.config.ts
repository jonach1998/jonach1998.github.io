interface AppConfig {
  readonly metadata: {
    readonly title: string;
    readonly description: string;
  };
}

export const APP_CONFIG: AppConfig = {
  metadata: {
    title:
      process.env.NEXT_PUBLIC_APP_TITLE ||
      "Jonathan Chavarria — Lead Site Reliability & DevOps Engineer",
    description:
      process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
      "Lead Site Reliability Engineer (SRE) and DevOps Engineer with 6+ years building CI/CD, automation, observability, and AI-powered tooling. Open to Cloud, DevOps, and AI Engineering opportunities — remote or hybrid.",
  },
} as const;
