import React from 'react'
import Fade from 'react-reveal/Fade'
import { StaticQuery,graphql } from 'gatsby'

import Image from './image'

const imagelinks = (image)=>{
  switch(image) {
    case 'react.png':
      return 'https://reactjs.org/'
    case 'gatsbyjs.png':
      return 'https://www.gatsbyjs.org/'
    case 'bulma.png':
      return 'https://bulma.io/'
    case 'firebase.png':
      return 'https://firebase.google.com/'
    case 'graphql.png':
      return 'https://graphql.org/'
    default:
      break;
  }
  return '/'; 
}

const techstack = () =>{
  return(
    <StaticQuery
      query={graphql`
        query{
          allFile(filter:{relativeDirectory:{eq:"logo"}}) {
            edges {
              node {
                base
              }
            }
          }
        }
      `}
      render={({allFile})=>{
        return(
          <section className='hero'>
            <div className="columns">
            <div className="container hero-body">
              <Fade bottom>
                <div className='has-text-grey-dark' style={{paddingLeft:'0.75rem'}}>
                Built on:
                </div>
              </Fade>
              <div className="column is-mobile">
                {allFile.edges.map(({node})=>{
                  console.log(node.base)
                  return (
                  // <button className='column is-one-fifth-tablet is-half-mobile is-vcentered tip-button'>
                      <div className='image is-64x64' style={{marginRight:'0.75rem'}}>
                        <a href={imagelinks(node.base)}>
                          <Image imgsrc={node.base}/>
                        </a>
                      </div>
                    //</button>
                  )
                })}
              </div>
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}

export default techstack

