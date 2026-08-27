"use client";

import { Moon, Sun } from "lucide-react";
import { useDict } from "@/lib/i18n/LocaleProvider";
import { useTheme } from "@/lib/theme/ThemeProvider";

export default function ThemeToggle() {
  const t = useDict();
  const { theme, toggleTheme } = useTheme();
  const isNight = theme === "night";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t.header.themeToggle}
      aria-pressed={isNight}
      title={t.header.themeToggle}
      className="grid place-items-center size-9 rounded-full border border-line text-ink-muted hover:text-accent hover:border-accent/40 transition-colors"
      data-magnetic
    >
      {isNight ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
