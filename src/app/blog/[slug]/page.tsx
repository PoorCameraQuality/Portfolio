import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allBlogs } from '../../../../.contentlayer/generated'
import Link from 'next/link'
import { Calendar, Tag, ArrowLeft, CalendarDays, User } from 'lucide-react'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = allBlogs.find((post) => post.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = allBlogs.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Back to Blog */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <CalendarDays className="w-4 h-4 mr-2" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="mx-2">•</span>
            <User className="w-4 h-4 mr-2" />
            <span>{post.author}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
              >
                <Tag className="w-4 h-4 mr-2" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Article Body */}
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700">
          {/* Note: In a real implementation, you would use MDX rendering here */}
          {/* For now, we'll show a placeholder since MDX rendering requires additional setup */}
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-600 mb-4">
              <strong>Note:</strong> This is a blog post about "{post.title}". 
              In a production environment, this would render the full MDX content.
            </p>
            <p className="text-gray-600">
              The content includes detailed information about {post.tags.join(', ')} 
              and provides valuable insights for small business owners.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to get your business online?
          </h2>
          <p className="text-blue-100 mb-6 text-lg">
            Let's discuss how a professional website can transform your business and attract more customers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Book a Free Consultation Today
          </Link>
        </div>
      </article>
    </div>
  )
}
