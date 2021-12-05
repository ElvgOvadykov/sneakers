module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    "styled-components",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@internals": "./internals",
          "@utils": "./app/utils",
          "@components": "./app/components",
          "@containers": "./app/containers",
          "@images": "./app/images",
          "@API": "./app/utils/API",
        },
      },
    ],
  ],
  env: {
    production: {
      only: ["app"],
      plugins: [
        "lodash",
        "transform-react-remove-prop-types",
        "@babel/plugin-transform-react-inline-elements",
        "@babel/plugin-transform-react-constant-elements",
      ],
    },
    test: {
      plugins: [
        "@babel/plugin-transform-modules-commonjs",
        "dynamic-import-node",
      ],
    },
  },
};
