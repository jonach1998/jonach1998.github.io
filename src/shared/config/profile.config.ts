import type {
  Profile,
  WorkExperience,
  Project,
  Education,
  SkillCategory,
} from "@/entities";

export const PROFILE_DATA: Profile = {
  name: "Jonathan Chavarria",
  title: "Python Developer & DevOps Engineer",
  summary:
    "Python Developer and DevOps Engineer with 5+ years building automation, CI/CD pipelines, and data tooling adopted by Intel engineering teams. I am focused on Cloud, DevOps, and AI Engineering roles backed by production work, open-source projects, and hands-on infrastructure.",
  contact: {
    email: "jonach1998@gmail.com",
    phone: "+506 71893669",
    location: "San Jose, Costa Rica",
    linkedin: "linkedin.com/in/jonach98",
    github: "github.com/jonach1998",
  },
} as const;

export const WORK_EXPERIENCE: readonly WorkExperience[] = [
  {
    title: "DevOps Engineer",
    company: "Net2Source",
    logo: "/logos/net2source.png",
    location: "Heredia, Costa Rica",
    startDate: "Mar 2026",
    endDate: "Present",
    isCurrent: true,
    achievements: [
      "Develop Python automation scripts for LDAP directory-service integration, automating internal group synchronization and eliminating manual administration overhead.",
      "Build large-scale Python data-analysis pipelines for operational monitoring, accelerating root-cause analysis and data-informed incident resolution.",
      "Maintain and optimize CI/CD pipelines with JFrog Artifactory and Jenkins; troubleshoot and resolve production incidents to keep systems reliable.",
    ],
  },
  {
    title: "Software Development Engineer in Test",
    company: "Intel Corporation",
    logo: "/logos/intel.svg",
    location: "Heredia, Costa Rica",
    startDate: "Jan 2020",
    endDate: "Jun 2025",
    isCurrent: false,
    achievements: [
      "Served as Product Owner and Technical Lead for a 6-engineer team under Scrum/Kanban, driving releases for a next-gen Xeon CPU (PCIe Gen5, 200+ core architecture) shipped across millions of units — delivering every milestone on schedule despite repeated timeline pull-ins.",
      "Architected a Python-based GitHub version-control wrapper that cut environment integration time by 99% (~1 hour to ~10 seconds), adopted as the standard tool by validation teams across multiple countries.",
      "Owned the team's CI/CD infrastructure — automated pipelines for unit testing, integration testing, static analysis, and automated code-review suggestions — becoming the cross-product internal reference other owners replicated.",
      "Built a centralized Python/Bash automation toolkit (OOP, SOLID) on GitHub, adopted as standard by multi-country teams and recognized by Principal Engineers for code quality and broad impact.",
      "Founded an innovation working group and led a structured upskilling program, raising 60% of the team to advanced proficiency; one mentee was promoted to Product Owner.",
      "Designed a product-agnostic Python + SQL (Teradata) data-extraction standard with dynamic queries, adopted by engineering and operations to monitor Product Health Indicators (PHIs).",
    ],
  },
  {
    title: "Python Development Instructor (Freelance)",
    company: "CENSA",
    logo: "/logos/censa.png",
    logoVariant: "emblem",
    location: "San Jose, Costa Rica",
    startDate: "Dec 2024",
    endDate: "Nov 2025",
    isCurrent: false,
    achievements: [
      "Taught beginner-to-advanced Python (OOP, data structures, scripting, file I/O, industry best practices) to higher-education engineering students.",
    ],
  },
] as const;

