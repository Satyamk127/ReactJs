function MetricCard({ title, value, meta }) {
  return (
    <article className="metric-card">
      <span>{title}</span>
      <strong>{value}</strong>
      <p>{meta}</p>
    </article>
  )
}

export default MetricCard
