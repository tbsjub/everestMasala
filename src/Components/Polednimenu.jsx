import { useState } from "react";
import "../assets/polednimenu.css";
import everest17 from "../assets/images/everest-17.jpg";
import everest16 from "../assets/images/everest-16.jpg";
import everest76 from "../assets/images/everest-76.jpg";
import everest46 from "../assets/images/everest-46.jpg";

const DAYS = [
  { cz: "Pondělí",  en: "Monday"    },
  { cz: "Úterý",    en: "Tuesday"   },
  { cz: "Středa",   en: "Wednesday" },
  { cz: "Čtvrtek",  en: "Thursday"  },
  { cz: "Pátek",    en: "Friday"    },
];

const DAY_IMAGES = [
  everest17,
  everest16,
  everest76,
  everest46,
  everest17,
];

const MENU_DATA = [
  {
    soups: [
      { cz: "Rajčatová polévka", en: "Tomato Soup", price: 25 },
      { cz: "Kuřecí polévka",    en: "Chicken Soup", price: 25 },
    ],
    mains: [
      { no: 1, cz: "Kuřecí Tikka",    en: "Chicken Tikka",   desc: "Grilované kuřecí kostky ve středně ostrém koření", price: 134, spice: 2 },
      { no: 2, cz: "Domácí sýr",      en: "Shahi Paneer",    desc: "Domácí sýr na máslové omáčce",                    price: 134, spice: 1 },
      { no: 3, cz: "Mletá Masala",    en: "Keema Masala",    desc: "Mleté maso ve středně ostré omáčce",              price: 134, spice: 2 },
      { no: 4, cz: "Mix Thali",       en: "Mix Thali",       desc: "Všechna jídla na děleném talíři, 1+2+3",          price: 169, spice: 0, isThali: true },
      { no: 5, cz: "Jehněčí Vindalo", en: "Lamb Vindaloo",   desc: "Jehněčí maso v ostré omáčce",                     price: 169, spice: 3 },
      { no: 6, cz: "Krevetí Masala",  en: "Shrimp Masala",   desc: "Krevety ve středně ostré omáčce",                 price: 169, spice: 2 },
    ],
  },
  {
    soups: [
      { cz: "Čočková polévka", en: "Dal Soup",     price: 25 },
      { cz: "Kuřecí polévka",  en: "Chicken Soup", price: 25 },
    ],
    mains: [
      { no: 1, cz: "Kuře na másle",   en: "Butter Chicken",  desc: "Kuřecí kostky na másle v rajčatové omáčce",     price: 134, spice: 1 },
      { no: 2, cz: "Cizrnová Masala", en: "Chana Masala",    desc: "Cizrna ve středně ostré omáčce",                price: 134, spice: 2 },
      { no: 3, cz: "Vepřové Madras",  en: "Pork Madras",     desc: "Vepřové kostky v tradiční ostro-kyselé omáčce", price: 134, spice: 3 },
      { no: 4, cz: "Mix Thali",       en: "Mix Thali",       desc: "Všechna jídla na děleném talíři, 1+2+3",        price: 169, spice: 0, isThali: true },
      { no: 5, cz: "Jehněčí Kari",    en: "Lamb Curry",      desc: "Jehněčí kostky v kari omáčce",                  price: 169, spice: 2 },
      { no: 6, cz: "Krevety",         en: "Shrimp Mushroom", desc: "Krevety se žampiony v kari omáčce",             price: 169, spice: 2 },
    ],
  },
  {
    soups: [
      { cz: "Fazolová polévka", en: "Beans Soup",   price: 25 },
      { cz: "Kuřecí polévka",   en: "Chicken Soup", price: 25 },
    ],
    mains: [
      { no: 1, cz: "Kuřecí Madras",   en: "Chicken Madras",  desc: "Kuřecí kostky ve středně ostré omáčce",       price: 134, spice: 2 },
      { no: 2, cz: "Sýr",             en: "Mattar Paneer",   desc: "Domácí sýr s hráškem na krémové omáčce",      price: 134, spice: 1 },
      { no: 3, cz: "Vepřové Musroom", en: "Pork Mushroom",   desc: "Vepřové se žampiony na kari omáčce",          price: 134, spice: 2 },
      { no: 4, cz: "Mix Thali",       en: "Mix Thali",       desc: "Všechna jídla na děleném talíři, 1+2+3",      price: 169, spice: 0, isThali: true },
      { no: 5, cz: "Jehněčí Kari",    en: "Lamb Curry",      desc: "Jehněčí kostky v kari omáčce",                price: 169, spice: 2 },
      { no: 6, cz: "Krevety",         en: "Shrimp Mushroom", desc: "Krevety se žampiony v kari omáčce",           price: 169, spice: 2 },
    ],
  },
  {
    soups: [
      { cz: "Rajčatová polévka", en: "Tomato Soup",  price: 25 },
      { cz: "Kuřecí polévka",    en: "Chicken Soup", price: 25 },
    ],
    mains: [
      { no: 1, cz: "Kuřecí Mango",    en: "Chicken Mango",  desc: "Kuřecí kostky v nepálivé mangové omáčce",      price: 134, spice: 0 },
      { no: 2, cz: "Sahi Kofta",      en: "Sahi Kofta",     desc: "Bramborové nudličky na máslové omáčce",        price: 134, spice: 1 },
      { no: 3, cz: "Vepřové Kari",    en: "Pork Curry",     desc: "Vepřové kostky v kari omáčce",                 price: 134, spice: 2 },
      { no: 4, cz: "Mix Thali",       en: "Mix Thali",      desc: "Všechna jídla na děleném talíři, 1+2+3",       price: 169, spice: 0, isThali: true },
      { no: 5, cz: "Jehněčí Vindalo", en: "Lamb Vindaloo",  desc: "Jehněčí kostky ve velice ostré omáčce",        price: 169, spice: 3 },
      { no: 6, cz: "Krevety Mango",   en: "Shrimp Mango",   desc: "Krevety v nepálivé mangové omáčce",            price: 169, spice: 0 },
    ],
  },
  {
    soups: [
      { cz: "Čočková polévka", en: "Dal Soup",     price: 25 },
      { cz: "Kuřecí polévka",  en: "Chicken Soup", price: 25 },
    ],
    mains: [
      { no: 1, cz: "Kuřecí Masala",       en: "Chicken Masala", desc: "Kuřecí kostky ve středně ostré omáčce",      price: 134, spice: 2 },
      { no: 2, cz: "Bramborové nudličky", en: "Malai Kofta",    desc: "Bramborové nudličky na krémové omáčce",      price: 134, spice: 1 },
      { no: 3, cz: "Mletá Madras",        en: "Keema Madras",   desc: "Mleté maso v tradiční ostro-kyselé omáčce",  price: 134, spice: 3 },
      { no: 4, cz: "Mix Thali",           en: "Mix Thali",      desc: "Všechna jídla na děleném talíři, 1+2+3",     price: 169, spice: 0, isThali: true },
      { no: 5, cz: "Jehněčí Kari",        en: "Lamb Curry",     desc: "Jehněčí kostky v kari omáčce",               price: 169, spice: 2 },
      { no: 6, cz: "Krevetí Masala",      en: "Shrimp Masala",  desc: "Krevety ve středně ostré omáčce",            price: 169, spice: 2 },
    ],
  },
];

