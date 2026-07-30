"use client";

import { useState, useRef, type FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronRight, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type ProjectType = "AI Agents & Automation" | "Mobile App" | "Web Platform" | null;
type ScopeLevel = "MVP" | "Growth" | "Enterprise" | null;
type SubmitState = "idle" | "submitting" | "success" | "error";

export default function CTAEstimator() {
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
        setSubmitError(data?.error ?? "Something went wrong. Please try again.");
        setSubmitState("error");
        return;
      }

      setSubmitState("success");
    } catch {
      setSubmitError("Something went wrong. Please try again.");
      setSubmitState("error");
    }
  };

  return (
    <section id="estimate" className="py-32 w-full bg-brand-dark/95 relative border-t border-white/5 scroll-mt-24">
      <div id="contact" className="absolute -top-24" aria-hidden="true" />
      <div ref={containerRef} className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Scope Your Project
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Answer three quick questions for an instant estimate. <span className="text-brand-teal font-medium">This tool is completely free of charge</span> — or{" "}
            <button
              type="button"
              onClick={() => setStep(4)}
              className="text-brand-teal font-medium underline underline-offset-2 hover:text-brand-mint transition-colors"
            >
              skip straight to sending us your project details
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
              <h3 className="text-2xl font-semibold text-white mb-6">1. Select Project Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {([
                  { type: "AI Agents & Automation", desc: "Put AI to work on real tasks — support, ops, data entry." },
                  { type: "Mobile App", desc: "Native iOS/Android or cross-platform, built to ship." },
                  { type: "Web Platform", desc: "Web apps and internal tools that scale with you." },
                ] as const).map(({ type, desc }) => (
                  <button
                    key={type}
                    onClick={() => setProjectType(type as ProjectType)}
                    className={`p-6 rounded-3xl border text-left transition-all duration-300 ${projectType === type ? 'border-brand-teal/50 bg-brand-teal/20 shadow-[0_0_15px_rgba(0,152,139,0.3)]' : 'border-transparent bg-white/5 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]'}`}
                    data-magnetic
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">{type}</span>
                      {projectType === type && <CheckCircle2 className="w-5 h-5 text-brand-teal" />}
                    </div>
                    <p className="text-sm text-gray-500">{desc}</p>
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
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <button onClick={() => setStep(1)} className="text-brand-teal text-sm mb-4 hover:underline">← Back</button>
              <h3 className="text-2xl font-semibold text-white mb-6">2. Define Scope Level</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["MVP", "Growth", "Enterprise"].map((level) => (
                  <button
                    key={level}
                    onClick={() => setScope(level as ScopeLevel)}
                    className={`p-6 rounded-3xl border text-left transition-all duration-300 ${scope === level ? 'border-brand-teal/50 bg-brand-teal/20 shadow-[0_0_15px_rgba(0,152,139,0.3)]' : 'border-transparent bg-white/5 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]'}`}
                    data-magnetic
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">{level}</span>
                      {scope === level && <CheckCircle2 className="w-5 h-5 text-brand-teal" />}
                    </div>
                    <p className="text-sm text-gray-500">
                      {level === "MVP" ? "Core features to validate market fit." : level === "Growth" ? "Scalable architecture for expanding user base." : "Mission-critical, high-availability systems."}
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
                  Calculate Structure <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 - Features */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <button onClick={() => setStep(2)} className="text-brand-teal text-sm mb-4 hover:underline">← Back</button>
              <h3 className="text-2xl font-semibold text-white mb-6">3. Select Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["AI Integration", "Payment Gateway", "Advanced Analytics", "Custom CMS", "User Auth", "Multi-language"].map((feature) => (
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
                      <span className="font-semibold text-white">{feature}</span>
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
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 - Results & Contact */}
          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              {step > 1 && projectType && (
                <button onClick={() => setStep(3)} className="text-brand-teal text-sm mb-4 hover:underline">← Edit Features</button>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Graph/Estimate — only shown if the estimator was actually used */}
                {projectType && scope && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Project Snapshot</h3>
                    <div className="bg-brand-dark/50 rounded-2xl p-6 border border-white/5">
                      <div className="mb-6">
                        <div className="text-sm text-gray-400 mb-1">Estimated Complexity Tier</div>
                        <div className="text-4xl font-bold text-brand-teal">Level {Math.round(getEstimate() / 15)}</div>
                      </div>

                      <div className="space-y-4">
                         <div>
                           <div className="flex justify-between text-xs text-gray-400 mb-1">
                             <span>AI/Agentic Integration</span>
                             <span>{getEstimate() > 100 ? 'High' : 'Standard'}</span>
                           </div>
                           <div className="w-full bg-white/10 rounded-full h-2">
                             <div className="bg-brand-purple h-2 rounded-full" style={{ width: `${Math.min(100, getEstimate() * 0.7)}%` }}></div>
                           </div>
                         </div>
                         <div>
                           <div className="flex justify-between text-xs text-gray-400 mb-1">
                             <span>Scalability Index</span>
                             <span>{scope === "Enterprise" ? 'Maximum' : 'Flexible'}</span>
                           </div>
                           <div className="w-full bg-white/10 rounded-full h-2">
                             <div className="bg-brand-teal h-2 rounded-full" style={{ width: `${Math.min(100, getEstimate() * 0.9)}%` }}></div>
                           </div>
                         </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-6">
                        A rough sizing signal, not a quote — real pricing depends on scope. Typical Imbas engagements run $10k–$50k.
                      </p>
                    </div>
                  </div>
                )}

                {/* Contact Form */}
                <div className={projectType && scope ? "" : "md:col-span-2 max-w-md"}>
                  <h3 className="text-xl font-semibold text-white mb-4">Let&apos;s Talk</h3>

                  {submitState === "success" ? (
                    <div className="rounded-2xl border border-brand-teal/30 bg-brand-teal/10 p-6 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-200">
                        Thanks — we got your project details and will reply within one business day.
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
                          placeholder="Name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-teal transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-teal transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Tell us about your project</label>
                        <textarea
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="What are you trying to build, and what's your timeline?"
                          rows={4}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-teal transition-colors resize-none"
                        ></textarea>
                      </div>

                      {submitState === "error" && (
                        <p className="text-sm text-red-400">
                          {submitError} You can also email us directly at{" "}
                          <a href="mailto:hello@imbas.solutions" className="underline hover:text-red-300">
                            hello@imbas.solutions
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
                        {submitState === "submitting" ? "Sending…" : "Send Project Details"}
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
