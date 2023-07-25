import React, { useCallback, useRef, useState } from "react";
import { useI18n } from "./I18n";
import ButtonBlue from "./ui/ButtonBlue";
import Input from "./ui/Input";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

const ContactForm = ({ className = "" }) => {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef();

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    window.scrollTo(0, document.getElementById("contact").offsetTop);
    const formData = new FormData(formRef.current);
    fetch("https://editor.mapset." + domain + "/api/v1/contact-form", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => console.error(error));
  }, []);

  const labelClassName = "text-sm";
  const parentCheckboxClassName = "flex items-center gap-2";

  return (
    <form
      ref={formRef}
      method="post"
      name="contact"
      onSubmit={handleSubmit}
      className={`flex flex-col gap-6 ${className}`}
    >
      {submitted ? (
        <p>{t("contact.submitted")}</p>
      ) : (
        <>
          <div>
            <label className={"block " + labelClassName} htmlFor="name">
              {t("contact.name")}
            </label>
            <Input name="name" />
          </div>

          <div>
            <label className={"block " + labelClassName} htmlFor="company">
              {t("contact.company")}
            </label>
            <Input name="company" />
          </div>

          <div>
            <label className={"block " + labelClassName} htmlFor="email">
              {t("contact.email")}
            </label>
            <Input name="email" type="email" required />
          </div>

          <div>
            <label className={"block " + labelClassName} htmlFor="interest">
              {t("contact.interest")}
            </label>
            <Input type="select" name="interest">
              <option value="mapset free">mapset free</option>
              <option value="mapset mini">mapset mini</option>
              <option value="mapset midi">mapset midi</option>
              <option value="mapset maxi" default>
                mapset maxi
              </option>
            </Input>
          </div>

          <div>
            <label className={"block " + labelClassName} htmlFor="message">
              {t("contact.message")}
            </label>

            <Input name="message" type="textarea" rows={5} />
          </div>

          <div className={parentCheckboxClassName}>
            <Input name="called-back" type="checkbox" />
            <label
              className={labelClassName}
              htmlFor="called-back"
              dangerouslySetInnerHTML={{
                __html: t("contact.calledback"),
              }}
            ></label>
          </div>

          <div>
            <label
              className={"block " + labelClassName}
              htmlFor="contact-telephone"
            >
              {t("contact.telephone")}
            </label>
            <Input name="telephone" type="tel" />
          </div>

          <div className={parentCheckboxClassName}>
            <Input name="newsletter" type="checkbox" />
            <label
              className={labelClassName}
              htmlFor="newsletter"
              dangerouslySetInnerHTML={{
                __html: t("contact.newsletter"),
              }}
            ></label>
          </div>

          <div className={parentCheckboxClassName}>
            <Input name="privacy" type="checkbox" required />
            <label
              className={labelClassName}
              htmlFor="privacy"
              dangerouslySetInnerHTML={{
                __html: t("contact.privacyPolicy"),
              }}
            ></label>
          </div>
          <p>{t("contact.required")}</p>
          <div>
            <ButtonBlue type="submit">{t("contact.submit")}</ButtonBlue>
          </div>
        </>
      )}
    </form>
  );
};

export default ContactForm;
