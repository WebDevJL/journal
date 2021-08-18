// import path from "path";
const titleDefault = "Journal of Jérémie Litzler";
const titleFr = "Journal de Jérémie Litzler";
module.exports = {
  lang: "en-US",
  locales: {
    "/fr/": {
      lang: "fr-FR",
      title: titleFr,
      description:
        "Je partage ici mes notes et experiences qui peuvent être importantes et utiles pour vous",
      head: [
        ["meta", { property: "og:title", content: titleFr }],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:url", content: "https://iamjeremie.me/" }],
        [
          "meta",
          {
            property: "og:description",
            content: "Notes, thoughts and experiences of Jérémie.",
          },
        ],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:image", content: "image.png" }],
        ["meta", { name: "msapplication-TileColor", content: "#36377a" }],
        ["meta", { name: "theme-color", content: "#36377a" }],
        [
          "link",
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/icons/favicon-32x32.png",
          },
        ],
        [
          "link",
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/icons/favicon-16x16.png",
          },
        ],
        ["link", { rel: "icon", href: "/favicon.ico" }],
        [
          "link",
          {
            rel: "mask-icon",
            href: "/icons/safari-pinned-tab.svg",
            color: "#36377a",
          },
        ],
        [
          "link",
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/icons/apple-touch-icon.png",
          },
        ],
        ["link", { rel: "manifest", href: "/site.webmanifest" }],
      ],
    },
  },
  title: titleDefault,
  description:
    "I share my notes, thoughts and experiences that can be useful and important to you",
  repo: "https://github.com/JeremieLitzler/journal",
  //https://v2.vuepress.vuejs.org/reference/config.html#head
  head: [
    ["meta", { property: "og:title", content: titleDefault }],
    ["meta", { property: "og:url", content: "https://iamjeremie.me/" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Notes, thoughts and experiences of Jérémie.",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:image", content: "image.png" }],
    ["meta", { name: "msapplication-TileColor", content: "#36377a" }],
    ["meta", { name: "theme-color", content: "#36377a" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/icons/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/icons/favicon-16x16.png",
      },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#36377a",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/icons/apple-touch-icon.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
  ],
  themeConfig: {
    darkMode: true,
    logo: "/icons/favicon-32x32.png",
    navbar: [
      { text: "About", link: "/" },
      { text: "Blog", link: "/blog" },
    ],
    selectLanguageText: "English",
    selectLanguageAriaLabel: "Switch to English",
    selectLanguageName: "English",
    locales: {
      "/fr/": {
        selectLanguageText: "French",
        selectLanguageAriaLabel: "Switch to French",
        selectLanguageName: "French",
      },
      navbar: [
        { text: "About", link: "/fr/" },
        { text: "Blog", link: "/fr/blog/" },
      ],
    },
  },
  bundler: "@vuepress/vite",
  bundlerConfig: {
    build: {
      rollupOptions: {
        external: ["docs/.vuepress/helpers/MarkdownFilesIndexBuilder.js"],
      },
    },
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: ["/Git/GitHub/journal/docs/.vuepress/.temp/pages.js"],
      },
    },
  },
  onPrepared: async (app) => {
    console.log(app.pages.length);
    //15
    //13 in /blog
    //1 in /docs
    //what is the 15th?
    const pagesData = app.pages.map((page) => {
      //console.log(page);
      return page;
    });
    //For security concerns, accessing files outside of serving allow list will be restricted by default in the future version of Vite. Refer to https://vitejs.dev/config/#server-fs-allow for more details.
    await app.writeTemp(
      "pages.js",
      `export default ${JSON.stringify(pagesData)}`,
    );
  },
};
