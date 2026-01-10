import { SKILLS } from "@/shared/config";
import { Section, Badge } from "@/shared/ui";

export function SkillsSection(): React.ReactElement {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 md:grid-cols-2">
        {SKILLS.map((category, index) => (
          <div key={index}>
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
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
