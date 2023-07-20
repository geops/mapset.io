export const i18n = {
  domains: ["io", "ch"],
  defaultLocales: { io: "en", ch: "de" },
  locales: ["de", "fr", "en"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
