module.exports = {
  extends: [
    "eslint:recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  plugins: ["react", "jsx-a11y", "import"],
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
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  ignorePatterns: [
    "dist",
    "node_modules",
    "examples",
    "scripts",
    ".eslintrc.js",
  ],
};
