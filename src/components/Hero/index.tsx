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
          <p>
            Mark your calendars and don't miss out. More info and surprises to
            be announced! Word on the block “bring a tent…"
          </p>
        </div>
        <div className="contentBrand">
          <img src={brand} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
