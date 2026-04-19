import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/home', label: 'Homes', icon: '\u{1F3E0}' },
  { to: '/experience', label: 'Experiences', icon: '\u{1F388}' },
  { to: '/service', label: 'Services', icon: '\u{1F6CE}' },
]

function Nav() {
  return (
    <header className="top-nav">
      <div className="top-nav-row">
        <div className="brand">
          <span className="brand-mark" />
          <span className="brand-text">airbnb</span>
        </div>

        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-item${isActive ? ' nav-item-active' : ''}`
              }
            >
              {item.badge ? <span className="nav-badge">{item.badge}</span> : null}
              <span className="nav-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button type="button" className="host-btn">
            Become a host
          </button>
          <button type="button" className="menu-btn" aria-label="Open menu">
            <span className="menu-lines" aria-hidden="true">
              =
            </span>
            <span className="menu-avatar">o</span>
          </button>
        </div>
      </div>

      <div className="search-bar" aria-label="Search stay filters">
        <button type="button" className="search-segment">
          <span className="search-title">Where</span>
          <span className="search-value">Search by city or landmark</span>
        </button>

        <button type="button" className="search-segment">
          <span className="search-title">When</span>
          <span className="search-value">Add dates</span>
        </button>

        <button type="button" className="search-segment">
          <span className="search-title">Who</span>
          <span className="search-value">Add guests</span>
        </button>

        <button type="button" className="search-action" aria-label="Search">
          <span aria-hidden="true">Q</span>
        </button>
      </div>
    </header>
  )
}

export default Nav
