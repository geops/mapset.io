import React from "react";
import { FormattedMessage } from 'react-intl';
import twitter from '../img/social/Twitter_Logo_Blue.svg';
import contact from '../data/contact.json';

function Contact() {
  return (
    <>
      <p>
        <FormattedMessage id="content.contact description" />
      </p>
      <p>
        <span className="is-bolder">
          <span>
            <FormattedMessage id="generic.Ihr persönlicher Kontakt" />
          </span>
        </span>
        <br />
        <span>
          <a href={'mailto:' + contact.email}>{contact.email}</a>
        </span>
        <br />
        {contact.phone ? (
          <span>
            <a href={'tel:' + contact.phone}>{contact.phone}</a>
          </span>
        ) : (
          ''
        )}
      </p>
      <span>
        <a
          href="https://twitter.com/mapsetio"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="is-bolder">
            <FormattedMessage id="generic.Besuchen Sie uns auf Twitter" />
          </span>
          <img className="twitter" src={twitter} alt="twitter" />
        </a>
      </span>
      <br />
      <a href="https://geops.sh/40003911245CB34786" rel="noopener noreferrer">
        <button className="button">
          <FormattedMessage id="generic.Newsletter" />
        </button>
      </a>
    </>
  );
}

export default Contact;
