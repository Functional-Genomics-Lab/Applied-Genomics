const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Applied Genomics',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/Applied-Genomics/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'Functional-Genomics-Lab/Applied-Genomics',
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'main',
    // editLinkText: '',
    lastUpdated: true,
    smoothScroll: true,
    sidebarDepth: 2,
    nav: [
      {
        text: 'Course',
        link: '/course/',
      },
      {
        text: 'Resources',
        link: '/resources/',
      },
      {
        text: 'Functional Genomics Laboratory',
        link: 'http://taehoonkim.org/',
      },
    ],
    sidebar: {
      '/course/': ['week_1', 'week_2'],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/active-header-links',
    'check-md',
  ],
};
