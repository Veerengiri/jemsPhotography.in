import React, { useState } from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
      <IconButton onClick={toggleMenu} className="menu-button">
        {isMenuOpen ? <CloseIcon className="hamburger" /> : <MenuIcon className="hamburger" />}
      </IconButton>
      {isMenuOpen && (
        <div className="hidden-side-nav">
          <div className="nv-r-h">
            <div className="clo">
              <IconButton onClick={closeMenu}>
                <CloseIcon className="close" />
              </IconButton>
            </div>
            <a href="/" onClick={closeMenu}>
              Home
            </a>
            <a href="/#about" onClick={closeMenu}>
              About
            </a>
            <a href="/#service" onClick={closeMenu}>
              Service
            </a>
            <a href="/#work" onClick={closeMenu}>
              Our Work
            </a>
            <a href="/#contact" onClick={closeMenu}>
              Contact
            </a>
            <Link to="/dashboard" onClick={closeMenu}>
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
