module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["clear-text", "progress"],
    testRunner: "jest",
    transpilers: ["typescript", "babel", "webpack"],
    coverageAnalysis: "off",
    tsconfigFile: "tsconfig.json",
    mutate: ["src/**/*.ts"],
    babel: {
      optionsFile: ".babelrc"
    },
    webpack: {
      configFile: "webpack.config.js"
    }
  });
};
