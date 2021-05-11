import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import contact from '../data/contact.json';

function ContactButton({ mode }) {
  return (
    <a href={`./contact?mode=${mode}`}>
      <button className="btn blue-btn">
        <FormattedMessage id="generic.request" />
      </button>
    </a>
  );
}

ContactButton.defaultProps = {
  mode: '',
};

ContactButton.propTypes = {
  mode: PropTypes.string,
};

export default ContactButton;
