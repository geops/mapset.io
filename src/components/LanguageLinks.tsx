"use client";

import Link from "next/link";
import { i18n, Locale } from "../../i18n-config";
import { usePathname } from "next/navigation";
import LanguageIcon from "./images/LanguageIcon";
import { useI18n } from "./I18n";

function LanguageLinks({ className = "" }) {
  const { language } = useI18n() as { language: Locale };
  const pathname = usePathname();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LanguageIcon />
      {i18n.locales.map((locale: Locale) => {
        const className = locale === language ? "font-bold" : undefined;
        return (
          <Link
            key={locale}
            href={`${pathname.replace(language, locale)}`}
            className={className}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}

export default LanguageLinks;
