module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            assets: "./assets",
            src: "./src",
            components: "./src/components",
            screens: "./src/screens",
            services: "./src/services",
            utils: "./src/utils",
            hooks: "./src/hooks",
            config: "./src/config",
          },
        },
      ],
    ],
  };
};
