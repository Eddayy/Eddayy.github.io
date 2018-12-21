import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import '../style/bulma.scss';
import Fade from 'react-reveal/Fade';

const landing = ()=>{
  return(
  <section className="hero">
    <div className="container hero-body">
      <div className="title has-text-centered">
        <Fade bottom>
          Hi! I'm Edmund
        </Fade> 
        <br/>
        <Fade bottom>
          I create App//ications
        </Fade>
        <br/>
        <Fade bottom>
          Work in progress
        </Fade>
      </div>
    </div>
  </section>
  )
}

export default landing