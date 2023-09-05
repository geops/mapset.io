"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "./I18n";
import DomainIcon from "./images/DomainIcon";
import EllipseSeparator from "./ui/EllipseSeparator";

const translationIds: {
  [index: string]: string;
} = {
  io: "international",
  ch: "swiss",
};

const domain = process.env.NEXT_PUBLIC_DOMAIN;

function DomainLinks({
  className = "",
  linkClassName = "hover:text-slate-700 hover:font-bold",
  selectedClassName = "text-slate-700 font-bold",
}) {
  const { t } = useI18n();
  const pathanme = usePathname();
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <DomainIcon />
      {["io", "ch"].map((domainn: string, index: number) => {
        return (
          <React.Fragment key={domainn}>
            <Link
              key={domainn}
              href={`https://mapset.${domainn}${pathanme}`}
              className={`${linkClassName} ${
                domain === domainn ? selectedClassName : ""
              }`}
            >
              {t(translationIds[domainn])}
            </Link>
            {index === 0 && <EllipseSeparator className="!mx-0" />}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default DomainLinks;
