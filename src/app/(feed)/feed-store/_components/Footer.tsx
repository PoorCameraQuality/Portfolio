import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Truck, Package, Shield, Users, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12" id="contact">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-2 text-accent">Feed Store (Demo)</h3>
            <p className="text-xs text-muted mb-2">Example built by CheapLocalWebsites.com</p>
            <p className="text-muted mb-4">
              Your trusted source for farm and feed essentials in Central Pennsylvania. 
              Quality products and expert advice since 1985.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-muted">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Farm Road, Lancaster, PA</span>
              </div>
              <div className="flex items-center text-sm text-muted">
                <Phone className="w-4 h-4 mr-2" />
                <span>(717) 555-0123</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/feed-store" className="text-muted hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/feed-store/about" className="text-muted hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-muted">
                <Truck className="w-4 h-4 mr-2" />
                <span>Local Delivery</span>
              </li>
              <li className="flex items-center text-muted">
                <Package className="w-4 h-4 mr-2" />
                <span>Quality Products</span>
              </li>
              <li className="flex items-center text-muted">
                <Shield className="w-4 h-4 mr-2" />
                <span>Expert Advice</span>
              </li>
              <li className="flex items-center text-muted">
                <Users className="w-4 h-4 mr-2" />
                <span>Customer Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Hours */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="text-center">
            <h4 className="font-semibold mb-4">Business Hours</h4>
            <div className="grid md:grid-cols-7 gap-4 text-sm">
              <div className="text-muted">Mon</div>
              <div className="text-muted">Tue</div>
              <div className="text-muted">Wed</div>
              <div className="text-muted">Thu</div>
              <div className="text-muted">Fri</div>
              <div className="text-muted">Sat</div>
              <div className="text-muted">Sun</div>
              <div>8AM-6PM</div>
              <div>8AM-6PM</div>
              <div>8AM-6PM</div>
              <div>8AM-6PM</div>
              <div>8AM-6PM</div>
              <div>8AM-4PM</div>
              <div>Closed</div>
            </div>
          </div>
        </div>

        {/* Example Site Disclaimer */}
        <div className="border-t border-border pt-8 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-yellow-800 font-medium mb-2">
              🚧 Example Site for Portfolio Demonstration 🚧
            </p>
            <p className="text-yellow-700 text-sm">
              This feed store website is a demo created to showcase web development skills. 
              All content, images, and contact information are fictional and for demonstration purposes only.
            </p>
          </div>
          
          <div className="text-sm text-muted space-y-2">
            <p>
              Product images and names may reference third-party retailers for demonstration. 
              Final site will use licensed imagery or original photos.
            </p>
            <p>© 2025 CheapLocalWebsites.com — Demo site for $15/mo package.</p>
            <p className="mt-2">
              <a 
                href="https://cheaplocalwebsites.com" 
                target="_blank" 
                rel="noopener" 
                className="inline-flex items-center justify-center text-accent underline"
              >
                Get your $15 website <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
