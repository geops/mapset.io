export const getLocalizedUrl = (region, locale, url, reset) => {
  if (typeof window === `undefined`) {
    return;
  }
  const validatedUrl = url || window.location.href;
  const urlObject = new URL(validatedUrl);
  const { pathname } = urlObject;
  if (region && locale) {
    if (region === 'ch') {
      urlObject.pathname = `/${locale !== 'de' ? `${locale}/` : ''}${!reset ? '' : pathname.split('/').slice(-1).pop()}`;
    } else {
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
