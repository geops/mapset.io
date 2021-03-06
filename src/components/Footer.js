import React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import geOps from '../../static/img/geOps_logo_white.png';

const Footer = class extends React.Component {
  state = {
    locale: this.props.locale,
    messages: this.props.messages,
  };

  render() {
    return (
      <IntlProvider locale={this.state.locale} messages={this.state.messages}>
        <footer className="footer">
          <div className="expander">
            <a
              className="footerlink"
              href="https://geops.de/node/182?language=en"
            >
              <FormattedMessage id="generic.privacyPolicy" />
            </a>
          </div>
          <div>
            <span className="is-bolder title">mapset </span>
            <span className="d-inline d-md-none">
              <br />
            </span>
            <span className="is-smaller">
              <FormattedMessage id="generic.powered by" />{' '}
            </span>
          </div>
          <div>
            <img className="logo" src={geOps} alt="" />
          </div>
        </footer>
      </IntlProvider>
    );
  }
};

export default Footer;
