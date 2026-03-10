// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import "../assets/navbar.css"; // move your CSS here
import logo from "../assets/images/logo.jpg"; // your logo path
import { useLocation, Link } from "react-router-dom"; // only if using React Router

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("cz"); // For language toggle (if needed)
  const [isLangOpen, setIsLangOpen] = useState(false);

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
  { name: "Our Menu", path: "/menu" },
  { name: "Poledni Menu", path: "/poledni-menu" },
  {
    name: "Branches",
    children: [
      { name: "Ústí nad Labem", url: "https://indickausti.cz/" },
      { name: "Nymburk", url: "https://indickanymburk.cz/" },
      { name: "Litoměřice", url: "https://www.indickalitomerice.cz/" },
    ],
  },
];

  return (
    <>
      <header className={`header-wrapper ${scrolled ? "scrolled" : ""}`}>
        {/* Top Bar */}
        <div className="top-bar">
          <div className="top-left">
            <span>
              <i className="fas fa-phone"></i> +420 725 948 722
            </span>
            <span style={{ marginLeft: "20px" }}>
              <i className="fas fa-envelope"></i> everestmasalacz@gmail.com
            </span>
          </div>
          <div className="top-right">
            <a href="https://www.facebook.com/people/Everest-masala/61583347953938/"><i className="fab fa-facebook-f"></i></a>
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
              {links.slice(2).map((link) => {
                if (link.children) {
                  return (
                    <div key={link.name} className="nav-item dropdown">
                      {link.name}
                      <div className="dropdown-menu">
                        {link.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dropdown-item"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
              </div>
            );
          }

          return (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-item ${
                link.path === currentPath ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          );
        })}

        <Link to="/reservation" className="btn-reserve">
          <i className="fas fa-chair"></i> Reserve Table
        </Link>
      </div>

         <div className="lang-dropdown">
          <button
            className="lang-selected"
            onClick={() => setIsLangOpen(!isLangOpen)}
          >
            {lang === "en" ? "🇬🇧 EN" : "🇨🇿 CZ"}
          </button>

          <div className={`lang-menu ${isLangOpen ? "open" : ""}`}>
            <button onClick={() => { setLang("en"); setIsLangOpen(false); }}>
              🇬🇧 English
            </button>

            <button onClick={() => { setLang("cz"); setIsLangOpen(false); }}>
              🇨🇿 Čeština
            </button>
          </div>
        </div>

          {/* Hamburger */}
          <div
            className="hamburger"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <i className="fas fa-bars"></i>
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
          to="/reservation"
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