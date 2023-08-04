import { useEffect } from 'react';

const domain = process.env.GATSBY_REGION;

export default function useAnalytics() {
  return useEffect(() => {
    // We only want to track analytics in production.
    if (process.env.NODE_ENV !== 'production') {
      return () => {};
    }

    const plausibleSrc = 'https://plausible.geops.io/js/script.js';
    if (!document.querySelector(`script[src="${plausibleSrc}"]`)) {
      // <script defer data-domain="dev.mapset.io" src="https://plausible.geops.io/js/script.js"></script>
      const firstScript = document.getElementsByTagName('script')[0];
      const plausibleScript = document.createElement('script');
      plausibleScript.type = 'text/javascript';
      plausibleScript.defer = true;
      plausibleScript.dataset.domain = 'mapset.' + domain;
      plausibleScript.src = plausibleSrc;
      firstScript.parentNode.insertBefore(plausibleScript, firstScript);
    }

    return () => {};
  }, []);
}
