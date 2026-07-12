"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * Programmatic SVG recreation of hero_bg.jpg.
 * Pulse paths trace from roots → lotus → along vines → into panel borders → through network.
 * Every pulse follows existing structural elements, nothing floats disconnected.
 */
export default function HeroSVGBackground() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pulsePathsRef = useRef<SVGPathElement[]>([]);

  const addPulsePath = (el: SVGPathElement | null) => {
    if (el && !pulsePathsRef.current.includes(el)) {
      pulsePathsRef.current.push(el);
    }
  };

  useGSAP(
    () => {
      pulsePathsRef.current.forEach((path) => {
        if (!path) return;
        const length = path.getTotalLength();
        const pulseSize = 60 + Math.random() * 100;

        gsap.set(path, {
          strokeDasharray: `${pulseSize} ${length + pulseSize}`,
          strokeDashoffset: length + pulseSize,
        });

        gsap.to(path, {
          strokeDashoffset: -(pulseSize),
          duration: 3 + Math.random() * 5,
          ease: "none",
          repeat: -1,
          delay: Math.random() * 4,
        });
      });

      // Lotus breathes — the living heart of the composition
      gsap.to(".lotus-glow", {
        scale: 1.25,
        opacity: "+=0.1",
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "center center",
        stagger: 0.4,
      });

      // Ambient particles twinkle at their own rhythm
      gsap.utils.toArray<SVGCircleElement>(".twinkle").forEach((dot) => {
        gsap.to(dot, {
          opacity: gsap.utils.random(0.05, 0.5),
          duration: gsap.utils.random(1.5, 3.5),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: gsap.utils.random(0, 3),
        });
      });

      // Wave ribbons drift slowly, like currents
      gsap.utils.toArray<SVGPathElement>(".wave-ribbon").forEach((ribbon, i) => {
        gsap.to(ribbon, {
          x: i % 2 === 0 ? 30 : -30,
          y: i % 2 === 0 ? -12 : 12,
          duration: gsap.utils.random(8, 12),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: svgRef }
  );

  return (
    <svg
      ref={svgRef}
      className="w-full h-full"
      viewBox="0 0 1440 810"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="glow-t" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="glow-t-strong" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="12" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="glow-p" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="glow-w" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="lotus-center" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00ffcc" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00988b" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ===== BACKGROUND ===== */}
      <rect width="1440" height="810" fill="#060210" />
      <ellipse cx="250" cy="450" rx="400" ry="350" fill="#00988b" opacity="0.03" />
      <ellipse cx="1100" cy="300" rx="350" ry="250" fill="#2d1838" opacity="0.06" />
      <ellipse cx="720" cy="400" rx="600" ry="300" fill="#0a1628" opacity="0.15" />

      {/* ===== ROOTS (Bottom-left) ===== */}
      <g opacity="0.6">
        {/* Root A: rises to lotus */}
        <path d="M 140 720 C 120 680, 80 650, 60 600 C 40 550, 70 500, 100 480 C 140 455, 190 430, 250 385" stroke="#3a2a4a" strokeWidth="3" fill="none" />
        {/* Root B: rises to lotus */}
        <path d="M 200 750 C 180 720, 160 700, 120 680 C 80 660, 60 620, 80 580 C 110 530, 170 470, 250 385" stroke="#4a3060" strokeWidth="2.5" fill="none" />
        {/* Root C */}
        <path d="M 100 760 C 80 730, 50 710, 30 680 C 10 650, 20 610, 40 580" stroke="#5a3a70" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M 170 740 C 150 700, 130 660, 90 630 C 50 600, 30 560, 50 520" stroke="#4a3060" strokeWidth="2" fill="none" opacity="0.5" />
        <circle cx="60" cy="600" r="2" fill="#9d4edd" opacity="0.6" />
        <circle cx="80" cy="580" r="1.5" fill="#9d4edd" opacity="0.4" />
        <circle cx="50" cy="520" r="1" fill="#9d4edd" opacity="0.5" />
      </g>

      {/* ===== STEMS & VINES (Left side) ===== */}
      <g opacity="0.7">
        <path d="M 160 620 C 170 560, 150 500, 180 440 C 210 380, 190 320, 220 270" stroke="#00988b" strokeWidth="2" fill="none" opacity="0.4" />
        <path d="M 200 580 C 210 520, 230 470, 210 400 C 190 330, 220 280, 250 230" stroke="#00988b" strokeWidth="1.5" fill="none" opacity="0.3" />
        <path d="M 130 600 C 140 540, 120 470, 160 410 C 200 350, 170 290, 200 240" stroke="#00b89c" strokeWidth="1.5" fill="none" opacity="0.3" />
        <path d="M 180 440 C 150 430, 130 410, 140 390 C 150 370, 170 360, 160 340" stroke="#00988b" strokeWidth="1" fill="none" opacity="0.3" />
      </g>

      {/* ===== LEAVES ===== */}
      <g opacity="0.5">
        <path d="M 150 380 Q 130 350, 120 310 Q 140 330, 150 380 Z" fill="#00988b" opacity="0.3" />
        <path d="M 155 375 Q 170 340, 185 310 Q 165 335, 155 375 Z" fill="#00b89c" opacity="0.25" />
        <path d="M 200 320 Q 175 285, 165 250 Q 185 275, 200 320 Z" fill="#00988b" opacity="0.3" />
        <path d="M 205 315 Q 225 280, 240 250 Q 220 280, 205 315 Z" fill="#00d4aa" opacity="0.2" />
        <path d="M 230 270 Q 200 240, 190 200 Q 210 225, 230 270 Z" fill="#00988b" opacity="0.35" />
        <path d="M 120 480 Q 100 460, 95 430 Q 110 450, 120 480 Z" fill="#00988b" opacity="0.2" />
      </g>

      {/* ===== LOTUS FLOWER ===== */}
      <g>
        <path d="M 250 400 Q 230 360, 260 320 Q 270 360, 250 400 Z" fill="#00988b" opacity="0.3" />
        <path d="M 250 400 Q 290 370, 310 330 Q 290 380, 250 400 Z" fill="#00b89c" opacity="0.25" />
        <path d="M 250 400 Q 210 380, 190 340 Q 220 370, 250 400 Z" fill="#00d4aa" opacity="0.2" />
        <path d="M 250 400 Q 270 350, 300 310 Q 280 360, 250 400 Z" fill="#00988b" opacity="0.2" />
        <path d="M 250 400 Q 220 345, 240 300 Q 250 345, 250 400 Z" fill="#00b89c" opacity="0.3" />
        <path d="M 250 395 Q 240 370, 255 345 Q 260 370, 250 395 Z" fill="#00d4aa" opacity="0.4" />
        <path d="M 250 395 Q 265 375, 275 350 Q 265 380, 250 395 Z" fill="#00ffcc" opacity="0.3" />
        <circle className="lotus-glow" cx="250" cy="385" r="15" fill="url(#lotus-center)" filter="url(#glow-t-strong)" />
        <circle className="lotus-glow" cx="250" cy="385" r="5" fill="#00ffcc" opacity="0.9" filter="url(#glow-t)" />
      </g>

      {/* ===== STRUCTURAL VINES: Lotus → Panels (Static dim base) ===== */}
      <g fill="none" strokeLinecap="round">
        {/* Vine A: Lotus → AGENTS FLOW panel (top-left corner) → right side of panel → NEURAL NETWORKS panel → AGENTIC AI panel */}
        <path d="M 250 385 C 320 370, 380 340, 480 300 C 480 300, 480 260, 480 260 L 610 260 L 610 340 L 480 340 L 480 300"
              stroke="#00988b" strokeWidth="1.5" opacity="0.12" />
        {/* Vine connecting AGENTS FLOW → NEURAL NETWORKS */}
        <path d="M 610 260 C 620 240, 560 220, 570 195 L 730 195 L 730 295 L 570 295 L 570 195"
              stroke="#00988b" strokeWidth="1.5" opacity="0.1" />
        {/* Vine connecting NEURAL NETWORKS → AGENTIC AI */}
        <path d="M 730 195 C 735 180, 715 170, 720 160 L 860 160 L 860 250 L 720 250 L 720 160"
              stroke="#9d4edd" strokeWidth="1" opacity="0.1" />

        {/* Vine B: Lotus → DATA panel */}
        <path d="M 250 400 C 370 410, 500 420, 620 400 C 700 385, 750 370, 790 360 L 890 360 L 890 430 L 790 430 L 790 360"
              stroke="#00988b" strokeWidth="1.5" opacity="0.1" />

        {/* Vine C: DATA panel → SOFTWARE FACTORY panel */}
        <path d="M 890 395 C 940 390, 1000 400, 1050 390 L 1200 390 L 1200 470 L 1050 470 L 1050 390"
              stroke="#00988b" strokeWidth="1" opacity="0.08" />

        {/* Vine D: Lotus → Bottom bar panel */}
        <path d="M 250 410 C 380 460, 520 490, 650 510 C 720 520, 760 530, 780 530 L 900 530 L 900 570 L 780 570 L 780 530"
              stroke="#00988b" strokeWidth="1" opacity="0.08" />

        {/* Vine E: Lotus → CONFIG panel (lower-left) */}
        <path d="M 250 400 C 290 450, 320 490, 360 520 L 470 520 L 470 580 L 360 580 L 360 520"
              stroke="#ffffff" strokeWidth="0.8" opacity="0.05" />

        {/* Upper wave: Lotus → Geometric network */}
        <path d="M 250 350 C 400 280, 550 230, 700 200 C 850 170, 950 150, 1050 150 L 1100 100 L 1250 130 L 1350 100"
              stroke="#2d1838" strokeWidth="1.5" opacity="0.12" />

        {/* Purple wave (mid) */}
        <path d="M 300 430 C 450 500, 600 480, 680 520 C 810 580, 900 510, 1050 540"
              stroke="#5a3a70" strokeWidth="1" opacity="0.1" />
      </g>

      {/* ===== ANIMATED PULSE PATHS ===== */}
      {/* Each pulse traces an existing structural element: vine → panel border → onward */}
      <g fill="none" strokeLinecap="round">

        {/* Pulse 1: Root A → Lotus → vine → AGENTS FLOW panel border */}
        <path ref={addPulsePath}
              d="M 140 720 C 120 680, 80 650, 60 600 C 40 550, 70 500, 100 480 C 140 455, 190 430, 250 385 C 320 370, 380 340, 480 300 L 480 260 L 610 260 L 610 340 L 480 340 L 480 300"
              stroke="#00ffcc" strokeWidth="2.5" filter="url(#glow-t)" />

        {/* Pulse 2: Root B → Lotus → vine → DATA panel border */}
        <path ref={addPulsePath}
              d="M 200 750 C 180 720, 160 700, 120 680 C 80 660, 60 620, 80 580 C 110 530, 170 470, 250 385 C 370 400, 500 410, 620 400 C 700 385, 750 370, 790 360 L 890 360 L 890 430 L 790 430 L 790 360"
              stroke="#9d4edd" strokeWidth="2" filter="url(#glow-p)" />

        {/* Pulse 3: AGENTS FLOW panel → NEURAL NETWORKS panel border */}
        <path ref={addPulsePath}
              d="M 610 260 C 620 240, 560 220, 570 195 L 730 195 L 730 295 L 570 295 L 570 195"
              stroke="#00d4aa" strokeWidth="2" filter="url(#glow-t)" />

        {/* Pulse 4: NEURAL NETWORKS → AGENTIC AI panel border */}
        <path ref={addPulsePath}
              d="M 730 195 C 735 180, 715 170, 720 160 L 860 160 L 860 250 L 720 250 L 720 160"
              stroke="#c77dff" strokeWidth="1.5" filter="url(#glow-p)" />

        {/* Pulse 5: DATA panel → SOFTWARE FACTORY panel border */}
        <path ref={addPulsePath}
              d="M 890 395 C 940 390, 1000 400, 1050 390 L 1200 390 L 1200 470 L 1050 470 L 1050 390"
              stroke="#00ffcc" strokeWidth="1.5" filter="url(#glow-t)" />

        {/* Pulse 6: Lotus → bottom bar panel border */}
        <path ref={addPulsePath}
              d="M 250 410 C 380 460, 520 490, 650 510 C 720 520, 760 530, 780 530 L 900 530 L 900 570 L 780 570 L 780 530"
              stroke="#00d4aa" strokeWidth="1.5" filter="url(#glow-t)" />

        {/* Pulse 7: Lotus → CONFIG panel border */}
        <path ref={addPulsePath}
              d="M 250 400 C 290 450, 320 490, 360 520 L 470 520 L 470 580 L 360 580 L 360 520"
              stroke="#ffffff" strokeWidth="1" filter="url(#glow-w)" />

        {/* Pulse 8: Upper wave → Geometric network edges */}
        <path ref={addPulsePath}
              d="M 250 350 C 400 280, 550 230, 700 200 C 850 170, 950 150, 1050 150 L 1100 100 L 1150 160 L 1250 130 L 1180 80 L 1280 60 L 1350 100 L 1300 180 L 1200 210 L 1100 220 L 1050 150"
              stroke="#9d4edd" strokeWidth="1.5" filter="url(#glow-p)" />

        {/* Pulse 9: Purple mid-wave */}
        <path ref={addPulsePath}
              d="M 300 430 C 450 500, 600 480, 680 520 C 810 580, 900 510, 1050 540"
              stroke="#c77dff" strokeWidth="1.5" filter="url(#glow-p)" />

        {/* Pulse 10: Stem pulse (left side) */}
        <path ref={addPulsePath}
              d="M 160 620 C 170 560, 150 500, 180 440 C 210 380, 190 320, 220 270"
              stroke="#00ffcc" strokeWidth="1" filter="url(#glow-t)" />
      </g>

      {/* ===== DATA NODES (at vine-panel junctions) ===== */}
      <g>
        {/* Nodes sit at the exact point where vines touch panels */}
        <circle cx="250" cy="385" r="6" fill="#00ffcc" opacity="0.9" filter="url(#glow-t-strong)" /> {/* Lotus center */}
        <circle cx="480" cy="300" r="4" fill="#00ffcc" opacity="0.7" filter="url(#glow-t)" /> {/* AGENTS FLOW entry */}
        <circle cx="570" cy="195" r="3" fill="#00d4aa" opacity="0.6" filter="url(#glow-t)" /> {/* NEURAL NETWORKS entry */}
        <circle cx="720" cy="160" r="3" fill="#9d4edd" opacity="0.6" filter="url(#glow-p)" /> {/* AGENTIC AI entry */}
        <circle cx="790" cy="360" r="4" fill="#00988b" opacity="0.7" filter="url(#glow-t)" /> {/* DATA panel entry */}
        <circle cx="1050" cy="390" r="3" fill="#00d4aa" opacity="0.6" filter="url(#glow-t)" /> {/* SOFTWARE FACTORY entry */}
        <circle cx="780" cy="530" r="3" fill="#00988b" opacity="0.5" filter="url(#glow-w)" /> {/* Bottom bar entry */}
        <circle cx="360" cy="520" r="3" fill="#ffffff" opacity="0.4" filter="url(#glow-w)" /> {/* CONFIG entry */}
        {/* Network vertices */}
        <circle cx="1050" cy="150" r="3" fill="#00988b" opacity="0.5" filter="url(#glow-w)" />
        <circle cx="1100" cy="100" r="4" fill="#00ffcc" opacity="0.6" filter="url(#glow-t)" />
        <circle cx="1250" cy="130" r="5" fill="#00ffcc" opacity="0.7" filter="url(#glow-t)" />
        <circle cx="1180" cy="80" r="3" fill="#9d4edd" opacity="0.5" filter="url(#glow-p)" />
        <circle cx="1350" cy="100" r="4" fill="#9d4edd" opacity="0.5" filter="url(#glow-p)" />
        {/* Scattered ambient particles */}
        <circle className="twinkle" cx="380" cy="410" r="1.5" fill="#00ffcc" opacity="0.3" />
        <circle className="twinkle" cx="560" cy="270" r="1" fill="#00988b" opacity="0.2" />
        <circle className="twinkle" cx="670" cy="320" r="1" fill="#9d4edd" opacity="0.2" />
        <circle className="twinkle" cx="900" cy="300" r="1" fill="#00d4aa" opacity="0.2" />
        <circle className="twinkle" cx="480" cy="550" r="1" fill="#00ffcc" opacity="0.2" />
        <circle className="twinkle" cx="750" cy="280" r="1" fill="#ffffff" opacity="0.15" />
        <circle className="twinkle" cx="1020" cy="310" r="1" fill="#9d4edd" opacity="0.15" />
        <circle className="twinkle" cx="330" cy="200" r="1.5" fill="#00ffcc" opacity="0.25" />
        <circle className="twinkle" cx="850" cy="120" r="1" fill="#00d4aa" opacity="0.2" />
        <circle className="twinkle" cx="1150" cy="420" r="1.5" fill="#9d4edd" opacity="0.2" />
        <circle className="twinkle" cx="620" cy="620" r="1" fill="#00ffcc" opacity="0.2" />
        <circle className="twinkle" cx="1300" cy="500" r="1" fill="#ffffff" opacity="0.15" />
      </g>

      {/* ===== FLOATING UI PANELS ===== */}
      <g>
        {/* Panel: AGENTS FLOW */}
        <g opacity="0.3">
          <rect x="480" y="260" width="130" height="80" rx="4" fill="#0a0f1a" stroke="#00988b" strokeWidth="0.5" opacity="0.6" />
          <text x="495" y="280" fontSize="7" fill="#ffffff" opacity="0.5" fontFamily="monospace">AGENTS FLOW</text>
          <rect x="490" y="290" width="45" height="3" rx="1" fill="#00988b" opacity="0.3" />
          <rect x="490" y="297" width="60" height="3" rx="1" fill="#ffffff" opacity="0.15" />
          <rect x="490" y="304" width="30" height="3" rx="1" fill="#00988b" opacity="0.2" />
          <circle cx="560" cy="310" r="8" fill="none" stroke="#00988b" strokeWidth="0.5" opacity="0.5" />
        </g>

        {/* Panel: NEURAL NETWORKS */}
        <g opacity="0.35">
          <rect x="570" y="195" width="160" height="100" rx="4" fill="#0a0f1a" stroke="#00988b" strokeWidth="0.5" opacity="0.6" />
          <text x="585" y="215" fontSize="7" fill="#00988b" opacity="0.8" fontFamily="monospace">NEURAL NETWORKS</text>
          <rect x="580" y="225" width="60" height="4" rx="1" fill="#00988b" opacity="0.3" />
          <rect x="580" y="233" width="40" height="4" rx="1" fill="#00988b" opacity="0.2" />
          <circle cx="660" cy="255" r="15" fill="none" stroke="#00988b" strokeWidth="0.5" opacity="0.4" />
          <path d="M 650 260 L 655 250 L 660 255 L 665 245 L 670 250" stroke="#00988b" strokeWidth="1" fill="none" opacity="0.5" />
        </g>

        {/* Panel: AGENTIC AI */}
        <g opacity="0.3">
          <rect x="720" y="160" width="140" height="90" rx="4" fill="#0a0f1a" stroke="#9d4edd" strokeWidth="0.5" opacity="0.5" />
          <text x="735" y="180" fontSize="7" fill="#9d4edd" opacity="0.7" fontFamily="monospace">AGENTIC AI</text>
          <rect x="730" y="190" width="50" height="3" rx="1" fill="#9d4edd" opacity="0.3" />
          <rect x="730" y="197" width="35" height="3" rx="1" fill="#9d4edd" opacity="0.2" />
          <circle cx="810" cy="210" r="18" fill="none" stroke="#9d4edd" strokeWidth="0.5" opacity="0.3" />
        </g>

        {/* Panel: DATA */}
        <g opacity="0.25">
          <rect x="790" y="360" width="100" height="70" rx="4" fill="#0a0f1a" stroke="#ffffff" strokeWidth="0.3" opacity="0.4" />
          <text x="805" y="378" fontSize="6" fill="#ffffff" opacity="0.4" fontFamily="monospace">DATA</text>
          <rect x="800" y="385" width="40" height="3" rx="1" fill="#00988b" opacity="0.2" />
          <rect x="800" y="392" width="55" height="3" rx="1" fill="#ffffff" opacity="0.1" />
        </g>

        {/* Panel: SOFTWARE FACTORY */}
        <g opacity="0.25">
          <rect x="1050" y="390" width="150" height="80" rx="4" fill="#0a0f1a" stroke="#00988b" strokeWidth="0.3" opacity="0.4" />
          <text x="1065" y="408" fontSize="7" fill="#00988b" opacity="0.5" fontFamily="monospace">SOFTWARE FACTORY</text>
          <rect x="1060" y="418" width="50" height="3" rx="1" fill="#ffffff" opacity="0.15" />
          <rect x="1060" y="425" width="35" height="3" rx="1" fill="#00988b" opacity="0.2" />
        </g>

        {/* Panel: CONFIG */}
        <g opacity="0.2">
          <rect x="360" y="520" width="110" height="60" rx="3" fill="#0a0f1a" stroke="#ffffff" strokeWidth="0.3" opacity="0.4" />
          <text x="375" y="538" fontSize="6" fill="#ffffff" opacity="0.4" fontFamily="monospace">CONFIG</text>
          <rect x="370" y="545" width="80" height="2" rx="1" fill="#00988b" opacity="0.3" />
          <rect x="370" y="550" width="60" height="2" rx="1" fill="#ffffff" opacity="0.15" />
        </g>

        {/* Panel: Bottom bar */}
        <g opacity="0.2">
          <rect x="780" y="530" width="120" height="40" rx="3" fill="#0a0f1a" stroke="#00988b" strokeWidth="0.3" opacity="0.3" />
          <circle cx="810" cy="550" r="8" fill="none" stroke="#00988b" strokeWidth="0.5" opacity="0.4" />
          <rect x="830" y="545" width="50" height="3" rx="1" fill="#ffffff" opacity="0.15" />
        </g>
      </g>

      {/* ===== GEOMETRIC NETWORK (Top-right) ===== */}
      <g stroke="#00988b" fill="none" opacity="0.25" strokeWidth="0.5">
        <path d="M 1050 150 L 1100 100 L 1150 160 Z" />
        <path d="M 1100 100 L 1180 80 L 1150 160 Z" />
        <path d="M 1150 160 L 1180 80 L 1250 130 Z" />
        <path d="M 1180 80 L 1280 60 L 1250 130 Z" />
        <path d="M 1250 130 L 1280 60 L 1350 100 Z" />
        <path d="M 1050 150 L 1150 160 L 1100 220 Z" />
        <path d="M 1150 160 L 1250 130 L 1200 210 Z" />
        <line x1="1100" y1="220" x2="1200" y2="210" />
        <line x1="1200" y1="210" x2="1300" y2="180" />
      </g>

      {/* ===== WAVE RIBBONS ===== */}
      <g fill="none" opacity="0.12">
        <path className="wave-ribbon" d="M 300 350 C 400 300, 500 330, 600 280 C 700 230, 800 260, 900 220 C 1000 180, 1100 200, 1200 180"
              stroke="#00988b" strokeWidth="40" opacity="0.04" />
        <path className="wave-ribbon" d="M 350 450 C 450 500, 550 470, 650 520 C 750 570, 850 530, 950 560"
              stroke="#2d1838" strokeWidth="30" opacity="0.06" />
      </g>

      {/* ===== DIAGONAL LIGHT BEAMS ===== */}
      <g opacity="0.04" stroke="#ffffff" strokeWidth="1">
        <line x1="350" y1="0" x2="800" y2="810" />
        <line x1="900" y1="0" x2="1350" y2="810" />
      </g>

      {/* ===== BOTTOM TEXT LABELS ===== */}
      <g opacity="0.12">
        <text x="500" y="740" fontSize="8" fill="#ffffff" fontFamily="monospace" letterSpacing="3">DESIGN</text>
        <text x="620" y="740" fontSize="8" fill="#ffffff" fontFamily="monospace" letterSpacing="3">SYSTEMS</text>
        <text x="750" y="740" fontSize="8" fill="#ffffff" fontFamily="monospace" letterSpacing="3">DATA</text>
        <text x="850" y="740" fontSize="8" fill="#ffffff" fontFamily="monospace" letterSpacing="3">EVOLUTION</text>
      </g>
      <text x="1150" y="620" fontSize="10" fill="#ffffff" opacity="0.1" fontFamily="monospace" letterSpacing="4">SOFTWARE FACTORY</text>

      {/* ===== SMALL UI ELEMENTS scattered ===== */}
      <g opacity="0.2">
        <rect x="340" y="460" width="12" height="12" rx="2" fill="none" stroke="#00988b" strokeWidth="0.5" />
        <rect x="650" y="480" width="14" height="14" rx="2" fill="none" stroke="#00988b" strokeWidth="0.5" />
        <circle cx="700" cy="490" r="6" fill="none" stroke="#ffffff" strokeWidth="0.3" />
        <rect x="1100" y="500" width="40" height="3" rx="1" fill="#00988b" opacity="0.3" />
        <rect x="1100" y="507" width="25" height="3" rx="1" fill="#ffffff" opacity="0.1" />
      </g>
    </svg>
  );
}
