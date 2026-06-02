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

function findOrCreatePropertyMeta(property) {
  const existingMeta = document.querySelector(`meta[property="${property}"]`)

  if (existingMeta) {
    return existingMeta
  }

  const meta = document.createElement('meta')
  meta.setAttribute('property', property)
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

function removeMeta(selector) {
  const existingMeta = document.querySelector(selector)

  if (existingMeta) {
    existingMeta.remove()
  }
}

function usePageSeo({ title, description, path, keywords, openGraph }) {
  useEffect(() => {
    const metaDescription = findOrCreateMeta('description')
    const canonical = findOrCreateCanonical()

    document.title = title
    metaDescription.setAttribute('content', description)
    canonical.setAttribute('href', `${siteUrl}${path}`)

    if (keywords) {
      const metaKeywords = findOrCreateMeta('keywords')
      metaKeywords.setAttribute('content', keywords)
    } else {
      removeMeta('meta[name="keywords"]')
    }

    if (openGraph) {
      const ogValues = {
        'og:title': openGraph.title,
        'og:description': openGraph.description,
        'og:url': openGraph.url || `${siteUrl}${path}`,
        'og:type': openGraph.type || 'website',
      }

      Object.entries(ogValues).forEach(([property, content]) => {
        if (!content) {
          return
        }

        const meta = findOrCreatePropertyMeta(property)
        meta.setAttribute('content', content)
      })
    } else {
      removeMeta('meta[property="og:title"]')
      removeMeta('meta[property="og:description"]')
      removeMeta('meta[property="og:url"]')
      removeMeta('meta[property="og:type"]')
    }
  }, [description, keywords, openGraph, path, title])
}

export default usePageSeo
