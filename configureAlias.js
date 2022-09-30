const { resolve, dirname } = require("path");

function remove(str) {
  if (typeof str !== "string") {
    throw new Error("Paths must be a string");
  }

  const removeAsterics = str.replace(/[*]/g, "");

  return removeSlash(removeAsterics);
}

function removeSlash(str) {
  if (str.slice(-1) === "/" && str.length > 1) {
    return removeSlash(str.slice(0, -1));
  }
  return str;
}

function getPaths(jsconfigPath) {
  const jsconfig = resolve(jsconfigPath);
  const dir = dirname(jsconfig);

  const { compilerOptions } = require(jsconfig);
  const { paths, baseUrl } = compilerOptions;
  const base = baseUrl ?? ".";

  if (paths == null) return [];

  return Object.entries(paths).map(([key, value]) => {
    const left = remove(key);
    const right = remove(value[0]);

    const path = resolve(dir, base, right);

    return { alias: left, path };
  });
}

module.exports = {
  eslint: (jsconfigPath) => {
    const currentPaths = getPaths(jsconfigPath);
    return currentPaths.map(({ alias, path }) => [
      alias,
      resolve(__dirname, path),
    ]);
  },
  vite: (jsconfigPath) => {
    const currentPaths = getPaths(jsconfigPath);
    return currentPaths.reduce(
      (previousValue, currentValue) => ({
        [currentValue.alias]: currentValue.path,
        ...previousValue,
      }),
      {}
    );
  },
};
