import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
