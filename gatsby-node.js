exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    schema.buildObjectType({
      name: "allInstaNode",
      nodes: {
        username: "String!",
      },
      interfaces: ["Node"],
    }),
  ]
  createTypes(typeDefs)
}
