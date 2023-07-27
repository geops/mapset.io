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
import translations from "@/content/home/de.json";
import PricingSection from "./PricingSection";
import TestimonialsSection from "./TestimonialsSection";
import NavSections from "./NavSections";
import ContactSection from "./ContactSection";
import Menu from "./Menu";
import OurCustomer from "./images/OurCustomerImage";
import ContactImage from "./images/ContactImage";

const region = process.env.NEXT_PUBLIC_DOMAIN;
const pClassName = "text-xl text-blue-900 leading-[30px] max-w-[768px]";
const pClamp = "clamp(1rem, 1vw + 0.75rem, 1.25rem);";

function Home() {
  const { t } = useI18n();
  return (
    <>
      <div className="relative z-0">
        <div className="justify-center px-4 hidden md:flex">
          <Header className="container lg  py-1 justify-end"></Header>
        </div>
        <main className="flex flex-col">
          <div className="flex flex-col items-center relative px-4 pt-12 bg-gradient-to-b md:bg-gradient-to-r from-blue-600 to-white md:to-blue-light text-white z-10">
            <div className="container lg">
              <div className="flex justify-between mb-12">
                <div>
                  <NavSections className="hidden md:block" />
                </div>
                <div>
                  <MapsetLogo />
                </div>
              </div>
              <div className="flex justify-between overflow-hidden flex-wrap lg:flex-nowrap">
                <div className="flex flex-col gap-6 pb-12">
                  <H1>{t("home.main.title")}</H1>

                  <div className="flex min-w-[360px] md:hidden  ">
                    <video
                      loop
                      autoPlay
                      className="border-white border-opacity-20 border-8 rounded-3xl"
                    >
                      <source src="/video/mapset-demo.mp4" type="video/mp4" />
                    </video>
                  </div>

                  <p
                    className="text-blue-900 md:text-white text-normal md:text-2xl max-w-[646px] font-medium leading-[160%]"
                    style={{
                      fontSize: "clamp(1rem, 2.5vw + 0.37rem, 1.5rem)",
                    }}
                  >
                    {t("home.main.content")}
                  </p>

                  <div className="hidden md:flex gap-4 mt-6">
                    <ButtonWhite href={"https://editor.mapset." + region}>
                      {t("home.try_free")}
                    </ButtonWhite>
                    <ButtonBlue
                      href={"#contact"}
                      variant="outlined"
                      className="!bg-transparent"
                    >
                      {t("contact.section")}
                    </ButtonBlue>
                  </div>

                  <div className="flex md:hidden gap-4 justify-center">
                    <ButtonBlue href={"https://editor.mapset." + region}>
                      {t("home.try_free")}
                    </ButtonBlue>
                    <ButtonWhite href={"#contact"} variant="outlined">
                      {t("contact.section")}
                    </ButtonWhite>
                  </div>
                </div>
                <div className="hidden md:flex items-end pb-12 lg:pb-0 lg:ml-12">
                  <video
                    loop
                    autoPlay
                    className="border-[#126392] border-8 lg:border-b-0 lg:border-r-0 rounded-xl lg:rounded-r-none lg:rounded-bl-none lg:min-w-[700px]"
                  >
                    <source src="/video/mapset-demo.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div
            id="features"
            className="flex flex-col items-center relative md:px-4 pt-24 py-12 z-0"
          >
            <div className="container lg ">
              <div className="px-4 md:px-0 pb-12">
                <H4>{t("features.section")}</H4>
                <H2 className={`max-w-[900px]`}>{t("features.title")}</H2>
                <p className={pClassName} style={{ fontSize: pClamp }}>
                  {t("features.content")}
                </p>
              </div>
              <div className="md:hidden">
                <FeaturesSection />
              </div>
              <div className="hidden md:block">
                <FeaturesSection indexEnd={3} />
                <div className="flex justify-center gap-4 my-24">
                  <ButtonBlue href={"https://editor.mapset." + region}>
                    {t("home.try_free")}
                  </ButtonBlue>
                  <ButtonWhite href={"#contact"} variant="outlined">
                    {t("contact.section")}
                  </ButtonWhite>
                </div>
                <FeaturesSection indexStart={3} reverse />
              </div>
            </div>
          </div>
          <div
            id="pricing"
            className="flex flex-col items-center relative px-4 pt-24 py-12 z-0"
          >
            <div className="container lg">
              <div className="pb-12">
                <H4>{t("pricing.section")}</H4>
                <H2 className={`max-w-[800px]`}>{t("pricing.title")}</H2>
                <p className={pClassName} style={{ fontSize: pClamp }}>
                  {t("pricing.content")}
                </p>
              </div>
              <PricingSection products={translations.pricing.products} />
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
                <H2 className={`max-w-[800px]`}>{t("testimonials.title")}</H2>
              </div>
              <TestimonialsSection />
            </div>
          </div>
          <div className="flex flex-col items-center relative px-4 py-12 z-0">
            <div className="container lg">
              <ClientsLogos />
            </div>
          </div>
          <div
            id="contact"
            className="flex flex-col items-center relative px-4 pt-24 py-12 z-0"
          >
            <div className="container lg">
              <div className="flex lg:hidden flex-1 items-center justify-center pb-12">
                <ContactImage />
              </div>
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
          </div>
        </main>
        <Footer></Footer>
      </div>
      <Menu className="md:hidden" />
    </>
  );
}

export default Home;
