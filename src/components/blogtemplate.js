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
  return (
    <Layout>
    <SEO title={Path.basename(path).replace(/-/g,' ')} keywords={['gatsby', 'application', 'react','bulma','github']} />
    <section className='hero'>
      <div className="container hero-body">
        <div className='columns is-centered'>
          <div className='is-half column has-text-justified'>
            <p className="title">{title}</p>
            <p className="subtitle is-6">{date ? `Posted on ${date}`:''}</p>
            <div className='blogpost' 
              dangerouslySetInnerHTML={{__html:html}}
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
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
      html
      frontmatter {
        path
        title
        date(formatString: "DD MMMM YYYY")
      }
    }
  }
`

export default Template