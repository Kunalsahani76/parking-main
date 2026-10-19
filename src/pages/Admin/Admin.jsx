import { useEffect, useState } from 'react'
import { BLOG_POSTS_KEY, createBlogSlug, readBlogPosts } from '../../utils/blogPosts'
import './Admin.css'

const emptyForm = { title: '', slug: '', category: 'Parking Design', author: '', description: '', content: '', image: '' }

function Admin() {
  const [posts, setPosts] = useState(() => readBlogPosts())
  const [form, setForm] = useState(emptyForm)
  const [editingSlug, setEditingSlug] = useState('')
  const [notice, setNotice] = useState('')

  useEffect(() => {
    const refresh = () => setPosts(readBlogPosts())
    window.addEventListener('storage', refresh)
    return () => window.removeEventListener('storage', refresh)
  }, [])

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function savePost(publish) {
    const title = form.title.trim()
    const slug = createBlogSlug(form.slug.trim() || title)
    if (!title || !slug || !form.content.trim()) {
      setNotice('Add a title and article content before saving.')
      return
    }
    const currentPosts = readBlogPosts()
    const prior = currentPosts.find((post) => post.slug === editingSlug || post.slug === slug)
    const saved = {
      ...form,
      title,
      slug,
      content: form.content.trim(),
      publishedAt: publish ? prior?.publishedAt || new Date().toISOString() : prior?.publishedAt || '',
    }
    const nextPosts = [...currentPosts.filter((post) => post.slug !== editingSlug && post.slug !== slug), saved]
    window.localStorage.setItem(BLOG_POSTS_KEY, JSON.stringify(nextPosts))
    setPosts(nextPosts)
    setForm(emptyForm)
    setEditingSlug('')
    setNotice(publish ? 'Article published.' : 'Draft saved.')
  }

  function editPost(post) {
    setEditingSlug(post.slug)
    setForm({ ...emptyForm, ...post })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function deletePost(post) {
    if (!window.confirm(`Delete “${post.title}”?`)) return
    const nextPosts = readBlogPosts().filter((item) => item.slug !== post.slug)
    window.localStorage.setItem(BLOG_POSTS_KEY, JSON.stringify(nextPosts))
    setPosts(nextPosts)
    if (editingSlug === post.slug) {
      setForm(emptyForm)
      setEditingSlug('')
    }
    setNotice('Article deleted.')
  }

  function selectImage(event) {
    const file = event.target.files?.[0]
    if (!file) return
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 2 * 1024 * 1024) {
      setNotice('Choose a JPG, PNG, or WebP image under 2 MB.')
      event.target.value = ''
      return
    }
    const reader = new FileReader()
    reader.onload = () => setForm((current) => ({ ...current, image: String(reader.result || '') }))
    reader.readAsDataURL(file)
  }

  return (
    <section className="admin-page page-shell">
      <div className="container admin-page__container">
        <header className="admin-heading">
          <div>
            <p className="blog-eyebrow">Content management</p>
            <h1>Blog Admin</h1>
            <p>Create, edit, and publish articles for the Blog page.</p>
          </div>
          <a className="admin-view-link" href="/blogs">View Blog <span aria-hidden="true">→</span></a>
        </header>

        <form className="admin-editor card" onSubmit={(event) => { event.preventDefault(); savePost(true) }}>
          <div className="admin-editor__title">
            <div><h2>{editingSlug ? 'Edit article' : 'Create an article'}</h2><p>Published posts appear on the public Blog page.</p></div>
            {editingSlug && <button className="admin-text-button" type="button" onClick={() => { setForm(emptyForm); setEditingSlug('') }}>Cancel edit</button>}
          </div>
          <div className="admin-form-grid">
            <label>Article title<input required maxLength={160} name="title" value={form.title} onChange={updateField} placeholder="e.g. Designing Safer Parking Entrances" /></label>
            <label>URL slug<input name="slug" value={form.slug} onChange={updateField} placeholder="Generated from title when blank" /></label>
            <label>Category<input name="category" value={form.category} onChange={updateField} placeholder="Parking Design" /></label>
            <label>Author<input name="author" value={form.author} onChange={updateField} placeholder="Author name" /></label>
            <label className="admin-form-grid__wide">Short description<textarea maxLength={320} name="description" value={form.description} onChange={updateField} rows="3" placeholder="A short summary for the article card" /></label>
            <label className="admin-form-grid__wide">Article content<textarea required name="content" value={form.content} onChange={updateField} rows="10" placeholder="Write your article..." /></label>
            <label className="admin-form-grid__wide">Featured image<input type="file" accept="image/png,image/jpeg,image/webp" onChange={selectImage} /><span className="admin-field-help">Optional image, maximum 2 MB.</span></label>
          </div>
          {form.image && <div className="admin-image-preview"><img src={form.image} alt="Article preview" /><button type="button" className="admin-text-button" onClick={() => setForm((current) => ({ ...current, image: '' }))}>Remove image</button></div>}
          {notice && <p className="admin-notice" role="status">{notice}</p>}
          <div className="admin-editor__actions"><button type="button" className="admin-secondary-button" onClick={() => savePost(false)}>Save draft</button><button type="submit" className="admin-primary-button">{editingSlug ? 'Update & publish' : 'Publish article'}</button></div>
        </form>

        <section className="admin-posts card" aria-labelledby="admin-posts-title">
          <div className="admin-posts__heading"><div><h2 id="admin-posts-title">Articles</h2><p>{posts.length} saved {posts.length === 1 ? 'article' : 'articles'}</p></div></div>
          {posts.length ? (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead><tr><th>Article</th><th>Category</th><th>Status</th><th>Updated</th><th>Actions</th></tr></thead>
                <tbody>{posts.map((post) => (
                  <tr key={post.slug}>
                    <td><strong>{post.title}</strong><span>/{post.slug}</span></td>
                    <td>{post.category || 'Uncategorized'}</td>
                    <td><span className={`admin-status ${post.publishedAt ? 'is-published' : ''}`}>{post.publishedAt ? 'Published' : 'Draft'}</span></td>
                    <td>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-IN') : '—'}</td>
                    <td><div className="admin-row-actions"><button type="button" onClick={() => editPost(post)}>Edit</button>{post.publishedAt && <a href={`/blogs/${encodeURIComponent(post.slug)}`}>View</a>}<button type="button" className="is-delete" onClick={() => deletePost(post)}>Delete</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          ) : <p className="admin-no-posts">No articles yet. Write an article above to get started.</p>}
        </section>
        <p className="admin-storage-note">Articles are saved in this browser. This page does not yet use a shared database or admin sign-in.</p>
      </div>
    </section>
  )
}

export default Admin
