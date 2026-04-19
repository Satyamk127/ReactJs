const experienceCategories = [
  {
    title: 'Cultural tours',
    available: 66,
    image:
      'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Landmarks',
    available: 44,
    image:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Art workshops',
    available: 21,
    image:
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Food tours',
    available: 19,
    image:
      'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Cooking',
    available: 15,
    image:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Outdoors',
    available: 4,
    image:
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Shopping & fashion',
    available: 3,
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  },
]

function Experience() {
  return (
    <section className="experience-panel">
      <div className="experience-header">
       
        <h1>Experiences in New Delhi</h1>
      </div>

      <div className="experience-grid">
        {experienceCategories.map((category) => (
          <article key={category.title} className="experience-card">
            <img
              className="experience-image"
              src={category.image}
              alt={category.title}
            />
            <h2>{category.title}</h2>
            <p>{category.available} available</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
