import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/">
          <img src="assets/logo.png" alt="" className="navbarImage" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="/work">
              OUR WORK
            </a>
            <a class="nav-item nav-link" href="/contact%20us">
              CONTACT US
            </a>
            <a class="nav-item nav-link" href="/services">
              SERVICES
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
