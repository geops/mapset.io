// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIgnores: ["./content/**", "./public/images/**"],
  },
};

module.exports = process.env.SENTRY_PROJECT
  ? withSentryConfig(nextConfig, { silent: true })
  : nextConfig;
