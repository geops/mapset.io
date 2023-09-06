export const getPath = (path, region, locale) => {
  let newPath = path;
  if (newPath && region && locale) {
    if (region === "ch") {
      newPath = `${locale !== "de" ? `/${locale}` : ""}${path}`;
    } else {
      newPath = `${locale !== "en" ? `/${locale}` : ""}${path}`;
    }
  }
  return newPath;
};

const getUrl = (path) => {
  if (typeof window === `undefined`) {
    return path;
  }
  return `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ""
  }${path}`;
};

export default getUrl;
