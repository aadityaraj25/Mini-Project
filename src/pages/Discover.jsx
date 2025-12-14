import React from 'react'
import './Discover.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Import gallery assets from src/assets so Vite resolves them correctly
import redfort from '../assets/redfort.jpg'
import nightRoad from '../assets/night road.jpg'
import oldMan from '../assets/old man.jpg'
import station from '../assets/station.jpg'
import seaView from '../assets/sea-view.jpg'
import product from '../assets/product.jpg'
import autoImg from '../assets/auto.jpg'
import heritage from '../assets/heritage.jpg'
import diwali from '../assets/diwali.jpg'
import oldTemple from '../assets/oldtemple.jpg'

const Discover = () => {
  return (
    <div>
      <Navbar/>
      <div className='discover-page'>
            <div className="gallery-container">
                {/* Hero Image with Overlay Text */}
                <div
                className="hero-section"
                data-photographer="Ananya Chauhan"
                data-location="Delhi, India"
                >
                <div className="hero-image">
                    <img src={redfort} alt="Hero image" />
                </div>
                <div className="hero-overlay">
                    <h1>Discover Amazing Photos</h1>
                </div>
                </div>

                {/* Gallery Grid */}
                <div className="gallery">
                <div
                    className="gallery-item"
                    data-photographer="Aditya Narayana"
                    data-location="Ghaziabad, India"
                >
                    <img src={nightRoad} alt="Gallery image 1" />
                </div>

                <div
                    className="gallery-item"
                    data-photographer="Ananya Chauhan"
                    data-location="Muzzafarnagar, India"
                >
                    <img src={oldMan} alt="Gallery image 2" />
                </div>

                <div
                    className="gallery-item"
                    data-photographer="Aditya Narayana"
                    data-location="Mirzapur, India"
                >
                    <img src={station} alt="Gallery image 3" />
                </div>

                <div
                    className="gallery-item"
                    data-photographer="Ananya Chauhan"
                    data-location="Sydney, Australia"
                >
                    <img src={seaView} alt="Gallery image 4" />
                </div>

                <div
                    className="gallery-item"
                    data-photographer="Aditya Narayana"
                    data-location="Ghaziabad, India"
                >
                    <img src={product} alt="Gallery image 5" />
                </div>

                <div
                    className="gallery-item"
                    data-photographer="Ananya Chauhan"
                    data-location="Delhi, India"
                >
                    <img src={autoImg} alt="Gallery image 6" />
                </div>

                <div
                    className="gallery-item"
                    data-photographer="Aditya Narayana"
                    data-location="Delhi, India"
                >
                    <img src={heritage} alt="Gallery image 7" />
                </div>

                <div
                    className="gallery-item"
                    data-photographer="Ananya Chauhan"
                    data-location="Muzzafarnagar, India"
                >
                    <img src={diwali} alt="Gallery image 8" />
                </div>

                <div
                    className="gallery-item"
                    data-photographer="Aditya Narayana"
                    data-location="Nalanda, India"
                >
                    <img src={oldTemple} alt="Gallery image 9" />
                </div>
                </div>
            </div>

            {/* Popup Modal */}
            <div className="modal" id="imageModal">
                <div className="modal-content">
                <span className="close-button">&times;</span>
                <h2>Photo Details</h2>
                <p>
                    Photographer: <span id="photographer"></span>
                </p>
                <p>
                    Location: <span id="location"></span>
                </p>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Discover
