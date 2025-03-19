const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
require('dotenv').config();
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Werenode Official Website',
  tagline: 'Web3.0 EV charging',
  url: 'https://werenode.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: { label: 'English' },
      fr: { label: 'Français' },
    },
  },
  organizationName: 'werenode', // Usually your GitHub org/user name.
  projectName: 'werenode-portal', // Usually your repo name.
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
  plugins: [
    './src/myevses-plugin',
  ],
  themeConfig: {
    prism: {
      theme: require('./src/theme/prism-archetype-theme'),
    },
    colorMode: {
      defaultMode: 'dark',
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
        { to: 'docs/intro', label: 'Intro', position: 'left' },
        { to: 'docs/showroom', label: 'Showroom', position: 'left' },
        { to: 'docs/innovations', label: 'Innovations', position: 'left' },
        { to: 'cryptos', label: 'Web3.0', position: 'left' },
        { to: 'invest', label: 'Join us', position: 'left' },
        { to: 'hardware', label: 'Hardware', position: 'left' },
        { to: 'faq', label: 'FAQ', position: 'left' },
        { to: 'Registeryourequipment', label: 'Register your equipment', position: 'left' },
        //{ to: 'myevses', label: 'My EVSEs', position: 'left' },
        /*{
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Technical docs',
        },*/
        { to: '/blog', label: 'Blog', position: 'left' },
        //{to: '/Status', label: 'System Status', position: 'right'},
        {
          href: 'https://t.me/joinchat/20948tdORW1hZTlk',
          label: 'Telegram',
          position: 'right',
        },
        {
          type: 'localeDropdown',
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
            {
              label: 'Join us',
              to: '/invest',
            }, /*
            {
              label: 'My Evses',
              to: '/myevses',
            },*/
            {
              label: 'Documentation',
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
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/werenode',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/were_node',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/werenode',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCpVn9cg28Okb907GG8KkMww',
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
            {
              label: 'Contact us',
              href: 'mailto:contact@werenode.com',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Werenode, Inc.`,
    },
    docs: {
      sidebar: {
        hideable: false,
      }

    }

  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Werenode/werenode-portal',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL', // 20 posts below or set to 'ALL' for unlimited
          // blogSidebarCount: 20,
          editUrl:
            'https://github.com/Werenode/werenode-portal/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-M4N4RH6CXF',
          // trackingID: 'G-QLM041KYQW',
          // Optional fields.
          anonymizeIP: false, // Should IPs be anonymized?
        },
      },
    ],
  ],
  customFields: {
    googleApiKey: process.env.GOOGLE_API_KEY,
  }
};
