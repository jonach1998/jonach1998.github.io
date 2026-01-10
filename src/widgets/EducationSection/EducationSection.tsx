import { EDUCATION } from "@/shared/config";
import { Section, Card } from "@/shared/ui";

export function EducationSection(): React.ReactElement {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {EDUCATION.map((education, index) => (
          <Card key={index}>
            <h3 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
              {education.degree}
            </h3>
            <p className="mb-2 text-lg text-[var(--secondary)]">
              {education.institution} • {education.location}
            </p>
            <p className="text-sm text-[var(--secondary)] opacity-70">
              {education.startDate} -{" "}
              {education.isCurrent ? "Present" : education.endDate}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
