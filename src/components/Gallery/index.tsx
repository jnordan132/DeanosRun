import React from "react";
import "./style.css";

import gallery from "../../gallery.json";

function Gallery() {
  return (
    <div>
      <h1>Gallery</h1>
      <section className="gallery">
        {gallery.map((data) => (
          <div key={data.image} className="galCard">
            <img src={data.image} alt="Gallery Image" />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Gallery;
