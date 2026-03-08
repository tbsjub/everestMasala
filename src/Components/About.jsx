import "../assets/about.css";
import everest01 from "../assets/images/everest-01.webp";
import everest02 from "../assets/images/everest-02.webp";
import everest03 from "../assets/images/everest-03.webp";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-left">
        <h2 className="curved-underline">About Us</h2>

        <p className="about-desc">
          Everest Masala is a celebration of Nepali and Indian heritage.
          Our native chefs prepare every dish with love, using traditional
          recipes passed down through generations. From the spicy tandoor
          to creamy curries and steamed momos — each plate tells the story
          of the Himalayas.
        </p>

        <div className="service-points">
          <div className="service-item">
            <i className="fas fa-bag-shopping"></i>
            <span>Takeaway</span>
          </div>

          <div className="service-item">
            <i className="fas fa-fire"></i>
            <span>Tandoor Specialties</span>
          </div>

          <div className="service-item">
            <i className="fas fa-leaf"></i>
            <span>Fresh Ingredients</span>
          </div>

          <div className="service-item">
            <i className="fas fa-mug-hot"></i>
            <span>Cozy Dining</span>
          </div>
        </div>
      </div>

      <div className="about-right">
        <div className="collage-grid">
          <img
            src={everest01}
            className="collage-img collage-item1"
            alt="Restaurant Interior"
          />
          <img
            src={everest02}
            className="collage-img collage-item2"
            alt="Spices"
          />
          <img
            src={everest03}
            className="collage-img collage-item3"
            alt="Momos"
          />
        </div>

        <img
          src={everest01}
          className="horizontal-bottom-img"
          alt="Tandoor Cooking"
        />
      </div>
    </section>
  );
}