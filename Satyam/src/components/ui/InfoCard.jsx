function InfoCard({ title, value }) {
  return (
    <article className="glass-card info-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </article>
  )
}

export default InfoCard
