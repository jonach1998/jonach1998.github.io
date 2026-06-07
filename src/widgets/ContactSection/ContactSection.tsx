import { PROFILE_DATA } from "@/shared/config";
import { Section, Card, Button } from "@/shared/ui";

const { contact } = PROFILE_DATA;

interface ContactLink {
  readonly label: string;
  readonly value: string;
  readonly href: string | null;
}

const LINKS: readonly ContactLink[] = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "LinkedIn", value: contact.linkedin, href: `https://${contact.linkedin}` },
  { label: "GitHub", value: contact.github, href: `https://${contact.github}` },
  { label: "Location", value: contact.location, href: null },
] as const;

export function ContactSection(): React.ReactElement {
  return (
    <Section id="contact" title="Let's connect">
      <p className="mb-12 text-xl text-[var(--secondary)] font-light max-w-3xl">
        Open to Cloud, DevOps, and AI Engineering roles — remote or hybrid. The fastest
        way to reach me is email or LinkedIn.
      </p>

      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {LINKS.map(({ label, value, href }) => (
          <Card key={label}>
            <p className="mb-1 text-sm font-medium text-foreground">{label}</p>
            {href ? (
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="break-all text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
              >
                {value}
              </a>
            ) : (
              <p className="text-[var(--secondary)]">{value}</p>
            )}
          </Card>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button href={`mailto:${contact.email}`} variant="primary">
          Send me an email
        </Button>
        <Button href="/resume.pdf" variant="outline">
          Download CV (PDF)
        </Button>
      </div>
    </Section>
  );
}
