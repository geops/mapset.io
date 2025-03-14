"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MapsetLogo from "./MapsetLogo";
import H1 from "./ui/H1";
import { useI18n } from "./I18n";
import H2 from "./ui/H2";
import H4 from "./ui/H4";
import ButtonBlue from "./ui/ButtonBlue";
import ButtonWhite from "./ui/ButtonWhite";
import ClientsLogos from "./ClientsLogos";
import FeaturesSection from "./FeaturesSection";
import translationsDe from "@/content/home/de.json";
import translationsEn from "@/content/home/en.json";
import translationsFr from "@/content/home/fr.json";
import PricingSection from "./PricingSection";
import TestimonialsSection from "./TestimonialsSection";
import NavSections from "./NavSections";
import ContactSection from "./ContactSection";
import Menu from "./Menu";
import { onClickSmoothScroll } from "./NavLinks";
import { useMemo } from "react";

const region = process.env.NEXT_PUBLIC_DOMAIN;
const pClassName = "text-xl text-blue-900 leading-[30px] ";
const pClamp = "clamp(1rem, 1vw + 0.75rem, 1.25rem)";
const containerClassName =
  "container mx-auto px-4 md:px-8 lg:px-16 max-w-[1536px]";

function Home() {
  const { t, language } = useI18n();
  const translations = useMemo(() => {
    switch (language) {
      case "de":
        return translationsDe;
      case "fr":
        return translationsFr;
      case "en":
      default:
        return translationsEn;
    }
  }, [language]);

  return (
    <>
      <div className="relative z-0 overflow-x-hidden">
        <div className={`hidden md:block ${containerClassName}`}>
          <div className="flex justify-end">
            <Header></Header>
          </div>
        </div>
        <main className="flex flex-col">
          <section className="flex flex-col items-center relative overflow-hidden pt-12 md:pb-12 bg-gradient-to-b md:bg-gradient-to-r from-blue-600 to-white md:to-blue-light text-white z-10">
            <div className={`relative ${containerClassName}`}>
              <div className="flex justify-between mb-12">
                <div>
                  <NavSections className="hidden md:block" />
                </div>
                <div>
                  <MapsetLogo />
                </div>
              </div>
              <div className="flex justify-between overflow-hidden md:flex-nowrap">
                <div className="flex flex-col gap-6 py-12">
                  <H1>{t("home.main.title")}</H1>

                  <div className="flex min-w-[343px] md:hidden  ">
                    <video
                      playsInline
                      loop
                      autoPlay
                      muted
                      poster="/img/mapset_video_poster.webp"
                      className="border-white border-opacity-20 border-8 rounded-3xl"
                    >
                      <source
                        src="/video/mapset-demo_v2.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>

                  <p
                    className="text-blue-900 md:text-white max-w-[646px] font-medium leading-[160%]"
                    style={{
                      fontSize: "clamp(1rem, 1vw + 0.75rem, 1.25rem)",
                    }}
                  >
                    {t("home.main.content")}
                  </p>

                  <div className="hidden md:flex gap-4 mt-6">
                    <ButtonWhite
                      href={"https://editor.mapset." + region}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="leading-6"
                    >
                      {t("home.try_free")}
                    </ButtonWhite>
                    <ButtonBlue
                      href={"#contact"}
                      variant="outlined"
                      className="!bg-transparent hover:!bg-blue-900"
                      onClick={onClickSmoothScroll}
                    >
                      {t("contact.section")}
                    </ButtonBlue>
                  </div>

                  <div className="flex md:hidden gap-4 justify-center">
                    <ButtonBlue
                      href={"https://editor.mapset." + region}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("home.try_free")}
                    </ButtonBlue>
                    <ButtonWhite
                      href={"#contact"}
                      variant="outlined"
                      onClick={onClickSmoothScroll}
                    >
                      {t("contact.section")}
                    </ButtonWhite>
                  </div>
                </div>
                <div className="hidden md:flex items-end min-w-[65%]"></div>
              </div>
              <div className="hidden md:block absolute bottom-[-60px] left-[510px] lg:left-[628px] w-[855px] h-[575px] animate-fade-in">
                <video
                  playsInline
                  loop
                  autoPlay
                  muted
                  poster="/img/mapset_video_poster.webp"
                  className="border-[#126392] border-8 rounded-xl w-full h-full animate-fade-in delay-1500"
                >
                  <source src="/video/mapset-demo_v2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </section>
          <section
            id="features"
            className="flex flex-col items-center relative md:pt-24 py-12 lg:pb-0 z-0"
          >
            <div className={`${containerClassName}`}>
              <div className="px-4 md:px-0 pb-20">
                <H4>{t("features.section")}</H4>
                <H2 className={`max-w-[900px]`}>{t("features.title")}</H2>
                <p
                  className={pClassName}
                  style={{ fontSize: pClamp }}
                  dangerouslySetInnerHTML={{
                    __html: t("features.content"),
                  }}
                ></p>
              </div>
              <div className="md:hidden">
                <FeaturesSection />
              </div>
              <div className="hidden md:block">
                <FeaturesSection indexEnd={4} />
                <div className="flex justify-center gap-4 my-24 lg:mt-0">
                  <ButtonBlue
                    href={"https://editor.mapset." + region}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("home.try_free")}
                  </ButtonBlue>
                  <ButtonWhite
                    href={"#contact"}
                    variant="outlined"
                    onClick={onClickSmoothScroll}
                  >
                    {t("contact.section")}
                  </ButtonWhite>
                </div>
                <FeaturesSection indexStart={4} reverse />
              </div>
            </div>
          </section>
          <section
            id="pricing"
            className="flex flex-col items-center relative px-4 pt-12 scroll-mt-12 pb-8 md:pb-24 z-0"
          >
            <div className={`${containerClassName}`}>
              <div className="pb-12 text-center flex flex-col justify-center">
                <H4>{t("pricing.section")}</H4>
                <H2>{t("pricing.title")}</H2>
                <p
                  className={pClassName}
                  style={{ fontSize: pClamp }}
                  dangerouslySetInnerHTML={{
                    __html: t("pricing.content"),
                  }}
                ></p>
              </div>
              <PricingSection products={translations.pricing.products} />
            </div>
          </section>
          <section
            id="testimonials"
            className="flex flex-col items-center relative px-4 py-24 bg-blue-lighter z-0"
          >
            <div className={`${containerClassName}`}>
              <div className="pb-6">
                <H4>{t("testimonials.section")}</H4>
                <H2 className={`max-w-[800px]`}>{t("testimonials.title")}</H2>
              </div>
              <TestimonialsSection />
            </div>
          </section>
          <section className="flex flex-col items-center relative px-0 py-12 pt-24 z-0">
            <div className={`${containerClassName} !px-0`}>
              <ClientsLogos />
            </div>
          </section>
          <section
            id="contact"
            className="flex flex-col items-center relative px-4 py-12 scroll-mt-12 pb-24 z-0"
          >
            <div className={`${containerClassName}`}>
              <div className="pb-12">
                <H4>{t("contact.section")}</H4>
                <H2>{t("contact.title")}</H2>
                <p
                  className={pClassName}
                  style={{ fontSize: pClamp }}
                  dangerouslySetInnerHTML={{
                    __html: t("contact.content"),
                  }}
                ></p>
              </div>
              <ContactSection />
            </div>
          </section>
        </main>
        <Footer></Footer>
      </div>
      <Menu className="md:hidden" />
    </>
  );
}

export default Home;
