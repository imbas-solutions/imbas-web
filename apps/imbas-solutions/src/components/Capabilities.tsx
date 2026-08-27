import {
  Bot,
  ShieldCheck,
  Smartphone,
  Globe,
  Server,
  ShieldAlert,
  Database,
  Network,
} from "lucide-react";

import { getDictionary, type Locale } from "@/lib/i18n/dictionaries";

/* Order must match capabilities.items in the dictionaries.
   The first two are flagship offerings and get the accented card treatment. */
const capabilityIcons = [
  Bot,
  ShieldAlert,
  Smartphone,
  Globe,
  Server,
  ShieldCheck,
  Database,
  Network,
];
const FLAGSHIP_COUNT = 2;

export default function Capabilities({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section id="capabilities" className="py-28 md:py-32 w-full bg-surface-raised relative border-t border-line-soft scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-accent-strong mb-3">
            {t.capabilities.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink mb-4">
            {t.capabilities.title}
          </h2>
          <p className="text-ink-muted leading-relaxed">
            {t.capabilities.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.capabilities.items.map(({ title, desc }, i) => {
            const Icon = capabilityIcons[i];
            return (
            <div
              key={title}
              className={`rounded-2xl p-6 border ${
                i < FLAGSHIP_COUNT
                  ? "border-accent/30 bg-accent/5"
                  : "border-line bg-veil"
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-accent-strong" />
              </div>
              <h3 className="text-base font-semibold text-ink mb-2">{title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{desc}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
