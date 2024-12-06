import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  async function fetchImages() {
    const BASE_URL = import.meta.env.VITE_API_URL;
    const API_URL = `${BASE_URL}/api/images`;

    try {
      const response = await axios.get(API_URL);

      if (response && response.data) {
        setImages(response.data.images);
      } else {
        console.log("Unexpected response:", response.data);
      }
    } catch (err) {
      console.log(err.error); // TODO: update error handling
    }
  }

  useEffect(() => {
    fetchImages();
  }, []);

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
