const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/**/__stories__/**.stories.tsx'],
  addons: [    
    '@storybook/addon-actions',    
    '@storybook/addon-viewport/register',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/stories\.tsx?$/, /\.story\.tsx?$/],
          include: [path.resolve(__dirname, '../src')], // You can specify directories
        },
        loaderOptions: {
          parser: 'typescript',
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
  babel: async (options) => ({
    ...options,
    // any extra options you want to set
  }),
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(jsx?|ts(x?))$/,
      use: ['babel-loader'],
      exclude: ['/node_modules/'],
    });
    config.module.rules.push({
      test: /\.(sass|scss)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });
    config.module.rules.push({
      test: /\.(pdf|txt|xml|eot|ttf|woff|woff2|otf)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    });

    return config;
  },
};
