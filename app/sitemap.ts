export const baseUrl = 'https://nikiljonnada.com'

export default async function sitemap() {
  let routes = ['', '/experience', '/projects', '/skills'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
