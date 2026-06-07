import { Section, Card, Badge } from "@/shared/ui";

interface InfraGroup {
  readonly area: string;
  readonly icon: string;
  readonly tools: readonly string[];
}

const INFRA: readonly InfraGroup[] = [
  {
    area: "Observability",
    icon: "📊",
    tools: ["Prometheus", "Grafana", "cAdvisor", "node-exporter", "Uptime Kuma"],
  },
  {
    area: "Cloud & IaC",
    icon: "☁️",
    tools: ["AWS ECS Fargate", "ECR", "EFS", "EventBridge", "Terraform", "LocalStack"],
  },
  {
    area: "CI/CD & Container Ops",
    icon: "🚀",
    tools: ["GitHub Actions", "Docker Compose", "Watchtower", "Nginx"],
  },
  {
    area: "Networking & Access",
    icon: "🔒",
    tools: ["Cloudflare Tunnel", "WireGuard VPN", "AdGuard"],
  },
  {
    area: "Self-Hosted AI",
    icon: "🤖",
    tools: ["Ollama", "LibreChat", "MCP Servers", "n8n"],
  },
  {
    area: "Orchestration",
    icon: "⚙️",
    tools: ["Kubernetes", "LLM service experiments"],
  },
];

export function HomelabSection(): React.ReactElement {
  return (
    <Section id="infrastructure" title="Infrastructure & Homelab">
      <p className="mb-12 text-xl text-[var(--secondary)] font-light max-w-3xl">
        Beyond my day job, I run a 25+ service self-hosted homelab on a Raspberry Pi 5
        and TerraMaster NAS. It is my hands-on environment for DevOps practice,
        observability, networking, container operations, and self-hosted AI, with
        end-to-end monitoring and automated updates.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INFRA.map((group) => (
          <Card key={group.area}>
            <div className="mb-3 text-3xl">{group.icon}</div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">{group.area}</h3>
            <div className="flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <Badge key={tool} variant="secondary">
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
