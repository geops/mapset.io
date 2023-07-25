"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "./I18n";
import DomainIcon from "./images/DomainIcon";

const translationIds: {
  [index: string]: string;
} = {
  io: "generic.navbar.international",
  ch: "generic.navbar.swiss",
};

function DomainLinks({ className = "" }) {
  const { t } = useI18n();
  const pathanme = usePathname();
  return (
    <div className={`flex items-center gap-2 ${className}`}>
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
