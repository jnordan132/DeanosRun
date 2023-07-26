import React from "react";
import "./style.css";
import { Link } from "react-scroll";

function Header() {
  return (
    <header className="header">
      <div className="nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <h1>Deano's Run</h1>
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
                      to="link1"
                      offset={-100}
                      duration={500}
                    >
                      <a href="link1" className="nav-link active">
                        Link1
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="category"
                      to="link2"
                      offset={-100}
                      duration={500}
                    >
                      <a href="link2" className="nav-link active">
                        Link2
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="category"
                      to="link3"
                      offset={-100}
                      duration={500}
                    >
                      <a href="link3" className="nav-link active">
                        Link3
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
