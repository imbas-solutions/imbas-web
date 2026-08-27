"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { THEME_COOKIE, THEME_MAX_AGE, type Theme } from "./theme";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
});

/**
 * Holds the theme resolved on the server. Switching writes the attribute on
 * <html> directly — the CSS tokens flip immediately, with no round trip — and
 * persists the choice so the next hard navigation renders it server-side.
 */
export function ThemeProvider({ theme: initial, children }: { theme: Theme; children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(initial);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    document.documentElement.dataset.theme = next;
    document.cookie = `${THEME_COOKIE}=${next};path=/;max-age=${THEME_MAX_AGE};samesite=lax`;
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "night" : "light");
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/** Current theme + setters for client components */
export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
