import { NavLink } from "react-router-dom";
import logoSolo from "../assets/logo-solo.png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <NavLink to="/" className="logo">
          <img src={logoSolo} alt="Capicú Logo" />
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
} 