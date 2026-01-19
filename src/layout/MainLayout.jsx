import { Outlet, Link } from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">XENITH 2026</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/timeline">Timeline</Link>
          <Link to="/events">Events</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        © Xenith 2026
      </footer>
    </>
  );
}
