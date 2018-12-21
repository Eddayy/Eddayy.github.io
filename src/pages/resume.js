import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
//import Landing from '../components/landing'
import Test from '../components/blogtemplate'
const ResumePage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react','bulma','github']} />
    <Test />
  </Layout>
)

export default ResumePage
