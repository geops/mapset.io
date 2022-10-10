import React, { useState, useMemo } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Layout from '../components/Layout';
import { Remarkable } from 'remarkable';
import Scroller from '../components/Scroller';
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';
import Imprint from '../components/Imprint';
import SiteSwitcher from '../components/SiteSwitcher';
import userManager from '../utils/userManager';

import layout_bg_1 from '../img/layoutBG_1.png';
import layout_bg_2 from '../img/layoutBG_2.png';
import layout_bg_3 from '../img/layoutBG_3.png';

import mapset_banner from '../img/Mapset_Logo.svg';

import mapset_element from '../img/Mapset_Element.svg';
import card_view_triple from '../../static/img/screens_perspective.png';
import card_view_single from '../../static/img/showcase.png';

// import benefits and features data, for the language needed
import fr_benefits from '../data/benefits/fr.json';
import de_benefits from '../data/benefits/de.json';
import en_benefits from '../data/benefits/en.json';

import fr_features from '../data/features/fr.json';
import de_features from '../data/features/de.json';
import en_features from '../data/features/en.json';

import fr_prices from '../data/prices/fr.json';
import de_prices from '../data/prices/de.json';
import en_prices from '../data/prices/en.json';

// import license information
import fr_license from '../data/license/fr.json';
import de_license from '../data/license/de.json';
import en_license from '../data/license/en.json';

const accordionHandler = function (id) {
  let item = document.getElementsByName(id)[0];
  if (item.classList.contains('is-expanded')) {
    item.classList.remove('is-expanded');
  } else {
    item.classList.add('is-expanded');
  }
};

