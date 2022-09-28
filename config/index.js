const themeConfig = require('./theme');
const i18n = require('./i18n');
const config = {
	title: "d0dam's-log",
	url: 'https://d0dam.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/logo/favicon.ico',
	organizationName: 'https://github.com/d0dam', // Usually your GitHub org/user name.
	projectName: 'blog', // Usually your repo name.
	i18n,
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				googleAnalytics: {
					trackingID: 'G-DBVZBC9QT5',
					anonymizeIP: true,
				},
				gtag: {
					trackingID: 'G-DBVZBC9QT5',
					anonymizeIP: true,
				},
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
					ignorePatterns: [],
					filename: 'sitemap.xml',
				},
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
				},
				blog: {
					showReadingTime: true,
				},
				theme: {
					customCss: require.resolve('./css/custom.css'),
				},
			},
		],
	],
	themeConfig,
};

module.exports = config;
