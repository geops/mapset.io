"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export default function useAnalytics() {
  // see doc https://nextjs.org/docs/app/api-reference/functions/use-router#router-events
  const pathname = usePathname();

  return useEffect(() => {
    // We only want to track analytics in production.
    if (process.env.NODE_ENV !== "production") {
      return () => {};
    }

    const url = "https://analytics.geops.de/";
    window._paq = window._paq || [];

    window._paq.push(["setTrackerUrl", url + "piwik.php"]);
    window._paq.push(["setSiteId", "11"]);
    window._paq.push(["setSiteUrl", "https://mapset." + domain]);
    window._paq.push(["disableCookies"]);

    const trackPageView = () => window._paq.push(["trackPageView"]);

    if (!document.querySelector(`script[src="${url}piwik.js"]`)) {
      const firstScript = document.getElementsByTagName("script")[0];
      const piwikScript = document.createElement("script");
      piwikScript.type = "text/javascript";
      piwikScript.async = true;
      piwikScript.src = url + "piwik.js";
      firstScript.parentNode.insertBefore(piwikScript, firstScript);
    }
    const plausibleSrc = "https://plausible.geops.io/js/script.js";
    if (!document.querySelector(`script[src="${plausibleSrc}"]`)) {
      // <script defer data-domain="dev.mapset.io" src="https://plausible.geops.io/js/script.js"></script>
      const firstScript = document.getElementsByTagName("script")[0];
      const plausibleScript = document.createElement("script");
      plausibleScript.type = "text/javascript";
      plausibleScript.defer = true;
      plausibleScript.dataset.domain = "dev.mapset." + domain;
      plausibleScript.src = plausibleSrc;
      firstScript.parentNode.insertBefore(plausibleScript, firstScript);
    }

    trackPageView();
    return () => {};
  }, [pathname]);
}
