import React from 'react' 
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../style/bulma.scss';
import Path from 'path'

const Template = ({data}) => {
  
  const {markdownRemark} = data
  const {title} = markdownRemark.frontmatter
  const {html} = markdownRemark
  const {date} = markdownRemark.frontmatter
  const {path} = markdownRemark.frontmatter
  const {excerpt} = markdownRemark
  return (
    <Layout>
    <SEO title={Path.basename(path).replace(/-/g,' ')} keywords={['gatsby', 'application', 'react','bulma','github']} description={excerpt} />
    <section className='hero'>
      <div className="container hero-body">
        <div className='columns is-centered'>
          <div className='is-half column has-text-justified'>
            <p className="title">{title}</p>
            <p className="subtitle is-6">{date ? `Posted on ${date}`:''}</p>
            <div className='blogpost' 
              dangerouslySetInnerHTML={{__html:html}}
            />
            {date? 
              
              <form action="https://formspree.io/edmundtay96@gmail.com" method="POST">
              <div className='title'>FeedBack</div>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control is-expanded">
                    <input className="input" type="text" name="name" placeholder="name"/>
                  </div>
                  </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control is-expanded">
                    <input className="input" type="email" name="_replyto" placeholder="email"/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control is-expanded">
                    <textarea className="textarea" name="message" placeholder="message"></textarea>
                  </div>
                </div>
                <div className="field is-grouped">
                  <div className="control ">
                    <input className="button is-link is-right" type="submit" value="Send"/>
                  </div>
                </div>
              </form> :''}
            </div>
        </div>
      </div>
    </section>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
      html
      frontmatter {
        path
        title
        date(formatString: "DD MMMM YYYY")
      }
      excerpt(pruneLength:200)
    }
  }
`

export default Template