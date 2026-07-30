import { Search, Hammer, Rocket } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/i18n/dictionaries";

/* Order must match about.process in the dictionaries */
const processIcons = [Search, Hammer, Rocket];

export default function About({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section id="about" className="py-28 md:py-32 w-full bg-brand-deep relative border-t border-white/5 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-brand-mint mb-3">
            {t.about.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.about.title}
          </h2>
          <p className="text-gray-400 leading-relaxed">
            {t.about.intro}
          </p>
        </div>

        {/* Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {t.about.process.map(({ title, desc }, i) => {
            const Icon = processIcons[i];
            const step = String(i + 1).padStart(2, "0");
            return (
            <div key={step} className="rounded-2xl p-6 border border-white/10 bg-white/[0.02]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-brand-teal/10 border border-brand-teal/25 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-mint" />
                </div>
                <span className="text-2xl font-mono font-bold text-white/10">{step}</span>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
            </div>
            );
          })}
        </div>

        {/* Engagement tiers */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">{t.about.tiersTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.tiers.map(({ name, range, desc }) => (
              <div key={name} className="rounded-2xl p-6 border border-brand-teal/20 bg-brand-teal/5">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-base font-semibold text-white">{name}</span>
                  <span className="text-brand-teal font-mono text-sm">{range}</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            {t.about.tiersNote}
          </p>
        </div>

        {/* TODO(founder): replace with a real case study/testimonial once the first
            engagement closes — intentionally not fabricated here. */}
      </div>
    </section>
  );
}
