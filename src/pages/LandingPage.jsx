import React from 'react'
import Navbar from '../components/Navbar'
import InitialBody from '../components/InitialBody'
import Footer from '../components/Footer'
import HowItWorks from '../components/howItWorks'
// import './LandingPage.css'

const LandingPage = () => {
  return (
      <div>
        <Navbar/>
        <InitialBody/>
        <HowItWorks/>
        <Footer/>
      </div>
  )
}

export default LandingPage;
