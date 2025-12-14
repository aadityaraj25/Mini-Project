import React from 'react'
import logoSrc from '../assets/Screenshot 2024-10-12 124539.png'

const LoginNav = () => {
  return (
    <navbar>
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
          </nav>
    </navbar>
  )
}

export default LoginNav
