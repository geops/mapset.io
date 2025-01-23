// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIgnores: ["./content/**", "./public/images/**"],
  },
  images: {
    minimumCacheTTL: 31536000,
  productionBrowserSourceMaps: process.env.NEXT_PUBLIC_INSTANCE === "dev",
}
};

module.exports = process.env.SENTRY_PROJECT
  ? withSentryConfig(nextConfig, { silent: true })
  : nextConfig;
