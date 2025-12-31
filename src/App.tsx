import { useState } from "react";

interface ImageItem {
  src: string;
  caption: string;
  title?: string;
}

// FOLDER IMOPORTANTS PHOTO+POSTER+COLLAGE*****************
const photoArchiveGlob = import.meta.glob('./images/photo-archive/*.{png,jpg,jpeg,gif,JPG}', { eager: true });
const photoArchiveImages: ImageItem[] = Object.values(photoArchiveGlob).map((img: any) => ({
  src: img.default,
  caption: "" // no captions for Photo Archive
}));

const posterGlob = import.meta.glob('./images/posters/*.{png,jpg,jpeg,gif}', { eager: true });
console.log('Posters detected:', Object.keys(posterGlob));
const posterImages: ImageItem[] = Object.values(posterGlob).map((img: any) => ({
  src: img.default,
  caption: "" // add captions if you want
}));

const illustrationGlob = import.meta.glob('./images/illustration/*.{png,jpg,jpeg,gif}', { eager: true });
console.log('Illustrations detected:', Object.keys(illustrationGlob));
const illustrationImages: ImageItem[] = Object.values(illustrationGlob).map((img: any) => ({
  src: img.default,
  caption: "" // add captions if you want
}));

// LANDING PAGE*****************
export default function App() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const titles = [
    "Websites",
    "Posters",
    "Collage/Illustration",
    "Photo Archive",
    "Children's Books",
    "Misc."
  ];

  const h1Style: React.CSSProperties = {
    fontFamily: "'Arial Black', Arial, sans-serif",
    fontWeight: 600,
    color: "white",
    cursor: "pointer",
    margin: "0 10px",
    display: "inline-block",
    fontSize: "60px",
  };

  const modalContent: Record<string, ImageItem[]> = {
    Websites: [
      { src: "images/igp.png", title: "Storytelling Workshop", caption: "live writing workshop + library. made using html/css/javascript, express.js, node.js, postgreSQL, render" },
      { src: "images/bookworld.png", title: "My Reading World", caption: "book log that is also a cute collaborative world builder. users input books they’ve read and earn town building blocks." },
      { src: "images/prompter.png", title: "Make Me Write", caption: "simple webtool that generates a writing exercise prompt. coded using html/css/javascript" },
      { src: "images/babel.png", title: "The Library of Babel", caption: "an interactive reading experience of Luis Jorge Borge's Library of Babel - coded using html/css/javascript" },
      { src: "images/noahsark.png", title: "Noah's Ark-ive", caption: "interactive archive of plushy toys found across the internet. each toy comes with a matching ship passenger ID card, crediting the creator of the plushy. coded using html/css/js" },
      { src: "images/dossier.png", title: "Dossier", caption: "a comprehensive identity rebrand for fragrance company 'Dossier'" },
      { src: "images/weedbag.png", title: "Weed Bag archive", caption: "archive of marijuana 8th packages sold in NYC collected through social media submissions. coded using html/css/javascript + Airtable‘s API" },
    ],
    Posters: posterImages,
    "Collage/Illustration": illustrationImages,
    "Photo Archive": photoArchiveImages,
    "Children's Books": [
      { src: "images/monkey.gif", caption: "Book 1 description" }
    ],
    "Misc.": [
      { src: "images/colors.gif", caption: "Misc item 1 description" }
    ]
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "magenta",
        minHeight: "100vh",
        width: "100vw",
        paddingTop: "10px",
        textAlign: "center",
      }}
    >
      <p style={{ fontFamily: "cursive", fontSize: "22px" }}>
        Meera Sunil portfolio
      </p>

      {/* Portfolio Categories Row */}
      <div style={{ marginBottom: "20px" }}>
        {titles.map((title) => (
          <span
            key={title}
            style={h1Style}
            onClick={() => setOpenModal(title)}
          >
            {title}
          </span>
        ))}
      </div>

      {/* Blinkies */}
      <img
        src="images/bah.gif"
        alt="Blinkie 1"
        style={{ position: "absolute", top: "20px", left: "30px", height: "30px" }}
      />
      <img
        src="images/WISHMELUCK.gif"
        alt="Blinkie 2"
        style={{ position: "absolute", bottom: "50px", right: "60px", height: "30px" }}
      />
      <img
        src="images/withdif.gif"
        alt="Blinkie 3"
        style={{ position: "absolute", bottom: "10px", left: "10px", height: "30px" }}
      />

      {/* Dynamic Modal */}
      {openModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            zIndex: 999
          }}
          onClick={() => setOpenModal(null)}
        >
          <div
            style={{
              backgroundColor: "white",
              color: "white",
              fontFamily: "arial black",
              padding: "20px",
              width: "100%",
              maxWidth: "900px",
              maxHeight: "90vh",
              overflowY: "auto",
             
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ marginBottom: "20px", fontSize: "28px", color: "#3ECF2B", }}>{openModal}</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: openModal === "Photo Archive"
                  ? "repeat(auto-fit, minmax(120px, 1fr))"
                  : "repeat(auto-fit, minmax(250px, 1fr))",
                gap: openModal === "Photo Archive" ? "12px" : "20px",
                justifyItems: "center"
              }}
            >
              {modalContent[openModal].map((item, index) => (
                <div key={index} style={{ textAlign: "center" }}>
                  {item.title && <h3 style={{ marginBottom: "5px", fontSize: "16px" }}>{item.title}</h3>}
                  <img
                    src={item.src}
                    alt={item.caption}
                    style={{
                      width: "100%",
                      maxHeight: openModal === "Photo Archive" ? "150px" : "300px",
                      objectFit: "cover",
                    }}
                  />
                  {item.caption && (
                    <p style={{
                      border: "2px solid white",
                      padding: "2px 6px",
                      marginTop: "0px",
                      backgroundColor: "rgba(0,0,0,0.2)",
                    }}>
                      {item.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => setOpenModal(null)}
              style={{
                marginTop: "20px",
                padding: "8px 16px",
                fontSize: "16px",
                cursor: "pointer",
                borderRadius: "4px"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
