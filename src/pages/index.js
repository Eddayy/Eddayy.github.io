import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Landing from '../components/landing'
import Bloglist from '../components/bloglist'
import TechStack from '../components/techstacks'
import Selector from '../components/selector'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={['gatsby', 'application', 'react', 'bulma', 'github']}
    />
    <Landing />
    <TechStack />
    <Selector />
  </Layout>
)

export default IndexPage
