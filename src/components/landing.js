import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

import '../style/bulma.scss'
import Fade from 'react-reveal/Fade'

const landing = () => {
  return (
    <section className="hero">
      <div className="container hero-body">
        <div className="columns is-12 is-mobile" style={{paddingLeft:'0.75rem'}}>
          <div className="column is-1-tablet is-2-mobile is-horizontal-center">
            <figure className="image is-64x64">
              <img
                className="is-rounded"
                src={`https://eddayy.github.io/profilepic.jpeg`}
                alt="Profile Pic"
              />
            </figure>
          </div>
          <div className="column is-6-desktop  is-10-tablet is-10-mobile">
            <div className="title">
              <Fade bottom>Hi! I'm Edmund</Fade>
            </div>
            <div className="subtitle">
              <Fade bottom><span>Personal blog by <a href="https://www.linkedin.com/in/eddyble/">Edmund Tay</a></span></Fade>
              <br />
              <Fade bottom>
                Full Stack web and mobile developer, amateur ML data scientist,
                generalist programmer
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default landing
