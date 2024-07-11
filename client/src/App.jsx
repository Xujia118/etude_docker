import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/images`
      );
      setImages(response.data.images);
    } catch (err) {
      console.error("Error fetching images:", error);
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
