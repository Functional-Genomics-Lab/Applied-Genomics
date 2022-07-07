/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Applied Genomics',
  tagline: 'Course material for Applied Genomics ',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/Applied-Genomics/',
  onBrokenLinks: 'warn', // FIXME
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Functional-Genomics-Lab', // Usually your GitHub org/user name.
  projectName: 'Applied-Genomics', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Applied Genomics',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/functional-genomics.png',
      // },
      items: [
        {
          type: 'doc',
          docId: 'overview',
          position: 'left',
          label: 'Course',
        },
        { to: '/docs/resources', label: 'Resources', position: 'left' },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [{ to: '/versions', label: 'All versions' }],
          dropdownActiveClassDisabled: true,
        },
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
              to: '/docs/overview',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['groovy'],
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
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Summer 22',
            },
            "21u": {
              label: 'Summer 21',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
