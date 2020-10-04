import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavTabs() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <a className="navbar-brand" href="#">
        Mitchell Underwood
      </a>
      <div className="navbar-collapse" id="collapsibleNavbar">
        <div className="navbar-nav">
          <div>
            <Link to="/React-Portfolio/About">About</Link>
            <Link to="/React-Portfolio/Portfolio">Portfolio</Link>
            <Link to="/React-Portfolio/Contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
