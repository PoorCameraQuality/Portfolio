import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Truck, Package, Shield, Users, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-[#2c786c] py-12" id="contact">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-2 text-[#f8b400]">Feed Store (Demo)</h3>
            <p className="text-xs text-[#2c786c] mb-2">Example built by CheapLocalWebsites.com</p>
            <p className="text-[#2c786c] mb-4">
              Your trusted source for farm and feed essentials in Central Pennsylvania. 
              Quality products and expert advice since 1985.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-[#2c786c]">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Farm Road, Lancaster, PA</span>
              </div>
              <div className="flex items-center text-sm text-[#2c786c]">
                <Phone className="w-4 h-4 mr-2" />
                <span>(717) 555-0123</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#004445]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/feed-store" className="text-[#2c786c] hover:text-[#f8b400] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/feed-store/about" className="text-[#2c786c] hover:text-[#f8b400] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#2c786c] hover:text-[#f8b400] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-[#004445]">Our Services</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-[#2c786c]">
                <Truck className="w-4 h-4 mr-2" />
                <span>Local Delivery</span>
              </li>
              <li className="flex items-center text-[#2c786c]">
                <Package className="w-4 h-4 mr-2" />
                <span>Quality Products</span>
              </li>
              <li className="flex items-center text-[#2c786c]">
                <Shield className="w-4 h-4 mr-2" />
                <span>Expert Advice</span>
              </li>
              <li className="flex items-center text-[#2c786c]">
                <Users className="w-4 h-4 mr-2" />
                <span>Customer Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Hours */}
        <div className="border-t border-[#2c786c] pt-8 mb-8">
          <div className="text-center">
            <h4 className="font-semibold mb-4 text-[#004445]">Business Hours</h4>
            <div className="grid md:grid-cols-7 gap-4 text-sm">
              <div className="text-[#2c786c]">Mon</div>
              <div className="text-[#2c786c]">Tue</div>
              <div className="text-[#2c786c]">Wed</div>
              <div className="text-[#2c786c]">Thu</div>
              <div className="text-[#2c786c]">Fri</div>
              <div className="text-[#2c786c]">Sat</div>
              <div className="text-[#2c786c]">Sun</div>
              <div className="text-[#004445]">8AM-6PM</div>
              <div className="text-[#004445]">8AM-6PM</div>
              <div className="text-[#004445]">8AM-6PM</div>
              <div className="text-[#004445]">8AM-6PM</div>
              <div className="text-[#004445]">8AM-6PM</div>
              <div className="text-[#004445]">8AM-4PM</div>
              <div className="text-[#004445]">Closed</div>
            </div>
          </div>
        </div>

        {/* Example Site Disclaimer */}
        <div className="border-t border-[#2c786c] pt-8 text-center">
          <div className="bg-[#faf5e4] border border-[#f8b400] rounded-lg p-4 mb-4">
            <p className="text-[#004445] font-medium mb-2">
              🚧 Example Site for Portfolio Demonstration 🚧
            </p>
            <p className="text-[#2c786c] text-sm">
              This feed store website is a demo created to showcase web development skills. 
              All content, images, and contact information are fictional and for demonstration purposes only.
            </p>
          </div>
          
          <div className="text-sm text-[#2c786c] space-y-2">
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
                className="inline-flex items-center justify-center text-[#f8b400] underline"
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
