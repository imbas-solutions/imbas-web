"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  BarChart3,
  Database,
  ShieldAlert,
  ServerCog,
  Zap,
  Server,
  ShieldCheck,
  Network,
  ArrowRight,
  Workflow,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Zone 2 — the Imbas tree, built on the exact geometry of the isotipo:
 * a crown of circuit-stems with node tips (leaves), a strong central
 * trunk, and teal roots fanning out into a concentric core node.
 *
 * One continuous SVG spine (3 viewport-tall bands) descends like a
 * camera move while the three narrative phases crossfade around it.
 */

const rootServices = [
  { icon: Network, title: "AI Agents & Automation", desc: "Agents that handle real support, ops, and data work." },
  { icon: ArrowRight, title: "Legacy Modernization", desc: "AI-ready upgrades to the systems you already run." },
  { icon: Zap, title: "Web & Mobile Apps", desc: "Native iOS/Android and PWA." },
  { icon: Server, title: "Cloud Infrastructure", desc: "Scalable architectures." },
  { icon: ShieldCheck, title: "AI Security", desc: "Enterprise data leak protection." },
  { icon: Workflow, title: "Data Pipelines", desc: "Solving bottlenecks & latency." },
];

const trunkPillars = [
  {
    index: "01",
    icon: Database,
    title: "Data Migration",
    desc: "Secure transitions with zero data loss and guaranteed integrity for mission-critical systems.",
    chips: ["Zero downtime", "Full integrity"],
  },
  {
    index: "02",
    icon: ShieldAlert,
    title: "AI Guardrails",
    desc: "Strict policies and safety barriers so models operate within corporate parameters.",
    chips: ["Compliance", "Auditable"],
  },
  {
    index: "03",
    icon: ServerCog,
    title: "Legacy Integration",
    desc: "We connect legacy infrastructure to AI-first workflows without interrupting business operations.",
    chips: ["SLA 99.99%", "Frictionless"],
  },
];

/* Positions for the root feature cards along the fan (desktop) */
const rootCardPos = [
  { side: "left", top: "16%", inset: "6%" },
  { side: "right", top: "24%", inset: "6%" },
  { side: "left", top: "40%", inset: "3%" },
  { side: "right", top: "48%", inset: "3%" },
  { side: "left", top: "64%", inset: "7%" },
  { side: "right", top: "72%", inset: "7%" },
] as const;