export const PROJECTS: readonly Project[] = [
  {
    name: "TicoRates",
    tagline: "Public Exchange-Rate API & MCP Server for Costa Rica",
    description:
      "Free, open exchange-rate API for Costa Rica powered by the Central Bank (BCCR) — live in production, no API key required.",
    highlights: [
      "FastAPI REST API serving official BCCR rates for 43 currencies, with on-demand SQLite caching and concurrent-request deduplication (one upstream call no matter how many clients ask at once).",
      "MCP server published to PyPI (ticorates-mcp) so AI tools like Claude, Cursor, and Windsurf can query and convert rates natively.",
      "Full GitHub Actions CI/CD: tests, multi-arch Docker builds (amd64/arm64) to Docker Hub and PyPI, then automated SSH deploy to a self-hosted Raspberry Pi behind a Cloudflare Tunnel.",
      "Production-grade ops: Prometheus /metrics, health checks, and 365-day metrics retention. MIT licensed.",
    ],
    tech: [
      "Python 3.13",
      "FastAPI",
      "MCP",
      "SQLite",
      "Docker",
      "GitHub Actions",
      "Prometheus",
      "Cloudflare",
    ],
    links: [
      { label: "Live API", href: "https://ticorates.dev/docs" },
      { label: "GitHub", href: "https://github.com/jonach1998/ticorates" },
      { label: "PyPI", href: "https://pypi.org/project/ticorates-mcp/" },
      { label: "Docker Hub", href: "https://hub.docker.com/r/jonach1998/ticorates" },
    ],
  },
  {
    name: "JobHound",
    tagline: "AI-Powered Job-Hunting Automation on AWS",
    description:
      "Open-source Python tool that collects job listings and ranks each one against a candidate profile using LLMs — deployed to AWS as scheduled serverless containers.",
    highlights: [
      "Collects listings from LinkedIn, Indeed, and Computrabajo, scores each listing 0–100 against a profile using OpenAI-compatible LLMs, and delivers top matches via Telegram.",
      "Deployed to AWS with modular Terraform (IaC): ECS Fargate tasks triggered on a schedule by EventBridge Scheduler, images in ECR, persistence on EFS, and least-privilege IAM roles.",
      "Layered remote Terraform state (networking / IAM / compute / application) plus a reusable jobhound-task module that runs one isolated task per candidate profile.",
      "Also shipped as a multi-arch Docker image on Docker Hub with GitHub Actions CI/CD; SQLite deduplication and APScheduler for the self-hosted variant. MIT licensed.",
    ],
    tech: [
      "Python",
      "LLMs",
      "AWS ECS Fargate",
      "Terraform",
      "ECR",
      "EventBridge",
      "EFS",
      "Docker",
      "GitHub Actions",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/jonach1998/jobhound" },
      { label: "Docker Hub", href: "https://hub.docker.com/r/jonach1998/jobhound" },
    ],
  },
] as const;

export const EDUCATION: readonly Education[] = [
  {
    degree: "Technical Program in Artificial Intelligence and Machine Learning",
    institution: "Universidad CENFOTEC",
    logo: "/logos/cenfotec.png",
    location: "San Jose, Costa Rica",
    startDate: "Jun, 2026",
    endDate: "Present",
    isCurrent: true,
    status: "In progress",
  },
  {
    degree: "Bachelor's Degree in Computer Systems Engineering",
    institution: "Fidelitas University",
    logo: "/logos/fidelitas.svg",
    location: "San Jose, Costa Rica",
    startDate: "Jan, 2020",
    endDate: "Present",
    isCurrent: true,
    status: "In progress",
  },
  {
    degree: "Bachelor's Degree in Electronic Engineering",
    institution: "Latin University of Costa Rica",
    logo: "/logos/ulatina.png",
    location: "San Jose, Costa Rica",
    startDate: "Jan, 2016",
    endDate: "Dec, 2019",
    isCurrent: false,
    status: "Completed",
  },
] as const;

export const SKILLS: readonly SkillCategory[] = [
  {
    name: "Languages & Scripting",
    items: ["Python (Advanced)", "TypeScript", "Bash/Shell", "SQL"],
  },
  {
    name: "DevOps & Containers",
    items: [
      "Docker",
      "Docker Compose",
      "Kubernetes (hands-on)",
      "GitHub Actions",
      "Jenkins",
      "JFrog Artifactory",
      "CI/CD Pipelines",
    ],
  },
  {
    name: "AI Engineering & Automation",
    items: [
      "LLM Integration",
      "MCP Servers",
      "OpenAI-compatible APIs",
      "Prompt Engineering",
      "n8n",
      "Test Automation",
    ],
  },
  {
    name: "Web & APIs",
    items: ["FastAPI", "Flask", "NestJS", "Next.js", "Node.js", "RESTful APIs"],
  },
  {
    name: "Cloud & IaC (hands-on)",
    items: ["AWS (ECS Fargate, ECR, EFS, IAM, EventBridge)", "Terraform", "LocalStack"],
  },
  {
    name: "Observability & Monitoring",
    items: ["Prometheus", "Grafana", "cAdvisor", "Dynatrace", "Uptime Kuma"],
  },
  {
    name: "Networking & Self-Hosting",
    items: [
      "Cloudflare Tunnel",
      "WireGuard",
      "Nginx",
      "Linux (Ubuntu/RHEL/Alpine)",
      "Raspberry Pi / NAS",
    ],
  },
  {
    name: "Databases & Tools",
    items: ["PostgreSQL", "MySQL", "SQLite", "Teradata", "Oracle", "Git", "Jira"],
  },
] as const;

export const LANGUAGES: readonly string[] = [
  "Spanish (Native)",
  "English (Advanced)",
] as const;
