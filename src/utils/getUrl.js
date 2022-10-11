const getUrl = (path, region, locale, isRoot, noHash) => {
  if (typeof window === 'undefined') {
    return path;
  }
  const url = new URL(window.location.href);

  if (noHash) {
    url.hash = '';
  }

  if (path && (!region || !locale)) {
    url.pathname = path;
    return url.toString();
  }

  if (path && region && locale) {
    if (region === 'ch') {
      url.pathname = `${locale !== 'de' ? `${locale}` : ''}${path}`;
    } else {
      url.pathname = `${locale !== 'en' ? `${locale}` : ''}${path}`;
    }
    return url.toString();
  }

  if (!path && region && locale) {
    if (region === 'ch') {
      url.pathname = `${locale !== 'de' ? `${locale}/` : ''}${isRoot ? '' : url.pathname.split('/').slice(-1).pop()}`;
    } else {
      url.pathname = `${locale !== 'en' ? `${locale}/` : ''}${isRoot ? '' : url.pathname.split('/').slice(-1).pop()}`;
    }
    return url.toString();
  }
  return url.toString()
};

export default getUrl;
