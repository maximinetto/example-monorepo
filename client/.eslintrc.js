const { join } = require("path");
const configureAlias = require("../configureAlias");

const jsconfig = join(__dirname, "jsconfig.json");
const alias = configureAlias.eslint(jsconfig);

module.exports = {
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      settings: {
        "import/resolver": {
          typescript: false,

          alias: {
            map: alias,
            extensions: [".js", ".jsx", ".json"],
          },
        },
      },
    },
  ],
};
