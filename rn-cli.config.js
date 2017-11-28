"use strict";

var path = require("path");
const blacklist = require("metro-bundler/src/blacklist");
const defaultPolyfills = require("react-native/rn-get-polyfills");

function getRoots() {
  var root = process.env.REACT_NATIVE_APP_ROOT;
  if (root) {
    return [path.resolve(root)];
  }
  return [path.resolve(__dirname)];
}

var config = {
  getProjectRoots() {
    return getRoots();
  },
  getBlacklistRE() {
    return blacklist([/Examples\/NavigationPlayground\/.*/]);
  },
  getAssetExts() {
    return [];
  },
  getPlatforms() {
    return ["dom"];
  },
  getProvidesModuleNodeModules() {
    return ["react-native"];
  },
  getPolyfills: () =>
    [].concat(defaultPolyfills(), [
      require.resolve("./Libraries/polyfills/setBabelHelper.js")
    ])
};

module.exports = config;