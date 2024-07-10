import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    const data = await axios.get("http://localhost:3000");
    console.log(data.data);
    setImages(data.data);
  }

  return (
    <div className="cards">
      {images.map((image) => (
        <section className="card">
          <h1>big one!</h1>
          <div className="image-container" key={image.name}>
            <h3 className="image-title" >{image.name}</h3>
            <img className="image" src={image.url} />
          </div>
        </section>
      ))}
    </div>
  );
}

export default App;
