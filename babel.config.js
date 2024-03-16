module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@translate': './src/translate',
          '@brand': './src/brand',
          '@services': './src/services',
          '@domain': './src/domain',
        },
      },
    ],
  ],
};
