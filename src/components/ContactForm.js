import React, { useCallback, useRef, useState } from "react";
import { useI18n } from "./I18n";
import ButtonBlue from "./ui/ButtonBlue";
import Input from "./ui/Input";
import ChevronDown from "./images/ChevronDown";

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

  const labelClassName = "text-blue-900 text-sm font-medium pb-2 leading-5";
  const checkboxLabelClassName =
    "text-blue-900 text-normal font-normal leading-6";
  const parentCheckboxClassName = "grid items-center grid-cols-[30px_auto]";

  return (
    <form
      ref={formRef}
      method="post"
      name="contact"
      onSubmit={handleSubmit}
      className={`flex flex-col gap-6 ${className} w-[480px]`}
    >
      {submitted ? (
        <p data-testid="success">{t("contact.submitted")}</p>
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
            <label className={"block " + labelClassName} htmlFor="interest">
              {t("contact.interest")}
            </label>
            <div className="relative">
              <Input
                type="select"
                name="interest"
                className="appearance-none"
                defaultValue=""
                data-placeholder="all"
                onChange={(evt) => {
                  evt.target.dataset.placeholder = evt.target.value;
                }}
              >
                <option value="all">{t("contact.choose_product")}</option>
                <option value="mapset free">mapset free</option>
                <option value="mapset mini">mapset mini</option>
                <option value="mapset midi">mapset midi</option>
                <option value="mapset maxi">mapset maxi</option>
              </Input>
              <div className="absolute my-auto h-[20px] right-[12px] top-0 bottom-0 pointer-events-none">
                <ChevronDown />
              </div>
            </div>
          </div>

          <div>
            <label className={"block " + labelClassName} htmlFor="email">
              {t("contact.email")}
              {/* The hover is there so we can use it in translations for privacy policy and newsletter link*/}
              <span className="text-blue-600 hover:text-blue-600"> *</span>
            </label>
            <Input name="email" type="email" required />
          </div>

          <div>
            <label className={"block " + labelClassName} htmlFor="message">
              {t("contact.message")}
            </label>

            <Input
              name="message"
              type="textarea"
              rows={5}
              placeholder={t("contact.message_placeholder")}
            />
          </div>

          <div className={parentCheckboxClassName}>
            <Input
              name="called-back"
              type="checkbox"
              style={{ width: 20, height: 20 }}
            />
            <label
              className={checkboxLabelClassName}
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
            <Input
              name="newsletter"
              type="checkbox"
              style={{ width: 20, height: 20 }}
            />
            <label
              className={checkboxLabelClassName}
              htmlFor="newsletter"
              dangerouslySetInnerHTML={{
                __html: t("contact.newsletter", {
                  link: t("newsletter_link." + domain),
                }),
              }}
            ></label>
          </div>

          <div className={parentCheckboxClassName}>
            <Input
              name="privacy"
              type="checkbox"
              style={{ width: 20, height: 20 }}
              required
            />
            <label className={checkboxLabelClassName} htmlFor="privacy">
              <span
                dangerouslySetInnerHTML={{
                  __html: t("contact.privacy_policy", {
                    link: t("privacy_link"),
                  }),
                }}
              ></span>
              <span className="text-blue-600">*</span>
            </label>
          </div>
          <p className="text-slate-500 leading-6">
            <span className="text-blue-600">* </span>
            {t("contact.required")}
          </p>
          <ButtonBlue
            type="submit"
            className="w-full justify-center !text-sm !font-semibold"
          >
            {t("contact.submit")}
          </ButtonBlue>
        </>
      )}
    </form>
  );
};

export default ContactForm;
