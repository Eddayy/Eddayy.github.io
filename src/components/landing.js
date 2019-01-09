import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import '../style/bulma.scss';
import Fade from 'react-reveal/Fade';

const landing = ()=>{
  return(
  <section className="hero">
    <div className="container hero-body">
      <div className='columns'>
        <div className='is-two-fifths column '>
          <p className="title">
            <Fade bottom>
              Hi! I'm Edmund
            </Fade> 
          </p>
          <p className='subtitle'>
            <Fade  bottom>
            Full Stack web and mobile developer, amateur ML data scientist, generalist programmer
            </Fade>
            <br />
            <Fade bottom>
                I create App//ications
            </Fade>
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default landing