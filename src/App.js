import React, { useState } from "react";
import "./App.css";

import iphone15black from "./image/iphone15black.webp";
import iphone15blue from "./image/iphone15blue.webp";
import iphone15green from "./image/iphone15green.webp";

function App() {
  let [index, setIndex] = useState(0);

  function nextSlide() {
    setIndex(index + 1);
    if (index >= images.length - 1) {
      setIndex((index = 0));
    }
  }
  function prevSlide() {
    setIndex(index - 1);
    if (index <= 0) {
      setIndex((index = images.length - 1));
    }
  }

  const images = [iphone15black, iphone15blue, iphone15green];

  console.log(images.length);

  return (
    <>
      <div className="slider">
        <div className="button-wrap">
          <button onClick={prevSlide}>prev</button>
          <button onClick={nextSlide}>next</button>
        </div>
        <div className="img-wrap">
          <img src={images[index]} alt="img" />
        </div>
      </div>
    </>
  );
}

export default App;
