<<<<<<< HEAD
const titleFr = 'Experiences et notes de Jérémie Litzler';
=======
const titleFr = 'Un journal, par Jeremie Litzler';
>>>>>>> 486b3249366e4ba7751e6cea33139cd5c57f77b3

module.exports = {
  lang: 'fr-FR',
  title: titleFr,
  description:
<<<<<<< HEAD
    "Je partage ici ce que j'ai appris, ce qui m'a été utile au moins une fois et ce que j'ai vécu. Peut-être cela sera-t-il utile et importante pour vous aussi. Profitez !",
  head: [
    ['meta', { property: 'og:title', content: titleFr }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://iamjeremie.me/fr/' }],
=======
    'Je partage ici mes notes et experiences qui peuvent être importantes et utiles pour vous',
  head: [
    ['meta', { property: 'og:title', content: titleFr }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://iamjeremie.me/' }],
>>>>>>> 486b3249366e4ba7751e6cea33139cd5c57f77b3
    [
      'meta',
      {
        property: 'og:description',
        content: 'Notes, thoughts and experiences of Jérémie.',
      },
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'image.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#18a558' }],
    ['meta', { name: 'theme-color', content: '#18a558' }],
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
        color: '#18a558',
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
    ['link', { rel: 'manifest', href: '/site.fr.webmanifest' }],
  ],
};
