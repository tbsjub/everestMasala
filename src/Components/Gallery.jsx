import { useEffect } from "react";
import "../assets/gallery.css";

import chef from "../assets/images/everest_chef.png";
import chef1 from "../assets/images/everest_chef1.png";
import interior from "../assets/images/interior1.jpeg";
import interior2 from "../assets/images/interior2.jpeg";
import everest12 from "../assets/images/everest-12.webp";
import everest13 from "../assets/images/everest-13.jpg";
import everest11 from "../assets/images/everest-11.webp";
import everest51 from "../assets/images/everest-51.webp";
import everest61 from "../assets/images/everest-61.jpg";
import everest77 from "../assets/images/everest-77.webp";
import everest78 from "../assets/images/everest-78.webp";

export default function Gallery() {
  const frames = [
    {
      imgs: [
        chef,
        chef1,
      ],
      caption: "Chef",
    },
    {
      imgs: [
        everest11,
        everest51,
      ],
      caption: "Mix",
    },
    {
      imgs: [
        interior,
        interior2,
      ],
      caption: "Interior",
    },
    {
      imgs: [
        everest11,
        everest12,
      ],
      caption: "Nepal",
    },
    {
      imgs: [
        everest51,
        everest61,
      ],
      caption: "Kitchen",
    },
    {
      imgs: [
        everest77,
        everest78,
      ],
      caption: "Spices",
    },
  ];

  useEffect(() => {
    // Lazy load images
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.onload = () => img.classList.add("loaded");
              obs.unobserve(img);
            }
          }
        });
      },
      { rootMargin: "0px 0px 200px 0px" }
    );

    document.querySelectorAll("img[data-src]").forEach((img) =>
      observer.observe(img)
    );

    // Gallery rotator
    const intervals = [];
    document.querySelectorAll(".gallery-frame").forEach((frame) => {
      const imgs = JSON.parse(frame.dataset.imgs);
      if (!imgs || imgs.length < 2) return;

      let idx = 0;
      const imgEl = frame.querySelector(".frame-img");

      const interval = setInterval(() => {
        if (Math.random() > 0.3) {
          idx = (idx + 1) % imgs.length;
          imgEl.style.opacity = 0;
          setTimeout(() => {
            imgEl.src = imgs[idx];
            imgEl.onload = () => (imgEl.style.opacity = 1);
          }, 800);
        }
      }, 4000);

      intervals.push(interval);
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, []);

  return (
    <section className="gallery-section">
      <h2 className="curved-underline">Visual Stories</h2>
      <div className="gallery-grid">
        {frames.map((frame, i) => (
          <div
            key={i}
            className="gallery-frame"
            data-imgs={JSON.stringify(frame.imgs)}
          >
            <img
              data-src={frame.imgs[0]}
              className="frame-img active"
              alt={frame.caption}
            />
            <div className="frame-caption">{frame.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}