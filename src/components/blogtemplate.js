import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Comments from '../containers/comments'
import '../style/bulma.scss'
import Path from 'path'
import {
  TwitterShareButton,
  FacebookShareButton,
  RedditShareButton,
  LinkedinShareButton,
  TwitterIcon,
  FacebookIcon,
  RedditIcon,
  LinkedinIcon,
} from 'react-share'

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { title } = markdownRemark.frontmatter
  const { html } = markdownRemark
  const { date } = markdownRemark.frontmatter
  const { path } = markdownRemark.frontmatter
  const { excerpt } = markdownRemark
  const { timeToRead } = markdownRemark
  const { tags } = markdownRemark.frontmatter
  return (
    <Layout>
      <SEO
        title={Path.basename(path).replace(/-/g, ' ')}
        keywords={['gatsby', 'application', 'react', 'bulma', 'github']}
        description={excerpt}
      />
      <section className="hero">
        <div className="container hero-body">
          <div className="columns is-centered">
            <div className="is-half-desktop is-three-fifths-tablet column">
              <p className="title">{title}</p>
              {date && (
                <div className="subtitle columns is-6 is-multiline">
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
                  <div>
                    <span className="icon is-medium has-text-success">
                      <i className="fa fa-tags" />
                    </span>
                    {tags.map(tag => {
                      return (
                        <span key={tag} className="blogtag is-light tag">
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                </div>
              )}
              <div
                className="blogpost has-text-justified"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              {Path.dirname(path) === '/blog' && (
                <Comments path={Path.basename(path)} />
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="container hero-body">
          <div className="columns is-centered">
            <div className="navbar-brand">
              <TwitterShareButton
                className="navbar-item"
                aria-hidden="true"
                url={`https://eddayy.github.io${path}`}
                children={<TwitterIcon size={32} round={true} />}
              />
              <RedditShareButton
                className="navbar-item"
                aria-hidden="true"
                url={`https://eddayy.github.io${path}`}
                children={<RedditIcon size={32} round={true} />}
              />
              <FacebookShareButton
                className="navbar-item"
                aria-hidden="true"
                url={`https://eddayy.github.io${path}`}
                children={<FacebookIcon size={32} round={true} />}
              />
              <LinkedinShareButton
                className="navbar-item"
                aria-hidden="true"
                url={`https://eddayy.github.io${path}`}
                children={<LinkedinIcon size={32} round={true} />}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        path
        title
        date(formatString: "DD MMMM YYYY")
        tags
      }
      excerpt(pruneLength: 150)
      timeToRead
    }
  }
`

export default Template
