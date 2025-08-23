export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-8" id="contact">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact Me</h3>
            <div className="space-y-2 text-muted">
              <p>Central Pennsylvania</p>
              <p>Phone: (717) 555-0124</p>
              <p>Email: hello@capturelifephoto.com</p>
              <p>Instagram: @capturelifephoto</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Services</h3>
            <div className="space-y-2 text-muted">
              <p>Wedding Photography</p>
              <p>Portrait Sessions</p>
              <p>Event Coverage</p>
              <p>Commercial Work</p>
            </div>
          </div>

          {/* Business Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Business Hours</h3>
            <div className="space-y-2 text-muted">
              <p>By appointment only</p>
              <p>Weekdays: 9AM - 6PM</p>
              <p>Weekends: Available</p>
              <p>Emergency: 24/7</p>
            </div>
          </div>
        </div>

        {/* Licensing Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted max-w-3xl mx-auto">
            Portfolio images are for demonstration purposes. Final site will use licensed imagery 
            or original photos from actual client work.
          </p>
          <p className="text-xs text-muted mt-2">
            © 2024 Capture Life Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
