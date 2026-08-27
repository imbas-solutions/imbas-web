import { Search, Hammer, Rocket } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/i18n/dictionaries";

/* Order must match about.process in the dictionaries */
const processIcons = [Search, Hammer, Rocket];

export default function About({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section id="about" className="py-28 md:py-32 w-full bg-surface relative border-t border-line-soft scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-accent-strong mb-3">
            {t.about.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink mb-4">
            {t.about.title}
          </h2>
          <p className="text-ink-muted leading-relaxed">
            {t.about.intro}
          </p>
        </div>

        {/* Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {t.about.process.map(({ title, desc }, i) => {
            const Icon = processIcons[i];
            const step = String(i + 1).padStart(2, "0");
            return (
            <div key={step} className="rounded-2xl p-6 border border-line bg-veil">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent-strong" />
                </div>
                <span className="text-2xl font-mono font-bold text-ink/10">{step}</span>
              </div>
              <h3 className="text-base font-semibold text-ink mb-2">{title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{desc}</p>
            </div>
            );
          })}
        </div>

        {/* Engagement tiers */}
        <div>
          <h3 className="text-xl font-semibold text-ink mb-6">{t.about.tiersTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.tiers.map(({ name, range, desc }) => (
              <div key={name} className="rounded-2xl p-6 border border-accent/20 bg-accent/5">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-base font-semibold text-ink">{name}</span>
                  <span className="text-accent font-mono text-sm">{range}</span>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-ink-subtle mt-4">
            {t.about.tiersNote}
          </p>
        </div>

        {/* TODO(founder): replace with a real case study/testimonial once the first
            engagement closes — intentionally not fabricated here. */}
      </div>
    </section>
  );
}
