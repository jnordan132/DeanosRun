import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bike from "../../assets/bike.jpg";
import brand from "../../assets/brand.jpg";
import groupBike from "../../assets/groupBike.jpg";
import groupPic from "../../assets/groupPic.jpg";
import groupTwo from "../../assets/groupTwo.jpg";
import raffleOne from "../../assets/raffleOne.jpg";
import raffleTwo from "../../assets/raffleTwo.jpg";
import shirts from "../../assets/shirts.jpg";
import social from "../../assets/social.jpg";
import socialTwo from "../../assets/socialTwo.jpg";
import wristBands from "../../assets/wristBands.jpg";
import wristBandsTwo from "../../assets/wristBandsTwo.jpg";
import "./style.css";

function Gallary() {
  const images = [
    {
      original: bike,
      thumbnail: bike,
    },
    {
      original: brand,
      thumbnail: brand,
    },
  ];

  return (
    <div>
      <h1>Gallary</h1>
      <section className="carousel">
        <Carousel>
          <div>
            <img src={bike} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={brand} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={groupBike} />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={groupPic} />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={groupTwo} />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={raffleOne} />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={raffleTwo} />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={shirts} />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={social} />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={socialTwo} />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={wristBands} />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={wristBandsTwo} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </section>
    </div>
  );
}

export default Gallary;
