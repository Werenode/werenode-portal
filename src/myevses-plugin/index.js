module.exports = function MyEVSEsPlugin(context, options) {
  return {
    name: 'myevses-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        resolve : {
          fallback : {
            "stream": require.resolve("stream-browserify"),
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "os": require.resolve("os-browserify/browser")
          }
        }
      };
    },
  };
};