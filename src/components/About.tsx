import { Search, Hammer, Rocket } from "lucide-react";

const process = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Scope",
    desc: "We map the actual workflow before writing a line of code, and come back with a fixed scope and price — not an open-ended retainer.",
  },
  {
    icon: Hammer,
    step: "02",
    title: "Build in the Open",
    desc: "Weekly working demos, not a black box. You see the system evolve and can redirect early, when it's cheap to.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Ship & Support",
    desc: "We deploy, hand off documentation, and stay on for a defined support window — no disappearing after launch.",
  },
];

const tiers = [
  {
    name: "MVP",
    range: "$10k–$18k",
    desc: "A focused build to validate one workflow or product idea — one AI agent, one core feature set.",
  },
  {
    name: "Growth",
    range: "$18k–$35k",
    desc: "A production system built to handle real users and real data, with room to extend.",
  },
  {
    name: "Enterprise",
    range: "$35k–$50k+",
    desc: "Mission-critical work: legacy integration, compliance guardrails, high-availability infrastructure.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-32 w-full bg-brand-deep relative border-t border-white/5 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-brand-mint mb-3">
            How We Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Founder-Led. Built to Ship.
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Every project is scoped and built by the same person you talk to first,
            backed by a vetted contractor bench for scale — not handed off to a
            rotating account team.
          </p>
        </div>

        {/* Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {process.map(({ icon: Icon, step, title, desc }) => (
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
          ))}
        </div>

        {/* Engagement tiers */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Typical Engagement Sizes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map(({ name, range, desc }) => (
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
            Ranges are a starting reference, not a quote — every project is scoped individually.
          </p>
        </div>

        {/* TODO(founder): replace with a real case study/testimonial once the first
            engagement closes — intentionally not fabricated here. */}
      </div>
    </section>
  );
}
