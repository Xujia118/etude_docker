import React, { useEffect, useState } from "react";
import axios from "axios";
import { albDns } from "./fetchAlbDns";

import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    const API_URL = `${albDns}/api/images`;

    try {
      const response = await axios.get(API_URL);
      setImages(response.data.images);
    } catch (err) {
      console.error("Error fetching images:", err);
      setImages([]);
    }
  }

  return (
    <div className="cards">
      {images.map((image) => (
        <section className="card" key={image.name}>
          <h1>big one!</h1>
          <div className="image-container" key={image.name}>
            <h3 className="image-title">{image.name}</h3>
            <img className="image" src={image.url} />
          </div>
        </section>
      ))}
    </div>
  );
}

export default App;
