import Link from "next/link";

export default function SiteNav(){
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="container py-5 flex items-center justify-between">
        <Link href="/" className="font-semibold text-white/90 hover:text-white">
          CheapLocalWebsites
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/work" className="text-white/90 hover:text-white">Work</Link>
          <Link href="/services" className="text-white/90 hover:text-white">Services</Link>
          <Link href="/contact" className="text-white/90 hover:text-white">Contact</Link>
        </nav>
        <Link href="/services" className="btn-secondary bg-white/90 hover:bg-white text-[var(--forest)]">
          Get Started
        </Link>
      </div>
    </header>
  )
}
