const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Official',
  tagline: 'Dinosaurs are cool',
  url: 'https://werenode.github.io',
  baseUrl: '/werenode-portal/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'werenode', // Usually your GitHub org/user name.
  projectName: 'werenode-portal', // Usually your repo name.
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
  plugins: [
    './src/myevses-plugin',
  ],
  themeConfig: {
    hideableSidebar: false,
    prism: {
      theme: require('./src/theme/prism-archetype-theme'),
    },
    colorMode : {
      defaultMode : 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: '',
      logo: {
        alt: 'Werenode portal',
        src: 'img/werenode_logo_no_name_250px.png',
      },
      items: [
        //{ to: 'invest', label: 'Invest', position: 'left' },
        //{ to: 'myevses', label: 'My EVSEs', position: 'left' },
        /*{
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Technical docs',
        },*/
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://t.me/joinchat/20948tdORW1hZTlk',
          label: 'Telegram',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Services',
          items: [
            /*{
              label: 'Invest',
              to: '/invest',
            },
            {
              label: 'My Evses',
              to: '/myevses',
            },*/
            {
              label: 'Technical Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/joinchat/20948tdORW1hZTlk',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/werenode',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Werenode',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Werenode, Inc.`,
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Werenode/werenode-portal',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Werenode/werenode-portal/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
