import type {
  Profile,
  WorkExperience,
  Education,
  SkillCategory,
  Certification,
} from "@/entities";

export const PROFILE_DATA: Profile = {
  name: "Jonathan Chavarria",
  title: "Python Developer & DevOps Engineer",
  summary:
    "Python Developer & DevOps Engineer specializing in system-level automation and infrastructure optimization. Orchestrated the adoption of CI/CD pipelines, unit testing standards, and automated code reviews for global validation teams. Recognized for developing centralized frameworks that stabilized product health indicators (PHIs) and optimized test time. Strong background in mentoring teams on modern software practices, moving engineering groups from manual execution to fully automated, high-reliability standards.",
  contact: {
    email: "jonach1998@gmail.com",
    phone: "+506 71893669",
    location: "San Jose, Costa Rica",
    linkedin: "linkedin.com/in/jonach98/",
  },
} as const;

export const WORK_EXPERIENCE: readonly WorkExperience[] = [
  {
    title: "Freelance Python Development Instructor",
    company: "CENSA",
    location: "San Jose, Costa Rica",
    startDate: "Dec 2024",
    endDate: "Present",
    isCurrent: true,
    achievements: [
      "Teach Python from beginner to advanced levels, delivering structured modules on OOP, data structures, scripting, file I/O, and industry-aligned best practices for technical higher education students.",
    ],
  },
  {
    title: "Software Development Engineer in Test",
    company: "Intel Corporation",
    location: "Heredia, Costa Rica",
    startDate: "Jan 2020",
    endDate: "Jun 2025",
    isCurrent: false,
    achievements: [
      "Spearheaded the Agile development of mission-critical validation software as a Product Owner and Technical Lead for a team of 6 engineers, managing the backlog and successfully delivering releases for next-gen server architectures.",
      "Architected a custom GitHub-based version control wrapper that reduced environment integration time by 99% (from ~1 hour to ~10 seconds), eliminating bottlenecks and becoming the standard tool for global product teams.",
      "Designated as the team's CI/CD Owner, designing and deploying automated pipelines for unit testing, static analysis, and code quality enforcement, which significantly reduced human error and deployment latency.",
      "Developed a scalable, centralized Python automation framework strictly adhering to OOP and SOLID principles, enabling code reuse and standardizing hardware interaction libraries for over 30 developers.",
      "Led a comprehensive technical upskilling initiative that raised the programming proficiency of 60% of the team to advanced levels through structured code reviews, standardizing Pull Request protocols, and technical mentorship.",
      "Engineered standardized SQL (Teradata) extraction tools and dashboards to monitor Product Health Indicators (PHIs), replacing manual data processing with automated analytics that drove data-driven decision-making for management.",
      "Optimized system operations by creating high-performance Python scripts for automated platform booting and OS management, replacing complex manual procedures and increasing test throughput for internal and client teams.",
    ],
  },
  {
    title: "Electronic and Electromedicine Laboratories Technician",
    company: "Latin University of Costa Rica",
    location: "San Jose, Costa Rica",
    startDate: "Aug 2017",
    endDate: "Dec 2019",
    isCurrent: false,
    achievements: [
      "Maintained, calibrated, and repaired electronic and biomedical laboratory equipment to ensure operational reliability during academic sessions.",
    ],
  },
] as const;

export const EDUCATION: readonly Education[] = [
  {
    degree: "Bachelor Degree in Computer Systems Engineering",
    institution: "Fidelitas University",
    location: "San Jose, Costa Rica",
    startDate: "Jan 2020",
    endDate: "Present",
    isCurrent: true,
  },
  {
    degree: "Bachelor Degree in Electronic Engineering",
    institution: "Latin University of Costa Rica",
    location: "San Jose, Costa Rica",
    startDate: "Jan 2016",
    endDate: "Dec 2019",
    isCurrent: false,
  },
] as const;

export const SKILLS: readonly SkillCategory[] = [
  {
    name: "Languages & Scripting",
    items: ["Python (Advanced)", "C++", "TypeScript", "Bash/Shell", "SQL"],
  },
  {
    name: "DevOps & Cloud",
    items: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "AWS (Cloud Practitioner)",
      "CI/CD Pipelines",
    ],
  },
  {
    name: "Testing & Automation",
    items: [
      "Pytest",
      "Unittest",
      "System Level Debug",
      "Automated Reporting",
      "Root Cause Analysis",
    ],
  },
  {
    name: "Web Technologies",
    items: ["Flask", "Node.js", "RESTful APIs", "HTML5/CSS3"],
  },
  {
    name: "Systems & Platforms",
    items: ["Linux (Ubuntu/RHEL/Alpine)", "Windows", "UEFI/BIOS Architecture"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "Teradata"],
  },
  {
    name: "Tools",
    items: ["Jira", "Git (Version Control)"],
  },
] as const;

export const CERTIFICATIONS: readonly Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    status: "in-progress",
  },
  {
    name: "Scrum Fundamentals Certified",
    issuer: "SCRUMstudy",
    issueDate: "2021",
    status: "completed",
  },
] as const;

export const LANGUAGES: readonly string[] = [
  "Spanish (Native)",
  "English (Professional Working Proficiency – B2)",
] as const;
