import { useEffect } from 'react'

const siteUrl = 'https://www.theparkingadvisor.com'

function findOrCreateMeta(name) {
  const existingMeta = document.querySelector(`meta[name="${name}"]`)

  if (existingMeta) {
    return existingMeta
  }

  const meta = document.createElement('meta')
  meta.setAttribute('name', name)
  document.head.appendChild(meta)
  return meta
}

function findOrCreateCanonical() {
  const existingCanonical = document.querySelector('link[rel="canonical"]')

  if (existingCanonical) {
    return existingCanonical
  }

  const canonical = document.createElement('link')
  canonical.setAttribute('rel', 'canonical')
  document.head.appendChild(canonical)
  return canonical
}

function usePageSeo({ title, description, path }) {
  useEffect(() => {
    const metaDescription = findOrCreateMeta('description')
    const canonical = findOrCreateCanonical()

    document.title = title
    metaDescription.setAttribute('content', description)
    canonical.setAttribute('href', `${siteUrl}${path}`)
  }, [description, path, title])
}

export default usePageSeo
