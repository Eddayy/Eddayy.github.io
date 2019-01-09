const path = require('path')

const wrapper = promise => promise.then(result=>({result,error:null}))
                                  .catch(error=>({error,result:null}))


exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  const blogPostTamplate = require.resolve('./src/components/blogtemplate.js') 

  const {error,result} = await wrapper(
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
    )
  )
  if (!error){
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      const path =  node.frontmatter.path
      createPage({
        path,
        component: blogPostTamplate,
        context:{
          pathSlug: path
        }
      })
    })
    return
  }
  console.log(error)
  
}