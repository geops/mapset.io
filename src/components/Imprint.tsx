"use client";

import React from "react";
import { useI18n } from "./I18n";
import Link from "next/link";
import MapsetLogo from "./MapsetLogo";
import Header from "./Header";
import Footer from "./Footer";
import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import License from "./License";

function Imprint() {
  // @ts-ignore
  const { t } = useI18n();
  return (
    <div>
      <Header className="container lg text-gray px-12 py-1 justify-end"></Header>

      <div className="relative px-36 py-12 bg-gradient-to-r from-blue to-blue-light text-white">
        <div className="container lg">
          <div className="flex justify-end">
            <MapsetLogo />
          </div>
          <div>
            <H1 className="max-w-[541px]">{t("imprint.title")}</H1>
            <p className="max-w-[646px] text-2xl">{t("imprint.subtitle")}</p>
          </div>
        </div>
      </div>
      <div className="container lg flex flex-col py-24 gap-24">
        <License />
        <div className="flex flex-col gap-6">
          <H2 className="text-blue">{t("generic.Imprint")}</H2>
          <H3 className="text-blue">geOps AG</H3>
          <p>
            <div>Solothurnerstrasse 235</div>
            <div>CH-4600 Olten</div>
            <div>{t("imprint.phone")} +41 61 588 05 05</div>
            <div>
              {t("imprint.mail")}
              &nbsp;
              <Link href={"mailto:info@geops.ch"}>info@geops.ch</Link>
            </div>
          </p>
          <p>
            <div>{t("imprint.managingDirector")}</div>
            <div>{t("imprint.commercialNumber")}</div>
            <div>UID: CHE-455.829.547 VAT</div>
          </p>
          <p>{t("imprint.disclaimer")}</p>
          <p>{t("imprint.responsible")}</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Imprint;
