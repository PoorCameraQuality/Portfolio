import type { Metadata } from 'next'
import Link from 'next/link'
import { allBlogs } from '../../../.contentlayer/generated'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Benefits of Websites for Small Businesses',
  description: 'Learn why every small business needs a website in 2025. Expert tips on web presence, SEO, and digital marketing for local businesses.',
  keywords: ['small business website', 'local business SEO', 'web design tips', 'digital marketing', 'business website'],
}

export default function BlogPage() {
  const posts = allBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="section bg-bg">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h1 className="h1 text-text-primary mb-6">
              Small Business Website Tips
            </h1>
            <p className="lead text-text-primary/80 max-w-3xl mx-auto">
              Learn why every small business needs a website in 2025 and how to make yours work harder for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="card group hover:scale-105 transition-transform duration-300">
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
                  <div className="flex items-center text-sm text-text-muted mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  
                  <h2 className="h3 text-text-primary mb-3 line-clamp-2 group-hover:text-brand transition-colors duration-200">
                    {post.title}
                  </h2>
                  
                  <p className="text-text-secondary mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface-secondary text-text-secondary"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={post.url}
                    className="link inline-flex items-center group"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
