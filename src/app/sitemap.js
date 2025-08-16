export const dynamic = 'force-static'

export default function sitemap() {
  return [
    {
      url: 'https://zharless.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}