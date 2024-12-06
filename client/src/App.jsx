import React, { useEffect, useState } from "react";
import axios from "axios";
import { albDns } from "./fetchAlbDns";

import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchAlbDnsAndImages();
  }, []);

  async function fetchAlbDnsAndImages() {
    albDns
      .then(dns => {
        if (!dns) {
          throw new Error("ALB DNS could not be solved.");
        }

        const API_URL = `${dns}/api/images`;
        return axios.get(API_URL);
      })
      .then(response => {
        setImages(response.data.images);
      })
      .catch(error => {
        setImages([]);
      })
  }

  // async function fetchAlbDnsAndImages() {
  //   try {
  //     const dns = await albDns;

  //     if (!dns) {
  //         throw new Error("ALB DNS could not be solved.")
  //     }

  //     const API_URL = `${dns}/api/images`
  //     const response = await axios.get(API_URL);
  //     setImages(response.data.images);
  //   } catch (err) {
  //     console.error("Error fetching images:", err);
  //     setImages([]);
  //   }
  // }

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