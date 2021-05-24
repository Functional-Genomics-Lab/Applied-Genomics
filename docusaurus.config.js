/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Applied Genomics',
  tagline: 'Course material for Applied Genomics ',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/Applied-Genomics/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Functional-Genomics-Lab', // Usually your GitHub org/user name.
  projectName: 'Applied-Genomics', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Applied Genomics',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Course',
        },
        { to: '/docs/resources', label: 'Resources', position: 'left' },
        {
          label: 'Functional Genomics Laboratory',
          href: 'http://taehoonkim.org/',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Course',
          items: [
            {
              label: 'Overview',
              to: '/docs/intro',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Functional-Genomics-Lab/Applied-Genomics/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
