const path = require('path')
exports.createPages = (({graphql, actions}) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTamplate = path.resolve('./src/components/blogtemplate.js') 
    resolve(
      graphql(
        `
        query{  
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
        `
      ).then(result=>{
        if (result.errors) {
          return Promise.reject(result.errors)
        }
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
          const path =  node.frontmatter.path
          createPage({
            path,
            component: blogPostTamplate,
            context:{
              pathSlug: path
            }
          })
        });

        resolve()
      })
    )
  })
  
})