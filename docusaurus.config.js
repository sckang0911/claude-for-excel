// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Claude for Excel｜智齡科技免費課程',
  tagline: '40堂課，從零開始，用 AI 讓 Excel 工作更聰明',
  favicon: 'img/favicon.ico',

  // ── 部署設定 ──────────────────────────────────────────────
  // TODO: 換成你的 GitHub username
  url: 'https://sckang0911.github.io',
  // TODO: 換成你的 repo 名稱（例如 claude-for-excel）
  baseUrl: '/claude-for-excel/',

  organizationName: 'sckang0911', // GitHub username
  projectName: 'claude-for-excel',          // repo 名稱
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',          // docs 放在根目錄
          editUrl: undefined,
        },
        blog: false,                   // 先不開 blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/og-image.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
      },
      navbar: {
        title: 'Jubo Mini Course (Claude for Excel)',
        logo: {
          alt: 'Jubo',
          src: 'img/jubo-logo-transparent.png',
        },
        items: [],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `© ${new Date().getFullYear()} 智齡科技 Jubo Technology｜本課程免費開放使用`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // 搜尋（Docusaurus 內建 Algolia，先用本地搜尋）
    }),
};

module.exports = config;
