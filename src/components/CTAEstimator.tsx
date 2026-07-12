"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronRight, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type ProjectType = "Mobile App" | "AI-First Core" | "Self-Adaptive Web" | null;
type ScopeLevel = "MVP" | "Growth" | "Enterprise" | null;

export default function CTAEstimator() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [projectType, setProjectType] = useState<ProjectType>(null);
  const [scope, setScope] = useState<ScopeLevel>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [step, setStep] = useState(1);

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
    const base = projectType === "Self-Adaptive Web" ? 30 : projectType === "Mobile App" ? 40 : 50;
    const multiplier = scope === "MVP" ? 1 : scope === "Growth" ? 2.5 : 5;
    const featuresCost = selectedFeatures.length * 5;
    return (base * multiplier) + featuresCost;
  };

  const handleNextStep = () => {
    if (step === 1 && projectType) setStep(2);
    else if (step === 2 && scope) setStep(3);
    else if (step === 3) setStep(4);
  };

  return (
    <section className="py-32 w-full bg-brand-dark/95 relative border-t border-white/5">
      <div ref={containerRef} className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Initiate Your Architecture
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Define your scope and receive an instant structural estimation. <span className="text-brand-teal font-medium">This tool is completely free of charge</span>, so feel free to explore different options and discover what we can build for you.
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
                {["Mobile App", "AI-First Core", "Self-Adaptive Web"].map((type) => (
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
                    <p className="text-sm text-gray-500">Intelligent foundations for next-gen products.</p>
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
              <button onClick={() => setStep(3)} className="text-brand-teal text-sm mb-4 hover:underline">← Edit Features</button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Graph/Estimate */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Structural Analysis</h3>
                  <div className="bg-brand-dark/50 rounded-2xl p-6 border border-white/5">
                    <div className="mb-6">
                      <div className="text-sm text-gray-400 mb-1">Estimated Complexity Tier</div>
                      <div className="text-4xl font-bold text-brand-teal">Level {Math.round(getEstimate() / 15)}</div>
                    </div>
                    
                    <div className="space-y-4">
                       <div>
                         <div className="flex justify-between text-xs text-gray-400 mb-1">
                           <span>Agentic Integration</span>
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
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Engage Protocol</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <input type="text" placeholder="Designation (Name)" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-teal transition-colors" />
                    </div>
                    <div>
                      <input type="email" placeholder="Comms Channel (Email)" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-teal transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Project Discussion (Tell us more about what you want to achieve)</label>
                      <textarea placeholder="Describe your vision, requirements, or any specific details..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-teal transition-colors resize-none"></textarea>
                    </div>
                    <button className="w-full py-3 bg-brand-teal text-white rounded-xl font-medium hover:bg-brand-teal/80 transition-colors" data-magnetic>
                      Initialize System Build
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
