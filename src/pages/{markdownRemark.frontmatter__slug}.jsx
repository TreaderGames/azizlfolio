import * as React from "react"
import { graphql } from "gatsby"
import SideBarLayout from "../components/SideBarLayout"

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <SideBarLayout name={frontmatter.page}>
      <h1>{frontmatter.title}</h1>

      <p style={{ color: "red", fontWeight: "bold" }}>
        Generated HTML length: {html?.length ?? "undefined"}
      </p>

      <pre
        style={{
          color: "red",
          whiteSpace: "pre-wrap",
          textAlign: "left"
        }}
      >
        {html || "GATSBY HTML IS EMPTY"}
      </pre>

      <div dangerouslySetInnerHTML={{ __html: html || "" }} />
    </SideBarLayout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        page
        slug
        title
      }
    }
  }
`