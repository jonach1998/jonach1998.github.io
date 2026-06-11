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
    "Python Developer and DevOps Engineer with 5+ years building automation, CI/CD, observability, and reliability tooling in Intel engineering environments. I focus on Cloud, DevOps, and AI Engineering: turning platform operations and production support into automated workflows, AI-assisted troubleshooting, and scalable developer tools backed by hands-on AWS, Terraform, and Kubernetes projects.",
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
      "Develop Python automation for LDAP directory-service integration and internal group synchronization, reducing manual administration across enterprise developer platforms.",
      "Build Python data-analysis and operational-monitoring workflows that help identify root causes faster and support data-informed incident resolution.",
      "Maintain and troubleshoot CI/CD and artifact-management tooling with JFrog Artifactory, Jenkins, GitHub Enterprise/1Source, Docker, and Copilot in an Intel engineering environment.",
      "Build AI-assisted troubleshooting and proactive monitoring tooling with LLM workflows, ELK/Elasticsearch, and MCP-style integrations to scale support knowledge and surface platform issues earlier.",
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
      "Served as Product Owner and Technical Lead (Scrum) for a 6-engineer team on a next-gen Xeon product, delivering every milestone on schedule despite repeated timeline pull-ins; earned multiple leadership and performance recognitions.",
      "Owned the team's CI/CD infrastructure: automated unit/integration testing, static analysis, code-standard checks, and automated code-review suggestions, becoming the cross-product reference other CI/CD owners replicated.",
      "Created a centralized Python/Bash automation toolkit on GitHub (SOLID/OOP) adopted by PPV teams across countries, including one-command platform-boot automation that replaced manual EFI/OS steps and became the cross-team standard.",
      "Built a product-agnostic Python + SQL (Teradata) data standard to extract and visualize large operational data volumes for Product Health Indicators (PHIs), cutting retest and test time; adopted by engineering and operations.",
      "Integrated and validated CPU test programs released to factories and run on millions of units; reduced DPM (Defects Per Million) through test optimization and architecture-level failure debugging, raising yield.",
      "Led a programming upskilling program (trainings, assessments, mentorship) that raised ~60% of the team to advanced level; mentored engineers, including one promoted to Product Owner.",
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
      "GitHub Enterprise / 1Source",
      "Git LFS",
      "CI/CD Pipelines",
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
    items: ["Elasticsearch / ELK", "Kibana", "Prometheus", "Grafana", "cAdvisor", "Dynatrace", "Uptime Kuma"],
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
