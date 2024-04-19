import "./style.css";
import { Link } from "react-scroll";
import logo from "../../../public/assets/DRLogoCropped.jpg";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img alt="deano's run logo" src={logo} className="logoImg" />
      </div>
      <div className="nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
                type="button"
                data-bs-toggle="collapse"
                aria-controls="navbarNav"
                data-bs-target="#navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon top-bar"></span>
                <span className="toggler-icon middle-bar"></span>
                <span className="toggler-icon bottom-bar"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="category"
                      to="about"
                      offset={-25}
                      duration={500}
                    >
                      <a href="about" className="nav-link active">
                        About
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="category"
                      to="events"
                      offset={-25}
                      duration={500}
                    >
                      <a href="events" className="nav-link active">
                        Events
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="category"
                      to="donate"
                      offset={-25}
                      duration={500}
                    >
                      <a href="donate" className="nav-link active">
                        Donate
                      </a>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      className="category"
                      to="preOrder"
                      offset={-25}
                      duration={500}
                    >
                      <a href="preOrder" className="nav-link active">
                        Pre-Order
                      </a>
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      className="category"
                      to="gallery"
                      offset={-25}
                      duration={500}
                    >
                      <a href="gallery" className="nav-link active">
                        Gallery
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
