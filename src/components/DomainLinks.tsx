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

const domain = process.env.NEXT_PUBLIC_DOMAIN;

function DomainLinks({
  className = "",
  linkClassName = "hover:text-slate-700",
  selectedClassName = "text-slate-700 font-bold",
}) {
  const { t } = useI18n();
  const pathanme = usePathname();
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <DomainIcon />
      {["io", "ch"].map((domainn: string) => {
        return (
          <Link
            key={domainn}
            href={`https://mapset.${domainn}${pathanme}`}
            className={`${linkClassName} ${
              domain === domainn ? selectedClassName : ""
            }`}
          >
            {t(translationIds[domainn])}
          </Link>
        );
      })}
    </div>
  );
}

export default DomainLinks;
