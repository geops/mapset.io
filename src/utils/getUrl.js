const getUrl = (path, region, locale) => {
  let localizedPath = path;
  if (typeof window === `undefined`) {
    return path;
  }
  if (region && locale) {
    if (region === 'ch') {
      localizedPath = locale !== 'de' ? `/${locale}${path}` : path;
    } else {
      localizedPath = locale !== 'en'  ? `/${locale}${path}` : path;
    }
  }
  return `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ''
  }${localizedPath}`;
};
  
export default getUrl;