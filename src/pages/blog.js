import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Bloglist from '../components/bloglist'

const ResumePage = () => {
  return(
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react','bulma','github']} />
    <Bloglist/>
  </Layout>
  )
}

export default ResumePage
