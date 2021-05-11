import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

function ContactButton() {
  return (
    <div className="contact-button">
      <a href={`./contact`}>
        <button className="btn">
          <FormattedMessage id="generic.request" />
        </button>
      </a>
    </div>
  );
}

ContactButton.defaultProps = {
  mode: '',
};

ContactButton.propTypes = {
  mode: PropTypes.string,
};

export default ContactButton;