export default function NichePhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spineRef = useRef<HTMLDivElement>(null);
  const crownGroupRef = useRef<SVGGElement>(null);
  const phaseARef = useRef<HTMLDivElement>(null);
  const phaseBRef = useRef<HTMLDivElement>(null);
  const phaseCRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !spineRef.current) return;

      const mm = gsap.matchMedia();

      // ================= DESKTOP: pinned camera descent =================
      mm.add("(min-width: 768px)", () => {

      // ---------- Initial states ----------
      gsap.set([phaseBRef.current, phaseCRef.current], { autoAlpha: 0 });

      // Every spine path that gets "drawn" on scroll
      gsap.utils.toArray<SVGPathElement>(".draw").forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });

      gsap.set(".crown-tip", { scale: 0, opacity: 0, transformOrigin: "center center" });
      gsap.set(".trunk-tick", { scaleX: 0, opacity: 0, transformOrigin: "center center" });
      gsap.set(".dock-pad", { scale: 0, opacity: 0, transformOrigin: "center center" });
      gsap.set(".root-tip", { scale: 0, opacity: 0, transformOrigin: "center center" });
      gsap.set(".root-tick", { opacity: 0 });
      gsap.set(".core-ring", { scale: 0, opacity: 0, transformOrigin: "center center" });

      gsap.set(".pa-title", { opacity: 0, y: 40 });
      gsap.set(".pa-item", { opacity: 0, y: 36, scale: 0.95 });
      gsap.set(".dash-bar", { scaleY: 0, transformOrigin: "bottom center" });
      gsap.set(".adapt-badge", { opacity: 0, y: 10 });

      gsap.set(".pb-title", { opacity: 0, y: 40 });
      gsap.set(".pb-card.from-left", { opacity: 0, x: -140 });
      gsap.set(".pb-card.from-right", { opacity: 0, x: 140 });

      gsap.set(".pc-title", { opacity: 0, y: 30 });
      gsap.set(".pc-card", { opacity: 0, y: 24, scale: 0.8 });
      gsap.set(".pc-caption", { opacity: 0, y: 16 });

      gsap.set(".rail-fill", { scaleY: 0, transformOrigin: "top center" });

      // ---------- Master scroll timeline ----------
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=7000",
          scrub: 1,
          pin: true,
        },
      });

      /* ===== PHASE A — THE CROWN (leaves / adaptive UX) ===== */
      tl.to(".trunk-top", { strokeDashoffset: 0, duration: 0.7, ease: "power1.inOut" }, 0);
      tl.to(
        ".crown-stem",
        { strokeDashoffset: 0, duration: 0.8, stagger: 0.15, ease: "power1.inOut" },
        0.15
      );
      tl.to(
        ".crown-tip",
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1, ease: "back.out(2.2)" },
        0.75
      );

      tl.to(".pa-title", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 0.25);
      tl.to(".pa-item-1", { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }, 1.0);
      tl.to(".pa-item-2", { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }, 1.4);
      tl.to(".dash-bar", { scaleY: 1, duration: 0.35, stagger: 0.07, ease: "power2.out" }, 1.65);
      tl.to(".adapt-badge", { opacity: 1, y: 0, duration: 0.3 }, 2.0);
      tl.to(".pa-item-3", { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }, 2.15);

      // Leaves scatter upward as the camera starts descending
      tl.to(
        ".pa-item",
        {
          opacity: 0,
          y: -80,
          rotation: () => gsap.utils.random(-6, 6),
          duration: 0.6,
          stagger: 0.06,
          ease: "power2.in",
        },
        2.95
      );
      tl.to(".pa-title", { opacity: 0, y: -40, duration: 0.5 }, 3.0);
      tl.to(phaseARef.current, { autoAlpha: 0, duration: 0.25 }, 3.5);

      // Camera descends to the trunk
      tl.to(spineRef.current, { yPercent: -100 / 3, duration: 1.1, ease: "power2.inOut" }, 3.05);

      /* ===== PHASE B — THE TRUNK (enterprise trust) ===== */
      tl.to(phaseBRef.current, { autoAlpha: 1, duration: 0.3 }, 3.4);
      tl.to(".pb-title", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 3.5);

      tl.to(".trunk-column", { strokeDashoffset: 0, duration: 0.9, ease: "power1.inOut" }, 3.45);
      tl.to(".trunk-rail", { strokeDashoffset: 0, duration: 0.9, ease: "power1.inOut" }, 3.55);
      tl.to(
        ".trunk-tick",
        { scaleX: 1, opacity: 1, duration: 0.35, stagger: 0.06, ease: "power2.out" },
        3.85
      );
      tl.to(".dock-line", { strokeDashoffset: 0, duration: 0.4, stagger: 0.18, ease: "power1.inOut" }, 4.0);
      tl.to(".dock-pad", { scale: 1, opacity: 1, duration: 0.3, stagger: 0.18, ease: "back.out(2)" }, 4.25);

      // Cards dock with rigid, machined precision — no bounce
      tl.to(".pb-card-1", { opacity: 1, x: 0, duration: 0.7, ease: "power4.out" }, 4.1);
      tl.to(".pb-card-2", { opacity: 1, x: 0, duration: 0.7, ease: "power4.out" }, 4.35);
      tl.to(".pb-card-3", { opacity: 1, x: 0, duration: 0.7, ease: "power4.out" }, 4.6);

      tl.to(
        ".pb-card",
        { opacity: 0, y: -50, duration: 0.5, stagger: 0.07, ease: "power2.in" },
        5.5
      );
      tl.to(".pb-title", { opacity: 0, y: -40, duration: 0.4 }, 5.55);
      tl.to(phaseBRef.current, { autoAlpha: 0, duration: 0.25 }, 5.95);

      // Camera descends to the roots
      tl.to(spineRef.current, { yPercent: -200 / 3, duration: 1.1, ease: "power2.inOut" }, 5.6);

      /* ===== PHASE C — THE ROOTS (technological depth) ===== */
      tl.to(phaseCRef.current, { autoAlpha: 1, duration: 0.3 }, 5.95);
      tl.to(".pc-title", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 6.05);

      tl.to(".trunk-lower", { strokeDashoffset: 0, duration: 0.5, ease: "power1.inOut" }, 6.0);
      tl.to(
        ".root-path",
        { strokeDashoffset: 0, duration: 1.1, stagger: 0.12, ease: "power1.inOut" },
        6.2
      );
      tl.to(".root-tick", { opacity: 1, duration: 0.3, stagger: 0.08 }, 7.0);
      tl.to(
        ".root-tip",
        { scale: 1, opacity: 1, duration: 0.35, stagger: 0.08, ease: "back.out(2)" },
        7.05
      );

      // The concentric core node — the logo's signature target
      tl.to(
        ".core-ring",
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.12, ease: "back.out(1.8)" },
        7.15
      );

      // Feature cards sprout from the roots
      tl.to(
        ".pc-card",
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.14, ease: "back.out(1.5)" },
        6.5
      );
      tl.to(".pc-caption", { opacity: 1, y: 0, duration: 0.5 }, 7.5);

      // Hold at the bottom of the tree
      tl.to({}, { duration: 0.7 });

      /* ===== Progress rail ===== */
      const total = tl.duration();
      tl.to(".rail-fill", { scaleY: 1, duration: total, ease: "none" }, 0);

      const activate = (sel: string, t: number) =>
        tl.to(sel, { backgroundColor: "#00ffcc", boxShadow: "0 0 12px rgba(0,255,204,0.8)", scale: 1.4, duration: 0.2 }, t);
      const deactivate = (sel: string, t: number) =>
        tl.to(sel, { backgroundColor: "rgba(0,152,139,0.6)", boxShadow: "none", scale: 1, duration: 0.2 }, t);

      activate(".rail-dot-1", 0.1);
      deactivate(".rail-dot-1", 3.4);
      activate(".rail-dot-2", 3.5);
      deactivate(".rail-dot-2", 5.9);
      activate(".rail-dot-3", 6.0);

      tl.to(".rail-label-1", { color: "#ffffff", duration: 0.2 }, 0.1);
      tl.to(".rail-label-1", { color: "#6b7280", duration: 0.2 }, 3.4);
      tl.to(".rail-label-2", { color: "#ffffff", duration: 0.2 }, 3.5);
      tl.to(".rail-label-2", { color: "#6b7280", duration: 0.2 }, 5.9);
      tl.to(".rail-label-3", { color: "#ffffff", duration: 0.2 }, 6.0);

      /* ===== Idle life (independent of scroll) ===== */

      // Wind: the whole crown sways from its base
      if (crownGroupRef.current) {
        gsap.fromTo(
          crownGroupRef.current,
          { rotation: -1.1, transformOrigin: "50% 95%" },
          { rotation: 1.1, duration: 4.5, repeat: -1, yoyo: true, ease: "sine.inOut" }
        );
      }

      // Leaf cards drift like foliage
      gsap.utils.toArray<HTMLElement>(".pa-item").forEach((el, i) => {
        gsap.to(el, {
          y: "+=random(-9, 9)",
          x: "+=random(-5, 5)",
          rotation: "+=random(-1, 1)",
          duration: gsap.utils.random(2.4, 4),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3,
        });
      });

      // Core node pulse (visible once the camera reaches the roots)
      gsap.to(".core-pulse", {
        scale: 1.9,
        opacity: 0,
        duration: 2.4,
        repeat: -1,
        ease: "power1.out",
        transformOrigin: "center center",
      });

      });

      // ================= MOBILE: natural flow, reveal on approach =================
      mm.add("(max-width: 767px)", () => {
        [phaseARef, phaseBRef, phaseCRef].forEach((ref) => {
          if (!ref.current) return;
          const items = ref.current.querySelectorAll(
            ".pa-title, .pa-item, .pb-title, .pb-card, .pc-title, .pc-card, .pc-caption"
          );
          gsap.from(items, {
            opacity: 0,
            y: 44,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 72%", once: true },
          });
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="md:h-screen w-full bg-brand-deep relative overflow-hidden text-white font-sans grain"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,152,139,0.06)_0%,_transparent_55%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(45,24,56,0.35)_0%,_transparent_60%)] pointer-events-none z-0" />

      {/* ================= THE TREE SPINE (logo geometry, 3 bands) ================= */}
      <div
        ref={spineRef}
        className="hidden md:block absolute inset-x-0 top-0 mx-auto w-full max-w-[680px] pointer-events-none z-[5]"
        style={{ height: "300%" }}
      >
        {/* Band 1: crown — its own SVG so no single layer exceeds GPU texture limits */}
        <svg
          className="absolute top-0 left-0 w-full"
          style={{ height: "33.3334%" }}
          viewBox="0 0 800 800"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Cheap glow: layered halo gradient instead of feGaussianBlur —
                blur filters on an SVG this large crash weak compositors */}
            <radialGradient id="halo-teal" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00ffcc" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00ffcc" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="halo-lilac" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#b9a7d6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#b9a7d6" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="trunk-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b9a7d6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7d6a9e" stopOpacity="0.75" />
            </linearGradient>
          </defs>

          {/* ---------- BAND 1: CROWN (y 0–800) ---------- */}
          <g ref={crownGroupRef}>
            {/* Central stem rising to the apex node */}
            <path className="draw trunk-top" d="M 400 760 L 400 120" stroke="url(#trunk-grad)" strokeWidth="7" strokeLinecap="round" />

            {/* Far-left teal stem */}
            <path
              className="draw crown-stem"
              d="M 396 720 C 380 640, 340 560, 300 480 C 260 400, 230 300, 205 190"
              stroke="#00988b" strokeWidth="6" strokeLinecap="round"
            />
            {/* Inner-left lilac stem */}
            <path
              className="draw crown-stem"
              d="M 398 700 C 390 620, 370 540, 350 470 C 330 410, 310 330, 302 250"
              stroke="#b9a7d6" strokeWidth="4.5" strokeLinecap="round"
            />
            {/* Inner-right lilac hook (curls into the trunk, like the logo) */}
            <path
              className="draw crown-stem"
              d="M 402 480 C 404 430, 420 400, 445 370 C 470 340, 478 290, 472 215"
              stroke="#b9a7d6" strokeWidth="4.5" strokeLinecap="round"
            />
            {/* Far-right teal stem */}
            <path
              className="draw crown-stem"
              d="M 404 720 C 420 640, 460 560, 500 480 C 540 400, 570 300, 592 190"
              stroke="#00988b" strokeWidth="6" strokeLinecap="round"
            />

            {/* Node tips — the "leaves" of the circuit tree */}
            <g className="crown-tip">
              <circle cx="400" cy="100" r="34" fill="url(#halo-lilac)" />
              <circle cx="400" cy="100" r="15" stroke="#b9a7d6" strokeWidth="4" />
              <circle cx="400" cy="100" r="6" fill="#00ffcc" />
            </g>
            <g className="crown-tip">
              <circle cx="202" cy="172" r="26" fill="url(#halo-teal)" />
              <circle cx="202" cy="172" r="10" stroke="#00ffcc" strokeWidth="4" />
            </g>
            <g className="crown-tip">
              <circle cx="300" cy="236" r="20" fill="url(#halo-lilac)" />
              <circle cx="300" cy="236" r="8" fill="#b9a7d6" />
            </g>
            <g className="crown-tip">
              <circle cx="471" cy="203" r="18" fill="url(#halo-lilac)" />
              <circle cx="471" cy="203" r="7" stroke="#b9a7d6" strokeWidth="3.5" />
            </g>
            <g className="crown-tip">
              <circle cx="595" cy="178" r="26" fill="url(#halo-teal)" />
              <circle cx="595" cy="178" r="10" fill="#00ffcc" />
            </g>
          </g>
        </svg>

        {/* Band 2: trunk */}
        <svg
          className="absolute left-0 w-full"
          style={{ top: "33.3333%", height: "33.3334%" }}
          viewBox="0 0 800 800"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            {/* Main column */}
            <path className="draw trunk-column" d="M 400 0 L 400 800" stroke="url(#trunk-grad)" strokeWidth="11" strokeLinecap="round" />
            {/* Structural side rails */}
            <path className="draw trunk-rail" d="M 382 30 L 382 775" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
            <path className="draw trunk-rail" d="M 418 30 L 418 775" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />

            {/* Machined crossbars */}
            {[100, 200, 300, 400, 500, 600, 700].map((y) => (
              <path key={y} className="trunk-tick" d={`M 370 ${y} L 430 ${y}`} stroke="rgba(0,152,139,0.55)" strokeWidth="3" />
            ))}

            {/* Docking connectors to the pillar cards */}
            <path className="draw dock-line" d="M 400 160 L 180 160" stroke="rgba(0,255,204,0.35)" strokeWidth="2" />
            <rect className="dock-pad" x="170" y="152" width="16" height="16" rx="3" fill="#060210" stroke="#00ffcc" strokeWidth="2" />
            <path className="draw dock-line" d="M 400 400 L 620 400" stroke="rgba(0,255,204,0.35)" strokeWidth="2" />
            <rect className="dock-pad" x="614" y="392" width="16" height="16" rx="3" fill="#060210" stroke="#00ffcc" strokeWidth="2" />
            <path className="draw dock-line" d="M 400 640 L 180 640" stroke="rgba(0,255,204,0.35)" strokeWidth="2" />
            <rect className="dock-pad" x="170" y="632" width="16" height="16" rx="3" fill="#060210" stroke="#00ffcc" strokeWidth="2" />
          </g>
        </svg>

        {/* Band 3: roots */}
        <svg
          className="absolute left-0 w-full"
          style={{ top: "66.6666%", height: "33.3334%" }}
          viewBox="0 0 800 800"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            {/* Trunk continues to the core */}
            <path className="draw trunk-lower" d="M 400 0 L 400 500" stroke="url(#trunk-grad)" strokeWidth="11" strokeLinecap="round" />

            {/* Left root fan (teal ribbons, like the logo) */}
            <path className="draw root-path" d="M 396 40 C 375 170, 320 270, 240 350 C 175 415, 120 490, 95 580" stroke="#00988b" strokeWidth="7" strokeLinecap="round" />
            <path className="draw root-path" d="M 398 100 C 385 210, 345 300, 275 380 C 220 443, 175 510, 155 600" stroke="#00988b" strokeWidth="5" strokeLinecap="round" />
            <path className="draw root-path" d="M 393 65 C 368 190, 312 285, 235 362" stroke="#2fbfae" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />

            {/* Right root fan (mirrored) */}
            <path className="draw root-path" d="M 404 40 C 425 170, 480 270, 560 350 C 625 415, 680 490, 705 580" stroke="#00988b" strokeWidth="7" strokeLinecap="round" />
            <path className="draw root-path" d="M 402 100 C 415 210, 455 300, 525 380 C 580 443, 625 510, 645 600" stroke="#00988b" strokeWidth="5" strokeLinecap="round" />
            <path className="draw root-path" d="M 407 65 C 432 190, 488 285, 565 362" stroke="#2fbfae" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />

            {/* Split-ribbon accents near the tips (logo detail) */}
            <path className="root-tick" d="M 140 485 L 102 540" stroke="#2fbfae" strokeWidth="3" strokeLinecap="round" />
            <path className="root-tick" d="M 178 512 L 144 566" stroke="#2fbfae" strokeWidth="3" strokeLinecap="round" />
            <path className="root-tick" d="M 660 485 L 698 540" stroke="#2fbfae" strokeWidth="3" strokeLinecap="round" />
            <path className="root-tick" d="M 622 512 L 656 566" stroke="#2fbfae" strokeWidth="3" strokeLinecap="round" />

            {/* Root tip nodes */}
            <g className="root-tip">
              <circle cx="95" cy="580" r="18" fill="url(#halo-teal)" />
              <circle cx="95" cy="580" r="6" fill="#00ffcc" />
            </g>
            <g className="root-tip">
              <circle cx="155" cy="600" r="14" fill="url(#halo-teal)" />
              <circle cx="155" cy="600" r="4.5" fill="#2fbfae" />
            </g>
            <g className="root-tip">
              <circle cx="705" cy="580" r="18" fill="url(#halo-teal)" />
              <circle cx="705" cy="580" r="6" fill="#00ffcc" />
            </g>
            <g className="root-tip">
              <circle cx="645" cy="600" r="14" fill="url(#halo-teal)" />
              <circle cx="645" cy="600" r="4.5" fill="#2fbfae" />
            </g>

            {/* The concentric core node — the logo's grounding target */}
            <circle className="core-pulse" cx="400" cy="560" r="52" stroke="#00ffcc" strokeWidth="2" opacity="0.5" />
            <circle className="core-ring" cx="400" cy="560" r="52" stroke="#b9a7d6" strokeWidth="11" />
            <circle className="core-ring" cx="400" cy="560" r="27" fill="#060210" stroke="#b9a7d6" strokeWidth="4" />
            <g className="core-ring">
              <circle cx="400" cy="560" r="24" fill="url(#halo-teal)" />
              <circle cx="400" cy="560" r="12" fill="#00ffcc" />
            </g>
          </g>
        </svg>
      </div>

      {/* ================= PROGRESS RAIL ================= */}
      <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-40 flex-col items-start gap-0">
        <div className="relative flex flex-col gap-14 pl-5">
          {/* Track + fill */}
          <div className="absolute left-0 top-1 bottom-1 w-px bg-white/10" />
          <div className="rail-fill absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-brand-glow to-brand-teal" />

          {[
            { n: "01", label: "The Leaves" },
            { n: "02", label: "The Trunk" },
            { n: "03", label: "The Roots" },
          ].map((item, i) => (
            <div key={item.n} className="relative flex items-center gap-3">
              <span
                className={`rail-dot-${i + 1} absolute -left-[22px] w-2 h-2 rounded-full`}
                style={{ backgroundColor: "rgba(0,152,139,0.6)" }}
              />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-brand-teal/60">{item.n}</span>
                <span className={`rail-label-${i + 1} text-xs font-medium tracking-wide text-gray-500`}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= PHASE A: LEAVES / ADAPTIVE UX ================= */}
      <div
        ref={phaseARef}
        className="relative py-24 md:py-0 md:absolute md:inset-0 w-full md:h-full flex flex-col items-center justify-center px-6 z-30"
      >
        <div className="pa-title text-center mb-10 md:mb-0 md:absolute md:top-[6%] w-full px-6">
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-brand-mint mb-3">
            Phase 01 · The Leaves
          </p>
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-brand-glow">
            Self-Adaptive Experiences
          </h2>
        </div>

        <div className="relative w-full max-w-6xl h-auto md:h-[62vh] mt-0 md:mt-10 flex flex-col gap-5 md:block">
          {/* Leaf 1 — user request (attached near the left stem tip) */}
          <div className="pa-item pa-item-1 md:absolute md:top-[6%] md:left-[4%] lg:left-[8%] glass rounded-2xl rounded-tl-sm p-4 max-w-xs flex items-start gap-3">
            <MessageSquare className="w-5 h-5 text-brand-glow mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-white leading-relaxed">
                “I need last month&apos;s sales report, compared to the same month last year.”
              </p>
              <span className="block mt-2 text-[10px] font-mono text-gray-500">09:41 · CEO</span>
            </div>
            {/* Connector to the branch */}
            <span className="hidden md:block absolute -bottom-px -right-6 w-6 h-px bg-gradient-to-r from-brand-glow/50 to-transparent" />
          </div>

          {/* Leaf 2 — the living dashboard */}
          <div className="pa-item pa-item-2 md:absolute md:top-[22%] md:right-[4%] lg:right-[8%] glass rounded-3xl p-6 w-full max-w-md sheen">
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-brand-glow" />
                <span className="text-sm font-medium tracking-wider text-gray-300">Sales (YoY)</span>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-brand-glow/25 bg-brand-glow/5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-glow animate-pulse" />
                <span className="text-[9px] font-mono tracking-widest text-brand-glow/80">ADAPTIVE</span>
              </div>
            </div>
            <div className="h-36 border-b border-white/10 flex items-end justify-between gap-2.5 pb-0">
              {[30, 45, 60, 50, 85, 100].map((h, i) => (
                <div key={i} className="w-full h-full flex items-end">
                  <div
                    className="dash-bar w-full rounded-t-md bg-gradient-to-t from-brand-teal/60 to-brand-glow/80 shadow-[0_0_14px_rgba(0,255,204,0.25)]"
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-mono">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            </div>
            <div className="adapt-badge mt-4 flex items-center gap-2 text-[11px] text-brand-mint font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Dashboard rearranged to match your preferences
            </div>
          </div>

          {/* Leaf 3 — system reply */}
          <div className="pa-item pa-item-3 md:absolute md:bottom-[4%] md:left-[12%] lg:left-[16%] glass-teal rounded-2xl rounded-br-sm p-4 max-w-xs flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-brand-glow mt-1 flex-shrink-0" />
            <p className="text-sm font-medium text-white leading-relaxed">
              Report generated! I&apos;ve adapted the dashboard to your display preferences.
            </p>
            <span className="hidden md:block absolute -top-px -right-6 w-6 h-px bg-gradient-to-r from-brand-glow/50 to-transparent" />
          </div>
        </div>
      </div>

      {/* ================= PHASE B: TRUNK / ENTERPRISE TRUST ================= */}
      <div
        ref={phaseBRef}
        className="relative py-24 md:py-0 md:absolute md:inset-0 w-full md:h-full flex flex-col items-center justify-center px-6 z-20"
      >
        <div className="pb-title text-center mb-10 md:mb-0 md:absolute md:top-[6%] w-full px-6">
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-brand-mint mb-3">
            Phase 02 · The Trunk
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            Enterprise Trust
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-medium max-w-2xl mx-auto mt-3">
            Solid foundations for demanding corporate environments.
          </p>
        </div>

        <div className="relative w-full max-w-6xl mt-0 md:mt-16 flex flex-col gap-5 md:block md:h-[58vh]">
          {trunkPillars.map((pillar, i) => {
            const fromLeft = i !== 1;
            const pos =
              i === 0
                ? "md:absolute md:top-[2%] md:left-[2%] lg:left-[6%]"
                : i === 1
                ? "md:absolute md:top-[34%] md:right-[2%] lg:right-[6%]"
                : "md:absolute md:top-[66%] md:left-[2%] lg:left-[6%]";
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.index}
                className={`pb-card pb-card-${i + 1} ${fromLeft ? "from-left" : "from-right"} ${pos} w-full max-w-sm bg-[#0c0714]/90 border border-white/10 rounded-md p-6 relative overflow-hidden`}
              >
                {/* Machined top hairline */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-glow/60 to-transparent" />
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-sm bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-mint" />
                  </div>
                  <span className="text-2xl font-mono font-bold text-white/10">{pillar.index}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 tracking-tight">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{pillar.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {pillar.chips.map((chip) => (
                    <span
                      key={chip}
                      className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-brand-mint/80 border border-brand-teal/25 rounded-sm bg-brand-teal/5"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= PHASE C: ROOTS / TECHNOLOGICAL DEPTH ================= */}
      <div ref={phaseCRef} className="relative py-24 md:py-0 md:absolute md:inset-0 w-full md:h-full z-10">
        <div className="pc-title text-center mb-10 md:mb-0 md:absolute md:top-[5%] w-full px-6 z-20">
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-brand-mint mb-3">
            Phase 03 · The Roots
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Technical Depth
          </h2>
        </div>

        {/* Mobile: simple grid; Desktop: cards along the root fan */}
        <div className="relative w-full md:h-full max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-6 content-center md:block">
          {rootServices.map((service, idx) => {
            const pos = rootCardPos[idx];
            const isLeft = pos.side === "left";
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`pc-card group md:absolute flex items-center gap-4 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{
                  top: pos.top,
                  ...(isLeft ? { left: pos.inset } : { right: pos.inset }),
                }}
              >
                <div className="w-14 h-14 rounded-full bg-brand-deep border border-brand-teal/50 shadow-[0_0_22px_rgba(0,152,139,0.35)] flex items-center justify-center relative z-10 flex-shrink-0 group-hover:shadow-[0_0_36px_rgba(0,255,204,0.5)] group-hover:border-brand-glow/70 transition-all duration-300">
                  <Icon className="w-6 h-6 text-brand-mint" />
                </div>
                <div className={`flex flex-col max-w-[220px] ${isLeft ? "md:text-left" : "md:text-right"}`}>
                  <h4 className="text-base md:text-lg font-semibold text-white mb-0.5 group-hover:text-brand-glow transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pc-caption mt-10 md:mt-0 md:absolute md:bottom-[5%] w-full text-center px-6">
          <p className="text-sm font-mono text-brand-mint/70 tracking-widest uppercase">
            One core · Infinite branches
          </p>
        </div>
      </div>
    </section>
  );
}
