import React from 'react'
import { Award, Github,Instagram ,Twitter, Linkedin } from 'lucide-react';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="footer-title">Pixel Prize</span>
          </div>

          <p className="footer-text" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Pixel Prize. All rights reserved.
          </p>

          <div className="footer-socials">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="social-icon" />
            </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="social-icon" />
              </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer




