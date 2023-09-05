"use client";

import React from "react";
import { useI18n } from "./I18n";
import Link from "next/link";
import MapsetLogo from "./MapsetLogo";
import Header from "./Header";
import Footer from "./Footer";
import H1 from "./ui/H1";
import H2 from "./ui/H2";
import H3 from "./ui/H3";
import License from "./License";
import Menu from "./Menu";

function Imprint() {
  const { t, language } = useI18n();
  return (
    <>
      <div className="relative z-0">
        <div className="justify-center px-4 hidden md:flex">
          <Header className="container lg  text-gray py-1 justify-end"></Header>
        </div>
        <main className="flex flex-col">
          <div className="flex flex-col items-center relative px-4 pt-12 bg-gradient-to-r from-blue-600 to-blue-light text-white z-10">
            <div className="container lg">
              <div className="flex justify-between mb-12">
                <div></div>
                <Link href={"/" + language}>
                  <MapsetLogo />
                </Link>
              </div>
              <div className="flex justify-between overflow-hidden flex-wrap md:flex-nowrap">
                <div className="flex flex-col gap-6 pb-12">
                  <H1>{t("imprint.title")}</H1>
                  <p className="max-w-[646px] text-2xl">
                    {t("imprint.subtitle")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center relative px-4 pt-12 z-10">
            <div className="container lg">
              <License />
            </div>
          </div>
          <div className="flex flex-col items-center relative px-4 py-12 z-10">
            <div className="container lg">
              <div className="flex flex-col gap-6">
                <H2>{t("imprint.title")}</H2>
                <H3>geOps AG</H3>
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
                  <div>{t("imprint.managing_director")}</div>
                  <div>{t("imprint.commercial_number")}</div>
                  <div>UID: CHE-455.829.547 VAT</div>
                </p>
                <p>{t("imprint.disclaimer")}</p>
                <p>{t("imprint.responsible")}</p>
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
      <Menu className="md:hidden" />
    </>
  );
}

export default Imprint;
