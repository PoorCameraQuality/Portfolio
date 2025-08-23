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
      title: "Post not found | CheapLocalWebsites.com",
      description: "This post no longer exists."
    }
  }

  return {
    title: `${post.title} | CheapLocalWebsites.com`,
    description: post.excerpt || "Small business website tips and local SEO.",
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
    <div className="min-h-screen" style={{ backgroundColor: '#d3d6db' }}>
      {/* Back to Blog */}
      <div style={{ backgroundColor: 'white', borderBottom: '1px solid rgba(58, 71, 80, 0.2)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center font-medium transition-colors duration-200 hover:text-[#a02838]"
            style={{ color: '#be3144' }}
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
          <div className="flex items-center text-sm mb-4" style={{ color: '#3a4750' }}>
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
          
          <h1 className="text-4xl font-bold mb-6" style={{ color: '#303841' }}>
            {post.title}
          </h1>
          
          <p className="text-xl mb-6" style={{ color: '#3a4750' }}>
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                style={{ backgroundColor: '#f8f9fa', color: '#3a4750', border: '1px solid rgba(58, 71, 80, 0.2)' }}
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
        <div className="prose prose-lg max-w-none">
          {/* Note: In a real implementation, you would use MDX rendering here */}
          {/* For now, we'll show a placeholder since MDX rendering requires additional setup */}
          <div className="p-6 rounded-lg border-l-4" style={{ backgroundColor: '#f8f9fa', borderLeftColor: '#be3144' }}>
            <p className="mb-4" style={{ color: '#3a4750' }}>
              <strong style={{ color: '#303841' }}>Note:</strong> This is a blog post about "{post.title}". 
              In a production environment, this would render the full MDX content.
            </p>
            <p style={{ color: '#3a4750' }}>
              The content includes detailed information about {post.tags.join(', ')} 
              and provides valuable insights for small business owners.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 rounded-lg text-white text-center" style={{ backgroundColor: '#be3144' }}>
          <h2 className="text-2xl font-bold mb-4">
            Ready to get your business online?
          </h2>
          <p className="mb-6 text-lg" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Let's discuss how a professional website can transform your business and attract more customers.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-colors duration-200 hover:bg-[#f8f9fa]"
            style={{ backgroundColor: 'white', color: '#be3144' }}
          >
            Get Your $15 Website
          </Link>
        </div>
      </article>
    </div>
  )
}
