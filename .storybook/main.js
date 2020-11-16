module.exports = {
  stories: ['../src/components/**/*.stories.mdx', '../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        'css-modules-typescript-loader?modules',
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[name]__[local]_[hash:base64:5]',
              auto: /\.module\.\w+$/i,
            },
          },
        },
        'less-loader',
      ],
    });
    return config;
  },
};
