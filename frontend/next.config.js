// https://nextjs.org/docs#customizing-webpack-config

// import 'dotenv/config';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const withOffline = require('next-offline');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './public/styles/antd-custom.less'),
    'utf8'
  )
);

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // Now by ZEIT deployment target
  // target: 'serverless',

  // Custom webpack config for Ant Design Less
  lessLoaderOptions: { javascriptEnabled: true, modifyVars: themeVariables },

  // https://developers.google.com/web/tools/workbox
  // https://medium.com/google-developer-experts/add-offline-support-to-any-web-app-c20edc4bea0e
  workboxOpts: {
    swDest: 'static/service-worker.js',
    maximumFileSizeToCacheInBytes: 16 * 1024 * 1024,
    runtimeCaching: [
      {
        urlPattern: /[.](png|jpg|ico|css)/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'assets-cache',
          cacheableResponse: { statuses: [0, 200] }
        }
      },
      {
        urlPattern: /^https.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'http-cache',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: { statuses: [0, 200] },
          fetchOptions: { credentials: 'include' }
        }
      }
    ]
  },

  webpack: (config, options) => {
    config.plugins = config.plugins || [];

    // Without this debug breakpoints in handlers don't work,
    // only in render() or return() in functional components.
    // https://webpack.js.org/configuration/devtool/
    config.devtool = isProd ? config.devtool : 'eval-source-map';

    // Zeit Now: Fixes npm packages that depend on `fs` module
    config.node = { fs: 'empty' };

    // https://github.com/zeit/next.js/tree/canary/examples/with-dotenv
    config.plugins.push(
      // Read the .env file
      new Dotenv({ path: path.join(__dirname, '.env'), systemvars: true })
    );

    // https://spectrum.chat/next-js/general/conflicting-order-between~25834bb9-fe91-44dd-ba47-b016b6518d67
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
      })
    );

    // https://github.com/webpack-contrib/webpack-bundle-analyzer
    if (process.env.ANALYZE_BUILD) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: true,
          reportFilename: options.isServer
            ? '../analyze/server.html'
            : './analyze/client.html'
        })
      );
    }

    // https://github.com/zeit/next.js/tree/canary/examples/with-ant-design-less
    if (options.isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals)
      ];

      config.module.rules.unshift({ test: antStyles, use: 'null-loader' });
    }

    return config;
  }
};

module.exports = withLess(withOffline(nextConfig));

