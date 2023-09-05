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
    const _paq = (window._paq = window._paq || []);
    _paq.push(["trackPageView"]);

    if (!document.querySelector(`script[src="${url}piwik.js"]`)) {
      _paq.push(["setTrackerUrl", url + "piwik.php"]);
      _paq.push(["setSiteId", "11"]);
      _paq.push(["setSiteUrl", "https://mapset." + domain]);
      _paq.push(["disableCookies"]);
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
      const plausibleScript = document.createElement("script");
      plausibleScript.type = "text/javascript";
      plausibleScript.defer = true;
      plausibleScript.dataset.domain = "dev.mapset." + domain;
      plausibleScript.src = plausibleSrc;
      document.head.appendChild(plausibleScript);
    }

    return () => {};
  }, [pathname]);
}