if (
  typeof window !== `undefined` &&
  !/(admin|signin|signout|silent)/.test(window.location.pathname)
) {
  userManager
    .signinSilent()
    .then((user) => {
      window.localStorage.setItem('userNickname', user.profile.nickname);
    })
    .catch((error) => {
      console.log(error);
    });
}
export const IndexPageTemplate = ({ locale, region }) => {
  let benefits;
  let features;
  let prices;
  let licenseInformation;
  switch (locale) {
    case 'fr': {
      benefits = fr_benefits.benefits;
      features = fr_features.features;
      prices = fr_prices.prices;
      licenseInformation = fr_license.license;
      break;
    }
    case 'de': {
      benefits = de_benefits.benefits;
      features = de_features.features;
      prices = de_prices.prices;
      licenseInformation = de_license.license;
      break;
    }
    default: {
      benefits = en_benefits.benefits;
      features = en_features.features;
      prices = en_prices.prices;
      licenseInformation = en_license.license;
      break;
    }
  }
  let md = new Remarkable();
  md.set({
    html: true,
    breaks: true,
  });

  const guideLink = useMemo(() => {
    return typeof window !== "undefined" && `${window.location.origin}${window.location.pathname}guide`
  });

  return (
    <div style={{ position: 'relative' }}>
      <SiteSwitcher region={region} />
      <section className="topSection">
        <div className="container">
          <div className="row is-white">
            <div className="col-12 col-md-6">
              <div className="scrollNav row d-none d-md-flex">
                <a className="navbar-item" href="#benefits">
                  <FormattedMessage id="generic.Benefits" />
                </a>
                <a className="navbar-item" href="#features">
                  <FormattedMessage id="generic.So funktioniert's" />
                </a>
                <a className="navbar-item" href="#price">
                  <FormattedMessage id="generic.Preise" />
                </a>
                <a className="navbar-item" href="#contact">
                  <FormattedMessage id="generic.Kontakt" />
                </a>
                <a className="navbar-item" href="#license">
                  <FormattedMessage id="generic.Lizenz" />
                </a>
              </div>
              <div className="headerDescription">
                <h2>
                  <FormattedMessage id="content.page header" />
                </h2>
                <img
                  className="mapsetElementSmall"
                  src={mapset_element}
                  alt=""
                />
                <p>
                  <FormattedMessage id="content.page header description" />
                </p>
                <div className="alignContainer row">
                  <a
                    href={
                      region === 'ch'
                        ? 'https://editor.mapset.ch'
                        : 'https://editor.mapset.io'
                    }
                    target="editor-mapset"
                    rel="noopener noreferrer"
                  >
                    <button className="btn">
                      <FormattedMessage id="generic.Demo" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 order-md-first">
              <div className="row">
                <div className="headerBadge d-none d-md-block">
                  <img className="main-heading" src={mapset_banner} alt="" />
                </div>
              </div>
              <div className="cardViewContainer">
                <img className="cardViewTriple" src={card_view_triple} alt="" />
                <img
                  className="mapsetElementLarge d-md-inline"
                  src={mapset_element}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>{' '}
      {/* top section */}
      <Scroller />
      <section className="benefitsSection" id="benefits">
        <img
          className="backgroundImage aboveBenefitsSection"
          src={layout_bg_1}
          alt=""
        />
        <div className="benefitsSectionContent">
          <div className="cardViewSection">
            <div className="cardViewContainer">
              <img className="cardViewSingle" src={card_view_single} alt="" />
            </div>
          </div>
          <div className="container">
            <h1 className="is-bolder benefitsHeader rightColumn">
              <FormattedMessage id="generic.Benefits" />
            </h1>
            <div className="cardViewSpacer" />
            <div className="accordion rightColumn">
              {benefits &&
                benefits.map((benefit, id) => (
                  <div
                    className="accordion-item is-expanded"
                    key={'benefit_' + id}
                    name={'benefit_' + id}
                  >
                    <h5 className="item-head">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: md.render(benefit.heading),
                        }}
                      />
                    </h5>
                    <div className="content">
                      <p>{benefit.text}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>{' '}
      {/* benefits section */}
      <img className="backgroundImage greyBack" src={layout_bg_2} alt="" />
      <section className="featureSection" id="features">
        <div className="container">
          <div className="rightColumn">
            <h1 className="is-bolder featuresHeader">
              <FormattedMessage id="generic.So funktioniert's" />
            </h1>
            <p>
              <FormattedMessage id="content.specification description" />
            </p>
            <div className="accordion">
              {features &&
                features.map((feature, id) => (
                  <div
                    className="accordion-item"
                    key={'feature_' + id}
                    name={'feature_' + id}
                  >
                    <button onClick={() => accordionHandler('feature_' + id)}>
                      <h5 className="item-head">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: md.render(feature.heading),
                          }}
                        />
                        <svg
                          className="accordionStateImage plus"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                            fill="currentColor"
                          />
                          <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                        <svg
                          className="accordionStateImage minus"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 13H5v-2h14v2z" fill="currentColor" />
                          <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                      </h5>
                    </button>
                    <div className="content">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: md.render(feature.text),
                        }}
                      />
                    </div>
                  </div>
                ))}
            </div>
            <p>
              <FormattedMessage
                id="content.specification user-manual"
                values={{
                  a: (
                    <a
                      href={guideLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FormattedMessage id="guide.link-user-manual" />
                    </a>
                  ),
                }}
              />
            </p>
          </div>
        </div>
      </section>{' '}
      {/* specification section */}
      <img
        className="backgroundImage abovePriceSection"
        src={layout_bg_3}
        alt=""
      />
      <section className="priceSection" id="price">
        <div className="container">
          <div className="rightColumn">
            <h1 className="is-bolder priceHeader">
              <FormattedMessage id="generic.Preise" />
            </h1>
            <p>
              <FormattedMessage id="content.price description" />
            </p>

            <div className="priceCardArea row">
              {prices &&
                prices.map((price, id) => (
                  <div
                    key={'price_' + id}
                    name={'price_' + id}
                    className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
                  >
                    <div className="priceCard">
                      <div className="priceCardHeader">
                        <div className="padder">
                          <span className="is-bolder title">mapset</span>
                          <h2 className="is-bolder">{price.tier}</h2>
                        </div>
                        <img
                          className="backgroundImage"
                          src={layout_bg_2}
                          alt=""
                        />
                      </div>
                      <div className="priceCardBody">
                        <div className="desc">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: md.render(price.text),
                            }}
                          />
                        </div>
                        <h2 className="is-bolder">
                          <span>{price.price}</span>
                        </h2>
                        <span className="subtext">
                          <br />
                          <span>
                            {region === 'ch'
                              ? price.subtext.replace('€', 'CHF')
                              : price.subtext}
                          </span>
                          <br />
                          <FormattedHTMLMessage
                            id={
                              region === 'ch'
                                ? 'content.setup fee ch'
                                : 'content.setup fee eu'
                            }
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="conditions">
              <span>
                <FormattedHTMLMessage
                  id={
                    region === 'ch'
                      ? 'content.conditions text ch'
                      : 'content.conditions text eu'
                  }
                />
              </span>
            </div>
          </div>
        </div>
      </section>{' '}
      {/* price section */}
      <img
        className="backgroundImage belowPriceSection"
        src={layout_bg_2}
        alt=""
      />
      <section className="contactSection" id="contact">
        <div className="container">
          <div className="rightColumn">
            <h1 className="is-bolder contactHeader">
              <FormattedMessage id="generic.Kontakt" />
            </h1>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="contactSection">
        <div className="container">
          <div className="rightColumn">
            <Contact region={region} />
          </div>
        </div>
      </section>
      {/* contact section */}
      <section className="licenseSection" id="license">
        <div className="licenseSectionContent">
          <div className="container">
            <h1 className="is-bolder licenseHeader rightColumn">
              <FormattedMessage id="generic.Lizenz" />
            </h1>
            <div className="cardViewSpacer" />
            <div className="accordion rightColumn">
              {licenseInformation &&
                licenseInformation.map((license, id) => (
                  <div
                    className="accordion-item"
                    key={'license_' + id}
                    name={'license_' + id}
                  >
                    <button onClick={() => accordionHandler('license_' + id)}>
                      <h5 className="item-head">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: md.render(license.heading),
                          }}
                        />
                        <svg
                          className="accordionStateImage plus"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                            fill="currentColor"
                          />
                          <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                        <svg
                          className="accordionStateImage minus"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 13H5v-2h14v2z" fill="currentColor" />
                          <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                      </h5>
                    </button>
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{
                        __html: md.render(license.text),
                      }}
                    ></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>{' '}
      {/* license section */}
      <section className="impressumSection" id="impressum">
        <div className="container">
          <div className="rightColumn">
            <h1 className="is-bolder impressumHeader">
              <FormattedMessage id="generic.Imprint" />
            </h1>
            <Imprint />
          </div>
        </div>
      </section>{' '}
      {/* impressum section */}
      <div className="aboveFooter"></div>
    </div>
  );
};

const Index = ({ pageContext: { locale, region } }) => {
  const [user, setUser] = useState(null);

  if (typeof window !== 'undefined' && userManager) {
    userManager.events.addUserLoaded((userr) => {
      setUser(userr);
    });
  }

  return (
    <Layout locale={locale} region={region} user={user}>
      <IndexPageTemplate locale={locale} region={region} />
    </Layout>
  );
};

export default Index;
