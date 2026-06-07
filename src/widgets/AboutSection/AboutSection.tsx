import { PROFILE_DATA, LANGUAGES } from "@/shared/config";
import { Section, Card } from "@/shared/ui";

const FOCUS: readonly (readonly [string, string])[] = [
  [
    "Automation first",
    "I turn manual, error-prone workflows into reliable Python tooling, CI/CD, and data automation.",
  ],
  [
    "AI-powered tooling",
    "I use LLMs, MCP servers, and OpenAI-compatible APIs to build practical workflow automation.",
  ],
  [
    "Cloud & IaC",
    "I build practical cloud experience through AWS ECS/Terraform deployments and a 25+ service homelab.",
  ],
  [
    "Technical leadership",
    "I have led product-owner responsibilities, mentoring, and shared tooling efforts in engineering teams.",
  ],
] as const;

export function AboutSection(): React.ReactElement {
  return (
    <Section id="about" title="About">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <p className="text-lg leading-relaxed text-[var(--secondary)] font-light mb-6">
            {PROFILE_DATA.summary}
          </p>
          <p className="text-lg leading-relaxed text-[var(--secondary)] font-light">
            My background combines a completed Electronic Engineering degree with advanced
            Computer Systems Engineering studies. That dual engineering foundation shapes how
            I approach automation, infrastructure, and AI tooling: practical systems thinking
            backed by implementation work.
          </p>
          <p className="mt-6 text-sm text-[var(--secondary)]">
            <span className="font-medium text-foreground">Languages:</span>{" "}
            {LANGUAGES.join(" · ")}
          </p>
        </div>
        <Card>
          <h3 className="mb-4 text-2xl font-semibold text-foreground">What I focus on</h3>
          <ul className="space-y-3 text-[var(--secondary)]">
            {FOCUS.map(([heading, desc]) => (
              <li key={heading} className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                <span>
                  <strong className="text-foreground">{heading}:</strong> {desc}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
