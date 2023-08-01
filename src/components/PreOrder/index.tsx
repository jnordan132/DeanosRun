import images from "../../utils/desktopGallery.json";
import "./style.css";
import shirt from "./shirts.jpg";

function PreOrder() {
  console.log(images[2]);
  return (
    <section className="preOrder">
      <h1>Pre-Order</h1>
      <div className="flex">
        <div className="shirtPreorder">
          <img src={shirt} />
        </div>
        <div className="info">
          <p>
            If you would like to pre-order a Deano's Run t-shirt or tank top,
            Please feel free to contact me personally through either of the
            below options.
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:jake.wierzbicki50@gmail.com">
                jake.wierzbicki50@gmail.com
              </a>
            </li>
            <li>
              Phone: <a href="tel:9106228399">(910) 622-8399</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PreOrder;
