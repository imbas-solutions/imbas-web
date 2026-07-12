"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroSVGBackground from "./HeroSVGBackground";
import { ArrowRight, Sparkles, Activity, Cpu, GitBranch } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = ["Software", "that", "Learns,", "Adapts,", "and", "Thinks."];

export default function HeroReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const chartPathRef = useRef<SVGPathElement>(null);
  const chartAreaRef = useRef<SVGPathElement>(null);
  const kpiEffRef = useRef<HTMLSpanElement>(null);
  const kpiLatRef = useRef<HTMLSpanElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !dashboardRef.current || !titleRef.current) return;

      // ---- Shared initial states ----
      gsap.set(".hero-word", { yPercent: 120, opacity: 0 });
      gsap.set(".hero-eyebrow", { y: 24, opacity: 0 });
      gsap.set(".hero-sub", { y: 30, opacity: 0 });
      gsap.set(".hero-cta", { y: 30, opacity: 0 });

      if (chartPathRef.current) {
        const len = chartPathRef.current.getTotalLength();
        gsap.set(chartPathRef.current, { strokeDasharray: len, strokeDashoffset: len });
      }
      if (chartAreaRef.current) gsap.set(chartAreaRef.current, { opacity: 0 });
      gsap.set(".agent-row", { opacity: 0.25 });

      // ---- Entrance (plays on load — the page must never look empty) ----
      const intro = gsap.timeline({ delay: 0.2 });
      intro.to(".hero-eyebrow", { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, 0);
      intro.to(
        ".hero-word",
        { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.08, ease: "power4.out" },
        0.15
      );
      intro.to(".hero-sub", { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, 0.75);
      intro.to(".hero-cta", { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out" }, 0.95);

      const runSystemBoot = (tl: gsap.core.Timeline, at: number, speed = 1) => {
        if (chartPathRef.current) {
          tl.to(chartPathRef.current, { strokeDashoffset: 0, duration: 1.2 * speed, ease: "power1.inOut" }, at);
        }
        if (chartAreaRef.current) {
          tl.to(chartAreaRef.current, { opacity: 1, duration: 0.8 * speed }, at + 0.5 * speed);
        }
        const counters = { eff: 0, lat: 0 };
        tl.to(
          counters,
          {
            eff: 42,
            lat: 1.2,
            duration: 1.2 * speed,
            ease: "power1.out",
            onUpdate: () => {
              if (kpiEffRef.current) kpiEffRef.current.textContent = `+${Math.round(counters.eff)}%`;
              if (kpiLatRef.current) kpiLatRef.current.textContent = `${counters.lat.toFixed(1)}s`;
            },
          },
          at + 0.1 * speed
        );
        tl.to(".agent-row", { opacity: 1, duration: 0.4 * speed, stagger: 0.25 * speed }, at + 0.2 * speed);
        tl.to(
          dashboardRef.current,
          {
            boxShadow: "0 30px 80px -20px rgba(0, 255, 204, 0.25), 0 0 0 1px rgba(0, 255, 204, 0.15)",
            duration: 1 * speed,
          },
          at + 0.4 * speed
        );
        tl.fromTo(
          ".hero-sheen",
          { xPercent: -80 },
          { xPercent: 180, duration: 1.4 * speed, ease: "power2.inOut" },
          at + 0.6 * speed
        );
      };

      const mm = gsap.matchMedia();

      // ---- Desktop: pinned, scroll-driven assembly ----
      mm.add("(min-width: 1024px)", () => {
        gsap.set(dashboardRef.current, { opacity: 0, scale: 0.88, y: 60 });
        elementsRef.current.forEach((el) => {
          if (!el) return;
          gsap.set(el, {
            x: gsap.utils.random(-500, 500),
            y: gsap.utils.random(-400, 400),
            rotation: gsap.utils.random(-24, 24),
            opacity: 0,
            scale: 0.4,
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=3000",
            scrub: 1.2,
            pin: true,
          },
        });

        tl.to(scrollCueRef.current, { opacity: 0, duration: 0.2 }, 0.05);

        // Glass shell materializes
        tl.to(dashboardRef.current, { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" }, 0.1);

        // Scattered modules converge and lock
        tl.to(
          elementsRef.current,
          { x: 0, y: 0, rotation: 0, opacity: 1, scale: 1, duration: 2, stagger: 0.15, ease: "power3.inOut" },
          0.6
        );

        // The system comes alive: chart draws, KPIs count, agents light up
        runSystemBoot(tl, 2.5);

        // Hold — locked, breathing
        tl.to({}, { duration: 1 });
      });

      // ---- Mobile / tablet: no pin, assembly plays once in view ----
      mm.add("(max-width: 1023px)", () => {
        gsap.set(dashboardRef.current, { opacity: 0, y: 50, scale: 0.94 });
        elementsRef.current.forEach((el) => {
          if (!el) return;
          gsap.set(el, { opacity: 0, y: 24, scale: 0.9 });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: dashboardRef.current,
            start: "top 80%",
            once: true,
          },
        });
        tl.to(dashboardRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }, 0);
        tl.to(
          elementsRef.current,
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: "power3.out" },
          0.2
        );
        runSystemBoot(tl, 0.8, 0.8);

        gsap.to(scrollCueRef.current, {
          opacity: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top -80",
            toggleActions: "play none none reverse",
          },
        });
      });

      // ---- Idle life (independent of scroll) ----
      if (floatRef.current) {
        gsap.to(floatRef.current, {
          y: -10,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // ---- Pointer parallax tilt on the dashboard ----
      const tiltX = gsap.quickTo(tiltRef.current, "rotationX", { duration: 0.8, ease: "power3.out" });
      const tiltY = gsap.quickTo(tiltRef.current, "rotationY", { duration: 0.8, ease: "power3.out" });

      const onMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const nx = e.clientX / innerWidth - 0.5;
        const ny = e.clientY / innerHeight - 0.5;
        tiltY(nx * 8);
        tiltX(ny * -6);
      };
      const onLeave = () => {
        tiltX(0);
        tiltY(0);
      };

      window.addEventListener("mousemove", onMove);
      containerRef.current.addEventListener("mouseleave", onLeave);

      return () => {
        window.removeEventListener("mousemove", onMove);
        containerRef.current?.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: containerRef }
  );

  const addToElementsRef = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen lg:h-screen w-full flex items-center justify-center overflow-hidden bg-brand-deep grain py-28 lg:py-0"
    >
      {/* Programmatic SVG background */}
      <div className="absolute inset-0 z-0">
        <HeroSVGBackground />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#060210_100%)] pointer-events-none" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: dashboard mockup */}
        <div className="flex justify-center lg:justify-start order-2 lg:order-1" style={{ perspective: "1200px" }}>
          <div ref={tiltRef} style={{ transformStyle: "preserve-3d" }}>
            <div ref={floatRef}>
              <div
                ref={dashboardRef}
                className="relative w-full max-w-md h-[480px] md:h-[560px] rounded-[2.5rem] glass p-6 flex flex-col gap-4 overflow-hidden"
              >
                {/* Sheen layer */}
                <div className="hero-sheen absolute inset-y-[-40%] left-0 w-1/3 rotate-[18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-20" />

                {/* Top bar: identity + live status */}
                <div
                  ref={addToElementsRef}
                  className="w-full h-20 rounded-2xl glass-teal px-5 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/40 flex items-center justify-center shadow-[0_0_18px_rgba(0,255,204,0.4)]">
                      <Sparkles className="w-5 h-5 text-brand-glow" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="w-24 h-3 bg-white/25 rounded-full" />
                      <div className="w-16 h-2 bg-white/10 rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-glow/30 bg-brand-glow/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-glow animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest text-brand-glow/90">LIVE</span>
                  </div>
                </div>

                {/* KPI tiles */}
                <div className="flex gap-4">
                  <div ref={addToElementsRef} className="flex-1 rounded-2xl glass p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="w-3.5 h-3.5 text-brand-mint" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                        Eficiencia
                      </span>
                    </div>
                    <span ref={kpiEffRef} className="text-3xl font-bold text-white tabular-nums">
                      +0%
                    </span>
                  </div>
                  <div ref={addToElementsRef} className="flex-1 rounded-2xl glass p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Cpu className="w-3.5 h-3.5 text-brand-mint" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                        Respuesta
                      </span>
                    </div>
                    <span ref={kpiLatRef} className="text-3xl font-bold text-white tabular-nums">
                      0.0s
                    </span>
                  </div>
                </div>

                {/* Live chart */}
                <div ref={addToElementsRef} className="w-full rounded-2xl glass p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                      Rendimiento del sistema
                    </span>
                    <span className="text-[10px] font-mono text-brand-glow/70">24h</span>
                  </div>
                  <svg viewBox="0 0 300 110" className="w-full h-24" fill="none">
                    <defs>
                      <linearGradient id="hero-chart-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00ffcc" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#00ffcc" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[22, 44, 66, 88].map((y) => (
                      <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    ))}
                    <path
                      ref={chartAreaRef}
                      d="M 0 88 C 30 82, 50 70, 80 72 C 110 74, 130 52, 160 48 C 190 44, 210 56, 240 38 C 265 27, 285 20, 300 14 L 300 110 L 0 110 Z"
                      fill="url(#hero-chart-fill)"
                    />
                    <path
                      ref={chartPathRef}
                      d="M 0 88 C 30 82, 50 70, 80 72 C 110 74, 130 52, 160 48 C 190 44, 210 56, 240 38 C 265 27, 285 20, 300 14"
                      stroke="#00ffcc"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="drop-shadow-[0_0_6px_rgba(0,255,204,0.6)]"
                    />
                  </svg>
                </div>

                {/* Agent feed */}
                <div ref={addToElementsRef} className="w-full flex-1 rounded-2xl glass p-4 flex flex-col justify-center gap-3">
                  {[
                    { icon: GitBranch, label: "Agente de datos", state: "sincronizado" },
                    { icon: Cpu, label: "Agente de UI", state: "adaptando" },
                    { icon: Activity, label: "Agente de QA", state: "verificando" },
                  ].map(({ icon: Icon, label, state }) => (
                    <div key={label} className="agent-row flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-brand-teal/15 border border-brand-teal/25 flex items-center justify-center">
                          <Icon className="w-3.5 h-3.5 text-brand-mint" />
                        </div>
                        <span className="text-xs text-gray-300">{label}</span>
                      </div>
                      <span className="text-[10px] font-mono text-brand-glow/70">{state}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: headline */}
        <div ref={titleRef} className="text-left max-w-2xl order-1 lg:order-2">
          <div className="hero-eyebrow inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-teal/30 bg-brand-teal/5 backdrop-blur-sm mb-8">
            <Sparkles className="w-3.5 h-3.5 text-brand-glow" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-mint">
              Imbas Solutions · AI-First Engineering
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
            {HEADLINE.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom pb-1 mr-[0.28em]">
                <span
                  className={`hero-word inline-block ${
                    word === "Adapts," ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-glow to-brand-teal" : ""
                  }`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-sub text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-10">
            Imbas Solutions pioneers the future of intelligent architecture, fusing
            Agentic UX with self-modifying software frameworks.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="hero-cta group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-teal text-white font-medium transition-all duration-300 hover:bg-brand-mint hover:shadow-[0_0_35px_rgba(0,255,204,0.35)]"
            >
              Agenda una demo
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#philosophy"
              className="hero-cta inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-gray-300 font-medium backdrop-blur-sm transition-all duration-300 hover:border-brand-glow/40 hover:text-white"
            >
              Explora el ecosistema
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        ref={scrollCueRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500">Scroll</span>
        <div className="w-px h-12 bg-white/10 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-b from-brand-glow to-brand-teal"
            style={{ animation: "scroll-cue 2.2s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
