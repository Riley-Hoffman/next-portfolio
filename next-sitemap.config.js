/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://rileyhoffman.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'],
  transform: async (config, path) => {
    const priorityMap = {
      '/': 1.0,
      '/projects/': 0.9,
      '/faq/': 0.9,
      '/accessibility/': 0.9,
      '/projects/particle-cleanup/': 0.8,
      '/skills/': 0.8,
      '/contact/': 0.7,
      '/thank-you/': 0.7,
    }

    let normalizedPath = path
    if (normalizedPath !== '/' && !normalizedPath.endsWith('/')) {
      normalizedPath += '/'
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority:
        priorityMap[normalizedPath] !== undefined
          ? priorityMap[normalizedPath]
          : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    host: 'https://rileyhoffman.com',
  },
}
