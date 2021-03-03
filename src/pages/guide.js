import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Layout from '../components/Layout';
import { Remarkable } from 'remarkable';
import userManager from '../utils/userManager';

import layout_bg_2 from '../img/layoutBG_2.png';

import fr_guide from '../data/guide/fr.json';
import de_guide from '../data/guide/de.json';

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
export const GuidePage = ({ locale }) => {
  let guide;
  switch (locale) {
    case 'fr': {
      guide = fr_guide.features;
      break;
    }
    case 'de': {
      guide = de_guide.features;
      break;
    }
    default: {
      guide = de_guide.features;
      break;
    }
  }
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
            <div className="accordion rightColumn">
              {guide &&
                guide.map((topic, id) => (
                  <p>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: md.render(topic.label),
                      }}
                    />
                    {topic.content.map((f, id) => (
                      <div style={{ paddingLeft: '25px' }}>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: md.render(f.heading),
                          }}
                        />
                        <span
                          dangerouslySetInnerHTML={{
                            __html: md.render(f.text),
                          }}
                        />
                      </div>
                    ))
                    }
                  </p>
                ))}
            </div>
          </div>
        </div>
      </section>{' '}
      <img className="backgroundImage greyBack" src={layout_bg_2} alt="" />
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
