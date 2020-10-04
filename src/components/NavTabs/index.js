import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavTabs() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <Link className="navbar-brand" to="/">
        Mitchell Underwood
      </Link>
      <div className="navbar-collapse" id="collapsibleNavbar">
        <div className="navbar-nav">
          <div>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
