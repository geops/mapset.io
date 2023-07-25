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
import translations from "@/content/index/de.json";
import PricingSection from "./PricingSection";
import TestimonialsSection from "./TestimonialsSection";
import NavSections from "./NavSections";
import ContactSection from "./ContactSection";
import Menu from "./Menu";
import OurCustomer from "./images/OurCustomerImage";
import Contact from "./images/ContactImage";

const region = process.env.NEXT_PUBLIC_DOMAIN;

function Home() {
  // @ts-ignore
  const { t } = useI18n();
  return (
    <>
      <div className="relative z-0">
        <div className="justify-center px-4 hidden md:flex">
          <Header className="container lg  text-gray py-1 justify-end"></Header>
        </div>
        <main className="flex flex-col">
          <div className="flex flex-col items-center relative px-4 pt-12 bg-gradient-to-r from-blue to-blue-light text-white z-10">
            <div className="container lg">
              <div className="flex justify-between my-4 mb-12">
                <div>
                  <NavSections className="hidden md:block" />
                </div>
                <div>
                  <MapsetLogo />
                </div>
              </div>
              <div className="flex justify-between overflow-hidden flex-wrap md:flex-nowrap">
                <div className="flex flex-col gap-6 pb-12">
                  <H1 className="max-w-[541px]">{t("home.main.title")}</H1>
                  <p className="max-w-[646px] text-2xl">
                    {t("home.main.content")}
                  </p>
                  <div className="flex gap-4 mt-6">
                    <ButtonWhite href={"https://editor.mapset." + region}>
                      {t("home.try_free")}
                    </ButtonWhite>
                    <ButtonBlue href={"#contact"} variant="outlined">
                      {t("contact.section")}
                    </ButtonBlue>
                  </div>
                </div>
                <div className="flex items-end pb-12 md:pb-0 md:ml-24 mt-12">
                  <video
                    autoPlay
                    className="border-[#126392] border-8 md:border-b-0 md:border-r-0 rounded-xl md:rounded-r-none md:rounded-bl-none"
                  >
                    <source src="/video/mapset-demo.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div
            id="features"
            className="flex flex-col items-center relative px-4 pt-24 py-12 z-0"
          >
            <div className="container lg">
              <div className="pb-12">
                <H4>{t("features.section")}</H4>
                <H2 className="text-blue max-w-[900px]">
                  {t("features.title")}
                </H2>
                <p className="pt-4 pb-4">{t("features.content")}</p>
              </div>
              <FeaturesSection prefix="list" />

              <div className="flex justify-center gap-4 my-24">
                <ButtonBlue href={"https://editor.mapset." + region}>
                  {t("home.try_free")}
                </ButtonBlue>
                <ButtonWhite href={"#contact"} variant="outlined">
                  {t("contact.section")}
                </ButtonWhite>
              </div>
              <FeaturesSection prefix="list2" reverse />
            </div>
          </div>
          <div
            id="pricing"
            className="flex flex-col items-center relative px-4 pt-24 py-12 z-0"
          >
            <div className="container lg">
              <div className="pb-12">
                <H4>{t("pricing.section")}</H4>
                <H2 className="text-blue max-w-[800px]">
                  {t("pricing.title")}
                </H2>
                <p className="pt-4 pb-4">{t("pricing.content")}</p>
              </div>
              <PricingSection products={translations.pricing.products} />
            </div>
          </div>
          <div className="flex flex-col items-center relative px-4 py-12 z-0">
            <div className="container lg">
              <ClientsLogos />
            </div>
          </div>
          <div
            id="testimonials"
            className="flex flex-col items-center relative px-4 pt-24 py-12 bg-blue-lighter z-0"
          >
            <div className="container lg">
              <div className="flex lg:hidden flex-1 items-center justify-center pb-4">
                <OurCustomer />
              </div>
              <div className="pb-12">
                <H4>{t("testimonials.section")}</H4>
                <H2 className="text-blue max-w-[800px]">
                  {t("testimonials.title")}
                </H2>
              </div>
              <TestimonialsSection />
            </div>
          </div>
          <div
            id="contact"
            className="flex flex-col items-center relative px-4 pt-24 py-12 z-0"
          >
            <div className="container lg">
              <div className="flex lg:hidden flex-1 items-center justify-center pb-12">
                <Contact />
              </div>
              <div className="pb-12">
                <H4>{t("contact.section")}</H4>
                <H2 className="text-blue">{t("generic.gotcurious")}</H2>
                <p className="pt-4 pb-4">{t("contact.content")}</p>
              </div>
              <ContactSection />
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
      <Menu className="md:hidden" />
    </>
  );
}

export default Home;
