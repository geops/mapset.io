import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../sass/all.sass';
import useSiteMetadata from './SiteMetadata';
import card_view_triple from '../../static/img/screens_perspective.png';

import favicon from '../img/favicon.png';

// Locale data
import deData from 'react-intl/locale-data/de';
import enData from 'react-intl/locale-data/en';
import frData from 'react-intl/locale-data/fr';

// Messages
import de from '../data/index/de.json';
import en from '../data/index/en.json';
import fr from '../data/index/fr.json';

const languages = { de, en, fr };

addLocaleData([...deData, ...enData, ...frData]);

// TODO - if necessary - create dynamic language import.
//  The below code did not work for that purpose
// const locales = require('../data/locales')
// Object.keys(locales).forEach(key => {
//   const possibleLocale = locales[key].locales || 'en'
//   const reactData = 'react-intl/locale-data/'+possibleLocale
//   addLocaleData(require(`${reactData}`))
// })

// flattening json data here provides a solution for the react-intl
// inability to traverse nested data whilst constructing FormattedMessage's
// without having to refactor pthe project structure
JSON.flatten = function (data) {
  var result = {};

  function recurse(cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur;
    } else if (Array.isArray(cur)) {
      for (var i = 0, l = cur.length; i < l; i++)
        recurse(cur[i], prop + '[' + i + ']');
      if (l === 0) result[prop] = [];
    } else {
      var isEmpty = true;
      for (var p in cur) {
        isEmpty = false;
        recurse(cur[p], prop ? prop + '.' + p : p);
      }
      if (isEmpty && prop) result[prop] = {};
    }
  }
  recurse(data, '');
  return result;
};

const Layout = ({
  locale,
  children,
  region,
  user,
  defaultLocale,
  navBarClassName = '',
  path = '/',
  localizedPath = '',
  nonLocalizedPath = '',
}) => {
  const { title, description, siteUrl, alternateUrls } = useSiteMetadata();
  const localeMessages = JSON.flatten(languages[locale]);
  let localizedPathSlashed = localizedPath;
  if (localizedPath.length && localizedPath[0] !== '/') {
    localizedPathSlashed = '/' + localizedPath;
  }
  if (localizedPath.length && localizedPath[localizedPath.length - 1] !== '/') {
    localizedPathSlashed = localizedPath + '/';
  }
  const realTitle = localeMessages['content.page header'] || title;
  const realDescription =
    localeMessages['content.page header description'] || description;

  const twitterAccount = region === 'ch' ? 'mapsetch' : 'mapsetio';
  return (
    <div>
      <Helmet>
        <html lang={locale} />
        <title>{realTitle}</title>
        <meta name="description" content={realDescription} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />

        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        <link rel="canonical" href={siteUrl + localizedPathSlashed} />
        {alternateUrls.map((url) => {
          return <link rel="alternate" href={url + localizedPathSlashed} />;
        })}
        {Object.keys(languages).map((locale) => {
          let localeSlashed = locale;
          let nonLocalizedPathSlashed = nonLocalizedPath;
          if (nonLocalizedPath.length && nonLocalizedPath[0] !== '/') {
            nonLocalizedPathSlashed = '/' + nonLocalizedPath;
          }
          if (
            nonLocalizedPath.length &&
            nonLocalizedPath[nonLocalizedPath.length - 1] !== '/'
          ) {
            nonLocalizedPathSlashed = nonLocalizedPath + '/';
          }
          if (locale === defaultLocale) {
            localeSlashed = '';
          } else {
            localeSlashed = '/' + locale;
          }
          return (
            <link
              rel="alternate"
              hreflang={locale}
              href={siteUrl + localeSlashed + nonLocalizedPathSlashed}
            />
          );
        })}

        {/* <!-- OpenGraph tags, used by facebook --> */}
        <meta property="og:title" content={realTitle} />
        <meta property="og:url" content={siteUrl + localizedPathSlashed} />
        <meta property="og:description" content={realDescription} />
        <meta
          property="og:image"
          // content="https://mobility.portal.geops.io/logo-800-418.png"
          content={siteUrl + card_view_triple}
        />
        <meta property="og:site_name" content="geOps" />

        {/* <!-- Twitter tags --> */}
        {/* Twitter card tester: https://cards-dev.twitter.com/validator */}
        <meta name="twitter:dnt" content="on" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={'@' + twitterAccount} />
        <meta name="twitter:creator" content={'@' + twitterAccount} />
        <meta name="twitter:image:src" content={siteUrl + card_view_triple} />
      </Helmet>
      <Navbar
        locale={locale}
        region={region}
        messages={localeMessages}
        user={user}
        navBarClassName={navBarClassName}
        path={path}
      />
      <IntlProvider locale={locale} messages={localeMessages}>
        {children}
      </IntlProvider>
      <Footer locale={locale} messages={localeMessages} />
    </div>
  );
};

export default Layout;
