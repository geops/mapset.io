"use client";

import Link from "next/link";
import { Locale } from "../../i18n-config";
import { usePathname } from "next/navigation";
import { useI18n } from "./I18n";
import DomainIcon from "./DomainIcon";

const translationIds: {
  [index: string]: string;
} = {
  io: "generic.navbar.international",
  ch: "generic.navbar.swiss",
};

function DomainLinks() {
  // @ts-ignore
  const { t } = useI18n() as { language: Locale };
  const pathanme = usePathname();
  return (
    <div className="flex items-center gap-2 text-normal font-medium">
      <DomainIcon />
      {["io", "ch"].map((domain: string) => {
        const className =
          process.env.NEXT_PUBLIC_DOMAIN === domain ? "font-bold" : undefined;
        return (
          <Link
            key={domain}
            href={`https://mapset.${domain}/${pathanme}`}
            className={className}
          >
            {t(translationIds[domain])}
          </Link>
        );
      })}
    </div>
  );
}

export default DomainLinks;