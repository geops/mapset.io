"use client";

import React from "react";
import MadeByGeops from "./MadeByGeops";
import { usePathname } from "next/navigation";
import ProductLink from "./ProductLink";
import ImprintLink from "./ImprintLink";
import PrivacyLink from "./PrivacyLink";

const Arrow = ({ className = "" }) => {
  return (
    <div
      className={`absolute bg-white w-[39px] h-[39px] top-[-65px] left-0 right-0 m-auto rotate-45 ${className}`}
    ></div>
  );
};

const Footer = ({ className = "", onlyPrivacyLink = false }) => {
  const pathname = usePathname();
  const isGuidePage = /guide/.test(pathname);
  const isImprintPage = /imprint/.test(pathname);
  const isProductPage = !isGuidePage && !isImprintPage;
  return (
    <footer
      className={`px-4 flex justify-center bg-blue-700 text-white ${className} overflow-hidden `}
    >
      <div className="container lg flex flex-col-reverse items-end md:flex-row md:items-center justify-between py-8">
        <div className="flex  flex-col items-start w-full md:flex-row md:items-center md:w-auto gap-4 text-s text-normal font-normal ">
          {!onlyPrivacyLink && (
            <ProductLink className="flex justify-center hover:font-bold w-[65px]">
              {isProductPage && <Arrow className="hidden md:block" />}
            </ProductLink>
          )}
          {!onlyPrivacyLink && (
            <ImprintLink className="flex justify-center hover:font-bold w-[160px]">
              {isImprintPage && <Arrow className="hidden md:block" />}
            </ImprintLink>
          )}
          <PrivacyLink className="flex justify-center hover:font-bold" />
        </div>
        <div>
          <MadeByGeops />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
