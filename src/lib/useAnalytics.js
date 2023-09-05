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
