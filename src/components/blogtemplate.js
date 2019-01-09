import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
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
            <div className="is-half column has-text-justified">
              <p className="title">{title}</p>
              {date ? (
                <p className="subtitle is-6">
                  <span className="icon is-medium has-text-danger">
                    <i className="fa fa-calendar" />
                  </span>
                  {date}
                  <span className="icon is-medium has-text-primary">
                    <i className="fa fa-book" />
                  </span>
                  {timeToRead} min
                  <span className="icon is-medium has-text-success">
                    <i className="fa fa-tags" />
                  </span>
                  {tags.map(tag => {
                    return <span className="blogtag is-light tag">{tag}</span>
                  })}
                </p>
              ) : (
                <div />
              )}
              <div
                className="blogpost"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              {date ? (
                <form
                  action="https://formspree.io/eddayyfeedback@gmail.com"
                  method="POST"
                >
                  <div className="title">FeedBack</div>
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control is-expanded">
                      <input
                        className="input"
                        type="text"
                        name="name"
                        placeholder="name"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control is-expanded">
                      <input
                        className="input"
                        type="email"
                        name="_replyto"
                        placeholder="email"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control is-expanded">
                      <textarea
                        className="textarea"
                        name="message"
                        placeholder="message"
                      />
                    </div>
                  </div>
                  <div className="field is-grouped">
                    <div className="control ">
                      <input
                        className="button is-link is-right"
                        type="submit"
                        value="Send"
                      />
                    </div>
                  </div>
                </form>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="container hero-body">
          <div className="title columns is-centered">
            <div className="column has-text-centered">Social</div>
          </div>
          <div className="columns is-centered">
            <div className="navbar-brand">
              <TwitterShareButton
                className="navbar-item"
                url={`https://eddayy.github.io${path}`}
                children={<TwitterIcon size={32} round={true} />}
              />
              <RedditShareButton
                className="navbar-item"
                url={`https://eddayy.github.io${path}`}
                children={<RedditIcon size={32} round={true} />}
              />
              <FacebookShareButton
                className="navbar-item"
                url={`https://eddayy.github.io${path}`}
                children={<FacebookIcon size={32} round={true} />}
              />
              <LinkedinShareButton
                className="navbar-item"
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
