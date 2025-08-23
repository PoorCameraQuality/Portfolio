export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-8" id="contact">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact Us</h3>
            <div className="space-y-2 text-muted">
              <p>123 Farm Road</p>
              <p>Central PA 17000</p>
              <p>Phone: (717) 555-0123</p>
              <p>Email: info@feedstore.com</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Store Hours</h3>
            <div className="space-y-2 text-muted">
              <p>Monday - Friday: 7AM - 6PM</p>
              <p>Saturday: 8AM - 4PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Services</h3>
            <div className="space-y-2 text-muted">
              <p>Local Delivery</p>
              <p>Bulk Orders</p>
              <p>Expert Advice</p>
              <p>Special Orders</p>
            </div>
          </div>
        </div>

        {/* Licensing Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted max-w-3xl mx-auto">
            Product images and names may reference third-party retailers for demonstration. 
            Final site will use licensed imagery or original photos.
          </p>
          <p className="text-xs text-muted mt-2">
            © 2024 Feed Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
