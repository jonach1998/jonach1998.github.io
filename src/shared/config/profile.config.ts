import type {
  Profile,
  WorkExperience,
  Project,
  Education,
  SkillCategory,
} from "@/entities";

export const PROFILE_DATA: Profile = {
  name: "Jonathan Chavarria",
  title: "Lead Site Reliability & DevOps Engineer",
  summary:
    "Lead Site Reliability Engineer (SRE) and DevOps Engineer with 6+ years building CI/CD, automation, observability, and reliability tooling for enterprise platforms at Keysight and Intel. I'm currently leading a large-scale DevSecOps modernization of Jenkins pipelines for EU Cyber Resilience Act (CRA) compliance, and I build AI-powered tooling (RAG assistants, MCP servers, LLM agents) while deepening my cloud/IaC skills through hands-on AWS, Terraform, and Kubernetes personal projects.",
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
    title: "Lead Site Reliability Engineer (SRE)",
    company: "Keysight Technologies (via Insight Global)",
    logo: "/logos/keysight.svg",
    location: "Remote, Costa Rica",
    startDate: "Jul 2026",
    endDate: "Present",
    isCurrent: true,
    achievements: [
      "Lead a distributed SRE/DevOps team (India, Brazil) in a DevSecOps program modernizing 1,000+ Jenkins/CloudBees CI pipelines for EU Cyber Resilience Act (CRA) compliance with the latest Jenkins Shared Library, JFrog CLI v2, and build-info provenance in JFrog Artifactory.",
      "Built automation with GitHub Copilot on the Jira/Confluence Cloud, Jenkins, and Bitbucket REST APIs that replaced a manual spreadsheet with a live Confluence dashboard (throughput, cycle time, forecast) and Jira-vs-pipeline drift checks.",
      "Standardized the team on GitHub Copilot after evaluating Claude Code, to reduce AI licensing costs; use it daily with MCP integrations (Jira, Confluence, Bitbucket) and LLM-based PR review.",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Intel Corporation (via Net2Source)",
    logo: "/logos/net2source.png",
    location: "Heredia, Costa Rica",
    startDate: "Mar 2026",
    endDate: "Jul 2026",
    isCurrent: false,
    achievements: [
      "Automated cleanup for Intel's multi-site JFrog Artifactory in Python (REST API, PostgreSQL), decommissioning unused repositories and clearing empty folders from a federated repository, and drove storage governance with repository owners.",
      "Designed a RAG-based support assistant on Intel's internal GenAI platform (Claude Sonnet, pgvector) grounded in the team's Confluence knowledge base, with cited sources and guardrails, to help L2 resolve tickets without escalating to L3.",
      "Built an ELK/Elasticsearch MCP server so AI agents can query Artifactory logs and metrics in natural language, and designed a read-only proactive monitoring agent with prompt guardrails.",
      "Built the team's vulnerability remediation plan for Wiz, Semgrep, Dependabot, and Entra ID findings prioritized by severity and SLA, shipping upgrades that closed critical and high CVEs in an Azure Functions service; developed a pytest-covered, dry-run-by-default tool migrating Artifactory groups to LDAP-backed IAM entitlements.",
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
      "Owned the team's CI/CD infrastructure: automated unit/integration testing, static analysis, code-standard checks, and automated code-review suggestions, becoming the cross-product reference other CI/CD owners replicated.",
      "Created a Python/Bash automation toolkit (SOLID/OOP) adopted by validation teams across countries, including one-command platform-boot automation that replaced manual EFI/OS steps and became the cross-team standard.",
      "Served as Product Owner and Technical Lead (Scrum) for a 6-engineer team on a next-gen Xeon product, delivering every milestone on schedule despite repeated pull-ins; led a programming upskilling program and mentored engineers.",
      "Built a product-agnostic Python + SQL (Teradata) data standard to extract and visualize large operational data volumes for Product Health Indicators, cutting retest and test time; adopted by engineering and operations.",
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
    name: "CI/CD & DevSecOps",
    items: [
      "Jenkins / CloudBees CI",
      "GitHub Actions",
      "JFrog Artifactory",
      "GitHub Enterprise",
      "Bitbucket",
      "Git LFS",
      "CI/CD Pipelines",
      "Supply-chain Security",
      "Wiz",
      "Semgrep",
      "Dependabot",
      "Azure (Entra ID, Functions)",
    ],
  },
  {
    name: "AI Engineering & Automation",
    items: [
      "LLM Agents",
      "LLM Integration",
      "MCP Servers",
      "RAG",
      "OpenAI-compatible APIs",
      "Prompt Engineering",
      "AI Coding Agents (GitHub Copilot, Claude Code, Cursor)",
      "n8n",
      "Test Automation",
    ],
  },
  {
    name: "Web & APIs",
    items: ["FastAPI", "Flask", "NestJS", "Next.js", "Node.js", "RESTful APIs"],
  },
  {
    name: "Cloud & Containers (personal projects)",
    items: [
      "AWS (ECS Fargate, ECR, EFS, IAM, EventBridge)",
      "Terraform",
      "Kubernetes",
      "Docker",
      "Docker Compose",
      "LocalStack",
    ],
  },
  {
    name: "Observability & SRE",
    items: [
      "Elasticsearch / ELK",
      "Kibana",
      "Prometheus",
      "Grafana",
      "cAdvisor",
      "Dynatrace",
      "Uptime Kuma",
      "RCA",
      "Runbooks",
      "Toil Automation",
    ],
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
    items: ["PostgreSQL", "MySQL", "SQLite", "Teradata", "Oracle", "Git", "Jira / Confluence"],
  },
] as const;

export const LANGUAGES: readonly string[] = [
  "Spanish (Native)",
  "English (Advanced)",
] as const;
