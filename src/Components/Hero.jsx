import { useState, useEffect } from "react";
import "../assets/hero.css";
import everest01 from "../assets/images/everest-01.webp";
import everest02 from "../assets/images/everest-02.webp";
import everest03 from "../assets/images/everest-03.webp";

import { useLocation, Link } from "react-router-dom"; // only if using React Router

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      title: "Everest Masala",
      subtitle: "Authentic Nepali & Indian flavors",
      description:
        "Chicken Masala · Lamb Kadai · Tandoori Momos · Nepali Thali",
    },
    {
      title: "Taste the Himalayas",
      subtitle: "Traditional recipes. Modern experience.",
      description:
        "Fresh spices · Clay oven · Handmade naan · Premium ingredients",
    },
    {
      title: "Reserve Your Table",
      subtitle: "An unforgettable dining experience",
      description:
        "Perfect for family dinners · Dates · Celebrations",
    },
  ];

  // Auto text slider
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[slideIndex];

  return (
    <section className="hero">
      {/* Background Slides */}
      <div className="sliding-bg">
        <div className="bg-slide bg-1" style={{ backgroundImage: `url(${everest01})` }}></div>
        <div className="bg-slide bg-2" style={{ backgroundImage: `url(${everest02})`, animationDelay: "6s" }}></div>
        <div className="bg-slide bg-3" style={{ backgroundImage: `url(${everest03})`, animationDelay: "12s" }}></div>
      </div>

      <div className="texture-overlay"></div>

      <div className="hero-content">
        <div className="hero-main">
          <div className="hero-sup">
            <i className="fas fa-praying-hands"></i>
            <span>NAMASTE · DOBRÝ VEČER</span>
          </div>

          <div className="text-slider">
            <div key={slideIndex} className="slide-text-item animate">
              <span className="slide-title">{currentSlide.title}</span>
              <span className="slide-sub">{currentSlide.subtitle}</span>
            </div>
          </div>

          <p className="hero-description">
            <i className="fas fa-star"></i> {currentSlide.description}
          </p>

          <div className="hero-buttons">
            <Link to="/reservation" className="btn-primary">
              <i className="fas fa-calendar-check"></i> Book Now
            </Link>

            <Link to="/menu" className="btn-outline">
              <i className="fas fa-utensils"></i> À la carte
            </Link>
            
            <Link to="/poledni-menu" className="btn-outline">
              <i className="fas fa-bolt"></i> Poledni Menu
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="hero-mini-info">
        <i className="fas fa-location-dot"></i> Mírové nám. 107/31, Ústí nad Labem
        <span> | </span>
        <i className="fas fa-clock"></i> 11:00–23:00
        <span> | </span>
        <i className="fas fa-phone-alt"></i> +420 773 135 945
      </div> */}
    </section>
  );
}