import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-80">
      <a className="navbar-brand" href="#">Navbar</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav d-flex w-100 justify-content-around">
          <li className="nav-item">
            <Link to="/" className="nav-link">All Product</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link "><b>Cart</b></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
