import React from 'react';
import { FormattedMessage } from 'react-intl';
import twitter from '../img/social/Twitter_Logo_Blue.svg';

function Contact({ region }) {
  return (
    <div className="contactForm">
      <h1 className="is-bolder contactHeader section-title">
        <FormattedMessage id="content.contact header" />
      </h1>
      <p>
        <FormattedMessage id="content.contact description" />
      </p>
      <div className="contactButtons">
        <a
          href={
            region === 'ch'
              ? 'https://geops.sh/6E83A54F98A4E7532'
              : 'https://geops.sh/40003911245CB34786'
          }
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="button">
            <FormattedMessage id="generic.Newsletter" />
          </button>
        </a>
        <a
          href={
            region === 'ch'
              ? 'https://twitter.com/mapsetch'
              : 'https://twitter.com/mapsetio'
          }
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
