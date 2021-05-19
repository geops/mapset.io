import React from 'react';
import { FormattedMessage } from 'react-intl';
import twitter from '../img/social/Twitter_Logo_Blue.svg';
import contact from '../data/contact.json';

function Contact() {
  return (
    <div className="contactForm">
      <h2>
        <FormattedMessage id="content.contact header" />
      </h2>
      <p>
        <FormattedMessage id="content.contact description" />
      </p>
      <div className="contactButtons">
        <a
          href="https://geops.sh/40003911245CB34786"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="button">
            <FormattedMessage id="generic.Newsletter" />
          </button>
        </a>
        <a
          href="https://twitter.com/mapsetio"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="button twitter-button">
            <img className="twitter" src={twitter} alt="twitter" />
            <FormattedMessage id="generic.Besuchen Sie uns auf Twitter" />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
