module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
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
          '@config': './src/config',
          '@context': './src/context',
          '@store': './src/store',
        },
      },
    ],
  ],
};
