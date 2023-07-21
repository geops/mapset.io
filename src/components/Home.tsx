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

const region = process.env.NEXT_PUBLIC_REGION;

function Home() {
  // @ts-ignore
  const { t } = useI18n();
  return (
    <div>
      <div className="flex justify-center px-4">
        <Header className="container lg  text-gray py-1 justify-end"></Header>
      </div>
      <main className="flex flex-col">
        <div className="flex flex-col items-center relative px-4 pt-12 bg-gradient-to-r from-blue to-blue-light text-white">
          <div className="container lg">
            <div className="flex justify-end">
              <MapsetLogo />
            </div>
            <div className="flex justify-between overflow-hidden">
              <div className="flex flex-col gap-6">
                <H1 className="max-w-[541px]">{t("home.main.title")}</H1>
                <p className="max-w-[646px] text-2xl">
                  {t("home.main.content")}
                </p>
                <div className="flex gap-4 mt-6">
                  <ButtonWhite href={"https://editor.mapset." + region}>
                    {t("home.tryfree")}
                  </ButtonWhite>
                  <ButtonBlue href={"#contact"} variant="outlined">
                    {t("home.contact")}
                  </ButtonBlue>
                </div>
              </div>
              <div className="border-[#126392] border-t-8 border-l-8 rounded-tl-xl ml-12 mt-12">
                <video
                  autoPlay
                  width="100%"
                  height="100%"
                  className="rounded-none"
                >
                  <source src="/video/mapset-demo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center relative px-4 pt-24 py-12 ">
          <div className="container lg">
            <div className="pb-12">
              <H4 id="contact">{t("home.features.section")}</H4>
              <H2 className="text-blue">{t("home.features.title")}</H2>
              <p className="pt-4 pb-4">{t("home.features.content")}</p>
            </div>
            <FeaturesSection features={translations.home.features.list} />

            <div className="flex justify-center gap-4 my-24">
              <ButtonBlue href={"https://editor.mapset." + region}>
                {t("home.tryfree")}
              </ButtonBlue>
              <ButtonWhite href={"#contact"} variant="outlined">
                {t("home.contact")}
              </ButtonWhite>
            </div>

            <FeaturesSection
              features={translations.home.features.list2}
              reverse
            />
          </div>
        </div>
        <div className="flex flex-col items-center relative px-4 py-12">
          <div className="container lg">
            <ClientsLogos />
          </div>
        </div>
        <div className="flex flex-col items-center relative px-4 py-12">
          <div className="container lg flex justify-between">
            <div>
              <H4 id="contact">{t("generic.Kontakt")}</H4>
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
