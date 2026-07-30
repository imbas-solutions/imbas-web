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

const capabilities = [
  {
    icon: Bot,
    title: "AI Agents & Automation",
    desc: "We connect the AI tools you already pay for to your actual workflows — support, ops, data entry — so they produce real output, not demos.",
    flagship: true,
  },
  {
    icon: ShieldAlert,
    title: "Legacy Modernization & AI Guardrails",
    desc: "Bring AI into existing systems safely: compliance-ready guardrails, audit trails, and zero-downtime migrations for mission-critical software.",
    flagship: true,
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native iOS/Android and cross-platform apps, built to ship and scale.",
  },
  {
    icon: Globe,
    title: "Web Platforms",
    desc: "Custom web apps and internal tools, from MVP to enterprise scale.",
  },
  {
    icon: Server,
    title: "Cloud Infrastructure",
    desc: "Scalable, reliable architecture that holds up under real traffic.",
  },
  {
    icon: ShieldCheck,
    title: "AI Security & Data Protection",
    desc: "Enterprise-grade leak protection and data sanitization for AI-connected systems.",
  },
  {
    icon: Database,
    title: "Data Migration",
    desc: "Safe, zero-downtime transitions with guaranteed data integrity.",
  },
  {
    icon: Network,
    title: "Multi-Agent Systems",
    desc: "Integrating multiple LLMs and models into one coherent system.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-28 md:py-32 w-full bg-brand-dark relative border-t border-white/5 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-brand-mint mb-3">
            What We Build
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Capabilities
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Imbas Solutions is a founder-led software factory working with US and Canadian
            teams. Most engagements run $10k&ndash;$50k, from a focused AI-agent
            integration to a full modernization project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map(({ icon: Icon, title, desc, flagship }) => (
            <div
              key={title}
              className={`rounded-2xl p-6 border ${
                flagship
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
          ))}
        </div>
      </div>
    </section>
  );
}
