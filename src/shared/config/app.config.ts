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
      "Jonathan Chavarria — Python Developer & DevOps Engineer",
    description:
      process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
      "Python Developer & DevOps Engineer with 5+ years building automation, CI/CD pipelines, data tooling, and AI-powered workflows. Seeking Cloud, DevOps, and AI Engineering roles — remote or hybrid.",
  },
} as const;
