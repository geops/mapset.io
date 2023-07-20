import React from "react";
import { useI18n } from "./I18n";
import TwitterIcon from "./TwitterIcon";
import ExternalLinkIcon from "./ExternalLinkIcon";
import Link from "next/link";

function Contact({ region }) {
  const { t } = useI18n();
  return (
    <div className="contactForm">
      <h1 className="is-bolder contactHeader section-title">
        {t("content.contact header")}
      </h1>
      <p>{t("content.contact description")}</p>
      <div className="contactButtons">
        <Link
          className="flex items-center gap-2"
          href={
            process.env.NEXT_PUBLIC_REGION === "ch"
              ? "https://geops.sh/6E83A54F98A4E7532"
              : "https://geops.sh/40003911245CB34786"
          }
          rel="noopener noreferrer"
          target="_blank"
        >
          {t("generic.Newsletter")}
        </Link>
        <Link
          className="flex items-center gap-2"
          href={`https://twitter.com/mapset${process.env.NEXT_PUBLIC_REGION}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <TwitterIcon />
          {t("generic.Besuchen Sie uns auf Twitter")}
          <ExternalLinkIcon />
        </Link>
      </div>
    </div>
  );
}

export default Contact;
