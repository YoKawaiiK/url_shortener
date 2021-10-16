module.exports = {
  lintOnSave: true,
  publicPath: "/shorten/",
  devServer: {
    open: true,
    // https: true,

    hot: true,
    watchOptions: {
      poll: true,
    },
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    // },
    // Configure proxy, more: https://github.com/chimurai/http-proxy-middleware#http-proxy-options
    proxy: {
      "^/api": {
        target: "https://t.ly",
        ws: true,
        changeOrigin: true,
        // logLevel: "debug",
      },
    },
  },

  css: {
    loaderOptions: {
      scss: {
        prependData: "@import '~@/assets/scss/main';",
      },
    },
  },
};
