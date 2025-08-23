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
    <nav className="bg-surface/50 border-b border-[#2c786c] py-3">
      <div className="container">
        <div className="flex items-center space-x-2 text-sm">
          <Link 
            href="/" 
            className="flex items-center text-[#2c786c] hover:text-[#f8b400] transition-colors"
          >
            <Home className="w-4 h-4 mr-1" />
            CheapLocalWebsites Portfolio
          </Link>
          
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-[#2c786c]" />
              {item.href ? (
                <Link 
                  href={item.href}
                  className="text-[#2c786c] hover:text-[#f8b400] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#004445] font-medium">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
