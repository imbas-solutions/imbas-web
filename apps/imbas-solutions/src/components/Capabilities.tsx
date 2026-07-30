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
    <section id="capabilities" className="py-28 md:py-32 w-full bg-brand-dark relative border-t border-white/5 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-brand-mint mb-3">
            {t.capabilities.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.capabilities.title}
          </h2>
          <p className="text-gray-400 leading-relaxed">
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
                  ? "border-brand-teal/30 bg-brand-teal/5"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-brand-teal/10 border border-brand-teal/25 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-brand-mint" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
