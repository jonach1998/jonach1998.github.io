import { PROJECTS } from "@/shared/config";
import { Section, Card, Badge } from "@/shared/ui";

export function ProjectsSection(): React.ReactElement {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <Card key={project.name} className="flex flex-col">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                {project.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                {project.tagline}
              </p>
            </div>

            <p className="mb-4 text-[var(--secondary)] leading-relaxed">
              {project.description}
            </p>

            <ul className="mb-6 space-y-3 text-[var(--secondary)]">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            {project.links.length > 0 && (
              <div className="mt-auto flex flex-wrap gap-4 text-sm font-medium">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
