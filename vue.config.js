module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/scss/global.scss";
          @import "@/styles/scss/_variables.scss";
          @import "@/styles/scss/_mixins.scss";
       `,
      },
    },
  },
}
