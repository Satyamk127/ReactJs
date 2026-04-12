import './App.css'

const experiences = [
  {
    title: 'Cultural tours',
    spots: '66 available',
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Landmarks',
    spots: '44 available',
    image:
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Art workshops',
    spots: '21 available',
    image:
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Food tours',
    spots: '19 available',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Cooking',
    spots: '15 available',
    image:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Outdoors',
    spots: '4 available',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Shopping & fashion',
    spots: '3 available',
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=700&q=80',
  },
]

const menuItems = [
  { icon: '🏠', label: 'Homes' },
  { icon: '🎈', label: 'Experiences', active: true, badge: 'NEW' },
  { icon: '🛎️', label: 'Services', badge: 'NEW' },
]

function App() {
  return (
    <main className="airbnb-page">
      <header className="topbar">
        <div className="brand" aria-label="Airbnb">
          <span className="brand-mark">◌</span>
          <span className="brand-name">airbnb</span>
        </div>

        <nav className="menu">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`menu-item${item.active ? ' is-active' : ''}`}
              type="button"
            >
              {item.badge ? <span className="menu-badge">{item.badge}</span> : null}
              <span className="menu-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="account">
          <span>Become a host</span>
          <button className="account-pill" type="button" aria-label="Open account menu">
            <span className="hamburger">≡</span>
            <span className="avatar">☺</span>
          </button>
        </div>
      </header>

      <section className="search-panel">
        <div className="search-bar">
          <div className="search-field">
            <span className="search-label">Where</span>
            <span className="search-value">Search by city or landmark</span>
          </div>
          <div className="search-field">
            <span className="search-label">When</span>
            <span className="search-value">Add dates</span>
          </div>
          <div className="search-field">
            <span className="search-label">Who</span>
            <span className="search-value">Add guests</span>
          </div>
          <button className="search-button" type="button" aria-label="Search">
            🔍
          </button>
        </div>
      </section>

      <section className="experience-section">
        <div className="section-heading">
          <h1>Experiences in New Delhi</h1>
        </div>

        <div className="experience-grid">
          {experiences.map((item) => (
            <article key={item.title} className="experience-card">
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.spots}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
