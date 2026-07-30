import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { resolveLocale } from "@/lib/i18n/locale";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imbas Solutions | Intelligent, Self-Modifying Software",
  description: "Premier software factory specializing in Agentic UX, Multi-Agent Systems, mobile development, and self-adaptive intelligent applications.",
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
        <LocaleProvider locale={locale}>
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer locale={locale} />
        </LocaleProvider>
      </body>
    </html>
  );
}
