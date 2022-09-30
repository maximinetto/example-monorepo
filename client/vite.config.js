import react from "@vitejs/plugin-react";
import { resolve } from "path";
import eslint from "vite-plugin-eslint";

const components = resolve(__dirname, "src", "components");
const hooks = resolve(__dirname, "src", "hooks");

// https://vitejs.dev/config/
module.exports = {
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      components,
      hooks,
    },
  },
};