const DRINKS = [
  { vol: "0,3 l", cz: "Mango Lassi",  price: 35 },
  { vol: "0,3 l", cz: "Coca Cola",    price: 35 },
  { vol: "1 ks",  cz: "Gulab Jamun",  desc: "Klasické sladké kuličky", price: 30 },
];

function SpiceDots({ level }) {
  if (level === 0) return <span className="spice-none">mírné</span>;
  return (
    <span className="spice-dots">
      {[1, 2, 3].map(i => (
        <span key={i} className={`dot ${i <= level ? "on" : ""}`} />
      ))}
    </span>
  );
}

export default function PoledniMenu() {
  const jsDay = new Date().getDay();
  const todayIdx = jsDay >= 1 && jsDay <= 5 ? jsDay - 1 : 0;

  const [active, setActive] = useState(todayIdx);
  const [fading, setFading] = useState(false);

  const switchDay = (i) => {
    if (i === active) return;
    setFading(true);
    setTimeout(() => { setActive(i); setFading(false); }, 220);
  };

  const menu = MENU_DATA[active];
  const day  = DAYS[active];

  return (
    <div className="pm-wrap">

      {/* ── HEADER ── */}
      <header className="pm-header">
        <div>
          <div className="pm-brand">Everest Masala</div>
          <div className="pm-brand-sub">Indická &amp; Nepálská Restaurace</div>
        </div>
        <div className="pm-header-main">
          <h1 className="pm-title">Polední menu</h1>
          <p className="pm-hours">11:00 – 15:00 hodin</p>
        </div>
      </header>

      {/* ── DAY NAV ── */}
      <nav className="pm-nav">
        {DAYS.map((d, i) => (
          <button
            key={i}
            className={`pm-nav-btn ${i === active ? "active" : ""} ${i === todayIdx ? "today" : ""}`}
            onClick={() => switchDay(i)}
          >
            <span className="nav-cz">{d.cz}</span>
            <span className="nav-en">{d.en}</span>
            {i === todayIdx && <span className="nav-today-pill">dnes</span>}
          </button>
        ))}
      </nav>

      {/* ── CONTENT ── */}
      <main className={`pm-main ${fading ? "pm-fade-out" : "pm-fade-in"}`}>

        {/* Day banner */}
        <div className="pm-day-banner">
          <div className="pm-day-banner-left">
            <span className="pm-day-cz">{day.cz}</span>
            <span className="pm-day-en">{day.en}</span>
          </div>

          {/* Wrapper div keeps all sizing/overflow/texture styles;
              the <img> inside fills it with object-fit: cover      */}
          <div className="pm-day-image">
            {DAY_IMAGES[active] ? (
              <img
                src={DAY_IMAGES[active]}
                alt={day.en}
                className="pm-day-photo"
              />
            ) : (
              <div className="pm-img-placeholder">
                <span>🍛</span>
                <small>Foto jídla</small>
              </div>
            )}
          </div>
        </div>

        <div className="pm-body">

          {/* Soups + drinks */}
          <div className="pm-top-row">
            <div className="pm-card pm-soups">
              <div className="pm-card-label">🍲 Polévky</div>
              {menu.soups.map((s, i) => (
                <div key={i} className="pm-soup-row">
                  <span className="soup-name">
                    {s.cz} <span className="soup-en">/ {s.en}</span>
                  </span>
                  <span className="soup-price">{s.price} Kč</span>
                </div>
              ))}
            </div>

            <div className="pm-card pm-extras">
              <div className="pm-card-label">🥤 Nápoje &amp; dezert</div>
              {DRINKS.map((d, i) => (
                <div key={i} className="pm-drink-row">
                  <span className="drink-vol">{d.vol}</span>
                  <span className="drink-name">
                    {d.cz}
                    {d.desc && <span className="drink-desc"> — {d.desc}</span>}
                  </span>
                  <span className="drink-price">{d.price} Kč</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section divider */}
          <div className="pm-mains-label">
            <span className="mains-line" />
            <span>Hlavní jídla · Main Courses</span>
            <span className="mains-line" />
          </div>

          {/* Main courses */}
          <div className="pm-mains">
            {menu.mains.map((item, i) => (
              <div
                key={item.no}
                className={`pm-main-item ${item.isThali ? "is-thali" : ""}`}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="main-number">{item.no}</div>
                <div className="main-info">
                  <div className="main-names">
                    <span className="main-cz">{item.cz}</span>
                    <span className="main-sep">/</span>
                    <span className="main-en">{item.en}</span>
                  </div>
                  <div className="main-desc">{item.desc}</div>
                </div>
                <div className="main-right">
                  {item.spice !== undefined && !item.isThali && (
                    <SpiceDots level={item.spice} />
                  )}
                  {item.isThali && <span className="thali-tag">Thali</span>}
                  <span className="main-price">{item.price} Kč</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sides note */}
          <div className="pm-sides">
            <span className="sides-icon">🍚</span>
            <div>
              <strong>Přílohy v ceně:</strong> Rýže, placka nebo ½ rýže a ½ placka
              <br />
              <span className="sides-extra">Česneková placka +10 Kč</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}