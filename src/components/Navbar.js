import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  return (
    <div className="navbar">
      <p>#</p>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/my-hashtags">My Hashtags</Link>
          </li>
          <li>
            <Link to="/add-hashtags">Add Hashtags</Link>
          </li>
        </ul>
      </div>
      <button type="button">Log in</button>
      <button className="sign-out-btn" type="button" onClick={onLogout}>
        Sign out
      </button>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
};
