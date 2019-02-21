import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

import '../style/bulma.scss'
import Fade from 'react-reveal/Fade'
import Image from './image'
const landing = () => {
  return (
    <section className="hero">
      <div className="container hero-body">
        <div className="columns is-12 landingpage">
          <div className="column is-1-tablet is-2-mobile">
            <div className="image is-64x64 is-32x32-mobile is-centered'" >
              <Image
                imgsrc={`profilepic.jpeg`}
                style={{borderRadius: '50%'}}
              />
            </div>
          </div>
          <div className="column is-6-desktop  is-9-tablet is-12-mobile" >
            <div className="title">
              <Fade bottom>Hi! I'm Edmund</Fade>
            </div>
            <div className="subtitle">
              <Fade bottom><span>Personal blog by <a className="has-text-link" href="https://www.linkedin.com/in/eddyble/">Edmund Tay</a></span></Fade>
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
