import { createFileRoute } from '@tanstack/react-router'
import Markdoc from '@markdoc/markdoc'
import React from 'react'
import { Link } from '@tanstack/react-router'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { loadMarkdownFile, docsList, getOrderedDocSlugs } from '../lib/content'
import { parseMarkdoc, components } from '../lib/markdoc'
import { HeadingProvider } from '../components/markdoc/TypographyHeading'

export const Route = createFileRoute('/docs/$')({
  loader: async ({ params }) => {
    const slug = params._splat
    const doc = docsList.find((d) => d.slug === slug)
    if (!doc) throw new Error('Document not found')
    return await loadMarkdownFile(doc.path)
  },
  component: DocPage,
})

function DocPage() {
  const doc = Route.useLoaderData()
  const content = parseMarkdoc(doc.content)
  const orderedSlugs = getOrderedDocSlugs()
  const currentIndex = orderedSlugs.indexOf(doc.slug)
  const prevDoc = currentIndex > 0 ? docsList.find(d => d.slug === orderedSlugs[currentIndex - 1]) : null
  const nextDoc = currentIndex < orderedSlugs.length - 1 ? docsList.find(d => d.slug === orderedSlugs[currentIndex + 1]) : null

  React.useEffect(() => {
    try {
      window.dispatchEvent(new CustomEvent('doc:navigate', { detail: { title: doc.title, slug: doc.slug } }))
    } catch (e) {
    }
  }, [doc.title, doc.slug])

  // Scroll to anchor on page load if hash is present
  React.useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      // Small delay to ensure content is rendered
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [doc.content])

  return (
    <article className="max-w-none mx-8 mb-8 p-8 bg-white rounded-lg">
      <HeadingProvider>
        {Markdoc.renderers.react(content, React, { components })}
      </HeadingProvider>
      
      {/* Navigation */}
      <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
        {prevDoc ? (
          <Link
            to="/docs/$"
            params={{ _splat: prevDoc.slug }}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <div className="text-sm text-gray-500">Previous Page</div>
              <div className="font-medium">{prevDoc.title}</div>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        
        {nextDoc ? (
          <Link
            to="/docs/$"
            params={{ _splat: nextDoc.slug }}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors group"
          >
            <div className="text-right">
              <div className="text-sm text-gray-500">Next Page</div>
              <div className="font-medium">{nextDoc.title}</div>
            </div>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <div></div>
        )}
      </nav>
    </article>
  )
}