"use client";

import { useState, useRef, type FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { useDict } from "@/lib/i18n/LocaleProvider";

gsap.registerPlugin(ScrollTrigger);

/* Values are sent to /api/contact and must stay stable across locales —
   only the labels shown to the user are translated (t.cta.types / t.cta.features). */
const PROJECT_TYPES = ["AI Agents & Automation", "Mobile App", "Web Platform"] as const;
const SCOPE_LEVELS = ["MVP", "Growth", "Enterprise"] as const;
const FEATURES = [
  "AI Integration",
  "Payment Gateway",
  "Advanced Analytics",
  "Custom CMS",
  "User Auth",
  "Multi-language",
] as const;

type ProjectType = (typeof PROJECT_TYPES)[number] | null;
type ScopeLevel = (typeof SCOPE_LEVELS)[number] | null;
type SubmitState = "idle" | "submitting" | "success" | "error";

export default function CTAEstimator() {
  const t = useDict();
  const containerRef = useRef<HTMLDivElement>(null);

  const [projectType, setProjectType] = useState<ProjectType>(null);
  const [scope, setScope] = useState<ScopeLevel>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  const getEstimate = () => {
    if (!projectType || !scope) return 0;
    const base = projectType === "Web Platform" ? 30 : projectType === "Mobile App" ? 40 : 50;
    const multiplier = scope === "MVP" ? 1 : scope === "Growth" ? 2.5 : 5;
    const featuresCost = selectedFeatures.length * 5;
    return (base * multiplier) + featuresCost;
  };

  const handleNextStep = () => {
    if (step === 1 && projectType) setStep(2);
    else if (step === 2 && scope) setStep(3);
    else if (step === 3) setStep(4);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitState("submitting");
    setSubmitError(null);

    const summary = [
      projectType ? `Project type: ${projectType}` : null,
      scope ? `Scope: ${scope}` : null,
      selectedFeatures.length ? `Features: ${selectedFeatures.join(", ")}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message: summary,
          projectType,
          scope,
          features: selectedFeatures,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setSubmitError(data?.error ?? null);
        setSubmitState("error");
        return;
      }

      setSubmitState("success");
    } catch {
      setSubmitError(null);
      setSubmitState("error");
    }
  };

  return (
    <section id="estimate" className="py-32 w-full bg-brand-dark/95 relative border-t border-white/5 scroll-mt-24">
      <div id="contact" className="absolute -top-24" aria-hidden="true" />
      <div ref={containerRef} className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.cta.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t.cta.introLead}
            <span className="text-brand-teal font-medium">{t.cta.introFree}</span>
            {t.cta.introTail}
            <button
              type="button"
              onClick={() => setStep(4)}
              className="text-brand-teal font-medium underline underline-offset-2 hover:text-brand-mint transition-colors"
            >
              {t.cta.skipToForm}
            </button>
            .
          </p>
        </div>

        <div className="bg-brand-dark/40 border border-white/5 rounded-[3rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 h-1 bg-brand-teal transition-all duration-500 ease-in-out" style={{ width: `${(step / 4) * 100}%` }}></div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <h3 className="text-2xl font-semibold text-white mb-6">{t.cta.step1Title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PROJECT_TYPES.map((type, i) => (
                  <button
                    key={type}
                    onClick={() => setProjectType(type)}
                    className={`p-6 rounded-3xl border text-left transition-all duration-300 ${projectType === type ? 'border-brand-teal/50 bg-brand-teal/20 shadow-[0_0_15px_rgba(0,152,139,0.3)]' : 'border-transparent bg-white/5 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]'}`}
                    data-magnetic
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">{t.cta.types[i].label}</span>
                      {projectType === type && <CheckCircle2 className="w-5 h-5 text-brand-teal" />}
                    </div>
                    <p className="text-sm text-gray-500">{t.cta.types[i].desc}</p>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={handleNextStep}
                  disabled={!projectType}
                  className="px-8 py-3 bg-brand-teal text-white rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-teal/80 transition-colors flex items-center gap-2"
                  data-magnetic
                >
                  {t.cta.continue} <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <button onClick={() => setStep(1)} className="text-brand-teal text-sm mb-4 hover:underline">{t.cta.back}</button>
              <h3 className="text-2xl font-semibold text-white mb-6">{t.cta.step2Title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {SCOPE_LEVELS.map((level) => (
                  <button
                    key={level}
                    onClick={() => setScope(level)}
                    className={`p-6 rounded-3xl border text-left transition-all duration-300 ${scope === level ? 'border-brand-teal/50 bg-brand-teal/20 shadow-[0_0_15px_rgba(0,152,139,0.3)]' : 'border-transparent bg-white/5 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]'}`}
                    data-magnetic
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">{level}</span>
                      {scope === level && <CheckCircle2 className="w-5 h-5 text-brand-teal" />}
                    </div>
                    <p className="text-sm text-gray-500">
                      {level === "MVP" ? t.cta.scopeDesc.mvp : level === "Growth" ? t.cta.scopeDesc.growth : t.cta.scopeDesc.enterprise}
                    </p>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={handleNextStep}
                  disabled={!scope}
                  className="px-8 py-3 bg-brand-teal text-white rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-teal/80 transition-colors flex items-center gap-2"
                  data-magnetic
                >
                  {t.cta.calculate} <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 - Features */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <button onClick={() => setStep(2)} className="text-brand-teal text-sm mb-4 hover:underline">{t.cta.back}</button>
              <h3 className="text-2xl font-semibold text-white mb-6">{t.cta.step3Title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {FEATURES.map((feature, i) => (
                  <button
                    key={feature}
                    onClick={() => {
                      if (selectedFeatures.includes(feature)) {
                        setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
                      } else {
                        setSelectedFeatures([...selectedFeatures, feature]);
                      }
                    }}
                    className={`p-6 rounded-3xl border text-left transition-all duration-300 ${selectedFeatures.includes(feature) ? 'border-brand-teal/50 bg-brand-teal/20 shadow-[0_0_15px_rgba(0,152,139,0.3)]' : 'border-transparent bg-white/5 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]'}`}
                    data-magnetic
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">{t.cta.features[i]}</span>
                      {selectedFeatures.includes(feature) && <CheckCircle2 className="w-5 h-5 text-brand-teal" />}
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleNextStep}
                  className="px-8 py-3 bg-brand-teal text-white rounded-full font-medium hover:bg-brand-teal/80 transition-colors flex items-center gap-2"
                  data-magnetic
                >
                  {t.cta.continue} <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 - Results & Contact */}
          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              {step > 1 && projectType && (
                <button onClick={() => setStep(3)} className="text-brand-teal text-sm mb-4 hover:underline">{t.cta.editFeatures}</button>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Graph/Estimate — only shown if the estimator was actually used */}
                {projectType && scope && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">{t.cta.snapshotTitle}</h3>
                    <div className="bg-brand-dark/50 rounded-2xl p-6 border border-white/5">
                      <div className="mb-6">
                        <div className="text-sm text-gray-400 mb-1">{t.cta.complexityTier}</div>
                        <div className="text-4xl font-bold text-brand-teal">{t.cta.level} {Math.round(getEstimate() / 15)}</div>
                      </div>

                      <div className="space-y-4">
                         <div>
                           <div className="flex justify-between text-xs text-gray-400 mb-1">
                             <span>{t.cta.agenticIntegration}</span>
                             <span>{getEstimate() > 100 ? t.cta.high : t.cta.standard}</span>
                           </div>
                           <div className="w-full bg-white/10 rounded-full h-2">
                             <div className="bg-brand-purple h-2 rounded-full" style={{ width: `${Math.min(100, getEstimate() * 0.7)}%` }}></div>
                           </div>
                         </div>
                         <div>
                           <div className="flex justify-between text-xs text-gray-400 mb-1">
                             <span>{t.cta.scalabilityIndex}</span>
                             <span>{scope === "Enterprise" ? t.cta.maximum : t.cta.flexible}</span>
                           </div>
                           <div className="w-full bg-white/10 rounded-full h-2">
                             <div className="bg-brand-teal h-2 rounded-full" style={{ width: `${Math.min(100, getEstimate() * 0.9)}%` }}></div>
                           </div>
                         </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-6">
                        {t.cta.disclaimer}
                      </p>
                    </div>
                  </div>
                )}

                {/* Contact Form */}
                <div className={projectType && scope ? "" : "md:col-span-2 max-w-md"}>
                  <h3 className="text-xl font-semibold text-white mb-4">{t.cta.contactTitle}</h3>

                  {submitState === "success" ? (
                    <div className="rounded-2xl border border-brand-teal/30 bg-brand-teal/10 p-6 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-200">
                        {t.cta.successMessage}
                      </p>
                    </div>
                  ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={t.cta.namePlaceholder}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-teal transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t.cta.emailPlaceholder}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-teal transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">{t.cta.projectLabel}</label>
                        <textarea
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder={t.cta.projectPlaceholder}
                          rows={4}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-teal transition-colors resize-none"
                        ></textarea>
                      </div>

                      {submitState === "error" && (
                        <p className="text-sm text-red-400">
                          {submitError ? `${submitError} ` : ""}
                          {t.cta.errorSuffix}{" "}
                          <a href={`mailto:${t.footer.email}`} className="underline hover:text-red-300">
                            {t.footer.email}
                          </a>
                          .
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={submitState === "submitting"}
                        className="w-full py-3 bg-brand-teal text-white rounded-xl font-medium hover:bg-brand-teal/80 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                        data-magnetic
                      >
                        {submitState === "submitting" ? t.cta.sending : t.cta.submit}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
