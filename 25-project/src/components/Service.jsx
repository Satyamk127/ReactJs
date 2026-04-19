const experienceCategories = [
  {
    title: 'Cultural tours',
    available: 66,
    image:
      'https://media.istockphoto.com/id/1287632111/photo/weve-got-you-covered-during-lockdown.webp?a=1&b=1&s=612x612&w=0&k=20&c=efTe3T8J5y9gG5UeCtZ_v0RZdPRtMh_n2y-j0XFaXXk=',
  },
  {
    title: 'Landmarks',
    available: 44,
    image:
      'https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNlcnZpY2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Art workshops',
    available: 21,
    image:
      'https://plus.unsplash.com/premium_photo-1661544508729-cc050142181e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNlcnZpY2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Food tours',
    available: 19,
    image:
      'https://media.istockphoto.com/id/1465363771/photo/hands-with-bill-food-service-and-people-in-restaurant-customer-with-receipt-and-payment-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=bIkuvNvvrgT4yzi5-z9Cc6-w3Qs61yvStyzMIeJi5W8=',
  },
  {
    title: 'Cooking',
    available: 15,
    image:
      'https://media.istockphoto.com/id/1308610989/photo/shot-of-a-young-female-call-center-agent-working-in-office-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=d5IbTyZAhUnYpZeBpkmJBIDK1t-IwyXmSUbFTjuNC6o=',
  },
  {
    title: 'Outdoors',
    available: 4,
    image:
      'https://media.istockphoto.com/id/2152031133/photo/renovation-repair-concept-tools-3d-icon-on-the-abstract-human-hand-made-with-atom-array-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=MaTEq6nvNEiqJChxysiB-3KZzsS50lx0fV1lWY2XuWw=',
  },
  {
    title: 'Shopping & fashion',
    available: 3,
    image:
      'https://images.unsplash.com/photo-1587089879249-87bf7d2972df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VydmljZXxlbnwwfHwwfHx8MA%3D%3D',
  },
]


function Service() {
  return (
    <section className="experience-panel">
      <div className="experience-header">
       
        <h1>Service in New Delhi</h1>
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

export default Service
