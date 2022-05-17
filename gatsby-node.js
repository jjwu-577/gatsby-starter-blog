const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  // const { createNodeField } = actions

  // if (node.internal.type === `MarkdownRemark`) {
  //   const value = createFilePath({ node, getNode })

  //   createNodeField({
  //     name: `slug`,
  //     node,
  //     value,
  //   })
  // }
}

exports.createSchemaCustomization = ({ actions }) => {
  // const { createTypes } = actions
  // const typeDefs = `
  //   type Query implements Node @dontInfer {
  //     allContentfulLangJson:String
  //     node_locale:String
  //   }
  // `
  // createTypes(typeDefs)
}
