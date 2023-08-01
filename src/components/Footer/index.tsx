import logo from "../../../public/assets/logoWords.jpg";
import "./style.css";

function Footer() {
  return (
    <footer>
      <div>
        <img src={logo} />
        <div>
          <h4>Contact Us</h4>
          <p>Email</p>
          <p>Phone</p>
        </div>
        <p>© 2022 Deano's Run | All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
