export const getLocalizedUrl = (region, locale, url, reset) => {
  if (!url && typeof window === `undefined`) {
    return;
  }

  if (!!region) console.log(reset);
  const validatedUrl = url || window.location.href;
  const urlObject = new URL(validatedUrl);
  const { pathname } = urlObject;
  if (region && locale) {
    console.log(url, reset);
    if (region === 'ch') {
      urlObject.pathname = `/${locale !== 'de' ? `${locale}/` : ''}${!reset ? '' : pathname.split('/').slice(-1).pop()}`;
    } else {
      // console.log('path: ', pathname.split('/').slice(-1).pop(), reset);
      // console.log(url, `/${locale !== 'en' ? `${locale}/` : ''}${reset ? '' : pathname.split('/').slice(-1).pop()}`);
      urlObject.pathname = `/${locale !== 'en' ? `${locale}/` : ''}${reset ? '' : pathname.split('/').slice(-1).pop()}`;
    }
  }
  return urlObject.toString();
}

const getUrl = (path, region, locale) => {
  if (typeof window === `undefined`) {
    return path;
  }
  const newUrl = `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ''
    }${path}`;

  if (region && locale) {
    return getLocalizedUrl(region, locale, newUrl);
  }
  return newUrl
};

export default getUrl;
