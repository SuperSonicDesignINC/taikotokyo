exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    schema.buildObjectType({
      name: "allInstaNode",
      fields: {
        username: "String!",
      },
      interfaces: ["Node"],
      extensions: {
        infer: false,
      },
    }),
  ]
  createTypes(typeDefs)
}
