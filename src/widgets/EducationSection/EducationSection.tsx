import { EDUCATION } from "@/shared/config";
import { Section, Card } from "@/shared/ui";

export function EducationSection(): React.ReactElement {
  return (
    <Section id="education" title="Education">
      <div className="space-y-4">
        {EDUCATION.map((education, index) => (
          <Card key={index}>
            <h3 className="text-xl font-semibold text-foreground">
              {education.degree}
            </h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              {education.institution} • {education.location}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              {education.startDate} -{" "}
              {education.isCurrent ? "Present" : education.endDate}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
