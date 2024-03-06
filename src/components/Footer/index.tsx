import logo from "../../../public/assets/DRLogo2.jpg";
import "./style.css";

function Footer() {
  return (
    <footer>
      <div>
        <img src={logo} />
        <div>
          <h4>Contact Us</h4>
          <li>
            Email:{" "}
            <a href="mailto:jake.wierzbicki50@gmail.com">
              jake.wierzbicki50@gmail.com
            </a>
          </li>
          <li>
            Phone: <a href="tel:9106228399">(910) 622-8399</a>
          </li>
        </div>
        <p>© 2024 Deano's Run | All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
