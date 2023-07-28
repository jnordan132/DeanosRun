import React from "react";
import "./style.css";

import gallery from "../../gallery.json";

function Gallery() {
  return (
    <section className="gallery">
      <h1>Gallery</h1>
      <div className="galSection">
        {gallery.map((data) => (
          <div key={data.image} className="galCard">
            <img src={data.image} alt="Gallery Image" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
