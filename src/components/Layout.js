import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../sass/all.sass';
import useSiteMetadata from './SiteMetadata';

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
  navBarClassName = '',
  path,
}) => {
  const { title, description, siteUrl, alternateUrls } = useSiteMetadata();
  const localeMessages = JSON.flatten(languages[locale]);

  return (
    <div>
      <Helmet>
        <html lang={locale} />
        <title>{localeMessages['content.page header'] || title}</title>
        <meta
          name="description"
          content={
            localeMessages['content.page header description'] || description
          }
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />

        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        <link rel="canonical" href={siteUrl + path} />
        {alternateUrls.map((url) => {
          return <link rel="alternate" href={url + path} />;
        })}
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
