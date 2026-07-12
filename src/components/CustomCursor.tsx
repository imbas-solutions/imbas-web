"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useGSAP(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // We use GSAP quickTo for highly performant tracking
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power2.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power2.out" });

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseenter", onMouseEnter);
    document.body.addEventListener("mouseleave", onMouseLeave);

    // Add magnetic effect for links and buttons
    const handleInteractiveEnter = () => {
      gsap.to(cursor, {
        scale: 2.5,
        backgroundColor: "rgba(0, 152, 139, 0.1)", // Teal with opacity
        borderColor: "rgba(0, 152, 139, 0.8)",
        duration: 0.3,
      });
    };

    const handleInteractiveLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(255, 255, 255, 0.5)",
        duration: 0.3,
      });
    };

    const interactives = document.querySelectorAll("a, button, input, textarea, [data-magnetic]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleInteractiveEnter);
      el.addEventListener("mouseleave", handleInteractiveLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleInteractiveEnter);
        el.removeEventListener("mouseleave", handleInteractiveLeave);
      });
    };
  }, { scope: cursorRef }); // useGSAP handles cleanup of GSAP animations automatically

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-6 h-6 rounded-full border border-white/50 pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} hidden md:block`}
    />
  );
}
