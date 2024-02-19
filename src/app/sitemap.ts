import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://iron-will-tattoo.vercel.app/',
      lastModified: new Date(),
    },
  ]
}
