import "./style.css";

import desktopGallery from "../../utils/desktopGallery.json";
import mobileGallery from "../../utils/mobileGallery.json";

function Gallery() {
  return (
    <section className="gallery">
      <h1>Gallery</h1>
      <div className="galSection desktop">
        {desktopGallery.map((data) => (
          <div key={data.image} className="galCard">
            <img src={data.image} alt="Gallery Image" />
          </div>
        ))}
      </div>
      <br />
      <div className="galSection mobile">
        {mobileGallery.map((data) => (
          <div key={data.image} className="galCard">
            <img src={data.image} alt="Gallery Image" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
