"use client";

import { createContext, useContext, type ReactNode } from "react";
import { getDictionary, type Dictionary, type Locale } from "./dictionaries";

interface LocaleContextValue {
  locale: Locale;
  dict: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  dict: getDictionary("en"),
});

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <LocaleContext.Provider value={{ locale, dict: getDictionary(locale) }}>
      {children}
    </LocaleContext.Provider>
  );
}

/** Current locale + dictionary for client components */
export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext);
}

/** Shorthand: just the dictionary */
export function useDict(): Dictionary {
  return useContext(LocaleContext).dict;
}
