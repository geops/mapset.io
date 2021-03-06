import React, { useRef, useState } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import LinkedInCollect from './LinkedInCollect';

const ContactForm = () => {
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
    window.scrollTo(0, document.getElementById('contact').offsetTop);
    const formData = new FormData(formRef.current);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => console.error(error));
  };

  return (
    <div className="contactForm">
      <form
        className="contact-form"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="post"
        name="contact"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        {submitted ? (
          <p>
            <FormattedMessage id="contact.submitted" />
            <LinkedInCollect run={true} conversionId="4840425" />
          </p>
        ) : (
          <>
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </div>
            <p>
              <FormattedMessage id="contact.content" />
            </p>
            <div className="row">
              <div className="contact-form-field col-12 col-md-6">
                <label htmlFor="contact-first-name">
                  <FormattedMessage id="contact.firstName" />
                </label>
                <input type="text" id="contact-first-name" name="first-name" />
              </div>
              <div className="contact-form-field col-12 col-md-6">
                <label htmlFor="contact-last-name">
                  <FormattedMessage id="contact.lastName" />
                </label>
                <input type="text" id="contact-last-name" name="last-name" />
              </div>
            </div>
            <div className="contact-form-field">
              <label htmlFor="contact-company">
                <FormattedMessage id="contact.company" />
              </label>
              <input type="text" id="contact-company" name="company" />
            </div>
            <div className="row">
              <div className="contact-form-field col-12 col-md-6">
                <label htmlFor="contact-telephone">
                  <FormattedMessage id="contact.telephone" />
                </label>
                <input type="tel" id="contact-telephone" name="telephone" />
              </div>
              <div className="contact-form-field col-12 col-md-6">
                <label htmlFor="contact-email">
                  <FormattedMessage id="contact.email" />
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  ref={emailRef}
                  className={emailValid ? '' : 'invalid'}
                />
              </div>
            </div>
            <h2>
              <FormattedMessage id="contact.interest" />
            </h2>
            <div className="contact-form-interest">
              <div className="contact-form-field-checkbox">
                <input
                  type="checkbox"
                  name="interest-free"
                  id="contact-interest-free"
                />
                <label htmlFor="contact-interest-free">mapset FREE</label>
              </div>
              <div className="contact-form-field-checkbox">
                <input
                  type="checkbox"
                  name="interest-mini"
                  id="contact-interest-mini"
                />
                <label htmlFor="contact-interest-mini">mapset MINI</label>
              </div>
              <div className="contact-form-field-checkbox">
                <input
                  type="checkbox"
                  name="interest-midi"
                  id="contact-interest-midi"
                />
                <label htmlFor="contact-interest-midi">mapset MIDI</label>
              </div>
              <div className="contact-form-field-checkbox">
                <input
                  type="checkbox"
                  name="interest-maxi"
                  id="contact-interest-maxi"
                />
                <label htmlFor="contact-interest-maxi">mapset MAXI</label>
              </div>
            </div>
            <h2>
              <FormattedMessage id="contact.message" />
            </h2>
            <div className="contact-form-field">
              <textarea name="message" className="contact-message" rows="5" />
            </div>
            <div className="contact-form-field-checkbox">
              <input
                type="checkbox"
                name="privacy-policy"
                id="contact-privacy-policy"
                required
                ref={privacyRef}
                className={privacyValid ? '' : 'invalid'}
              />
              <label htmlFor="contact-privacy-policy">
                <FormattedHTMLMessage id="contact.privacyPolicy" />
              </label>
            </div>
            <p>
              <FormattedMessage id="contact.required" />
            </p>
            <div className="contactButtons">
              <button
                className="button"
                type="submit"
                onClick={checkValidFields}
              >
                <FormattedMessage id="contact.submit" />
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
