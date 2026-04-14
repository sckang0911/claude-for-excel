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
        title: 'Jubo Claude for Excel Mini Course',
        logo: {
          alt: '智齡科技',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'courseSidebar',
            position: 'left',
            label: '開始學習',
          },
          {
            href: 'https://jubo.health',
            label: '智齡科技官網',
            position: 'right',
          },
          {
            href: 'https://github.com/sckang0911/claude-for-excel',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '課程',
            items: [
              { label: '課程地圖', to: '/' },
              { label: 'Level 1｜讀', to: '/L1/' },
              { label: 'Level 2｜找', to: '/L2/' },
              { label: 'Level 3｜算', to: '/L3/' },
              { label: 'Level 4｜畫', to: '/L4/' },
            ],
          },
          {
            title: '進階課程',
            items: [
              { label: 'Level 5｜會', to: '/L5/' },
              { label: 'Level 6｜查', to: '/L6/' },
              { label: 'Level 7｜報', to: '/L7/' },
              { label: 'Level 8｜測', to: '/L8/' },
            ],
          },
          {
            title: '智齡科技',
            items: [
              { label: '官網', href: 'https://jubo.health' },
              { label: 'GitHub', href: 'https://github.com/sckang0911/claude-for-excel' },
            ],
          },
        ],
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
