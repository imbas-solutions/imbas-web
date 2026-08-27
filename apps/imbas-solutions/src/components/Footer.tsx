import Link from "next/link";
import Image from "next/image";
import { getDictionary, type Locale } from "@/lib/i18n/dictionaries";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <footer className="w-full bg-surface-sunken border-t border-line-soft py-16 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="relative block h-8 w-32 opacity-80 hover:opacity-100 transition-opacity" data-magnetic>
            <Image
              src="/imbas-full-logo.png"
              alt="Imbas Solutions Logo"
              fill
              className="object-contain object-left"
            />
          </Link>
          <p className="text-ink-subtle text-sm max-w-xs text-center md:text-left">
            {t.footer.tagline}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-ink-muted">
          <a href={`mailto:${t.footer.email}`} className="hover:text-accent transition-colors" data-magnetic>
            {t.footer.email}
          </a>
          <Link href="/ai-agents.md" className="hover:text-accent transition-colors" data-magnetic>{t.footer.agentEndpoint}</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 text-center text-xs text-ink-faint">
        &copy; {new Date().getFullYear()} Imbas Solutions. {t.footer.rights}
      </div>
    </footer>
  );
}
