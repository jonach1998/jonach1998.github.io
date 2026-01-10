import { PROFILE_DATA } from "@/shared/config";
import { ExternalLink } from "@/shared/ui";

export function HeroSection(): React.ReactElement {
  return (
    <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-900 dark:to-black">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-4 text-5xl font-bold text-foreground sm:text-6xl">
          {PROFILE_DATA.name}
        </h1>
        <p className="mb-8 text-2xl text-zinc-600 dark:text-zinc-400">
          {PROFILE_DATA.title}
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <a
            href={`mailto:${PROFILE_DATA.contact.email}`}
            className="hover:text-foreground"
          >
            {PROFILE_DATA.contact.email}
          </a>
          <span>•</span>
          <a
            href={`tel:${PROFILE_DATA.contact.phone}`}
            className="hover:text-foreground"
          >
            {PROFILE_DATA.contact.phone}
          </a>
          <span>•</span>
          <span>{PROFILE_DATA.contact.location}</span>
          <span>•</span>
          <ExternalLink
            href={`https://${PROFILE_DATA.contact.linkedin}`}
            className="hover:text-foreground"
          >
            LinkedIn
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
