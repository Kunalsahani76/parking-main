import { useEffect } from 'react'

const siteUrl = 'https://www.theparkingadvisor.com'
const defaultOgImage = `${siteUrl}/images/og-home.jpg`
const defaultSeoDescription =
  'Get the best parking consultancy services for efficient parking design, traffic flow planning, and space optimization.'

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
    const pageUrl = openGraph?.url || `${siteUrl}${path}`

    document.title = title
    metaDescription.setAttribute('content', description)
    canonical.setAttribute('href', `${siteUrl}${path}`)

    if (keywords) {
      const metaKeywords = findOrCreateMeta('keywords')
      metaKeywords.setAttribute('content', keywords)
    } else {
      removeMeta('meta[name="keywords"]')
    }

    const ogTitle = openGraph?.title || title
    const ogDescription = openGraph?.description || defaultSeoDescription
    const ogValues = {
      'og:type': openGraph?.type || 'website',
      'og:site_name': 'The Parking Advisor',
      'og:title': ogTitle,
      'og:description': ogDescription,
      'og:url': pageUrl,
      'og:image': openGraph?.image || defaultOgImage,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:locale': 'en_IN',
    }

    Object.entries(ogValues).forEach(([property, content]) => {
      if (!content) {
        return
      }

      const meta = findOrCreatePropertyMeta(property)
      meta.setAttribute('content', content)
    })

    const twitterValues = {
      'twitter:card': 'summary_large_image',
      'twitter:title': ogTitle,
      'twitter:description': ogDescription,
      'twitter:image': openGraph?.image || defaultOgImage,
    }

    Object.entries(twitterValues).forEach(([name, content]) => {
      const meta = findOrCreateMeta(name)
      meta.setAttribute('content', content)
    })
  }, [description, keywords, openGraph, path, title])
}

export default usePageSeo
