import React, { useRef, useState } from "react";
import { useI18n } from "./I18n";

const ContactForm = ({ className = "" }) => {
  const { t } = useI18n();
  const formRef = useRef(null);
  const emailRef = useRef(null);
  const privacyRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [privacyValid, setPrivacyValid] = useState(true);

  const checkValidFields = () => {
    setEmailValid(emailRef.current.reportValidity());
    setPrivacyValid(privacyRef.current.reportValidity());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.scrollTo(0, document.getElementById("contact").offsetTop);
    const formData = new FormData(formRef.current);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => console.error(error));
  };

  const inputClassName =
    "rounded-[8px] border-[1px] border-[#D0D5DD] px-[14px] py-2 shadow text-[#667085] bg-white w-[282px] h-[42px]";

  const textAreaClassName =
    "rounded-[8px] border-[1px] border-[#D0D5DD] px-[14px] py-2 shadow text-[#667085] bg-white w-[282px]";

  const labelClassName = "text-sm";
  const parentCheckboxClassName = "flex items-center gap-2";
  const checkboxClassName = "";

  return (
    <form
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="post"
      name="contact"
      onSubmit={handleSubmit}
      ref={formRef}
      className={`flex flex-col gap-6 ${className}`}
    >
      {submitted ? (
        <p>{t("contact.submitted")}</p>
      ) : (
        <>
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label className={"block " + labelClassName}>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </div>
          <div>
            <label
              className={"block " + labelClassName}
              htmlFor="contact-first-name"
            >
              {t("contact.firstName")}
            </label>
            <input
              type="text"
              id="contact-first-name"
              name="first-name"
              className={inputClassName}
            />
          </div>
          <div>
            <label
              className={"block " + labelClassName}
              htmlFor="contact-last-name"
            >
              {t("contact.lastName")}
            </label>
            <input
              type="text"
              id="contact-last-name"
              name="last-name"
              className={inputClassName}
            />
          </div>
          <div>
            <label
              className={"block " + labelClassName}
              htmlFor="contact-company"
            >
              {t("contact.company")}
            </label>
            <input
              type="text"
              id="contact-company"
              name="company"
              className={inputClassName}
            />
          </div>
          <div>
            <label
              className={"block " + labelClassName}
              htmlFor="contact-email"
            >
              {t("contact.email")}
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              ref={emailRef}
              className={inputClassName + "  " + (emailValid ? "" : "invalid")}
            />
          </div>
          <div>
            <label
              className={"block " + labelClassName}
              htmlFor="contact-interest"
            >
              {t("contact.interest")}
            </label>
            <select
              type="checkbox"
              name="interest"
              id="contact-interest"
              className={inputClassName}
            >
              <option value="mapset free">mapset free</option>
              <option value="mapset mini">mapset mini</option>
              <option value="mapset midi">mapset midi</option>
              <option value="mapset maxi" default>
                mapset maxi
              </option>
            </select>
          </div>
          <h2>{t("contact.message")}</h2>
          <div>
            <label
              className={"block " + labelClassName}
              htmlFor="contact-message"
            >
              {t("contact.message")}
            </label>
            <textarea
              name="contact-message"
              rows="5"
              className={textAreaClassName}
            />
          </div>
          <div className={parentCheckboxClassName}>
            <input
              type="checkbox"
              name="called-back"
              id="contact-called-back"
              className={checkboxClassName}
            />
            <label
              className={labelClassName}
              htmlFor="contact-called-back"
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
            <input
              type="tel"
              id="contact-telephone"
              name="telephone"
              className={inputClassName}
            />
          </div>
          <div className={parentCheckboxClassName}>
            <input
              type="checkbox"
              name="newsletter"
              id="contact-newsletter"
              className={checkboxClassName}
            />
            <label
              className={labelClassName}
              htmlFor="contact-newsletter"
              dangerouslySetInnerHTML={{
                __html: t("contact.newsletter"),
              }}
            ></label>
          </div>
          <div className={parentCheckboxClassName}>
            <input
              type="checkbox"
              name="privacy-policy"
              id="contact-privacy-policy"
              required
              ref={privacyRef}
              className={
                checkboxClassName + "  " + (privacyValid ? "" : "invalid")
              }
            />
            <label
              className={labelClassName}
              htmlFor="contact-privacy-policy"
              dangerouslySetInnerHTML={{
                __html: t("contact.privacyPolicy"),
              }}
            ></label>
          </div>
          <p>{t("contact.required")}</p>
          <div>
            <button
              className="button-blue"
              type="submit"
              onClick={checkValidFields}
            >
              {t("contact.submit")}
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default ContactForm;
