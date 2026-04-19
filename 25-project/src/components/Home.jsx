const experienceCategories = [
  {
    title: 'Cultural tours',
    available: 66,
    image:
      'https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Landmarks',
    available: 44,
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Art workshops',
    available: 21,
    image:
      'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbWV8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Food tours',
    available: 19,
    image:
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWV8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Cooking',
    available: 15,
    image:
      'https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Outdoors',
    available: 4,
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Shopping & fashion',
    available: 3,
    image:
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D',
  },
]



function Home() {
 return (
    <section className="experience-panel">
      <div className="experience-header">
        
        <h1>Home in New Delhi</h1>
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

export default Home
