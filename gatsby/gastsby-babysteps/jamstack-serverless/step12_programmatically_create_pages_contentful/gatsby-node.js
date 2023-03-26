
const path = require("path")
exports.createPages=async ({graphql,actions})=>{
    const {createPage}=actions
    const response=await graphql(`
    {
        allContentfulPost {
            edges{
          nodes {
            slug
          }
        }
     }
      }`)
      response.data.allContentfulPost.edges.forEach(edge => {
          createPage({
              path:`/${edge.node.slug}`,
              component:path.resolve("./src/templates/blog-post.tsx")
              ,
              context:{
                  slug:edge.node.slug
              }
          })
          
      });
}