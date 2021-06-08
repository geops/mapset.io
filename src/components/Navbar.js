import React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { Link } from 'gatsby';

import layout_bg_2 from '../img/layoutBG_2.png';
import mapset_banner from '../img/Mapset_Logo.svg';
import userManager from '../utils/userManager';

function LoginIcon({ color = '#fff' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
    >
      <g transform="translate(-1073.416 -336.954)">
        <g transform="translate(1073.416 336.954)">
          <rect width="17" height="17" fill="none" />
        </g>
        <line
          x2="7.083"
          transform="translate(1076.25 345.454)"
          fill="none"
          stroke={color}
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M1084.581,345.285l2.6,2.6-2.6,2.6"
          transform="translate(-3.257 -2.43)"
          fill="none"
          stroke={color}
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M1081.416,342.789v-2.121a.709.709,0,0,1,.708-.708h7.084a.709.709,0,0,1,.708.708V352a.708.708,0,0,1-.708.708h-7.084a.708.708,0,0,1-.708-.708v-2.125"
          transform="translate(-2.333 -0.876)"
          fill="none"
          stroke={color}
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: this.props.locale,
      messages: this.props.messages,
      active: false,
      navBarActiveClass: '',
    };
  }

  login = (event) => {
    event.preventDefault();
    userManager.signinRedirect();
  };

  logout = (event) => {
    localStorage.removeItem('userNickname');
    userManager.signoutRedirect();
  };

  toggleHamburger = (callback = null) => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        if (this.state.active) {
          this.setState({
            navBarActiveClass: 'is-active',
          });
          document.body.style.position = 'fixed';
        } else {
          this.setState({
            navBarActiveClass: '',
          });
          document.body.style.position = 'static';
        }
        if (callback) callback();
      },
    );
  };

  mobileMenuLinkClick = (target) => {
    this.toggleHamburger(() => {
      // toggle the active boolean in the state
      window.scrollTo(0, document.getElementById(target).offsetTop);
    });
  };

  render() {
    const { user, navBarClassName, locale, region } = this.props;
    return (
      <IntlProvider locale={this.state.locale} messages={this.state.messages}>
        <nav
          className={`navbar ${navBarClassName}`}
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-start">
              <div className="headerBadge d-block d-md-none">
                <img className="main-heading" src={mapset_banner} alt="" />
              </div>
            </div>
            <div className="navbar-end d-block d-md-none">
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            {/*mobile menu, expanded by hamburger*/}
            <div
              className={`mobile-menu ${this.state.navBarActiveClass} d-block d-md-none`}
            >
              <div className="mobile-menu-space" />
              <img
                className="mobileBackgroundImageTop"
                src={layout_bg_2}
                alt=""
              />
              <div className="whiteBack menu-list">
                <a
                  className="navbar-item is-bolder"
                  href="#benefits"
                  onClick={() => this.mobileMenuLinkClick('benefits')}
                >
                  <FormattedMessage id="generic.Benefits" />
                </a>
                <a
                  className="navbar-item is-bolder"
                  href="#features"
                  onClick={() => this.mobileMenuLinkClick('features')}
                >
                  <FormattedMessage id="generic.So funktioniert's" />
                </a>
                <a
                  className="navbar-item is-bolder"
                  href="#price"
                  onClick={() => this.mobileMenuLinkClick('price')}
                >
                  <FormattedMessage id="generic.Preise" />
                </a>
                <a
                  className="navbar-item is-bolder"
                  href="#contact"
                  onClick={() => this.mobileMenuLinkClick('contact')}
                >
                  <FormattedMessage id="generic.Kontakt" />
                </a>
                <a
                  className="navbar-item is-bolder"
                  href="#license"
                  onClick={() => this.mobileMenuLinkClick('license')}
                >
                  <FormattedMessage id="generic.Lizenz" />
                </a>
                <span className="h-rule" />
                {user ? (
                  <Link
                    className="navbar-item is-smaller"
                    onClick={(event) => {
                      this.logout(event);
                    }}
                    to="/"
                  >
                    <FormattedMessage id={`generic.navbar.Logout`} />
                    {'\u00A0'}
                    {user.profile.nickname}
                    <svg
                      className="icon is-small"
                      width="24"
                      height="24"
                      viewBox="0 0 144 144"
                      fill="#3c89ca"
                    >
                      <polygon
                        id="XMLID_4_"
                        points="99.2,17 99.2,51.6 140.6,51.6 140.6,92.9 99.2,92.9 99.2,127.3 36.9,72.2 "
                      />
                      <path
                        id="XMLID_8_"
                        d="M2.4,105.5V38.9C2.4,26.8,12.2,17,24.3,17h33.5v20.6H27.5c-2.3,0-4.2,1.9-4.2,4.2v60.6c0,2.3,1.9,4.2,4.2,4.2h30.3v20.8H24.3C12.2,127.3,2.4,117.6,2.4,105.5z"
                      />
                    </svg>
                  </Link>
                ) : (
                  <Link
                    className="navbar-item is-smaller"
                    onClick={(event) => {
                      this.login(event);
                    }}
                    to="/"
                  >
                    <LoginIcon color="#3c89ca" />
                    <FormattedMessage id="generic.navbar.Login" />
                  </Link>
                )}
              </div>
              <img
                className="mobileBackgroundImageBottom"
                src={layout_bg_2}
                alt=""
              />
              <div className="mobile-menu-bottom-space" />
              <div className="mobile-menu-site-switcher">
                {region === 'ch' ? (
                  <a href="https://mapset.io">
                    <FormattedMessage id={`generic.navbar.international`} />
                  </a>
                ) : (
                  <FormattedMessage id={`generic.navbar.international`} />
                )}
                <div className="mobile-menu-site-switcher-divider" />
                {region === 'ch' ? (
                  <FormattedMessage id={`generic.navbar.swiss`} />
                ) : (
                  <a href="https://mapset.ch">
                    <FormattedMessage id={`generic.navbar.swiss`} />
                  </a>
                )}
              </div>
              <div className="mobile-menu-language-switcher">
                {locale === 'en' ? (
                  'EN'
                ) : (
                  <a href={region === 'ch' ? '/en/' : '/'}>EN</a>
                )}
                <div className="mobile-menu-site-switcher-divider" />
                {locale === 'fr' ? 'FR' : <a href="/fr/">FR</a>}
                <div className="mobile-menu-site-switcher-divider" />
                {locale === 'de' ? (
                  'DE'
                ) : (
                  <a href={region === 'ch' ? '/' : '/de/'}>DE</a>
                )}
              </div>
            </div>
            <div id="navMenu" className="navbar-menu d-none d-md-block">
              <div className="navbar-end has-text-centered">
                <div className="navbar-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.578"
                    height="15.578"
                    viewBox="0 0 15.578 15.578"
                  >
                    <g transform="translate(-1080.208 -25.21)">
                      <path
                        d="M84.117,346.993a7.014,7.014,0,0,1-4.787,6.664,6.908,6.908,0,0,1-2.252.375,6.662,6.662,0,0,1-2.245-.375,7.027,7.027,0,0,1,0-13.327,6.662,6.662,0,0,1,2.245-.375,6.908,6.908,0,0,1,2.252.375,7.014,7.014,0,0,1,4.787,6.664Z"
                        transform="translate(1010.919 -313.994)"
                        fill="none"
                        stroke="#fff"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M81.58,346.993a21.863,21.863,0,0,1-.149,2.534,13.3,13.3,0,0,1-1.118,4.13,6.908,6.908,0,0,1-2.252.375,6.662,6.662,0,0,1-2.245-.375,13.3,13.3,0,0,1-1.118-4.13,21.681,21.681,0,0,1,0-5.068,13.3,13.3,0,0,1,1.118-4.13,6.662,6.662,0,0,1,2.245-.375,6.908,6.908,0,0,1,2.252.375,13.3,13.3,0,0,1,1.118,4.13A21.864,21.864,0,0,1,81.58,346.993Z"
                        transform="translate(1009.937 -313.994)"
                        fill="none"
                        stroke="#fff"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M84.117,348.189a7.086,7.086,0,0,1-.2,1.689,14.869,14.869,0,0,1-3.465.845,26.947,26.947,0,0,1-6.734,0,14.843,14.843,0,0,1-3.473-.845,7.119,7.119,0,0,1,0-3.379,14.846,14.846,0,0,1,3.473-.845,26.951,26.951,0,0,1,6.734,0,14.872,14.872,0,0,1,3.465.845A7.086,7.086,0,0,1,84.117,348.189Z"
                        transform="translate(1010.919 -315.189)"
                        fill="none"
                        stroke="#fff"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                      />
                    </g>
                  </svg>
                  <div>
                    {locale === 'en' ? (
                      'EN'
                    ) : (
                      <a href={region === 'ch' ? '/en/' : '/'}>EN</a>
                    )}
                  </div>
                  <div>{locale === 'fr' ? 'FR' : <a href="/fr/">FR</a>}</div>
                  <div>
                    {locale === 'de' ? (
                      'DE'
                    ) : (
                      <a href={region === 'ch' ? '/' : '/de/'}>DE</a>
                    )}
                  </div>
                </div>
                <div className="navbar-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.199"
                    height="17.818"
                    viewBox="0 0 17.199 17.818"
                  >
                    <rect
                      width="17.199"
                      height="17.199"
                      transform="translate(0.001 0.529)"
                      fill="none"
                    />
                    <path
                      d="M78.473,236.305h17.2v17.2h-17.2Z"
                      transform="translate(-78.473 -235.776)"
                      fill="none"
                    />
                    <path
                      d="M78.473,236.43h17.2v17.2h-17.2Z"
                      transform="translate(-78.473 -235.812)"
                      fill="none"
                    />
                    <g transform="translate(0.001 0)">
                      <rect
                        width="17.199"
                        height="17.199"
                        transform="translate(0 0.529)"
                        fill="none"
                      />
                      <rect
                        width="17.135"
                        height="17.135"
                        transform="translate(0.032)"
                        fill="none"
                      />
                    </g>
                    <circle
                      cx="1.991"
                      cy="1.991"
                      r="1.991"
                      transform="translate(6.609 5.863)"
                      fill="none"
                      stroke="#fff"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M93.63,244.495c0,4.271-4.5,7.724-5.221,7.724s-5.22-3.468-5.22-7.724a5.22,5.22,0,1,1,10.441,0Z"
                      transform="translate(-79.809 -236.618)"
                      fill="none"
                      stroke="#fff"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <div>
                    {region === 'ch' ? (
                      <a href="https://mapset.io">
                        <FormattedMessage id={`generic.navbar.international`} />
                      </a>
                    ) : (
                      <FormattedMessage id={`generic.navbar.international`} />
                    )}
                  </div>
                  <div>
                    {region === 'ch' ? (
                      <FormattedMessage id={`generic.navbar.swiss`} />
                    ) : (
                      <a href="https://mapset.ch">
                        <FormattedMessage id={`generic.navbar.swiss`} />
                      </a>
                    )}
                  </div>
                </div>
                {user ? (
                  <Link
                    className="navbar-item is-smaller"
                    onClick={(event) => {
                      this.logout(event);
                    }}
                    to="/"
                  >
                    <svg
                      className="icon is-small"
                      width="24"
                      height="24"
                      viewBox="0 0 144 144"
                      fill="white"
                    >
                      <polygon
                        id="XMLID_4_"
                        points="99.2,17 99.2,51.6 140.6,51.6 140.6,92.9 99.2,92.9 99.2,127.3 36.9,72.2 "
                      />
                      <path
                        id="XMLID_8_"
                        d="M2.4,105.5V38.9C2.4,26.8,12.2,17,24.3,17h33.5v20.6H27.5c-2.3,0-4.2,1.9-4.2,4.2v60.6c0,2.3,1.9,4.2,4.2,4.2h30.3v20.8H24.3C12.2,127.3,2.4,117.6,2.4,105.5z"
                      />
                    </svg>
                    <FormattedMessage id={`generic.navbar.Logout`} />
                    {'\u00A0'}
                    {user.profile.nickname}
                  </Link>
                ) : (
                  <Link
                    className="navbar-item"
                    onClick={(event) => {
                      this.login(event);
                    }}
                    to="/"
                  >
                    <LoginIcon />

                    <FormattedMessage id="generic.navbar.Login" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </IntlProvider>
    );
  }
}

export default Navbar;
