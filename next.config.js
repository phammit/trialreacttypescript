/** @type {import('next').NextConfig} */

/** 
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
*/

//telling webpack how to load the .graphql files.. from github.com/MichalLytek/type-graphql/tree/master/examples/simple-usage
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
  reactStrickMode: true,
};