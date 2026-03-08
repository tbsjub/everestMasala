// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import "../assets/navbar.css"; // move your CSS here
import logo from "../assets/images/logo.jpg"; // your logo path
import { useLocation, Link } from "react-router-dom"; // only if using React Router

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("cz"); // For language toggle (if needed)

  //loading the saved language from localStorage on component mount
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);


  // save language + update html attribute
  useEffect(() => {
    document.documentElement.setAttribute("data-lang", lang);
    localStorage.setItem("lang", lang);
  }, [lang]);

  // --- Scroll effect for shrinking navbar ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Determine current page for active links (if not using router) ---
  const location = useLocation();
const currentPath = location.pathname;

  const links = [
    { name: "Home", path: "/" },
    { name: "Our Menu", path: "/menu" }, // Use Link if using React Router
    { name: "Branches", path: "/branches" },
    { name: "Reviews", path: "/reviews" },
  ];

  return (
    <>
      <header className={`header-wrapper ${scrolled ? "scrolled" : ""}`}>
        {/* Top Bar */}
        <div className="top-bar">
          <div className="top-left">
            <span>
              <i className="fas fa-phone"></i> +420 773 135 945
            </span>
            <span style={{ marginLeft: "20px" }}>
              <i className="fas fa-envelope"></i> info@everestusti.cz
            </span>
          </div>
          <div className="top-right">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Navbar */}
        <nav className="navbar">
          {/* Mobile Logo */}
          <div className="mobile-logo-wrap">
            <img src={logo} alt="Everest Logo" />
          </div>

          {/* Left Links (Desktop) */}
          <div className="nav-links">
            {links.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-item ${
                  link.path === currentPath ? "active" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link to="/" className="logo-container">
            <img src={logo} alt="Everest Logo" />
          </Link>

          {/* Right Links + Reserve */}
          <div className="nav-links right">
            {links.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-item ${
                  link.path === currentPath ? "active" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/reserve" className="btn-reserve">
              <i className="fas fa-chair"></i> Reserve Table
            </Link>
          </div>

          <div className="lang-toggle">
        <button
          className={`lang-toggle-btn ${lang === "en" ? "active" : ""}`}
          onClick={() => setLang("en")}
        >
          🇬🇧 EN
        </button>

        <button
          className={`lang-toggle-btn ${lang === "cz" ? "active" : ""}`}
          onClick={() => setLang("cz")}
        >
          🇨🇿 CZ
        </button>
      </div>

          {/* Hamburger */}
          <div
            className="hamburger"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <i className="fas fa-bars-staggered"></i>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <div
          style={{
            position: "absolute",
            top: "25px",
            right: "25px",
            color: "white",
            fontSize: "2.2rem",
            cursor: "pointer",
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          <i className="fas fa-times"></i>
        </div>

        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`mobile-item ${
              link.path === currentPath ? "active" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <Link
          to="/reserve"
          className="mobile-item"
          style={{ color: "var(--primary)" }}
          onClick={() => setIsMenuOpen(false)}
        >
          <i className="fas fa-chair"></i> Reserve Table
        </Link>

        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
            color: "#ddd",
            fontSize: "0.8rem",
          }}
        >
          <p>+420 773 135 945</p>
          <div
            style={{
              marginTop: "15px",
              display: "flex",
              gap: "20px",
              fontSize: "1.5rem",
              justifyContent: "center",
            }}
          >
            <a href="#" style={{ color: "white" }}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" style={{ color: "white" }}>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}