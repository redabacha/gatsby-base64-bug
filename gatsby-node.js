exports.createPages = async ({ graphql }) => {
  await graphql(`
    query {
      allFile {
        nodes {
          childImageSharp {
            fluid(
              srcSetBreakpoints: [400, 600, 960, 1180, 1440]
              maxWidth: 1180
              quality: 100
            ) {
              aspectRatio
              presentationWidth
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
    }
  `)

  console.log("ran graphql query")
}
