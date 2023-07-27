import React from "react";
import "./style.css";
import hero from "../../assets/hero2.jpg";
import brand from "../../assets/brand.jpg";

function Hero() {
  return (
    <section className="hero">
      <img src={hero} />
      <section className="content">
        <div className="contentText">
          <h1>Content One</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            fuga, corporis modi provident soluta vero ducimus commodi optio eius
            iste, atque aspernatur neque aperiam cumque.
          </p>
          <br />
          <h1>Content Two</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            fuga, corporis modi provident soluta vero ducimus commodi optio eius
            iste, atque aspernatur neque aperiam cumque. Aut recusandae
            perspiciatis, molestiae deleniti vero veritatis, cumque fuga quaerat
            neque culpa sit quia error!
          </p>
          <br />
          <h1>Content Three</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            fuga, corporis modi provident soluta vero ducimus commodi optio eius
            iste, atque aspernatur neque aperiam cumque.
          </p>
        </div>
        <div className="contentBrand">
          <img src={brand} />
        </div>
      </section>
    </section>
  );
}

export default Hero;
