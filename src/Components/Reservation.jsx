import "../assets/reservation.css";
import { FaMapMarkedAlt, FaClock, FaPhoneAlt, FaEnvelope, FaCalendarCheck } from "react-icons/fa";

export default function Reservation() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation request sent!");
  };

  return (
    <section className="reserve-section">

      {/* LEFT SIDE - INFO */}
      <div className="reserve-info">

        <h2 className="curved-underline">Visit Us</h2>

        <div className="info-item">
          <FaMapMarkedAlt />
          <p>Staroměstské Náměstí Mladá Boleslav</p>
        </div>

        <div className="info-item">
          <FaClock />
          <p>Mon-Thu 11-22, Fri-Sat 11-23, Sun 10-21</p>
        </div>

        <div className="info-item">
          <FaPhoneAlt />
          <p>+420 725 948 722</p>
        </div>

        <div className="info-item">
          <FaEnvelope />
          <p>everestmasalacz@gmail.com</p>
        </div>

        {/* GOOGLE MAP */}
        <div className="map-placeholder">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1771436514979!6m8!1m7!1ssT7o8x9sjXhlRzwxLRW0KA!2m2!1d50.41018087219313!2d14.9020451404604!3f303.29667876588024!4f-0.7758620689655231!5f0.4000000000000002"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Everest Masala Location"
          />
        </div>

      </div>


      {/* RIGHT SIDE - FORM */}
      <div className="reserve-form">

        <h3>Reserve a Table</h3>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>

          <div className="form-group">
            <input type="text" placeholder="Phone" />
          </div>

          <div className="form-group">
            <select required>
              <option value="">Select Guests</option>
              <option>2 persons</option>
              <option>4 persons</option>
              <option>6+ persons</option>
            </select>
          </div>

          <div className="form-group">
            <input type="date" required />
          </div>

          <div className="form-group">
            <textarea rows="3" placeholder="Special requests..."></textarea>
          </div>

          <button className="form-btn" type="submit">
            <FaCalendarCheck style={{ marginRight: "8px" }} />
            Book Now
          </button>

        </form>
      </div>

    </section>
  );
}