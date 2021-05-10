import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import contact from '../data/contact.json';

function EmailButton({ mode }) {
  return (
    <a href={`mailto:${contact.email}?subject=${contact.emailSubject} ${mode}`}>
      <button className="btn blue-btn">
        <FormattedMessage id="generic.request" />
      </button>
    </a>
  );
}

EmailButton.defaultProps = {
  mode: '',
};

EmailButton.propTypes = {
  mode: PropTypes.string,
};

export default EmailButton;
