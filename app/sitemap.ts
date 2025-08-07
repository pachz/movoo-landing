import { MetadataRoute } from 'next'
import { 
  generateDocSlugs, 
  generateBlogSlugs, 
  getDocModificationDate, 
  getBlogModificationDate 
} from '@/utils/sitemap'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://muvx.ai'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/documentation`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Generate documentation pages with actual modification dates
  const docSlugs = generateDocSlugs()
  const docPages: MetadataRoute.Sitemap = docSlugs.map(slug => ({
    url: `${baseUrl}/documentation/${slug}`,
    lastModified: getDocModificationDate(slug),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...docPages]
}
