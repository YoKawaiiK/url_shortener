module.exports = {
  lintOnSave: true,
  devServer: {
    open: true,
    watchOptions: {
      poll: true,
    },
    // Configure proxy, more: https://github.com/chimurai/http-proxy-middleware#http-proxy-options
    headers: { "Access-Control-Allow-Origin": "*" },
    proxy: {
      "/api": {
        target: "https://t.ly/api/v1/link/",
        ws: true,
        changeOrigin: true,
      },
    },
  },

  // css: {
  //   loaderOptions: {
  //     scss: {
  //       // prependData: "@import '~@/assets/scss/base/_vars';",
  //       prependData: "@import '~@/assets/scss/main';",
  //     },
  //   },
  // },
};
