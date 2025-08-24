export default function Newsletter(){
  return (
    <section className="section">
      <div className="container">
        <div className="card p-8 md:p-10 text-center">
          <div className="eyebrow mb-2">Stay in the loop</div>
          <h3 className="text-3xl mb-3">Tips for local websites (monthly)</h3>
          <p className="lead mb-6">Occasional notes on getting found and looking great online.</p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto">
            <input type="email" required placeholder="Email address" className="px-4 py-3 rounded-lg border border-[var(--border)] w-full" />
            <button className="btn-primary" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}
