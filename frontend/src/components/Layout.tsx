import { NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/jobs', label: 'Jobs' },
  { to: '/profile', label: 'Profile' },
  { to: '/login', label: 'Log in' },
]

export default function Layout() {
  return (
    <div id="app-shell">
      <header className="navbar">
        <span className="brand">Student Career</span>
        <nav>
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
