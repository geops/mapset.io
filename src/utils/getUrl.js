const getUrl = (path) => {
    if (typeof window === `undefined`) {
      return path;
    }
    return `${window.location.protocol}//${window.location.hostname}${
      window.location.port ? `:${window.location.port}` : ''
    }${path}`;
};
  
export default getUrl;