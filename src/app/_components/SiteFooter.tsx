export default function SiteFooter(){
  return (
    <footer className="soft-section">
      <div className="container py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-semibold text-lg mb-2">CheapLocalWebsites</div>
          <p className="text-[var(--muted)]">Handcrafted, managed websites for local businesses — with Google Maps and updates included.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Explore</div>
          <ul className="space-y-2 text-[var(--muted)]">
            <li><a href="/work">Work</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <ul className="space-y-2 text-[var(--muted)]">
            <li>Shippensburg, PA</li>
            <li><a href="mailto:hello@cheaplocalwebsites.com">hello@cheaplocalwebsites.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border)]">
        <div className="container py-6 text-sm text-[var(--muted)]">© {new Date().getFullYear()} CheapLocalWebsites.com</div>
      </div>
    </footer>
  )
}
