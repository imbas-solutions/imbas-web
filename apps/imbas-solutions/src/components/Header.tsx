"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDict } from "@/lib/i18n/LocaleProvider";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const t = useDict();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-surface-raised/80 backdrop-blur-md border-b border-line py-4' : 'bg-transparent py-6'}`}>
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

        <nav className="flex items-center gap-4 md:gap-8 text-sm font-medium">
          <Link href="#philosophy" className="hidden md:inline text-ink-muted hover:text-ink transition-colors" data-magnetic>{t.header.philosophy}</Link>
          <Link href="#capabilities" className="hidden md:inline text-ink-muted hover:text-ink transition-colors" data-magnetic>{t.header.capabilities}</Link>
          <Link href="#estimate" className="hidden md:inline text-ink-muted hover:text-ink transition-colors" data-magnetic>{t.header.estimate}</Link>
          <Link href="#contact" className="hidden md:inline-block px-5 py-2.5 bg-accent-soft text-accent border border-accent/30 hover:bg-accent hover:text-on-accent transition-colors rounded-full" data-magnetic>
            {t.header.initProject}
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
