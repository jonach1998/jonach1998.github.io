import { SKILLS } from "@/shared/config";
import { Section, Badge } from "@/shared/ui";

export function SkillsSection(): React.ReactElement {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-12 md:grid-cols-2">
        {SKILLS.map((category, index) => (
          <div key={index}>
            <h3 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
