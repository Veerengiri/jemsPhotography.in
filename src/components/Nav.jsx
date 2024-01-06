import React from "react";
import "../styles/Nav.css";
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
      </div>
    </nav>
  );
};

export default Nav;
