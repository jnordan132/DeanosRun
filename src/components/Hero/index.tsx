import "./style.css";
import hero from "../../../public/assets/hero2.jpg";
import brand from "../../../public/assets/brand.jpg";

function Hero() {
  return (
    <section className="hero">
      <img src={hero} />
      <section className="content">
        <div className="contentText">
          {/*<h1>Content One</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sunt quos at asperiores suscipit cum impedit exercitationem autem,
            accusantium quisquam dolores. Laborum quasi eum asperiores rem
            mollitia accusamus voluptate officia doloremque deserunt ut
            repudiandae, atque maxime, molestiae unde quia temporibus rerum
            saepe deleniti tempora. Quaerat eaque itaque voluptatibus veniam
            tenetur.
          </p>
          <br />
          <h1>Content Two</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sunt quos at asperiores suscipit cum impedit exercitationem autem,
            accusantium quisquam dolores. Laborum quasi eum asperiores rem
            mollitia accusamus voluptate officia doloremque deserunt ut
            repudiandae, atque maxime, molestiae unde quia temporibus rerum
            saepe deleniti tempora. Quaerat eaque itaque voluptatibus veniam
            tenetur.
          </p>
          <br /> */}
        </div>
        <div className="contentBrand">
          <img src={brand} />
        </div>
      </section>
    </section>
  );
}

export default Hero;
