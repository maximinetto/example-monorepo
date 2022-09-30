module.exports = {
  extends: [
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  plugins: ["react", "jsx-a11y"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        project: ["./server/tsconfig.json"],
        extensions: [".js", ".ts", ".tsx", ".d.ts", ".json"],
      },
    },
  },

  ignorePatterns: [
    "dist",
    "node_modules",
    "examples",
    "scripts",
    ".eslintrc.js",
    "configureAlias.js",
  ],
};
