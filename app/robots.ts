import { MetadataRoute } from 'next'
import { isStaging } from '@/utils/env'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.muvx.ai'
  
  // If staging, disallow all crawling
  if (isStaging()) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }
  
  // Production robots configuration
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
