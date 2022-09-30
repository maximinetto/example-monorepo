const { resolve } = require("path");

module.exports = {
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      settings: {
        "import/resolver": {
          vite: {
            configPath: resolve(__dirname, "vite.config.js"),
            extensions: [".js", ".jsx", ".json"],
          },
          typescript: false,
          jsconfig: {
            config: resolve(__dirname, "jsconfig.json"),
            extensions: [".js", ".jsx", ".json"],
          },
        },
      },
    },
  ],
};
