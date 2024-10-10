import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'DDC',
  tagline: 'DDC',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  organizationName: 'facebook',
  projectName: 'docusaurus',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'uk',
    locales: ['uk'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        }
      })
    ]
  ],

  themeConfig:
    ({
      navbar: {
        title: 'DDC',
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ]
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

    plugins: [
      require.resolve('docusaurus-plugin-image-zoom')
    ]
};

export default config;
