import CustomCursor from "@/components/CustomCursor";
import HeroReveal from "@/components/HeroReveal";
import NichePhilosophy from "@/components/NichePhilosophy";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import CTAEstimator from "@/components/CTAEstimator";
import { resolveLocale } from "@/lib/i18n/locale";

export default async function Home() {
  const locale = await resolveLocale();

  return (
    <main className="w-full min-h-screen bg-brand-dark text-brand-light selection:bg-brand-teal selection:text-white">
      <CustomCursor />

      {/* Zone 1: The Hero Reveal */}
      <HeroReveal />

      {/* Zone 2: Niche & Philosophy */}
      <NichePhilosophy />

      {/* Zone 3: Capabilities (crawlable service list) */}
      <Capabilities locale={locale} />

      {/* Zone 4: About / proof layer */}
      <About locale={locale} />

      {/* Zone 5: High-Value CTA */}
      <CTAEstimator />

    </main>
  );
}
