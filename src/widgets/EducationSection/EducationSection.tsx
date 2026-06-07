import { EDUCATION } from "@/shared/config";
import { Section, Card, LogoTile } from "@/shared/ui";

export function EducationSection(): React.ReactElement {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {EDUCATION.map((education, index) => (
          <Card key={index}>
            <div className="flex items-start gap-4">
              {education.logo && (
                <LogoTile
                  src={education.logo}
                  alt={education.institution}
                  variant={education.logoVariant}
                />
              )}
              <div>
                <h3 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
                  {education.degree}
                </h3>
                <p className="mb-2 text-lg text-[var(--secondary)]">
                  {education.institution} • {education.location}
                </p>
                <p className="mb-2 text-sm font-medium text-[var(--accent)]">
                  {education.status}
                </p>
                <p className="text-sm text-[var(--secondary)] opacity-70">
                  {education.startDate} -{" "}
                  {education.isCurrent ? "Present" : education.endDate}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
