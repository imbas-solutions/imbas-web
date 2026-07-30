import CustomCursor from "@/components/CustomCursor";
import HeroReveal from "@/components/HeroReveal";
import NichePhilosophy from "@/components/NichePhilosophy";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import CTAEstimator from "@/components/CTAEstimator";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-brand-dark text-brand-light selection:bg-brand-teal selection:text-white">
      <CustomCursor />

      {/* Zone 1: The Hero Reveal */}
      <HeroReveal />

      {/* Zone 2: Niche & Philosophy */}
      <NichePhilosophy />

      {/* Zone 3: Capabilities (crawlable service list) */}
      <Capabilities />

      {/* Zone 4: About / proof layer */}
      <About />

      {/* Zone 5: High-Value CTA */}
      <CTAEstimator />

    </main>
  );
}
