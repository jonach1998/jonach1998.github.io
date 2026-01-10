import { HeroSection } from "@/widgets/HeroSection";
import { AboutSection } from "@/widgets/AboutSection";
import { ExperienceSection } from "@/widgets/ExperienceSection";
import { SkillsSection } from "@/widgets/SkillsSection";
import { EducationSection } from "@/widgets/EducationSection";
import { CertificationsSection } from "@/widgets/CertificationsSection";

export default function Home(): React.ReactElement {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
    </main>
  );
}

