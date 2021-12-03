import { useState } from 'react';
import './App.css';
const songDB = {
  HipHop: [
    { 
      name: "Party Monster",
      artist: "Starboy"
    },
    {
      name: "Love me Harder", 
      artist: "Ariana Grande" 
    }
  ],
  Folk: [
    {
      name: "Sojatiya Sirdar",
      artist: "Divya Kumar"
    },
    {
      name: "Mai ni meriye",
      artist: "Jonita Gandhi"
    }
  ],
  EDM: [
    {
      name: "Alone",
      artist: "Marshmello"
    },
    {
      name: "Routine",
      artist: "Alan Walker"
    }
  ],
  Rock: [
    {
      name: "Nothing else matters",
      artist: "Metallica"
    },
    {
      name: "Empty spaces",
      artist: "Pink floyd"
    }
  ],
  Indie: [
    {
      name: "Stitches",
      artist: "Sandunes"
    },
    {
      name: "Sooner or Later",
      artist: "Mali"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("HipHop");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎧 Recommended Songs </h1>
      <p style={{ fontSize: "large" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(songDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#34a0a4",
              color: "white",
              borderRadius: "1rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {songDB[selectedGenre].map((song) => (
            <li
              key={song.name}
              style={{
                backgroundColor: "#b5e48c",
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #52b69a",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller" }}> {song.artist} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

