import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { resolveLocale } from "@/lib/i18n/locale";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://imbas.solutions";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Imbas Solutions | AI Agent Integration & Custom Software",
  description:
    "Founder-led software factory building AI agents, automation, mobile apps, and legacy modernization for US and Canadian teams. Projects from $10k to $50k.",
  keywords: [
    "AI agent development",
    "AI integration for small business",
    "custom software development",
    "legacy system modernization",
    "mobile app development agency",
    "nearshore software development",
  ],
  openGraph: {
    title: "Imbas Solutions | AI Agent Integration & Custom Software",
    description:
      "Founder-led software factory building AI agents, automation, mobile apps, and legacy modernization for US and Canadian teams.",
    url: SITE_URL,
    siteName: "Imbas Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imbas Solutions | AI Agent Integration & Custom Software",
    description:
      "Founder-led software factory building AI agents, automation, mobile apps, and legacy modernization for US and Canadian teams.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Imbas Solutions",
  url: SITE_URL,
  email: "hello@imbas.solutions",
  description:
    "Founder-led software factory building AI agents, automation, mobile apps, cloud infrastructure, and legacy modernization for US and Canadian teams.",
  areaServed: ["US", "CA"],
  priceRange: "$10,000–$50,000",
  serviceType: [
    "AI agent development",
    "AI integration",
    "Mobile app development",
    "Cloud infrastructure",
    "Legacy system modernization",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await resolveLocale();

  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-brand-dark text-brand-light">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LocaleProvider locale={locale}>
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer locale={locale} />
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
