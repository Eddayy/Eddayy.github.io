import React from 'react' 
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../style/bulma.scss';


const Template = ({data}) => {
  
  const {markdownRemark} = data
  const {title} = markdownRemark.frontmatter
  const {html} = markdownRemark
  const {date} = markdownRemark.frontmatter
  return (
    <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react','bulma','github']} />
    <section className='hero'>
      <div className="container hero-body">
        <div className='columns is-centered'>
          <div className='is-three-fifths column has-text-justified'>
            <p className="title">{title}</p>
            <p className="subtitle is-6">Posted on {date}</p>
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
        title
        date(formatString: "DD/MM/YYYY")
      }
    }
  }
`

export default Template