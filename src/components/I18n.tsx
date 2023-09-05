import { createContext, useContext, useState, useRef, useEffect } from "react";
import i18n from "../lib/i18n";
import { Locale } from "../../i18n-config";
const I18nContext = createContext({});

export type I18nHook = {
  t: (id: string) => string;
  language: Locale;
  locale: (locale: Locale) => undefined;
};

export function useI18n(): I18nHook {
  return useContext(I18nContext) as I18nHook;
}

export default function I18n({
  children,
  language,
}: {
  children: React.ReactNode;
  language: Locale;
}) {
  const activeLanguageRef = useRef(language);
  const [, setTick] = useState(0);
  const firstRender = useRef(true);

  const i18nWrapper = {
    language: activeLanguageRef.current,
    // @ts-ignore
    t: (...args: unknown[]) => i18n.t(...args) || args,
    locale: (newLanguage: Locale) => {
      i18n.locale(newLanguage);
      activeLanguageRef.current = newLanguage;
      // force rerender to update view
      setTick((tick) => tick + 1);
    },
  };

  // for initial SSR render
  if (firstRender.current === true) {
    firstRender.current = false;
    i18nWrapper.locale(language);
  }

  // when language is updated
  useEffect(() => {
    i18nWrapper.locale(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <I18nContext.Provider value={i18nWrapper}>{children}</I18nContext.Provider>
  );
}
