import React from "react";
import { FormattedMessage } from "react-intl";

const TOP_MARGIN = 200;

const Scroller = () => {
  useEffect(() => {
    const handleScroll = () => {
      const benefitsScroller = document.getElementById("benefitsScroller");
      const priceScroller = document.getElementById("priceScroller");
      const contactScroller = document.getElementById("contactScroller");
      const licenseScroller = document.getElementById("licenseScroller");
      const scroller = document.getElementById("scroller");
      const scrollerContainer = document.getElementById("scrollerContainer");
      if (
        document.getElementById("benefits").getBoundingClientRect().top -
          TOP_MARGIN >
        0
      ) {
        benefitsScroller.classList.remove("active");
        priceScroller.classList.remove("active");
        contactScroller.classList.remove("active");
        licenseScroller.classList.remove("active");
      } else if (
        document.getElementById("price").getBoundingClientRect().top -
          TOP_MARGIN >
        0
      ) {
        benefitsScroller.classList.add("active");
        priceScroller.classList.remove("active");
        contactScroller.classList.remove("active");
        licenseScroller.classList.remove("active");
      } else if (
        document.getElementById("contact").getBoundingClientRect().top -
          TOP_MARGIN >
        0
      ) {
        priceScroller.classList.add("active");
        benefitsScroller.classList.remove("active");
        contactScroller.classList.remove("active");
        licenseScroller.classList.remove("active");
      } else if (
        document.getElementById("license").getBoundingClientRect().top -
          TOP_MARGIN >
        0
      ) {
        contactScroller.classList.add("active");
        benefitsScroller.classList.remove("active");
        priceScroller.classList.remove("active");
        licenseScroller.classList.remove("active");
      } else if (
        document.getElementById("impressum").getBoundingClientRect().bottom -
          window.innerHeight >
        0
      ) {
        contactScroller.classList.remove("active");
        benefitsScroller.classList.remove("active");
        priceScroller.classList.remove("active");
        licenseScroller.classList.add("active");
      } else {
        licenseScroller.classList.add("active");
        benefitsScroller.classList.remove("active");
        priceScroller.classList.remove("active");
        contactScroller.classList.remove("active");
      }
      //console.log(
      //  "scroller position: " + scroller.getBoundingClientRect().top
      //);
      //console.log(window.innerHeight);
      if (!scroller.classList.contains("fixed")) {
        if (scroller.getBoundingClientRect().top < 0) {
          let leftMargin = document
            .getElementById("scroller")
            .getBoundingClientRect().left;
          scroller.classList.add("fixed");
          scroller.style.left = leftMargin + "px";
        }
      } else {
        if (scrollerContainer.getBoundingClientRect().top > 0) {
          scroller.classList.remove("fixed");
          scroller.style.left = "5rem";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroller" id="scrollerContainer">
      <div className="thinColumnScroller" id="scroller">
        <a className="navbar-item" href="#benefits" id="benefitsScroller">
          <svg
            className="listNavImage"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M24 24H0V0h24v24z" />
            <circle fill="currentColor" cx="12" cy="12" r="8" />
          </svg>
          <span>
            <FormattedMessage id="generic.Benefits" />
          </span>
        </a>
        <a className="navbar-item" href="#price" id="priceScroller">
          <svg
            className="listNavImage"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M24 24H0V0h24v24z" />
            <circle fill="currentColor" cx="12" cy="12" r="8" />
          </svg>
          <span>
            <FormattedMessage id="generic.Preise" />
          </span>
        </a>
        <a className="navbar-item" href="#contact" id="contactScroller">
          <svg
            className="listNavImage"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M24 24H0V0h24v24z" />
            <circle fill="currentColor" cx="12" cy="12" r="8" />
          </svg>
          <span>
            <FormattedMessage id="generic.Kontakt" />
          </span>
        </a>
        <a className="navbar-item" href="#license" id="licenseScroller">
          <svg
            className="listNavImage"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M24 24H0V0h24v24z" />
            <circle fill="currentColor" cx="12" cy="12" r="8" />
          </svg>
          <span>
            <FormattedMessage id="generic.Lizenz" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Scroller;
