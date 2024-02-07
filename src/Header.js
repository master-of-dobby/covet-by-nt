import { useState } from "react";
import { LOGO_URL } from "./common/constants";
import { Link } from "react-router-dom";
import "./App.css";

// conditional rendering

const Header = ({ setLoggedIn }) => {
  const [isLoggedIn, setIsLoggedIN] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false);
    setIsLoggedIN(false);
  };

  return (
    <div className="header1">
      <div className="logo">
        <img src={LOGO_URL} alt="restaurant-logo"></img>
      </div>
      {/* <div className="nav-items"> */}
      <div className={`nav-items ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <Link className="li" to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link
            className="li"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Restaurants
          </Link>
          <Link className="li" to="/about" onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <Link
            className="li"
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </ul>
        {/* <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/instamart">Instamart</Link>
          <Link to="/cart">Cart</Link>
        </ul> */}
      </div>

      <div className="menu-log">
        <div className="menu-icon">
          <button
            className="menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </button>
        </div>

        <div className="login-btn">
          {!isLoggedIn ? (
            <button className="login-btn-main1" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button
              className="login-btn-main2"
              onClick={() => {
                setLoggedIn(true);
                setIsLoggedIN(true);
              }}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
