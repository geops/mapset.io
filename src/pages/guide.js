import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Layout from '../components/Layout';
import { Remarkable } from 'remarkable';
import userManager from '../utils/userManager';

import de_guide from '../data/guide/de.json';
import en_guide from '../data/guide/en.json';

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

const svgRegex = new RegExp('^<svg.*?\/>.*?<\/svg>$');

export const GuidePage = ({ locale }) => {
  const [icons, setIcons] = useState([]);
  let guide;
  switch (locale) {
    case 'de': {
      guide = de_guide.features;
      break;
    }
    default: {
      guide = en_guide.features;
      break;
    }
  }

  useEffect(() => {
    if (guide) {
      const headingIconFeatures = guide.filter(f => f.mapsetIcon);
      const contentIconFeatures = guide
        .filter(f => f.content)
        .map(f => f.content)
        .flat()
        .filter(f => f.mapsetIcon);
      const iconFeatures = [...headingIconFeatures, ...contentIconFeatures];
      Promise.all(
        iconFeatures.map((f) => fetch(
          `https://editor.dev.mapset.io/static/icons/${f.mapsetIcon}.svg`
          ))).then((responses) => {
          // Get a JSON object from each of the responses
          return Promise.all(responses.map((response) => {
            return response.text()
          }));
      }).then((dataArray) => {
        let icons = [];
        iconFeatures.forEach((g, idx) => {
          if (svgRegex.test(dataArray[idx])) {
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
      }).catch((error) => {
        console.log(error);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let md = new Remarkable();
  md.set({
    html: true,
    breaks: true,
  });
  return (
    <div style={{ position: 'relative' }}>
      <section className="guideSection" id="guide">
        <div className="guideContent">
          <div className="container">
            <h1 className="is-bolder guideHeader rightColumn">
              <FormattedMessage id="generic.Guide" />
            </h1>
            <div className="cardViewSpacer" />
            <div>
              {guide &&
                guide.map((topic, id) => {
                  return (
                    <p>
                      <h3 className="guideH3">
                        {topic.mapsetIcon && icons ? (
                          <div dangerouslySetInnerHTML={{
                            __html: icons.find(f => f.key === topic.mapsetIcon)?.svg
                          }}/>
                        ) : null}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: md.render(topic.label),
                          }}
                        />
                      </h3>
                      {topic.content.map((f, id) => (
                        <div className="guideContent">
                          {f.heading ? (
                            <h5 className="guideH5">
                              {f.mapsetIcon ? (
                                <div dangerouslySetInnerHTML={{
                                  __html: icons.find(subFeature => subFeature.key === f.mapsetIcon)?.svg
                                }}/>
                              ) : null}
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: md.render(f.heading),
                                }}
                              />
                            </h5>
                          ): null}
                          <span
                            dangerouslySetInnerHTML={{
                              __html: md.render(f.text),
                            }}
                          />
                        </div>
                      ))
                      }
                    </p>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Index = ({ pageContext: { locale } }) => {
  const [user, setUser] = useState(null);

  if (typeof window !== 'undefined' && userManager) {
    userManager.events.addUserLoaded((userr) => {
      setUser(userr);
    });
  }

  return (
    <Layout locale={locale} user={user}>
      <GuidePage locale={locale} />
    </Layout>
  );
};

export default Index;
