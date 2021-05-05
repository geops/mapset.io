import React from 'react';
import PropTypes from 'prop-types';
import contact from '../data/contact.json';

function ContactButton({ mode }) {
  return (
    <a href={`/contact?mode=${mode}`}>
      <button className="btn blue-btn">request</button>
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
