"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTheme } from "@/lib/theme/ThemeProvider";
import NightScene from "./hero-bg/NightScene";
import LightScene from "./hero-bg/LightScene";

/**
 * Animated hero background — two compositions, one motion language.
 *
 * Both scenes are always in the DOM and CSS alone decides which is visible
 * (`:root[data-theme]` → the `.hero-scene` wrappers below). The theme is
 * resolved server-side from a cookie and stamped on <html> before first paint,
 * so the correct scene is already showing in the very first frame — there is no
 * client-only branch to hydrate into, and therefore no flash.
 *
 * The inactive scene is hidden with `opacity: 0; visibility: hidden` rather than
 * `display: none` on purpose: `getTotalLength()` needs a laid-out path, and a
 * display-none subtree has no layout box. Hiding this way also lets the switch
 * cross-fade.
 *
 * GSAP only ever animates the *active* scene — `useTheme()` picks it, and
 * `revertOnUpdate` tears the old timeline down on a theme change. Both scenes
 * expose the same hooks, so this driver never needs to know which one it got:
 *   `[data-pulse]`   a pulse unit — either a single path (night) or a group of
 *                    paths sharing one `d` (light's halo + core pair)
 *   `.lotus-glow`    the breathing heart
 *   `.twinkle`       ambient particles / stipple
 *   `.wave-ribbon`   drifting currents
 */
export default function HeroSVGBackground() {
  const { theme } = useTheme();
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const svg = svgRef.current;
      if (!svg) return;

      // Only the visible scene gets animated — no ticks wasted on the hidden one.
      const scene = svg.querySelector<SVGGElement>(`[data-scene="${theme}"]`);
      if (!scene) return;

      const pulseUnits = gsap.utils.toArray<SVGElement>("[data-pulse]", scene);
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        pulseUnits.forEach((unit) => {
          // A unit is one path in night, halo + core in light. They carry the
          // same `d`, so one length drives the whole group and the pair travels
          // as a single mark.
          const paths =
            unit instanceof SVGPathElement
              ? [unit]
              : Array.from(unit.querySelectorAll<SVGPathElement>("path"));
          const lead = paths[0];
          if (!lead) return;

          const length = lead.getTotalLength();
          const pulseSize = 60 + Math.random() * 100;

          gsap.set(paths, {
            strokeDasharray: `${pulseSize} ${length + pulseSize}`,
            strokeDashoffset: length + pulseSize,
          });

          gsap.to(paths, {
            strokeDashoffset: -pulseSize,
            duration: 3 + Math.random() * 5,
            ease: "none",
            repeat: -1,
            delay: Math.random() * 4,
          });
        });

        // Lotus breathes — the living heart of the composition
        gsap.to(gsap.utils.toArray<SVGElement>(".lotus-glow", scene), {
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
        gsap.utils.toArray<SVGCircleElement>(".twinkle", scene).forEach((dot) => {
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
        gsap.utils.toArray<SVGPathElement>(".wave-ribbon", scene).forEach((ribbon, i) => {
          gsap.to(ribbon, {
            x: i % 2 === 0 ? 30 : -30,
            y: i % 2 === 0 ? -12 : 12,
            duration: gsap.utils.random(8, 12),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      });

      // Reduced motion: the composition still has to be complete, so the pulse
      // routes stay drawn — just as one more faint structural line, undashed
      // and unmoving, instead of a travelling mark.
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(pulseUnits, { opacity: 0.18 });
      });

      return () => mm.revert();
    },
    { scope: svgRef, dependencies: [theme], revertOnUpdate: true }
  );

  return (
    <>
      <style>{`
        /*
          HeroReveal dims this background to 45%. That figure was tuned for the
          night scene, where emission gives it headroom to spare; ink on paper
          has none, and at 45% the light composition all but vanishes. So light
          runs at full strength. Scoped to the exact element wrapping this svg —
          HeroReveal should really own this, but keeping it here means the two
          scenes stay self-contained.
        */

        /*
          visibility is in the transition on purpose: it interpolates
          discretely to "visible" at either end, so the incoming scene shows at
          once and fades in, while the outgoing one stays painted for the whole
          400ms and fades out. Without it the outgoing scene would snap away.
        */
        svg[data-hero-bg] .hero-scene { transition: opacity 400ms ease, visibility 400ms; }
        svg[data-hero-bg] .hero-scene[data-scene="night"] { opacity: 0; visibility: hidden; }
        :root[data-theme="night"] svg[data-hero-bg] .hero-scene[data-scene="night"] { opacity: 1; visibility: visible; }
        :root[data-theme="night"] svg[data-hero-bg] .hero-scene[data-scene="light"] { opacity: 0; visibility: hidden; }
        @media (prefers-reduced-motion: reduce) {
          svg[data-hero-bg] .hero-scene { transition: none; }
        }
      `}</style>
      <svg
        ref={svgRef}
        data-hero-bg=""
        className="w-full h-full"
        viewBox="0 0 1440 810"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <LightScene />
        <NightScene />
      </svg>
    </>
  );
}
