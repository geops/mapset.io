import React, { useEffect, useState } from "react";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";

function windowSupport(feature) {
  return typeof window !== "undefined" && window[feature];
}

export default function SiteSwitcher({ region }) {
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const disabled = windowSupport("localStorage")
      ? window.localStorage.getItem("mapset-site-switcher-disabled")
      : "true";
    const userRegion =
      windowSupport("navigator") &&
      window.navigator.languages.some((lng) => lng.includes("CH"))
        ? "ch"
        : "eu";
    setIsOpen(disabled !== "true" && region !== userRegion);
  }, [region]);

  const disableSwitcher = () => {
    localStorage.setItem("mapset-site-switcher-disabled", "true");
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="site-switcher-dialog" onClick={() => setIsOpen(false)}>
        <div className="site-switcher-dialog-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35.141"
            height="35.141"
            viewBox="0 0 35.141 35.141"
            className="site-switcher-dialog-icon"
          >
            <circle
              cx="17.571"
              cy="17.571"
              r="17.571"
              transform="translate(0 0)"
              fill="#1789c9"
            />
            <g transform="translate(3.888 3.495)">
              <rect
                width="27.173"
                height="27.173"
                transform="translate(0.001 0.836)"
                fill="none"
              />
              <path
                d="M78.473,236.305h27.174v27.174H78.473Z"
                transform="translate(-78.473 -235.47)"
                fill="none"
              />
              <path
                d="M78.473,236.43h27.174V263.6H78.473Z"
                transform="translate(-78.473 -235.453)"
                fill="none"
              />
              <g transform="translate(0.001 0)">
                <rect
                  width="27.173"
                  height="27.173"
                  transform="translate(0 0.836)"
                  fill="none"
                />
                <rect
                  width="27.072"
                  height="27.072"
                  transform="translate(0.05)"
                  fill="none"
                />
              </g>
              <circle
                cx="3.146"
                cy="3.146"
                r="3.146"
                transform="translate(10.442 9.264)"
                fill="none"
                stroke="#fff"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                d="M99.685,247.522c0,6.748-7.116,12.2-8.248,12.2s-8.247-5.479-8.247-12.2a8.248,8.248,0,1,1,16.5,0Z"
                transform="translate(-77.849 -235.077)"
                fill="none"
                stroke="#fff"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </g>
          </svg>
          <button
            className="site-switcher-dialog-close"
            onClick={disableSwitcher}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g>
                <rect width="24" height="24" fill="none" />
              </g>
              <line
                x1="8"
                y2="8"
                transform="translate(8 8)"
                fill="none"
                stroke="#353535"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <line
                x2="8"
                y2="8"
                transform="translate(8 8)"
                fill="none"
                stroke="#353535"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </svg>
          </button>

          <div className="site-switcher-dialog-title">
            <FormattedMessage id="siteSwitcher.title" />
          </div>
          <div className="site-switcher-dialog-content">
            <FormattedHTMLMessage
              id={region === "ch" ? "siteSwitcher.goEU" : "siteSwitcher.goCH"}
            />
          </div>
          <a
            className="site-switcher-dialog-button btn blue-btn"
            href={region === "ch" ? "https://mapset.io" : "https://mapset.ch"}
          >
            <FormattedMessage
              id={
                region === "ch"
                  ? "siteSwitcher.buttonEU"
                  : "siteSwitcher.buttonCH"
              }
            />
          </a>
        </div>
      </div>
    )
  );
}
