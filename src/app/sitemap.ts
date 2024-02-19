import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.ironwilltattoo.club/',
      lastModified: new Date(),
    },
  ]
}