module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '11'
        },
        useBuiltIns: 'usage',
        corejs: { version: 2 }
      }
    ]
  ];

  const plugins = [
    // "@babel/plugin-proposal-object-rest-spread"
    '@babel/plugin-transform-shorthand-properties'
  ];

  return {
    presets,
    plugins
  };
};
