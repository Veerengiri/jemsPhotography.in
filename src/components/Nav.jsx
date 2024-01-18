import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="nv-l">
        {/* <img src="" alt="logo" /> */}
        LOGO
      </div>
      <div className="nv-r">
        <a href="/">Home</a>
        <a href="/#about">About</a>
        <a href="/#service">Service</a>
        <a href="/#work">Our Work</a>
        <a href="/#contact">Contact</a>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Nav;
