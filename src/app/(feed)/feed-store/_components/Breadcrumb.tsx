import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbProps {
  items?: Array<{
    label: string
    href?: string
  }>
}

export default function Breadcrumb({ items = [] }: BreadcrumbProps) {
  return (
    <nav className="bg-surface/50 border-b border-border py-3">
      <div className="container">
        <div className="flex items-center space-x-2 text-sm">
          <Link 
            href="/" 
            className="flex items-center text-muted hover:text-accent transition-colors"
          >
            <Home className="w-4 h-4 mr-1" />
            Braxcraft Portfolio
          </Link>
          
          <ChevronRight className="w-4 h-4 text-muted" />
          
          <Link 
            href="/feed-store" 
            className="text-muted hover:text-accent transition-colors"
          >
            Feed Store Example
          </Link>
          
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-muted" />
              {item.href ? (
                <Link 
                  href={item.href}
                  className="text-muted hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-accent font-medium">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
