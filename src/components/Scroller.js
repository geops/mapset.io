import React from 'react';
import { FormattedMessage } from 'react-intl';

const Scroller = class extends React.Component {
  TOP_MARGIN = 200;
  SCROLLER_POSITION = 500;

  handleScroll = () => {
    if (
      document.getElementById('benefits').getBoundingClientRect().top -
        this.TOP_MARGIN >
      0
    ) {
      this.benefitsScroller.classList.remove('active');
      this.featureScroller.classList.remove('active');
      this.priceScroller.classList.remove('active');
      this.contactScroller.classList.remove('active');
      this.licenseScroller.classList.remove('active');
    } else if (
      document.getElementById('features').getBoundingClientRect().top -
        this.TOP_MARGIN >
      0
    ) {
      this.benefitsScroller.classList.add('active');
      this.featureScroller.classList.remove('active');
      this.priceScroller.classList.remove('active');
      this.contactScroller.classList.remove('active');
      this.licenseScroller.classList.remove('active');
    } else if (
      document.getElementById('price').getBoundingClientRect().top -
        this.TOP_MARGIN >
      0
    ) {
      this.featureScroller.classList.add('active');
      this.benefitsScroller.classList.remove('active');
      this.priceScroller.classList.remove('active');
      this.contactScroller.classList.remove('active');
      this.licenseScroller.classList.remove('active');
    } else if (
      document.getElementById('contact').getBoundingClientRect().top -
        this.TOP_MARGIN >
      0
    ) {
      this.priceScroller.classList.add('active');
      this.benefitsScroller.classList.remove('active');
      this.featureScroller.classList.remove('active');
      this.contactScroller.classList.remove('active');
      this.licenseScroller.classList.remove('active');
    } else if (
      document.getElementById('license').getBoundingClientRect().top -
        this.TOP_MARGIN >
      0
    ) {
      this.contactScroller.classList.add('active');
      this.benefitsScroller.classList.remove('active');
      this.featureScroller.classList.remove('active');
      this.priceScroller.classList.remove('active');
      this.licenseScroller.classList.remove('active');
    } else if (
      document.getElementById('impressum').getBoundingClientRect().bottom -
        window.innerHeight >
      0
    ) {
      this.contactScroller.classList.remove('active');
      this.benefitsScroller.classList.remove('active');
      this.featureScroller.classList.remove('active');
      this.priceScroller.classList.remove('active');
      this.licenseScroller.classList.add('active');
    } else {
      this.licenseScroller.classList.add('active');
      this.benefitsScroller.classList.remove('active');
      this.featureScroller.classList.remove('active');
      this.priceScroller.classList.remove('active');
      this.contactScroller.classList.remove('active');
    }
    //console.log(
    //  "scroller position: " + this.scroller.getBoundingClientRect().top
    //);
    //console.log(window.innerHeight);
    if (!this.scroller.classList.contains('fixed')) {
      if (this.scroller.getBoundingClientRect().top < 0) {
        let leftMargin = document
          .getElementById('scroller')
          .getBoundingClientRect().left;
        this.scroller.classList.add('fixed');
        this.scroller.style.left = leftMargin + 'px';
      }
    } else {
      if (this.scrollerContainer.getBoundingClientRect().top > 0) {
        this.scroller.classList.remove('fixed');
        this.scroller.style.left = '5rem';
      }
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.benefitsScroller = document.getElementById('benefitsScroller');
    this.featureScroller = document.getElementById('featureScroller');
    this.priceScroller = document.getElementById('priceScroller');
    this.contactScroller = document.getElementById('contactScroller');
    this.licenseScroller = document.getElementById('licenseScroller');
    this.scroller = document.getElementById('scroller');
    this.scrollerContainer = document.getElementById('scrollerContainer');
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
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
          <a className="navbar-item" href="#features" id="featureScroller">
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
              <FormattedMessage id="generic.So funktioniert's" />
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
  }
};

export default Scroller;
