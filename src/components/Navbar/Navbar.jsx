import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="app-navbar">
      <div className="app-navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app-navbar-links">
        <li className="p-opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p-opensans">
          <a href="#about">About</a>
        </li>
        <li className="p-opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p-opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p-opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app-navbar-login">
        <a href="#login" className="p-opensans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p-opensans">
          Book a Table
        </a>
      </div>
      <div className="app-navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app-navbar-smallscreen-overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay-close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app-navbar-smallscreen-links">
              <li className="p-opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p-opensans">
                <a href="#about">About</a>
              </li>
              <li className="p-opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p-opensans">
                <a href="#awards">Awards</a>
              </li>
              <li className="p-opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div className="app-navbar-smallscreen-login">
              <a href="#login">Log In / Register</a>

              <a href="/">Book a Table</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
