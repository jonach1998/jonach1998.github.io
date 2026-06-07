import { WORK_EXPERIENCE } from "@/shared/config";
import { Section, Card, LogoTile } from "@/shared/ui";

function ExperienceCard({
  title,
  company,
  location,
  startDate,
  endDate,
  isCurrent,
  achievements,
  logo,
  logoVariant,
}: {
  readonly title: string;
  readonly company: string;
  readonly location: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly isCurrent: boolean;
  readonly achievements: readonly string[];
  readonly logo?: string;
  readonly logoVariant?: "wordmark" | "emblem";
}): React.ReactElement {
  return (
    <Card className="mb-8">
      <div className="mb-6 flex items-start gap-4">
        {logo && <LogoTile src={logo} alt={company} variant={logoVariant} />}
        <div>
          <h3 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">{title}</h3>
          <p className="mb-2 text-lg text-[var(--secondary)]">
            {company} • {location}
          </p>
          <p className="text-sm text-[var(--secondary)] opacity-70">
            {startDate} - {isCurrent ? "Present" : endDate}
          </p>
        </div>
      </div>
      <ul className="space-y-3 text-[var(--secondary)]">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
            <span className="leading-relaxed">{achievement}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function ExperienceSection(): React.ReactElement {
  return (
    <Section id="experience" title="Work Experience">
      <div>
        {WORK_EXPERIENCE.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </Section>
  );
}
