export default function Stats() {
  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '50+', label: 'Weddings' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction' },
  ]

  return (
    <section className="section bg-surface">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
