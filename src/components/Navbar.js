import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = ({ userID, onLogout }) => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <ul className="navbar-links">
          <li className="narbar-links__item">
            <Link className="narbar-links__text" to="/search">
              Search
            </Link>
          </li>
          <li className="narbar-links__item">
            <Link className="narbar-links__text" to="/my-hashtags">
              My Hashtags
            </Link>
          </li>
          <li className="narbar-links__item">
            <Link className="narbar-links__text" to="/add-hashtags">
              Add Hashtags
            </Link>
          </li>
        </ul>
      </div>
      {userID && (
        <button className="sign-out-btn" type="button" onClick={onLogout}>
          Sign out
        </button>
      )}
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
};
