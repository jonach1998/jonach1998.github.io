import { HeroSection } from "@/widgets/HeroSection";
import { AboutSection } from "@/widgets/AboutSection";
import { ExperienceSection } from "@/widgets/ExperienceSection";
import { ProjectsSection } from "@/widgets/ProjectsSection";
import { HomelabSection } from "@/widgets/HomelabSection";
import { SkillsSection } from "@/widgets/SkillsSection";
import { EducationSection } from "@/widgets/EducationSection";
import { ContactSection } from "@/widgets/ContactSection";

export default function Home(): React.ReactElement {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <HomelabSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
