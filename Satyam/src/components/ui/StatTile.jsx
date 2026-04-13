function StatTile({ label, value }) {
  return (
    <article className="stat-tile">
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  )
}

export default StatTile
