// https://v2.vuepress.vuejs.org/advanced/cookbook/extending-a-theme.html#extend-default-theme
const { path } = require("@vuepress/utils");

module.exports = {
  name: "vuepress-theme-jeremiel",
  extends: "@vuepress/theme-default",
  layouts: {
    Layout: path.resolve(__dirname, "layouts/Layout.vue"),
  },
};
