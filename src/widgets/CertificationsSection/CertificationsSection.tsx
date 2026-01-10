import { CERTIFICATIONS, LANGUAGES } from "@/shared/config";
import { Section, Card, Badge } from "@/shared/ui";

export function CertificationsSection(): React.ReactElement {
  return (
    <Section id="certifications" title="Certifications & Languages">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">
            Certifications
          </h3>
          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, index) => (
              <Card key={index}>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {cert.issuer}
                    </p>
                    {cert.issueDate && (
                      <p className="text-xs text-zinc-500 dark:text-zinc-500">
                        Issued: {cert.issueDate}
                      </p>
                    )}
                  </div>
                  <Badge
                    variant={
                      cert.status === "completed" ? "default" : "outline"
                    }
                  >
                    {cert.status === "completed" ? "Completed" : "In Progress"}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">
            Languages
          </h3>
          <div className="space-y-2">
            {LANGUAGES.map((language, index) => (
              <Card key={index}>
                <p className="text-foreground">{language}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
