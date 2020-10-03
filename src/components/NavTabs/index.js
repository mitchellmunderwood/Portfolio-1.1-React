import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavTabs() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark">
      <a class="navbar-brand" href="#">
        Mitchell Underwood
      </a>
      <div class="navbar-collapse" id="collapsibleNavbar">
        <div class="navbar-nav">
          <div>
            <Link to="/">About</Link>
            <Link to="/Portfolio">Portfolio</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
