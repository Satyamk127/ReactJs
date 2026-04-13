function SectionHeading({ tag, title, text }) {
  return (
    <div className="section-head">
      <span className="tag">{tag}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default SectionHeading
