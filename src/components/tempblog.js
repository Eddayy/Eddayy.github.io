import React from 'react' 
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../style/bulma.scss';


const Template = ({data}) => {
  
  const {markdownRemark} = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  
  return (
    <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react','bulma','github']} />
    <section className='hero'>
      <div className="container hero-body">
      <div className="title">{title}</div>
        <div className='blogpost' 
          dangerouslySetInnerHTML={{__html:html}}
        />
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
      }
    }
  }
`

export default Template