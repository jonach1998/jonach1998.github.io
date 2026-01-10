import { PROFILE_DATA } from "@/shared/config";
import { Section } from "@/shared/ui";

export function AboutSection(): React.ReactElement {
  return (
    <Section id="about" title="About Me">
      <p className="text-xl leading-relaxed text-[var(--secondary)] font-light max-w-3xl">
        {PROFILE_DATA.summary}
      </p>
    </Section>
  );
}
