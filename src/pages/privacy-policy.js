import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const MainContainer = styled.div`
  padding: 38px 45px;
  //overflow: hidden;
  max-width: 1000px;
  margin: 0px auto 0;
  position: relative;
  overflow: hidden;
`
const PrivacyPolicy = ({ data, location }) => {
  const post = data.allMarkdownRemark.nodes
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post[0].html}
      />
      <MainContainer>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline" dangerouslySetInnerHTML={{ __html: post[1].html }}></h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post[2].html }}
          itemProp="articleBody"
        />
      </article>
      </MainContainer>
    </Layout>
  )
}

export default PrivacyPolicy

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      nodes {
        html
      }
    }
  }
`
