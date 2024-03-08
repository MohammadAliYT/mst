const withTM = require("next-transpile-modules")(["aos"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  ...withTM, // add the withTM configuration object here
};

module.exports = nextConfig;
