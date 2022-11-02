// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual de uso do SIASSB',
  tagline: 'Sistema Integrado da Assistência Social',
  url: 'https://marcelosb.github.io/',
  baseUrl: '/manual-siassb/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'marcelosb', // Usually your GitHub org/user name.
  trailingSlash: false,
  projectName: 'manual-siassb', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        // {
          // showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // }
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SIASSB',
        // logo: {
        //   alt: 'Logo Sistema Integrado da Assistência Social',
        //   src: 'img/logo.png',
        // },
        items: [
          {
            type: 'doc',
            docId: 'home',
            position: 'left',
            label: 'Início',
          },
          {
            type: 'doc',
            docId: 'historic',
            position: 'left',
            label: 'Buscar histórico',
          },
          {
            type: 'doc',
            docId: 'secretary/index',
            position: 'left',
            label: 'Secretaria',
          },
          {
            type: 'doc',
            docId: 'cras/index',
            position: 'left',
            label: 'CRAS',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} SIASSB - Sistema Integrado da Assistência Social.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
