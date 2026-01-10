import { WORK_EXPERIENCE } from "@/shared/config";
import { Section, Card } from "@/shared/ui";

function ExperienceCard({
  title,
  company,
  location,
  startDate,
  endDate,
  isCurrent,
  achievements,
}: {
  readonly title: string;
  readonly company: string;
  readonly location: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly isCurrent: boolean;
  readonly achievements: readonly string[];
}): React.ReactElement {
  return (
    <Card className="mb-6">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          {company} • {location}
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          {startDate} - {isCurrent ? "Present" : endDate}
        </p>
      </div>
      <ul className="list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
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
