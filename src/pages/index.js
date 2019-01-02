import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Landing from '../components/landing'
import Bloglist from '../components/bloglist'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react','bulma','github']} />
    <Landing />
    <section className='container'>
      <div className="tabs">
        <ul>
          <li className="is-active"><a>Blog</a></li>
          <li title="coming soon"><a>Side Projects</a></li>
        </ul>
      </div>
    </section>
    
    <Bloglist />
  </Layout>
)

export default IndexPage
