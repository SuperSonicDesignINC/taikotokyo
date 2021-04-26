exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    schema.buildObjectType({
      name: "instaNode",
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
