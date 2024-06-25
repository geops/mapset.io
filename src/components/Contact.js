import React from "react";
import { useI18n } from "./I18n";
import ButtonWhite from "./ui/ButtonWhite";
import H2 from "./ui/H2";
import useIsMobile from "@/utils/hooks/useIsMobile";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

function Contact() {
  const { t } = useI18n();
  const isMobile = useIsMobile();
  return (
    <div>
      <H2>{t("guide.contact.header")}</H2>
      <p>{t("guide.contact.description")}</p>
      <div className="flex gap-4  py-12">
        <ButtonWhite
          variant="outlined"
          href={t("newsletter_link." + domain)}
          rel="noopener noreferrer"
          target="_blank"
          className={`normal-case${isMobile ? " !p-2" : ""}`}
        >
          {t("guide.contact.subscribe_newsletter")}
        </ButtonWhite>
      </div>
    </div>
  );
}

export default Contact;
