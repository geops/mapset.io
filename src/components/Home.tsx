"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MapsetLogo from "./MapsetLogo";
import H1 from "./ui/H1";
import { useI18n } from "./I18n";
import ContactForm from "./ContactForm";
import H2 from "./ui/H2";
import H4 from "./ui/H4";
import ButtonBlue from "./ui/ButtonBlue";
import ButtonWhite from "./ui/ButtonWhite";
import Contact from "./images/Contact";
import ClientsLogos from "./ClientsLogos";
import FeaturesSection from "./FeaturesSection";
import translations from "@/content/index/de.json";
import PricingSection from "./PricingSection";
import Link from "next/link";

const region = process.env.NEXT_PUBLIC_DOMAIN;

function Home() {
  // @ts-ignore
  const { t } = useI18n();
  return (
    <div>
      <div className="flex justify-center px-4 ">
        <Header className="container lg  text-gray py-1 justify-end"></Header>
      </div>
      <main className="flex flex-col">
        <div className="flex flex-col items-center relative px-4 py-12 bg-gradient-to-r from-blue to-blue-light text-white">
          <div className="container lg">
            <div className="flex justify-between my-4 mb-12">
              <div className="bg-blue-dark rounded-full flex gap-6 items-center px-12">
                <Link href="#features">
                  <H4 className="text-white">{t("features.section")}</H4>
                </Link>
                <Link href="#pricing">
                  <H4 className="text-white">{t("pricing.section")}</H4>
                </Link>
                <Link href="#testimonials">
                  <H4 className="text-white">{t("testimonials.section")}</H4>
                </Link>
                <Link href="#contact">
                  <H4 className="text-white">{t("contact.section")}</H4>
                </Link>
              </div>
              <div>
                <MapsetLogo />
              </div>
            </div>
            <div className="flex justify-between overflow-hidden flex-wrap md:flex-nowrap">
              <div className="flex flex-col gap-6">
                <H1 className="max-w-[541px]">{t("home.main.title")}</H1>
                <p className="max-w-[646px] text-2xl">
                  {t("home.main.content")}
                </p>
                <div className="flex gap-4 mt-6">
                  <ButtonWhite href={"https://editor.mapset." + region}>
                    {t("home.try_free")}
                  </ButtonWhite>
                  <ButtonBlue href={"#contact"} variant="outlined">
                    {t("home.contact")}
                  </ButtonBlue>
                </div>
              </div>
              <div className="border-[#126392] sm:border-8 md:border-b-0 md:border-r-0 rounded-xl md:ml-12 mt-12">
                <video autoPlay className="rounded-none">
                  <source src="/video/mapset-demo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div
          id="features"
          className="flex flex-col items-center relative px-4 pt-24 py-12 "
        >
          <div className="container lg">
            <div className="pb-12">
              <H4>{t("features.section")}</H4>
              <H2 className="text-blue max-w-[900px]">{t("features.title")}</H2>
              <p className="pt-4 pb-4">{t("features.content")}</p>
            </div>
            <FeaturesSection prefix="list" />

            <div className="flex justify-center gap-4 my-24">
              <ButtonBlue href={"https://editor.mapset." + region}>
                {t("home.try_free")}
              </ButtonBlue>
              <ButtonWhite href={"#contact"} variant="outlined">
                {t("home.contact")}
              </ButtonWhite>
            </div>
            <FeaturesSection prefix="list2" reverse />
          </div>
        </div>
        <div
          id="pricing"
          className="flex flex-col items-center relative px-4 pt-24 py-12 "
        >
          <div className="container lg">
            <div className="pb-12">
              <H4>{t("pricing.section")}</H4>
              <H2 className="text-blue max-w-[800px]">{t("pricing.title")}</H2>
              <p className="pt-4 pb-4">{t("pricing.content")}</p>
            </div>
            <PricingSection products={translations.pricing.products} />
          </div>
        </div>
        <div className="flex flex-col items-center relative px-4 py-12">
          <div className="container lg">
            <ClientsLogos />
          </div>
        </div>
        <div
          id="testimonials"
          className="flex flex-col items-center relative px-4 pt-24 py-12 "
        >
          <div className="container lg"></div>
        </div>
        <div
          id="contact"
          className="flex flex-col items-center relative px-4 py-12"
        >
          <div className="container lg flex justify-between">
            <div>
              <H4>{t("contact.section")}</H4>
              <H2 className="text-blue">{t("generic.gotcurious")}</H2>
              <p className="pt-4 pb-4">{t("contact.content")}</p>
              <ContactForm className="pt-4 pb-4" />
            </div>
            <div>
              <Contact />
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Home;
