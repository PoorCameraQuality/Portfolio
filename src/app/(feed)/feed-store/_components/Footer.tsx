import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Truck, Package, Shield, Users } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12" id="contact">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Feed Store</h3>
            <p className="text-muted mb-4">
              Your trusted source for farm and feed essentials in Central Pennsylvania. 
              Quality products and expert advice since 1985.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact Us</h3>
            <div className="space-y-3 text-muted">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-accent" />
                <span>123 Farm Road, Central PA 17000</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-accent" />
                <span>(717) 555-0123</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-accent" />
                <span>info@feedstore.com</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-accent" />
                <span>@feedstorepa</span>
              </div>
            </div>
          </div>

          {/* Store Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Store Hours</h3>
            <div className="space-y-2 text-muted">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7AM - 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>8AM - 4PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
              <div className="pt-2 text-sm">
                <Clock className="w-4 h-4 inline mr-1 text-accent" />
                <span>Holiday hours may vary</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Services</h3>
            <div className="space-y-2 text-muted">
              <p>✓ Local Delivery</p>
              <p>✓ Bulk Orders</p>
              <p>✓ Expert Advice</p>
              <p>✓ Special Orders</p>
              <p>✓ Product Training</p>
              <p>✓ Emergency Support</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <Link href="/feed-store" className="text-muted hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/feed-store#shop" className="text-muted hover:text-accent transition-colors">
              Shop
            </Link>
            <Link href="/feed-store/about" className="text-muted hover:text-accent transition-colors">
              About Us
            </Link>
            <Link href="/feed-store#contact" className="text-muted hover:text-accent transition-colors">
              Contact
            </Link>
            <Link href="/feed-store/privacy" className="text-muted hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/feed-store/terms" className="text-muted hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Example Site Disclaimer */}
        <div className="border-t border-border pt-8 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-yellow-800 font-medium mb-2">
              🚧 This is an EXAMPLE SITE for Portfolio Demonstration 🚧
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
            <p>© 2024 Feed Store Example Site. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
