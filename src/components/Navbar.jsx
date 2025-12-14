import React from 'react'
import logoSrc from "../assets/Screenshot 2024-10-12 124539.png";
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={logoSrc} alt="logo" style={{ width: "30px", height: "30px" }} />

        <div className="left-nav">
          <a href="/" className="our-project">
            Pixel Prize
          </a>
        </div>

        <ul className="nav-list">
          <li><a href="photography">PHOTOGRAPHY</a></li>
          <li><a href="discover">DISCOVER</a></li>
          <li><a href="articles">ARTICLES</a></li>
          <li><a href="contact">CONTACT US</a></li>
        </ul>

        <div className="right-nav">
          <a href="login">SIGN IN</a>
          <a href="register">SIGN UP</a>

          {/* <span className="navbar-toggler-icon">
            <i className="fa-solid fa-bars fa-2xl bar"></i>
          </span> */}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
