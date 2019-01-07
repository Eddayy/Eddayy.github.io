import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            repo
          }
        }
      }
    `}
    render={data => (
      <article>
        <Header siteTitle={data.site.siteMetadata.title} repo={data.site.siteMetadata.repo}/>
        <main>
          {children}
        </main>
        <Footer />
      </article>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
