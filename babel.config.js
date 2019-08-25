module.exports = (api) => {
  api.cache(true);
  return {
    "presets": [
      [
        "@babel/env",
        {
          "modules": false,
          "useBuiltIns": "usage",
          'corejs': 3
        }
      ],
      "@babel/typescript",
    ],
    "plugins": [
      "@babel/plugin-syntax-dynamic-import",
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
      'macros',
      'preval',
      'codegen'
    ],
  }
}
