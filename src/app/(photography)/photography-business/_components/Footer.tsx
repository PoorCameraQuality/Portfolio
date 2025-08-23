import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Camera, Award, Heart, Users, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12" id="contact">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Capture Life Photography</h3>
            <p className="text-muted mb-4">
              Capturing life's precious moments with professional photography services. 
              Specializing in weddings, portraits, and events across Central Pennsylvania.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact Me</h3>
            <div className="space-y-3 text-muted">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-accent" />
                <span>Central Pennsylvania</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-accent" />
                <span>(717) 555-0124</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-accent" />
                <span>hello@capturelifephoto.com</span>
              </div>
              <div className="flex items-center">
                <Instagram className="w-4 h-4 mr-2 text-accent" />
                <span>@capturelifephoto</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Services</h3>
            <div className="space-y-2 text-muted">
              <p>✓ Wedding Photography</p>
              <p>✓ Portrait Sessions</p>
              <p>✓ Event Coverage</p>
              <p>✓ Commercial Work</p>
              <p>✓ Family Photos</p>
              <p>✓ Engagement Sessions</p>
            </div>
          </div>

          {/* Business Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Business Hours</h3>
            <div className="space-y-2 text-muted">
              <div className="flex justify-between">
                <span>Weekdays</span>
                <span>9AM - 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Weekends</span>
                <span>Available</span>
              </div>
              <div className="flex justify-between">
                <span>Emergency</span>
                <span>24/7</span>
              </div>
              <div className="pt-2 text-sm">
                <Clock className="w-4 h-4 inline mr-1 text-accent" />
                <span>By appointment only</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <Link href="/photography-business" className="text-muted hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-muted hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-muted hover:text-accent transition-colors">
              Portfolio
            </Link>
            <Link href="#pricing" className="text-muted hover:text-accent transition-colors">
              Pricing
            </Link>
            <Link href="/photography-business/about" className="text-muted hover:text-accent transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-muted hover:text-accent transition-colors">
              Contact
            </Link>
            <Link href="/photography-business/privacy" className="text-muted hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/photography-business/terms" className="text-muted hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Example Site Disclaimer */}
        <div className="border-t border-border pt-8 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-blue-800 font-medium mb-2">
              📸 This is an EXAMPLE SITE for Portfolio Demonstration 📸
            </p>
            <p className="text-blue-700 text-sm">
              This photography business website is a demo created to showcase web development skills. 
              All content, images, and contact information are fictional and for demonstration purposes only.
            </p>
          </div>
          
          <div className="text-sm text-muted space-y-2">
            <p>
              Portfolio images are for demonstration purposes. Final site will use licensed imagery 
              or original photos from actual client work.
            </p>
            <p>© 2024 Capture Life Photography Example Site. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
