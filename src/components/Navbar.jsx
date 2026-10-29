import { NavLink, Link } from "react-router-dom";

// Add or remove pages here.
const links = [
  { to: "/", label: "home" },
  { to: "/publications", label: "publications" },
  { to: "/projects", label: "projects" },
  { to: "/resume", label: "resume" },
  { to: "/cats", label: "cats" },
];

export default function Navbar() {
  return (
    <header className="header">
      <Link to="/" className="header__name">ivan diliso</Link>
      <nav className="nav">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end>{l.label}</NavLink>
        ))}
      </nav>
    </header>
  );
}
