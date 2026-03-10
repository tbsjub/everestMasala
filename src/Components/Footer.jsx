import "../assets/footer.css";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/images/logo.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Restaurant Info */}
        <div className="footer-col logo-col">
          <h3>Everest Masala</h3>

          <div className="footer-contact">
            <span><FaMapMarkerAlt />Staroměstské Náměstí Mladá Boleslav</span>
            <span><FaPhoneAlt /> +420 725 948 722</span>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="footer-col">
          <h4>Opening Hours</h4>

          <div className="hours">
            <span>Mon - Sat</span>
            <span>11:00 - 22:00</span>
          </div>

          <div className="hours">
            <span>Sunday</span>
            <span>11:00 - 21:00</span>
          </div>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h4>Follow Us</h4>

          <div className="footer-social">

            <a href="https://www.facebook.com/people/Everest-masala/61583347953938/"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>

          </div>
        </div>

        <div className="footer-col">
          <h4>Company Info</h4>

          <div className="company-info">

            <span>Bohara s.r.o</span>
            <span>IČO: 09436669</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Everest Masala. All rights reserved.</p>
      </div>

    </footer>
  );
}