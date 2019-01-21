import React from 'react'
import { StaticQuery,graphql } from 'gatsby'

import Image from './image'

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
            <div className="">
            <div className="container hero-body">
              <div className="columns is-mobile">
                {allFile.edges.map(({node})=>{
                  return (
                    <button className='column is-one-fifth-tablet is-half-mobile is-vcentered tip-button'>
                      <Image imgsrc={node.base} style={{position:'relative',height:'4rem'}}/>
                    </button>
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

