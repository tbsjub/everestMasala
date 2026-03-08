import "../assets/partners.css";
import wolt from "../assets/images/wolt.jpeg";
import foodora from "../assets/images/foodora.png";
import bolt from "../assets/images/bolt.jpeg";

export default function Partners() {
  const partners = [
    {
      name: "Wolt",
      logo: wolt,
      description: "Fast delivery",
      action: "Order",
    },
    {
      name: "Foodora",
      logo: foodora,
      description: "Local favorite",
      action: "Order",
    },
    {
      name: "Bolt",
      logo: bolt,
      description: "Best prices",
      action: "Order",
    },
    {
      name: "Takeaway",
      logo: "https://cdn-icons-png.flaticon.com/512/1694/1694708.png",
      description: "Pickup in 15m",
      action: "Call",
    },
  ];

  return (
    <section className="partner-section">
      <h2 className="curved-underline">
        Delivery Partners
      </h2>
      <div className="partner-grid">
        {partners.map((partner, idx) => (
          <div key={idx} className="partner-card">
            <img
              src={partner.logo}
              alt={partner.name}
              className="partner-logo"
              onError={(e) => (e.target.src = `https://via.placeholder.com/80?text=${partner.name}`)}
            />
            <h3>{partner.name}</h3>
            <p>{partner.description}</p>
            <a className="order-btn">{partner.action}</a>
          </div>
        ))}
      </div>
    </section>
  );
}