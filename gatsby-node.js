const path = require(`path`)
const {
  slash
} = require(`gatsby-core-utils`)

exports.createPages = async ({ actions, graphql }) => {

  const { createPage } = actions

  const {data: {
    allWpPost: {
      nodes: allPosts
    },
  },
  } = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          uri
        }
      }
    }
  `)

  allPosts.forEach(post => {

    createPage({
      path: post.uri,
      component: slash(path.resolve('./src/templates/single-post.js')),
      context: {
        id: post.id,
      }
    })
    
  });


}