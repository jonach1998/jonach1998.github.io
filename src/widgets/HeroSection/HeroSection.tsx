import { PROFILE_DATA } from "@/shared/config";
import { Button } from "@/shared/ui";

export function HeroSection(): React.ReactElement {
  const { name, title, contact } = PROFILE_DATA;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,113,227,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-12">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-2 text-sm text-[var(--secondary)] backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Seeking Cloud · DevOps · AI Engineering roles
        </div>

        <h1 className="mb-6 text-6xl font-semibold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          {name}
        </h1>

        <p className="mb-6 text-2xl font-light text-[var(--accent)] sm:text-3xl">
          {title}
        </p>

        <p className="mb-10 text-lg font-light text-[var(--secondary)] sm:text-xl max-w-2xl mx-auto">
          I build reliable Python automation, CI/CD pipelines, and AI-powered tools. I am
          focused on Cloud, DevOps, and AI Engineering roles, backed by production work,
          open-source projects, and hands-on infrastructure.
        </p>

        <div className="mb-12 flex flex-wrap justify-center items-center gap-8 text-sm text-[var(--secondary)]">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-foreground">5+</span>
            <span>Years of experience</span>
          </div>
          <div className="h-4 w-px bg-[var(--border)]" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-foreground">2</span>
            <span>Open-source projects in production</span>
          </div>
          <div className="h-4 w-px bg-[var(--border)]" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-foreground">25+</span>
            <span>Self-hosted services</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="#projects" variant="primary">
            View projects
          </Button>
          <Button href="#contact" variant="outline">
            Get in touch
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-6 text-sm text-[var(--secondary)]">
          <a
            href={`mailto:${contact.email}`}
            className="hover:text-foreground transition-colors duration-200"
          >
            {contact.email}
          </a>
          <span className="text-[var(--secondary)] opacity-50">•</span>
          <a
            href={`https://${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-200"
          >
            LinkedIn
          </a>
          <span className="text-[var(--secondary)] opacity-50">•</span>
          <a
            href={`https://${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-200"
          >
            GitHub
          </a>
          <span className="text-[var(--secondary)] opacity-50">•</span>
          <span>{contact.location}</span>
        </div>
      </div>
    </section>
  );
}
