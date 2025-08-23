import type { Metadata } from 'next'
import Link from 'next/link'
import { allBlogs } from '../../../.contentlayer/generated'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: "Blog | CheapLocalWebsites.com",
  description: "Tips for small-business websites and local SEO — practical, local-first advice.",
}

export default function BlogPage() {
  const posts = allBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className="pt-32" style={{ backgroundColor: '#d3d6db' }}>
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h1 className="h1 mb-6" style={{ color: '#303841' }}>
              Small Business Website Tips
            </h1>
            <p className="lead max-w-3xl mx-auto" style={{ color: '#3a4750' }}>
              Learn why every small business needs a website in 2025 and how to make yours work harder for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="group hover:scale-105 transition-transform duration-300 rounded-2xl shadow-medium p-6 lg:p-8" style={{ backgroundColor: 'white', border: '1px solid rgba(58, 71, 80, 0.2)' }}>
                  {post.image && (
                    <div className="aspect-video overflow-hidden rounded-xl mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center text-sm mb-3" style={{ color: '#3a4750' }}>
                      <Calendar className="w-4 h-4 mr-2" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                    
                    <h2 className="h3 mb-3 line-clamp-2 transition-colors duration-200 hover:text-[#be3144]" style={{ color: '#303841' }}>
                      {post.title}
                    </h2>
                    
                    <p className="mb-4 line-clamp-3" style={{ color: '#3a4750' }}>
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                          style={{ backgroundColor: '#d3d6db', color: '#3a4750' }}
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={post.url}
                      className="inline-flex items-center group transition-colors duration-200 underline-offset-4 hover:underline"
                      style={{ color: '#be3144' }}
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="h2 mb-4" style={{ color: '#303841' }}>No Blog Posts Yet</h2>
              <p className="mb-8" style={{ color: '#3a4750' }}>
                Blog posts will appear here once they're published.
              </p>
              <Link href="/" className="px-6 py-3 rounded-full font-bold text-white transition-all duration-200 inline-flex items-center gap-2 hover:bg-[#a02838]" style={{ backgroundColor: '#be3144' }}>
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <a href="/services" className="px-6 py-3 rounded-full font-bold text-white transition-all duration-200 inline-flex items-center gap-2 hover:bg-[#a02838]" style={{ backgroundColor: '#be3144' }}>Get Your $15 Website</a>
        </div>
      </section>
    </main>
  )
}
