"use client";

import React, { useState } from "react";
import layout_bg_2 from "../img/layoutBG_2.png";
import mapset_banner from "../img/Mapset_Logo.svg";
import userManager from "../utils/userManager";
import getUrl, { getPath } from "../utils/routeUtils";
import { useI18n } from "./I18n";
import LoginIcon from "./LoginIcon";
import Link from "next/link";

function Navbar(props) {
  const { t } = useI18n();
  const [active, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState("");

  const login = (event) => {
    event.preventDefault();
    userManager.signinRedirect();
  };

  const logout = () => {
    localStorage.removeItem("userNickname");
    userManager.signoutRedirect();
  };

  const toggleHamburger = (callback = null) => {
    // toggle the active boolean in the state
    setActive(!active);
    // set the class in state for the navbar accordingly
    if (!active) {
      setNavBarActiveClass("is-active");
      document.body.style.position = "fixed";
    } else {
      setNavBarActiveClass("");
      document.body.style.position = "static";
    }
    if (callback) callback();
  };

  const mobileMenuLinkClick = (target) => {
    toggleHamburger(() => {
      // toggle the active boolean in the state
      window.scrollTo(0, document.getElementById(target).offsetTop);
    });
  };

  const { user, navBarClassName, locale, region, path } = props;
  return (
    <nav className={`color-black ${navBarClassName}`}>
      <div className="container">
        <div className="navbar-start">
          <div className="headerBadge d-block d-md-none">
            <img className="main-heading" src={mapset_banner} alt="" />
          </div>
        </div>
        <div className="navbar-end d-block d-md-none">
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
            onKeyPress={(evt) => evt.which === 13 && toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        {/*mobile menu, expanded by hamburger*/}
        <div className={`mobile-menu ${navBarActiveClass} d-block d-md-none`}>
          <div className="mobile-menu-space" />
          <img className="mobileBackgroundImageTop" src={layout_bg_2} alt="" />
          <div className="whiteBack menu-list">
            <a
              className="navbar-item is-bolder"
              href="#benefits"
              onClick={() => mobileMenuLinkClick("benefits")}
            >
              {t("generic.Benefits")}
            </a>
            <a
              className="navbar-item is-bolder"
              href="#price"
              onClick={() => mobileMenuLinkClick("price")}
            >
              {t("generic.Preise")}
            </a>
            <a
              className="navbar-item is-bolder"
              href="#contact"
              onClick={() => mobileMenuLinkClick("contact")}
            >
              {t("generic.Kontakt")}
            </a>
            <a
              className="navbar-item is-bolder"
              href="#license"
              onClick={() => mobileMenuLinkClick("license")}
            >
              {t("generic.Lizenz")}
            </a>
            <span className="h-rule" />
            {user ? (
              <Link
                className="navbar-item is-smaller"
                onClick={(event) => {
                  logout(event);
                }}
                to="/"
              >
                {t("generic.navbar.Logout")}
                {"\u00A0"}
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
                  login(event);
                }}
                to="/"
              >
                <LoginIcon color="#3c89ca" />
                {t("generic.navbar.Login")}
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
            {region === "ch" ? (
              <a href="https://mapset.io">
                {t(`generic.navbar.international`)}
              </a>
            ) : (
              t(`generic.navbar.international`)
            )}
            <div className="mobile-menu-site-switcher-divider" />
            {region === "ch" ? (
              t(`generic.navbar.swiss`)
            ) : (
              <a href="https://mapset.ch">{t(`generic.navbar.swiss`)}</a>
            )}
          </div>
          <div className="mobile-menu-language-switcher">
            {locale === "en" ? (
              "EN"
            ) : (
              <a href={getPath(path, region, "en")}>EN</a>
            )}
            <div className="mobile-menu-site-switcher-divider" />
            {locale === "fr" ? (
              "FR"
            ) : (
              <a href={getPath(path, region, "fr")}>FR</a>
            )}
            <div className="mobile-menu-site-switcher-divider" />
            {locale === "de" ? (
              "DE"
            ) : (
              <a href={getPath(path, region, "de")}>DE</a>
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
                {locale === "en" ? (
                  "EN"
                ) : (
                  <a href={getPath(path, region, "en")}>EN</a>
                )}
              </div>
              <div>
                {locale === "fr" ? (
                  "FR"
                ) : (
                  <a href={getPath(path, region, "fr")}>FR</a>
                )}
              </div>
              <div>
                {locale === "de" ? (
                  "DE"
                ) : (
                  <a href={getPath(path, region, "de")}>DE</a>
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
                {region === "ch" ? (
                  <a href="https://mapset.io">
                    {t("generic.navbar.international")}
                  </a>
                ) : (
                  t("generic.navbar.international")
                )}
              </div>
              <div>
                {region === "ch" ? (
                  t("generic.navbar.swiss")
                ) : (
                  <a href="https://mapset.ch">{t("generic.navbar.swiss")}</a>
                )}
              </div>
            </div>
            <div className="navbar-item link-user-manual">
              <a
                href={getUrl(getPath("/guide", region, locale))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18}>
                  <path
                    style={{
                      fill: "none",
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      stroke: "#fff",
                      strokeOpacity: 1,
                      strokeMiterlimit: 4,
                    }}
                    d="M12 13.998c0-1.998 1.576-2.332 2.121-2.877A2.968 2.968 0 0 0 15 9c0-1.658-1.342-3-3-3-.896 0-1.7.393-2.25 1.014a3.148 3.148 0 0 0-.586.996M12 16.998h0"
                    transform="scale(.75)"
                  />
                  <path
                    style={{
                      fill: "none",
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      stroke: "#fff",
                      strokeOpacity: 1,
                      strokeMiterlimit: 4,
                    }}
                    d="M22.002 12A10 10 0 0 1 12 22.002 10 10 0 0 1 1.998 12 10 10 0 0 1 12 1.998 10 10 0 0 1 22.002 12Zm0 0"
                    transform="scale(.75)"
                  />
                </svg>
                {t("guide.link-user-manual")}
              </a>
            </div>
            {user ? (
              <Link
                className="navbar-item is-smaller"
                onClick={(event) => {
                  logout(event);
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
                {t("generic.navbar.Logout")}
                {"\u00A0"}
                {user.profile.nickname}
              </Link>
            ) : (
              <Link
                className="navbar-item"
                onClick={(event) => {
                  login(event);
                }}
                to="/"
              >
                <LoginIcon />

                {t("generic.navbar.Login")}
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
