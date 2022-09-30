// const jsconfig = resolve(__dirname, "jsconfig.json");

// console.log(jsconfig);
// const { compilerOptions } = require(jsconfig);
// const { paths } = compilerOptions;

// const map = Object.entries(paths).map(([key, value]) => {
//   const left = remove(key);
//   const right = remove(value[0]);

//   return [left, resolve(__dirname, right)];
// });

// function remove(str) {
//   if (typeof str !== "string") {
//     throw new Error("Paths must be a string");
//   }

//   const removeAsterics = str.replace(/[*]/g, "");

//   return removeSlash(removeAsterics);
// }

// function removeSlash(str) {
//   if (str.slice(-1) === "/" && str.length > 1) {
//     return removeSlash(str.slice(0, -1));
//   }
//   return str;
// }

// console.log(map);

module.exports = {
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      settings: {
        "import/resolver": {
          typescript: false,
          // alias: {
          //   map: [["components", resolve(__dirname, "src", "components")]],
          //   extensions: [".js", ".jsx", ".json"],
          // },
          // alias: {
          //   map,
          //   extensions: [".js", ".jsx", ".json"],
          // },
          alias: {
            map: [
              [
                "components",
                "/home/maximinetto/projects/practicas/monorepo-example/client/src/components",
              ],
              [
                "hooks",
                "/home/maximinetto/projects/practicas/monorepo-example/client/src/hooks",
              ],
            ],
            extensions: [".js", ".jsx", ".json"],
          },
        },
      },
    },
  ],
};
