export const BLOG_POSTS_KEY = 'parking-advisor-blog-posts'

export function readBlogPosts() {
  try {
    const posts = JSON.parse(window.localStorage.getItem(BLOG_POSTS_KEY) || '[]')
    return Array.isArray(posts) ? posts : []
  } catch {
    return []
  }
}

export function createBlogSlug(title) {
  return title
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 140)
}
