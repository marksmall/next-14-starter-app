import pkg from './package.json' assert { type: 'json' };

/** @type {import('next').NextConfig} */
const nextConfig = {
  // creates a `standalone` folder in .next folder, including script within
  // it called `server.js`, which needs to be run by Dockerfile in CMD.
  output: 'standalone',
  env: {
    appVersion: pkg.version, // Provide version to app, so it can be displayed.
  },
};

export default nextConfig;
