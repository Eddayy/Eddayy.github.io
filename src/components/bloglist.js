import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import PropTypes from 'prop-types';
import '../style/bulma.scss'


class Bloglist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      max_page:0,
      current_page:Array.from(Array(this.props.perpage).keys()),
      perpage:this.props.perpage
    }
  }
  //todo create array of current item
  //each div will only display if 
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              filter: { frontmatter: { path: { glob: "/blog/*" } } }
              sort: { fields: frontmatter___date, order: DESC }
            ) {
              edges {
                node {
                  frontmatter {
                    date(formatString: "DD MMMM YYYY")
                    title
                    path
                    tags
                  }
                  headings(depth: h1) {
                    value
                  }
                  excerpt(pruneLength: 300)
                  timeToRead
                }
              }
            }
          }
        `}
        render={({ allMarkdownRemark }) => {
          let counter = -1
          const { edges } = allMarkdownRemark
          return (
            <section className="hero">
              <div className="columns ">
                <div className="container hero-body">
                  {edges.map(({ node }) => {
                    const { title } = node.frontmatter
                    const { date } = node.frontmatter
                    const { path } = node.frontmatter
                    const { excerpt } = node
                    const { timeToRead } = node
                    const { tags } = node.frontmatter
                    counter++
                    console.log(this.state.current_page)
                    if(this.state.current_page.includes(counter)){
                      return (
                        <div key={title}
                          className="is-three-fifths column has-shadow">
                          <div className="title">{title}</div>
                          <div className="subtitle is-6 columns is-multiline">
                            <div>
                              <span className="icon is-medium has-text-danger">
                                <i className="fa fa-calendar" />
                              </span>
                              {date}
                              <span className="icon is-medium has-text-primary">
                                <i className="fa fa-book" />
                              </span>
                              {timeToRead} min
                            </div>
                            <div className="">
                              <span className="icon is-medium has-text-success">
                                <i className="fa fa-tags" />
                              </span>
                              {tags.map(tag => {
                                return (
                                  <span
                                    key={tag}
                                    className="blogtag is-light tag">
                                    {tag}
                                  </span>
                                )
                              })}
                            </div>
                          </div>
                          <div className="has-text-grey-dark">
                            {excerpt}
                            <Link className="has-text-link" to={path}>
                              Read more
                            </Link>
                          </div>
                        </div>
                      )
                    }
                    
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

Bloglist.propTypes = {
  perpage: PropTypes.number
};

export default Bloglist
