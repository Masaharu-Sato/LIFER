"use client";

import { useState, useEffect, useCallback } from "react";
import { getLocale, setLocale as setLocaleRaw, t as tRaw, type Locale } from "@/lib/i18n";

const LOCALE_CHANGE_EVENT = "lifer-locale-change";

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>(getLocale);

  useEffect(() => {
    const handler = () => setLocaleState(getLocale());
    window.addEventListener(LOCALE_CHANGE_EVENT, handler);
    const storageHandler = (e: StorageEvent) => {
      if (e.key === "lifer-locale") handler();
    };
    window.addEventListener("storage", storageHandler);
    return () => {
      window.removeEventListener(LOCALE_CHANGE_EVENT, handler);
      window.removeEventListener("storage", storageHandler);
    };
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleRaw(l);
    setLocaleState(l);
    window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
    document.documentElement.lang = l === "ko" ? "ko" : "ja";
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "ko" ? "ko" : "ja";
  }, [locale]);

  const t = useCallback(
    (key: string, params?: Record<string, string | number>) => tRaw(key, locale, params),
    [locale]
  );

  return { locale, setLocale, t };
}
