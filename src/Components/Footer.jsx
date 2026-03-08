import "../assets/footer.css";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/images/logo.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Restaurant Info */}
        <div className="footer-col logo-col">
          <div className="flogo-container">
                      <img src={logo} alt="Everest Logo" />
          </div>
          <h3>Everest Masala</h3>

          <div className="footer-contact">
            <span><FaMapMarkerAlt />Staroměstské Náměstí Mladá Boleslav</span>
            <span><FaPhoneAlt /> +420 725 948 722</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>

          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Gallery</a>
          <a href="#">Reservations</a>
          <a href="#">Contact</a>
        </div>

        {/* Opening Hours */}
        <div className="footer-col">
          <h4>Opening Hours</h4>

          <div className="hours">
            <span>Mon - Fri</span>
            <span>11:00 - 22:00</span>
          </div>

          <div className="hours">
            <span>Saturday</span>
            <span>12:00 - 23:00</span>
          </div>

          <div className="hours">
            <span>Sunday</span>
            <span>12:00 - 21:00</span>
          </div>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h4>Follow Us</h4>

          <div className="footer-social">

            <a href="https://www.facebook.com/people/Everest-masala/61583347953938/"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>

          </div>

          <p className="footer-note">
            Order online through our delivery partners.
          </p>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Everest Masala. All rights reserved.</p>
      </div>

    </footer>
  );
}