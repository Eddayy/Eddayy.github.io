import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import {StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import '../style/bulma.scss';

class Bloglist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      query: `query{
        allMarkdownRemark(filter:{frontmatter:{path:{glob:"/blog/*"}}}) {
          edges {
            node {
              frontmatter{
                title
                path
              }
            }
          }
        }
      }`,
    }
  }
  render(){
    return(
      <StaticQuery
      query={graphql`
      query{
        allMarkdownRemark(filter:{frontmatter:{path:{glob:"/blog/*"}}},sort:{fields:frontmatter___date order:DESC}) {
          edges {
            node {
              frontmatter{
                date
                title
                path
              }
              headings(depth:h1) {
                value
                
              }
              excerpt(pruneLength:200)
            }
          }
        }
      }
      `}
      render={({allMarkdownRemark}) => {
        var {edges} = allMarkdownRemark
          return(
            <section className='hero'>
              <div className='columns '>
                <div className='container hero-body'>
                  {edges.map(({node})=>{
                    return(
                      <div className="is-three-fifths column has-shadow">
                        <div className="title">
                          {node.frontmatter.title}
                        </div>
                        <div>
                          {node.excerpt}
                        </div>
                        <Link className='buttons is-right' to={node.frontmatter.path}>
                          Read more
                        </Link>
                      </div>
                    )
                  })}
                  </div>
                </div>
              </section>
          )
      }}
    />
  )
  }
}

export default Bloglist
