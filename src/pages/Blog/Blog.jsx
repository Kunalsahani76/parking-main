import { useEffect, useState } from 'react'
import usePageSeo from '../../utils/usePageSeo'
import { readBlogPosts } from '../../utils/blogPosts'
import './Blog.css'

function Blog({ slug }) {
  const [posts, setPosts] = useState([])
  usePageSeo({
    title: slug ? 'Parking Insights | The Parking Advisor' : 'Parking Insights & Articles | The Parking Advisor',
    description: 'Explore practical insights on parking design, traffic planning, smart parking, and efficient parking operations.',
    path: slug ? `/blogs/${slug}` : '/blogs',
    keywords: 'parking blog, parking design, smart parking, traffic planning, parking consultancy India',
  })

  useEffect(() => {
    const refreshPosts = () => setPosts(readBlogPosts().filter((post) => post.publishedAt))
    refreshPosts()
    window.addEventListener('storage', refreshPosts)
    return () => window.removeEventListener('storage', refreshPosts)
  }, [])

  const post = slug ? posts.find((item) => item.slug === slug) : null

  if (slug) {
    return (
      <section className="blog-page page-shell">
        <div className="container blog-article-wrap">
          <a className="blog-back-link" href="/blogs">← All articles</a>
          {post ? (
            <article className="blog-article card">
              {post.image && <img className="blog-article__image" src={post.image} alt={post.title} />}
              <div className="blog-article__body">
                <p className="blog-eyebrow">{post.category || 'Parking insights'}</p>
                <h1>{post.title}</h1>
                <p className="blog-article__meta">{post.author ? `By ${post.author} · ` : ''}{new Date(post.publishedAt).toLocaleDateString('en-IN', { dateStyle: 'long' })}</p>
                {post.description && <p className="blog-article__description">{post.description}</p>}
                <div className="blog-article__content">{post.content}</div>
              </div>
            </article>
          ) : (
            <div className="blog-empty card"><p className="blog-eyebrow">Article</p><h1>Article not found</h1><p>This article may have been unpublished or the link may be incorrect.</p></div>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className="blog-page page-shell">
      <div className="container">
        <div className="blog-heading">
          <p className="blog-eyebrow">The Parking Advisor Journal</p>
          <h1>Ideas for better parking</h1>
          <p>Guidance and perspectives on parking design, mobility, and smarter operations.</p>
        </div>
        {posts.length ? (
          <div className="blog-grid">
            {posts.map((item) => (
              <article className="blog-card card" key={item.slug}>
                {item.image ? <img className="blog-card__image" src={item.image} alt={item.title} /> : <div className="blog-card__image blog-card__image--placeholder" aria-hidden="true"><span>Parking insights</span></div>}
                <div className="blog-card__body">
                  <p className="blog-eyebrow">{item.category || 'Parking insights'}</p>
                  <h2>{item.title}</h2>
                  <p>{item.description || `${item.content.slice(0, 150)}${item.content.length > 150 ? '…' : ''}`}</p>
                  <a className="blog-read-link" href={`/blogs/${encodeURIComponent(item.slug)}`}>Read article <span aria-hidden="true">→</span></a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="blog-empty card"><span className="blog-empty__icon" aria-hidden="true">✳</span><h2>New insights are on the way</h2><p>Published articles will appear here. Visit the Admin page to create the first post.</p><a className="button" href="/admin">Open Admin</a></div>
        )}
      </div>
    </section>
  )
}

export default Blog
