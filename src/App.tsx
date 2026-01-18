import { useState } from "react";

import './App.css';


interface ImageItem {
  src: string;
  caption: string;
  title?: string;
  link?: string;
}

// FOLDER IMOPORTANTS PHOTO+POSTER+COLLAGE*****************
const photoArchiveGlob = import.meta.glob('./images/photo-archive/*.{png,jpg,jpeg,gif,JPG}', { eager: true });
const photoArchiveImages: ImageItem[] = Object.values(photoArchiveGlob).map((img: any) => ({
  src: img.default,
  caption: "" 
}));

const posterGlob = import.meta.glob('./images/posters/*.{png,jpg,jpeg,gif}', { eager: true });
console.log('Posters detected:', Object.keys(posterGlob));
const posterImages: ImageItem[] = Object.values(posterGlob).map((img: any) => ({
  src: img.default,
  caption: "" 
}));

const illustrationGlob = import.meta.glob('./images/illustration/*.{png,jpg,jpeg,gif}', { eager: true });
console.log('Illustrations detected:', Object.keys(illustrationGlob));
const illustrationImages: ImageItem[] = Object.values(illustrationGlob).map((img: any) => ({
  src: img.default,
  caption: "" 
}));

// LANDING PAGE*****************
export default function App() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [fullscreenItem, setFullscreenItem] = useState<ImageItem | null>(null);

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
    textShadow: `
    1px 1px 0 rgba(0,0,0,0.4),
   -1px -1px 0 rgba(255,255,255,0.4)
  `,
    cursor: "pointer",
    margin: "0 20px",
    display: "inline-block",
    fontSize: "70px",
  };

  const modalContent: Record<string, ImageItem[]> = {
    Websites: [
      { src: "images/igp.png", title: "Storytelling Workshop", caption: "live writing workshop + library. made using html/css/javascript, express.js, node.js, postgreSQL, render", link: "https://imagegenerationproject.onrender.com/" },
      { src: "images/bookworld.png", title: "My Reading World", caption: "book log that is also a cute collaborative world builder. users input books they’ve read and earn town building blocks.", link: "https://my-reading-world.vercel.app/" },
      { src: "images/prompter.png", title: "Make Me Write", caption: "simple webtool that generates a writing exercise prompt. coded using html/css/javascript", link: "https://meeralouise.github.io/prompter/" },
      { src: "images/babel.png", title: "The Library of Babel", caption: "an interactive reading experience of Luis Jorge Borge's Library of Babel - coded using html/css/javascript", link: "https://sunim094.interactive.rodeo/studio/project-1/index.html" },
      { src: "images/noahsark.png", title: "Noah's Ark-ive", caption: "interactive archive of plushy toys found across the internet. each toy comes with a matching ship passenger ID card, crediting the creator of the plushy. coded using html/css/js", link: "https://meeralouise.github.io/Noah-s-Ark-ive/collage.html" },
      { src: "images/dossier.png", title: "Dossier", caption: "a comprehensive identity rebrand for fragrance company 'Dossier'" },
      { src: "images/weedbag.png", title: "Weedbag Archive", caption: "archive of marijuana 8th packages sold in NYC collected through social media submissions. coded using html/css/javascript + Airtable‘s API", link: "https://meeralouise.github.io/portfolioveeone/archives/weedbag/windex.html" },
      { src: "images/portone.gif", title: "Old attempt", caption: "a very old first attempt at a creative portfolio that I will never forget. such fun <3", link: "https://meeralouise.github.io/portfolioveeone/" },

    ],
    Posters: posterImages,
    "Collage/Illustration": illustrationImages,
    "Photo Archive": photoArchiveImages,
    "Children's Books": [
      { src: "images/monkey.gif", title:"The Monkey with the Tom-Tom", caption: "Children’s storybook published as part of a collaboration between DERTbook and Parsons School of Design students.  Story was written by me as an adaptation the original Indian folktale. Ilustrations were done both by hand and digitally using mixed-media materials such as construction paper, fabric cutouts, printed assets. etc. Was pretended in tandem with my Colors baby-board book to a panel of designers at TODA design agency, where it was met with overwhelmingly positive reviews." },
      { src: "images/colors.gif", title: "Why I Love Every Color!", caption: "Baby board book published as part of a collaboration between DERTbook and Parsons School of Design students. Story conceived and written by me. Was presented in tandem with my Monkey storybook to a panel of designers at TODA design agency, where it was met with overwhelmingly positive reviews." }
    ],
    "Misc.": [
      { src: "images/plane.jpg", caption: "" },
      { src: "images/loremipsum.png", caption: "" },
      {src: "images/worldmeera.gif", caption:""},
      {src: "images/typocomp.gif", caption:""},
      {src: "images/weave1.jpg", caption:""},
      {src: "images/weave2.jpg", caption:""},
      {src: "images/weave3.jpg", caption:""},
      
    ]
  };

  return (
    <div
      style={{
        position: "relative",
        background: "radial-gradient(circle at top, #FFFFFF 0%, #F2C6FF 30%, #C77DFF 55%, #FF4FD8 80%)",
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
<div
  style={{
    marginBottom: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
  }}
>
  {titles.map((title) => (
    <span
      key={title}
      style={{
        ...h1Style,
        fontSize: "clamp(28px, 7vw, 70px)",
        margin: "0 10px",
      }}
      onClick={() => setOpenModal(title)}
    >
      {title}
    </span>
  ))}
</div>

{/* Contact Box */}
<div
  style={{
    margin: "20px auto",
    padding: "16px 20px",
    maxWidth: "420px",
    backgroundColor: "rgba(255,255,255,0.85)",
    border: "2px solid black",
    fontFamily: "Arial",
    fontSize: "14px",
    lineHeight: "1.5",
  }}
>
  <p style={{ margin: "0 0 0" }}>
    <strong>Email:</strong>{" "}
    <a href="mailto:meera.sunil02@gmail.com">meera.sunil02@gmail.com</a>
  </p>
  <p style={{ margin: 0 }}>
    <strong>CV:</strong>{" "}
    <a
      href="https://drive.google.com/file/d/1Nf3_2_a5g2-Lu_7SIOkgVlLK0YyZ0LxV/view?usp=sharing"
      target="_blank"
    >
      HIRE ME!
    </a>
  </p>
  <p style={{ margin: 0, fontSize: "13px", padding: "15px" }}>
  <strong>Elsewhere:</strong>{" "}
  <a href="https://boxd.it/7BisZ" target="_blank">letterboxd</a> /{" "}
  <a href="https://www.serializd.com/user/meergirl/profile" target="_blank">serializd</a> /{" "}
  <a href="https://www.are.na/meera-sunil/channels" target="_blank">are.na</a> /{" "}
  <a href="https://meerasunil.cargo.site/" target="_blank">cargo site</a> /{" "}
  <a href="https://www.linkedin.com/in/meera-sunil-36bbb0248/" target="_blank">linkedin</a> /{" "}
  <a href="https://www.instagram.com/meerasunilproduct/" target="_blank">instagram</a> /{" "}
  <a href="https://open.spotify.com/user/meaeras?si=19ba5b0585944846">spotify</a> 
</p>

</div>
      {/* Blinkies */}
      <div className="blinkies">
      <img
        src="images/bah.gif"
        alt="Blinkie 1"
      />
      <img
        src="images/WISHMELUCK.gif"
        alt="Blinkie 2"
        
      />
      <img
        src="images/withdif.gif"
        alt="Blinkie 3"
        
      />
      <img
        src="images/balegde.gif"
        alt="Blinkie 4"
        
      />
      </div>
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
              color: "green",
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
    {item.title && <h3 style={{ marginBottom: "5px", fontSize: "16px", color: "#1F5E2E", }}>{item.title}</h3>}

    {/* Wrap image in link if it exists */}
    {item.link ? (
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <img
          src={item.src}
          alt={item.caption}
          style={{
            width: "100%",
            maxHeight: openModal === "Photo Archive" ? "150px" : "300px",
            objectFit: "cover",
            cursor: "pointer"
          }}
        />
      </a>
    ) : (
      <img
        src={item.src}
        alt={item.caption}
        onClick= {(e) => {
          e.stopPropagation();
          setFullscreenItem(item);
        }}
        style={{
          width: "100%",
          maxHeight: openModal === "Photo Archive" ? "150px" : "300px",
          objectFit: "cover",
        }}
      />
    )}

    {item.caption && (
      <p style={{
        border: "2px solid white",
        padding: "2px 6px",
        color: "white",
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
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <button
  onClick={() => setAboutOpen(true)}
  style={{
    position: "fixed",
    bottom: "16px",
    left: "16px",
    fontFamily: "helvetica",
    fontSize: "12px",
    padding: "6px 10px",
    backgroundColor: "transparent",
    border: "2px solid yellow",
    cursor: "pointer",
    zIndex: 1000,
  }}
>
  about me
</button>

{aboutOpen && (
  <div
    style={{
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.6)",
      zIndex: 999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
    }}
    onClick={() => setAboutOpen(false)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        backgroundColor: "white",
        width: "100%",
        maxWidth: "520px", // dead-center narrow column
        padding: "40px 30px",
        fontFamily: "Times New Roman",
        lineHeight: "1.6",
        border: "2px solid black",
        textAlign: "left",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "24px" }}>
Hi! I'm Meera ✮⋆˙𓅪
      </h2>

      <p>
     I am a designer and self-proclaimed media enthusiast based in Brooklyn NY. 
    </p>
      <p>
      Originally from the DC suburbs of Maryland, I relocated to NYC for my BFA at Parsons School of Design. 
      </p>

      <p style={{ textAlign: "center", marginTop: "32px" }}>
        ✿ ✿ ✿
      </p>
      <p>
        This website was lovingly coded by me! Thank you for coming + shoot me an email for any inquiries!
      </p>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => setAboutOpen(false)}
          style={{
            border: "1px solid black",
            background: "white",
            padding: "6px 12px",
            cursor: "pointer",
          }}
        >
          close
        </button>
      </div>
    </div>
  </div>
)}
{fullscreenItem && (
  <div
    onClick={() => setFullscreenItem(null)}
    style={{
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.9)",
      zIndex: 2000,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    }}
  >
    <img
      src={fullscreenItem.src}
      alt={fullscreenItem.caption}
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image
      style={{
        maxWidth: "95vw",
        maxHeight: "95vh",
        objectFit: "contain",
      }}
    />
  </div>
)}

    </div>
  );
}
