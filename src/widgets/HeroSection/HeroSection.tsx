import { PROFILE_DATA } from "@/shared/config";
import { ExternalLink } from "@/shared/ui";

export function HeroSection(): React.ReactElement {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,113,227,0.05),transparent_50%)]" />
      
      <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-12">
        <h1 className="mb-6 text-7xl font-semibold tracking-tight text-foreground sm:text-8xl lg:text-9xl">
          {PROFILE_DATA.name}
        </h1>
        <p className="mb-12 text-2xl font-light text-[var(--secondary)] sm:text-3xl">
          {PROFILE_DATA.title}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 text-base text-[var(--secondary)]">
          <a
            href={`mailto:${PROFILE_DATA.contact.email}`}
            className="hover:text-foreground transition-colors duration-200"
          >
            {PROFILE_DATA.contact.email}
          </a>
          <span className="text-[var(--secondary)] opacity-50">•</span>
          <a
            href={`tel:${PROFILE_DATA.contact.phone}`}
            className="hover:text-foreground transition-colors duration-200"
          >
            {PROFILE_DATA.contact.phone}
          </a>
          <span className="text-[var(--secondary)] opacity-50">•</span>
          <span>{PROFILE_DATA.contact.location}</span>
          <span className="text-[var(--secondary)] opacity-50">•</span>
          <ExternalLink href={`https://${PROFILE_DATA.contact.linkedin}`}>
            LinkedIn
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
