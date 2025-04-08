/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://chakra-flow.vercel.app',
  generateRobotsTxt: true,
  sitemapBaseFileName: "sitemap",
  changefreq: "weekly",
  additionalSitemaps: [
    "https://chakra-flow.vercel.app/sitemap-0.xml"
  ]
}