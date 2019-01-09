import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import {StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import '../style/bulma.scss';

class Bloglist extends React.Component {
  //constructor(props) {
  //  super(props)
  //}
  render(){
    return(
      <StaticQuery
      query={graphql`
      query{
        allMarkdownRemark(filter:{frontmatter:{path:{glob:"/blog/*"}}},sort:{fields:frontmatter___date order:DESC}) {
          edges {
            node {
              frontmatter{
                date(formatString: "DD MMMM YYYY")
                title
                path
                tags
              }
              headings(depth:h1) {
                value
              }
              excerpt(pruneLength:300)
              timeToRead
            }
          }
        }
      }
      `}
      render={({allMarkdownRemark}) => {
        const {edges} = allMarkdownRemark
          return(
            <section className='hero'>
              <div className='columns '>
                <div className='container hero-body'>
                  {edges.map(({node})=>{
                    const {title} = node.frontmatter
                    const {date} = node.frontmatter
                    const {path} = node.frontmatter
                    const {excerpt} = node
                    const {timeToRead} = node
                    const {tags} = node.frontmatter
                    return(
                      <div className="is-three-fifths column has-shadow">
                        <p className="title">{title}</p>
                        <p className="subtitle is-6">
                          <span className="icon is-medium has-text-danger"> 
                            <i className="fa fa-calendar"></i>
                          </span>
                          {date}
                          <span className="icon is-medium has-text-primary"> 
                            <i className="fa fa-book"></i>
                          </span> 
                          {timeToRead} min
                          <span className="icon is-medium has-text-success"> 
                            <i className="fa fa-tags"></i>
                          </span> 
                            {tags.map((tag)=> {
                              return <span className='blogtag is-light tag'>{tag}</span>
                            })}
                        </p>
                        <div className="has-text-grey-dark">
                          {excerpt}
                          <Link to={path}>
                              Read more
                            </Link>
                          </div>
                        
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
