import React from "react";
import { useI18n } from "./I18n";
import TwitterIcon from "./images/TwitterIcon";
import ExternalLinkIcon from "./images/ExternalLinkIcon";
import ButtonWhite from "./ui/ButtonWhite";
import H2 from "./ui/H2";

function Contact() {
  const { t } = useI18n();
  return (
    <div>
      <H2>{t("guide.contact.header")}</H2>
      <p>{t("guide.contact.description")}</p>
      <div className="flex gap-4 h-[35px]">
        <ButtonWhite
          variant="outlined"
          href={
            process.env.NEXT_PUBLIC_DOMAIN === "ch"
              ? "https://geops.sh/6E83A54F98A4E7532"
              : "https://geops.sh/40003911245CB34786"
          }
          rel="noopener noreferrer"
          target="_blank"
        >
          {t("newsletter")}
        </ButtonWhite>
        <ButtonWhite
          variant="outlined"
          href={`https://twitter.com/mapset${process.env.NEXT_PUBLIC_DOMAIN}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <TwitterIcon />
          {t("guide.visit_our_twitter")}
          <ExternalLinkIcon />
        </ButtonWhite>
      </div>
    </div>
  );
}

export default Contact;
