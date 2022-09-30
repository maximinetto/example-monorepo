import react from "@vitejs/plugin-react";
import { join } from "path";
import eslint from "vite-plugin-eslint";
import { vite } from "../configureAlias";

// const components = resolve(__dirname, "src", "components");
// const hooks = resolve(__dirname, "src", "hooks");

const alias = vite(join(__dirname, "jsconfig.json"));
// https://vitejs.dev/config/
module.exports = {
  plugins: [react(), eslint()],
  resolve: {
    alias,
    // {
    //   // components,
    //   // hooks,
    // },
  },
};
