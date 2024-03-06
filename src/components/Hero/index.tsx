import "./style.css";
import hero from "../../../public/assets/hero2.jpg";
import brand from "../../../public/assets/flyer.jpg";

function Hero() {
  return (
    <div className="hero">
      <img src={hero} />
      <div className="content">
        <div className="contentText">
          <h1>May 18, 2024</h1>
          <p>Meet up at 11am @ Salter Speed Shop</p>
          <p>Kickstands up at 12pm</p>
        </div>
        <div className="contentBrand">
          <img src={brand} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
