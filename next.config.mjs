import pkg from './package.json' assert { type: 'json' };

/** @type {import('next').NextConfig} */
const nextConfig = {
  // creates a `standalone` folder in .next folder, including script within
  // it called `server.js`, which needs to be run by Dockerfile in CMD.
  output: 'standalone',
  // assetPrefix: follows the same rules as deployPath
  assetPrefix: '/template-app',
  basePath: '/template-app',
  env: {
    appVersion: pkg.version, // Provide version to app, so it can be displayed.
    deployPath: '/template-app',
  },
};

export default nextConfig;
