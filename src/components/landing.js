import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

import '../style/bulma.scss'
import Fade from 'react-reveal/Fade'

const landing = () => {
  return (
    <section className="hero">
      <div className="columns">
        <div className="container hero-body">
          <div className="is-two-fifths column ">
            <div className="title">
              <Fade bottom>Hi! I'm Edmund</Fade>
            </div>
            <div className="subtitle">
              <Fade bottom>
                Full Stack web and mobile developer, amateur ML data scientist,
                generalist programmer
              </Fade>
              <br />
              <Fade bottom>I create App//ications</Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default landing
