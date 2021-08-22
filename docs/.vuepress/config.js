const { path } = require('@vuepress/utils');

const titleDefault = 'Online journal by Jeremiel';
const titleFr = 'Un journal en ligne par Jeremiel';

module.exports = {
  lang: 'en-US',
  locales: {
    '/fr/': {
      lang: 'fr-FR',
      title: titleFr,
      description:
        'Je partage ici mes notes et experiences qui peuvent être importantes et utiles pour vous',
      head: [
        ['meta', { property: 'og:title', content: titleFr }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:url', content: 'https://iamjeremie.me/' }],
        [
          'meta',
          {
            property: 'og:description',
            content: 'Notes, thoughts and experiences of Jérémie.',
          },
        ],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:image', content: 'image.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#36377a' }],
        ['meta', { name: 'theme-color', content: '#36377a' }],
        [
          'link',
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/icons/favicon-32x32.png',
          },
        ],
        [
          'link',
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/icons/favicon-16x16.png',
          },
        ],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        [
          'link',
          {
            rel: 'mask-icon',
            href: '/icons/safari-pinned-tab.svg',
            color: '#36377a',
          },
        ],
        [
          'link',
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/icons/apple-touch-icon.png',
          },
        ],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }],
      ],
    },
  },
  title: titleDefault,
  description:
    'I share my notes, thoughts and experiences that can be useful and important to you',
  repo: 'https://github.com/JeremieLitzler/journal',
  //https://v2.vuepress.vuejs.org/reference/config.html#head
  head: [
    ['meta', { property: 'og:title', content: titleDefault }],
    ['meta', { property: 'og:url', content: 'https://iamjeremie.me/' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Notes, thoughts and experiences of Jérémie.',
      },
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'image.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#36377a' }],
    ['meta', { name: 'theme-color', content: '#36377a' }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#36377a',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ],
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    repo: 'JeremieLitzler/journal',
    docsRepo: 'https://github.com/JeremieLitzler/journal',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',
    darkMode: true,
    logo: '/icons/favicon-32x32.png',
    logoDark: '/icons/dark-favicon-32x32.png',
    navbar: [
      { text: 'Who am I', link: '/' },
      { text: 'Read now', link: '/posts/' },
    ],
    selectLanguageText: 'Switch to English',
    selectLanguageAriaLabel: 'Switch to English',
    locales: {
      '/': { selectLanguageName: 'English' },
      '/fr/': {
        selectLanguageText: 'French',
        selectLanguageAriaLabel: 'Switch to French',
        selectLanguageName: 'French',
      },
      navbar: [
        { text: 'About', link: '/fr/' },
        { text: 'Blog', link: '/fr/articles/' },
      ],
    },
  },
  bundler: '@vuepress/vite',
  bundlerConfig: {
    build: {
      rollupOptions: {
        external: ['docs/.vuepress/helpers/MarkdownFilesIndexBuilder.js'],
      },
    },
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        // For security concerns, accessing files outside of serving allow list will be restricted by default in the future version of Vite.
        // Refer to https://vitejs.dev/config/#server-fs-allow for more details.
        allow: ['/Git/GitHub/journal/docs/.vuepress/.temp/pages.js'],
      },
    },
  },
  plugins: [
    ['@vuepress/plugin-pwa'],
    [
      '@vuepress/plugin-pwa-popup',
      {
        locales: {
          '/fr/': {
            message: 'Nouveaux contenus disponibles. Pour rafraichir,',
            buttonText: 'Cliquez ici',
          },
        },
      },
    ],
  ],
  onPrepared: async (app) => {
    console.log('Pages generated by Vite => ', app.pages.length);
    const pagesData = app.pages.map((page) => {
      console.log(page.filePathRelative);
      return page;
    });
    //save markdown file data to a dynamically generated JavaScript file
    await app.writeTemp(
      'pages.js',
      `export default ${JSON.stringify(pagesData)}`,
    );
  },
};
