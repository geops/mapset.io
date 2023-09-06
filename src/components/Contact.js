import React from "react";
import { useI18n } from "./I18n";
import TwitterIcon from "./images/TwitterIcon";
import ExternalLinkIcon from "./images/ExternalLinkIcon";
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
        <ButtonWhite
          variant="outlined"
          href={`https://twitter.com/mapset${domain}`}
          rel="noopener noreferrer"
          target="_blank"
          className="normal-case !p-2"
        >
          <span className="-mt-[3px]">
            <TwitterIcon className="pb-2" />
          </span>
          <span className="pt-[2px]">
            {t("guide.contact.visit_our_twitter")}
          </span>
          <span>
            <ExternalLinkIcon />
          </span>
        </ButtonWhite>
      </div>
    </div>
  );
}

export default Contact;
