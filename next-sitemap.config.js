module.exports = {
  siteUrl: "https://mapset." + process.env.NEXT_PUBLIC_DOMAIN,
  generateRobotsTxt: true,
  exclude: ["/admin"],
  alternateRefs: [
    {
      href: "https://mapset." + process.env.NEXT_PUBLIC_DOMAIN + "/de",
      hreflang: "de",
    },
    {
      href: "https://mapset." + process.env.NEXT_PUBLIC_DOMAIN + "/en",
      hreflang: "en",
    },
    {
      href: "https://mapset." + process.env.NEXT_PUBLIC_DOMAIN + "/fr",
      hreflang: "fr",
    },
  ],
};
