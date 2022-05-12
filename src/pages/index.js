import * as React from "react"
import { graphql } from "gatsby"

import StickyWrapper from "../components/StickyWrapper"
import Layout from "../components/layout"
import Seo from "../components/seo"
import useBigScreen from "../hooks/bigScreen"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-react-intl"
const ossUrl="https://resource.nreal.ai/web/"
const bg1=`${ossUrl}images/air/home_kv.jpg`
const bg2=`${ossUrl}images/air/home_scenario.jpg`

const Index = ({ intl,data, location }) => {
  debugger
  const bigScreen = useBigScreen(1022)
  const text1 = [
    {
      value:data.contentfulPerson.name,
      spacer: "10px",
    },
    {
      value: intl.formatMessage({ id: "homepage_0" }),
      spacer: 0,
    },
  ]
  const text2 = [
    {
      value:data.contentfulPerson.phone,
      spacer: 0,
    },
  ]

  return (
    <Layout location={location}>
      <Seo title="Home" />
      <StickyWrapper bigScreen={bigScreen}  stickyHeight={"200vh"} bgImgUrl={bg1} divSpacer="0" text={text1} width="100%" />
      <StickyWrapper bigScreen={bigScreen}  stickyHeight={"200vh"} bgImgUrl={bg2} divSpacer="calc(50vh - 100px)" text={text2} width="100%"/>
      
      
    </Layout>
  )
}

export default injectIntl(Index)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPerson(name: {}) {
      name
      phone
      image {
        url
      }
    }
  }
`
