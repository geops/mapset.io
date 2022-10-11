import React, { useMemo, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import isSvg from 'is-svg';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import { Remarkable } from 'remarkable';
import userManager from '../utils/userManager';

import mapset_banner from '../img/Mapset_Logo.svg';
import Warning from '../assets/warning.svg';

import de_guide from '../data/guide/de.json';
import en_guide from '../data/guide/en.json';
import getUrl from '../utils/getUrl';

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

const renderId = (label) => {
  if (label) {
    return label.toLowerCase().replace(/\s/g, '');
  }
  return null;
};

const renderScrollerId = (label) => {
  if (label) {
    return `scroller-${label.toLowerCase().replace(/\s/g, '')}`;
  }
  return null;
};

export const GuidePage = ({ locale, region }) => {
  const [icons, setIcons] = useState([]);
  let guideContent;
  switch (locale) {
    case 'de': {
      guideContent = de_guide.features;
      break;
    }
    default: {
      guideContent = en_guide.features;
      break;
    }
  }

  const titles = useMemo(() => {
    if (!guideContent) {
      return [];
    }
    return guideContent.map((topic) => {
      let additionalHeadings = [];
      if (topic.content) {
        additionalHeadings = topic.content
          .map((subfeature) => subfeature.heading)
          .filter((f) => f && f !== '');
      }
      return {
        label: topic.label,
        subFeatures: additionalHeadings,
      };
    });
  }, [guideContent]);

  const handleScroll = () => {
    const ids = titles.map((item) => [item.label, ...item.subFeatures]).flat();
    const distances = ids.map((label) => {
      const distance = document
        .getElementById(renderId(label))
        .getBoundingClientRect().top;
      return distance > 0 ? Number.POSITIVE_INFINITY : distance;
    });
    const closestToZero = distances.reduce((a, b) => {
      return Math.abs(b - 0) < Math.abs(a - 0) ? b : a;
    });
    const activeIdx = distances.findIndex((dist) => dist === closestToZero);

    ids.forEach((id) => {
      if (id === ids[activeIdx]) {
        const activated = document.getElementById(renderScrollerId(id));
        activated.classList.add('active');
      } else {
        const deactivated = document.getElementById(renderScrollerId(id));
        deactivated.classList.remove('active');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    if (guideContent) {
      const headingIconFeatures = guideContent.filter((f) => f.mapsetIcon);
      const contentIconFeatures = guideContent
        .filter((f) => f.content)
        .map((f) => f.content)
        .flat()
        .filter((f) => f.mapsetIcon);
      const iconFeatures = [...headingIconFeatures, ...contentIconFeatures];
      Promise.all(
        iconFeatures.map((f) =>
          fetch(`https://editor.mapset.io/static/icons/${f.mapsetIcon}.svg`),
        ),
      )
        .then((responses) => {
          // Get a JSON object from each of the responses
          return Promise.all(
            responses.map((response) => {
              return response.text();
            }),
          );
        })
        .then((dataArray) => {
          let icons = [];
          iconFeatures.forEach((g, idx) => {
            if (isSvg(dataArray[idx])) {
              icons.push({
                key: g.mapsetIcon,
                svg: dataArray[idx],
              });
            } else {
              icons.push({
                key: null,
                svg: null,
              });
            }
          });
          setIcons(icons);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let md = new Remarkable();
  md.set({
    html: true,
    breaks: true,
  });

  return (
    <>
      <a href={getUrl(null, region, locale, true, true)}><img className="mapset-brand-img" src={mapset_banner} alt="" /></a>
      <div className="guide-scroller">
        <div className="guide-scroller-scrollable">
          {titles.map((feature) => {
            return (
              <>
                <a
                  href={`#${renderId(feature.label)}`}
                  id={renderScrollerId(feature.label)}
                  title={feature.label}
                >
                  <svg
                    className="listNavImage"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M24 24H0V0h24v24z" />
                    <circle fill="currentColor" cx="12" cy="12" r="8" />
                  </svg>
                  <span>{feature.label}</span>
                </a>
                {feature.subFeatures ? (
                  <div className="guide-scroller-sub">
                    {feature.subFeatures.map((feat) => (
                      <a
                        href={`#${renderId(feat)}`}
                        id={renderScrollerId(feat)}
                        title={feat}
                      >
                        <svg
                          className="listNavImage"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                        >
                          <path fill="none" d="M24 24H0V0h24v24z" />
                          <circle fill="currentColor" cx="12" cy="12" r="8" />
                        </svg>
                        <span>{feat}</span>
                      </a>
                    ))}
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <section className="guideSection" id="guide">
          <div className="guideContent rightColumn">
            <div className="container">
              <h1 className="is-bolder guideHeader">
                <FormattedMessage id="guide.Guide" />
              </h1>
              <p>
                <FormattedMessage id="guide.Links-ch" />
                <br />
                <a href="https://editor.mapset.ch/" target="_blank" rel="noopener noreferrer">
                  https://editor.mapset.ch/
                </a>
              </p>
              <p>
                <FormattedMessage id="guide.Links-io" />
                <br />
                <a href="https://editor.mapset.io/" target="_blank" rel="noopener noreferrer">
                  https://editor.mapset.io/
                </a>
              </p>
              <div>
                {guideContent &&
                  guideContent.map((topic, id) => {
                    return (
                      <div className="guideFeature" id={renderId(topic.label)}>
                        <h3 className="guideH3">
                          {topic.mapsetIcon && icons ? (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: icons.find(
                                  (f) => f.key === topic.mapsetIcon,
                                )?.svg,
                              }}
                            />
                          ) : null}
                          <b
                            dangerouslySetInnerHTML={{
                              __html: md.render(topic.label),
                            }}
                          />
                        </h3>
                        {topic.content.map((f, id) => (
                          <div
                            className="guideContent"
                            id={renderId(f.heading)}
                          >
                            {f.heading ? (
                              <h4 className="guideH4">
                                {f.mapsetIcon ? (
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: icons.find(
                                        (subFeature) =>
                                          subFeature.key === f.mapsetIcon,
                                      )?.svg,
                                    }}
                                  />
                                ) : null}
                                <b
                                  dangerouslySetInnerHTML={{
                                    __html: md.render(f.heading),
                                  }}
                                />
                              </h4>
                            ) : null}
                            {f.loginRestricted ? (
                              <p className="loginRestricted">
                                <Warning />
                                <i>
                                  <FormattedMessage id="guide.login-restricted" />
                                </i>
                              </p>
                            ) : null}
                            {f.cdRestricted ? (
                              <p className="cdRestricted">
                                <Warning />
                                <i>
                                  <FormattedMessage id="guide.cd-restricted" />
                                </i>
                              </p>
                            ) : null}
                            <span
                              className="subContent"
                              dangerouslySetInnerHTML={{
                                __html: md.render(f.text),
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })}
              </div>
              <h1 className="is-bolder guideHeader">
                <FormattedMessage id="generic.Noch Fragen ?" />
              </h1>
              <section className="contactSection" id="contact">
                <Contact />
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
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
    <Layout
      locale={locale}
      region={region}
      user={user}
      navBarClassName="guide-nav-bar"
    >
      <GuidePage locale={locale} region={region} />
    </Layout>
  );
};

export default Index;
