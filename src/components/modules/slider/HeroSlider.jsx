import React, { useState } from "react";
import Image from "next/image";
// آرایه‌ی عکس‌ها - جای این‌ها رو با عکس‌های خودت عوض کن
const images = [
  "/images/slide1.png",
  "/images/slide2.png",
  "/images/slide3.png",
  "/images/slide4.png",
  //  "https://images.unsplash.com/photo-1552423314-cf29ab68ad73?w=800&q=80",
  // "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&q=80",
  // "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80",
  // "https://images.unsplash.com/photo-1516834474-48c0abc2a902?w=800&q=80",
];

const CARD_WIDTH = 368;
const CARD_HEIGHT = 400;
export default function CardSlider() {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <div
      dir="rtl"
      style={{ width: 320, margin: "100px 10px", fontWeight: "bold" }}
    >
      {/* Cards stacks  */}
      <div
        style={{
          position: "relative",
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          margin: "0 auto",
        }}
      >
        {images.map((src, i) => {
          {
            /* Space of this card with active card */
          }
          let offset = i - index;
          if (offset < 0) offset += total;

          {
            /* Just  show 4 of cards */
          }
          if (offset > 3) return null;

          const isActive = offset === 0;

          return (
            <div
              className="max-w-64 ml-30 md:max-w-max md:ml-0"
              key={i}
              onClick={() => !isActive && setIndex(i)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                borderRadius: 30,
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                cursor: isActive ? "default" : "pointer",
                transition: "all 0.4s ease",
                transform: `translateX(-${offset * 40}px) translateY(${offset * 7}px) scale(${1 - offset * 0.09})`,
                zIndex: total - offset,
              }}
            >
              <Image
                src={src}
                alt="slider"
                width={368}
                height={400}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                draggable={false}
              />
            </div>
          );
        })}
      </div>

      <div
        dir="ltr"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          marginTop: 16,
        }}
      >
        <button onClick={prev} aria-label="قبلی" style={arrowStyle}>
          &#8592;
        </button>

        <span style={{ fontSize: 15, color: "#44403c", userSelect: "none" }}>
          {index + 1} / {total}
        </span>

        <button onClick={next} aria-label="بعدی" style={arrowStyle}>
          &#8594;
        </button>
      </div>
    </div>
  );
}

const arrowStyle = {
  background: "none",
  border: "none",
  fontSize: 20,
  color: "#57534e",
  cursor: "pointer",
  padding: 4,
  lineHeight: 1,
};
