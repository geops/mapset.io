"use client";

import React from "react";
import { useI18n } from "./I18n";
import Link from "next/link";
import MadeByGeops from "./MadeByGeops";
import { usePathname } from "next/navigation";
import ExternalLinkIcon from "./ExternalLinkIcon";

const Arrow = () => {
  return (
    <div className="absolute bg-white w-[39px] h-[39px] top-[-60px] left-0 right-0 m-auto rotate-45"></div>
  );
};

const Footer = ({ className = "", onlyPrivacyLink = false }) => {
  const { t, language } = useI18n();
  const pathname = usePathname();
  const isImprintPage = /imprint/.test(pathname);
  return (
    <footer
      className={`px-4 flex justify-center bg-blue-dark text-white ${className} overflow-hidden`}
    >
      <div className="container lg flex items-center justify-between py-8">
        <div className="flex items-center gap-4 text-s text-normal font-normal ">
          <Link
            hidden={onlyPrivacyLink}
            href={"/" + language}
            className={"relative " + (!isImprintPage ? "font-bold" : "")}
          >
            {t("generic.product")}
            {!isImprintPage && <Arrow />}
          </Link>
          <Link
            hidden={onlyPrivacyLink}
            href={"/" + language + "/imprint"}
            className={"relative " + (isImprintPage ? "font-bold" : "")}
          >
            {t("generic.Imprint")}
            {isImprintPage && <Arrow />}
          </Link>
          <Link
            href={`https://geops.com/` + language + `/privacy`}
            className={"flex gap-1 items-center"}
          >
            {t("generic.privacyPolicy")}
            <ExternalLinkIcon />
          </Link>
        </div>
        <div>
          <MadeByGeops />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
