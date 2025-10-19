export const baseUrl = 'https://nikil-jonnada-portfolio.vercel.app'

export default async function sitemap() {
  let routes = ['', '/experience', '/projects', '/skills'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
