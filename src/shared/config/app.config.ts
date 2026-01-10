interface AppConfig {
  readonly metadata: {
    readonly title: string;
    readonly description: string;
  };
}

export const APP_CONFIG: AppConfig = {
  metadata: {
    title: process.env.NEXT_PUBLIC_APP_TITLE || "Jonathan Chavarria - Python Developer & DevOps Engineer",
    description:
      process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
      "Python Developer & DevOps Engineer specializing in system-level automation and infrastructure optimization. Portfolio and professional experience.",
  },
} as const;
