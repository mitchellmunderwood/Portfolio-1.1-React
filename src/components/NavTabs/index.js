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
            <Link to="/Portfolio-1.1-React/about">About</Link>
            <Link to="/Portfolio-1.1-React/portfolio">Portfolio</Link>
            <Link to="/Portfolio-1.1-React/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
