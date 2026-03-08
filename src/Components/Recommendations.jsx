import { useState } from "react";
import "../assets/recommendations.css";
import everest53 from "../assets/images/everest-53.webp";
import everest04 from "../assets/images/everest-04.webp";
import everest66 from "../assets/images/everest-66.webp";
import everest12 from "../assets/images/everest-12.webp";
import everest33 from "../assets/images/everest-33.webp";
import everest36 from "../assets/images/everest-36.webp";

export default function Recommendations() {
  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const dishes = [
    {
      id: 1,
      name: "Chicken Masala",
      desc: "Tender chicken in rich, aromatic curry sauce with traditional spices",
      price: "199 Kč",
      image: everest53,
      badge: "Popular",
    },
    {
      id: 2,
      name: "Tandoori Mix",
      desc: "A flavorful mix of grilled meats and vegetables cooked with smoky tandoori spices.",
      price: "345 Kč",
      image: everest04,
      badge: "Chef Special",
      special: true,
    },
    {
      id: 3,
      name: "Lamb Kadai",
      desc: "Succulent lamb cooked in a wok with bell peppers and aromatic spices",
      price: "245 Kč",
      image: everest66,
    },
    {
      id: 4,
      name: "Nepali Thali",
      desc: "Complete meal with dal, rice, vegetables, pickles, and traditional sides",
      price: "199 Kč",
      image: everest12,
    },
    {
        id: 5,  
        name: "Vindaloo",
        desc: "A spicy, tangy Indian curry made with marinated meat and aromatic spices.",
        price: "199 Kč",
        image: everest33,
    },
    {
        id: 6,
        name: "Chilli",
        desc: "Spicy and flavorful stir-fried dish with peppers, onions, and your choice of protein.",
        price: "199 Kč",
        image: everest36,
    }
  ];

  return (
    <section className="recommendation-section">
      <div className="recommendation-container">
        <h2 className="curved-underline">Our Recommendations</h2>
        <p className="recommendation-subtitle">
          Chef's Special Picks · Must-Try Dishes
        </p>

        <div className="recommendation-grid">
          {dishes.map((dish) => (
            <div key={dish.id} className="recommendation-card">
              <div className="rec-image-wrapper">
                <img src={dish.image} alt={dish.name} />

                {dish.badge && (
                  <div
                    className={`rec-badge ${
                      dish.special ? "chef-special" : ""
                    }`}
                  >
                    {dish.badge}
                  </div>
                )}
              </div>

              <div className="rec-content">
                <h3>{dish.name}</h3>
                <p>{dish.desc}</p>

                <div className="rec-footer">
                  <span className="rec-price">{dish.price}</span>

                  <button
                    className={`rec-btn ${
                      likedItems.includes(dish.id) ? "liked" : ""
                    }`}
                    onClick={() => toggleLike(dish.id)}
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}