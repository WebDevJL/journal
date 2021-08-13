module.exports = {
  lang: "en-US",
  title: "Journal of Jérémie Litzler",
  description:
    "I want to share my notes, thoughts and experiences because I believe it is important",
  repo: "https://github.com/JeremieLitzler/journal",
  //https://v2.vuepress.vuejs.org/reference/config.html#head
  head: [
    ["meta", { property: "og:title", content: "Journal of Jérémie Litzler" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://iamjeremie.me/" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Notes, thoughts and experiences of Jérémie.",
      },
    ],
    ["meta", { property: "og:image", content: "image.png" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
    ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }],
  ],
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    navbar: [
      { text: "About", link: "/" },
      { text: "Blog", link: "/blog" },
    ],
  },
  bundler: "@vuepress/vite",
  bundlerConfig: {
    // vite bundler options
  },
};
