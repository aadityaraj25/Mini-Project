import React from 'react'
import AnimationVideo from '../assets/Animation.mp4'
import './InitialBody.css'


const InitialBody = () => {
  return (
    <div className="homepage_cover">
      <video
        className="homepage_cover_video"
        autoPlay
        loop
        playsInline
        muted
        width="100%"
      >
        <source src={AnimationVideo} type="video/mp4" />
      </video>

      <div className="homepage_cover_wrap">
        <h1 className="h1_homepage">
          <span className="line1">THE GREATEST</span>
          <br />
          <span className="line2">PHOTOGRAPHY GAME</span>
          <br />
          <span className="line3">
            Join fresh daily photo challenges
            <br />
            and become a pixel guru!
          </span>
        </h1>

        <a href="register">
          <button className="join-btn">JOIN NOW</button>
        </a>
      </div>
    </div>
  )
}

export default InitialBody
