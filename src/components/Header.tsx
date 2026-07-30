"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brand-dark/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative block h-8 w-40" data-magnetic>
          <Image
            src="/imbas-full-logo.png"
            alt="Imbas Solutions Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#philosophy" className="text-gray-300 hover:text-white transition-colors" data-magnetic>Philosophy</Link>
          <Link href="#capabilities" className="text-gray-300 hover:text-white transition-colors" data-magnetic>Capabilities</Link>
          <Link href="#estimate" className="text-gray-300 hover:text-white transition-colors" data-magnetic>Estimate</Link>
          <Link href="#contact" className="px-5 py-2.5 bg-brand-teal/20 text-brand-teal border border-brand-teal/30 hover:bg-brand-teal hover:text-white transition-colors rounded-full" data-magnetic>
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
