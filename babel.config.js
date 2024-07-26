module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["macros"],
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "^@app/(.+)": "./src/\\1",
            "^@assets/(.+)": "./assets/\\1",
          },
        },
      ],
    ],
  };
};
