import { PROFILE_DATA } from "@/shared/config";
import { Section } from "@/shared/ui";

export function AboutSection(): React.ReactElement {
  return (
    <Section id="about" title="About Me">
      <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        {PROFILE_DATA.summary}
      </p>
    </Section>
  );
}
