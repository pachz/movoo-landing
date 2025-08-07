import fs from 'fs'
import path from 'path'

export interface SitemapItem {
  url: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

export function getFileModificationDate(filePath: string): Date {
  try {
    const stats = fs.statSync(filePath)
    return stats.mtime
  } catch (error) {
    console.error(`Error getting modification date for ${filePath}:`, error)
    return new Date()
  }
}

export function getMdxFilesFromDirectory(directory: string): string[] {
  try {
    const files = fs.readdirSync(directory)
    return files.filter(file => file.endsWith('.mdx'))
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error)
    return []
  }
}

export function generateDocSlugs(): string[] {
  const docsDirectory = path.join(process.cwd(), 'content/docs')
  const files = getMdxFilesFromDirectory(docsDirectory)
  return files.map(file => file.replace('.mdx', ''))
}

export function generateBlogSlugs(): string[] {
  const blogDirectory = path.join(process.cwd(), 'content/blog')
  const files = getMdxFilesFromDirectory(blogDirectory)
  return files.map(file => file.replace('.mdx', ''))
}

export function getDocModificationDate(slug: string): Date {
  const filePath = path.join(process.cwd(), 'content/docs', `${slug}.mdx`)
  return getFileModificationDate(filePath)
}

export function getBlogModificationDate(slug: string): Date {
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`)
  return getFileModificationDate(filePath)
}
