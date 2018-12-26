import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Landing from '../components/landing'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react','bulma','github']} />
    <Landing />
  </Layout>
)

export default IndexPage
