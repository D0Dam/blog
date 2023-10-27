const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const navbar = {
  hideOnScroll: true,
  logo: {
    alt: 'Logo',
    src: 'img/logos/main.png',
    srcDark: 'img/logos/darkModeMain.png',
    href: '/blog',
    target: '_self',
  },
  items: [
    {
      to: 'blog',
      label: 'Blog',
      position: 'left',
    },
    {
      type: 'doc',
      docId: 'overview',
      position: 'left',
      label: 'Documents',
    },
    {
      href: 'https://github.com/d0dam',
      label: 'GitHub',
      position: 'right',
    },
  ],
};

const footer = {
  links: [
    {
      html: `
        Powered by <a href="https://docusaurus.io/" target="_blank" rel="noreferrer noopener">Docusaurus 2</a>, Hosted by <a href="https://github.com/" target="_blank" rel="noreferrer noopener">github pages</a>
        <br />
        Copyright © 2022 <a href="https://github.com/d0dam" target="_blank" rel="noreferrer noopener">minjaeKim</a>. All rights reserved.
        `,
    },
  ],
};

const prism = {
  theme: lightCodeTheme,
  darkTheme: darkCodeTheme,
};

module.exports = Object.assign({ navbar, footer, prism });
