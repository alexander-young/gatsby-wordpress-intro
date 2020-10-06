import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SinglePost = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>{data.post.title}</h1>
    <div dangerouslySetInnerHTML={{__html: data.post.content}}></div>
  </Layout>
)

export default SinglePost

export const query = graphql `
  query post($id: String!) {
    post: wpPost(id: { eq: $id }) {
      title
      content
    }
  }
`