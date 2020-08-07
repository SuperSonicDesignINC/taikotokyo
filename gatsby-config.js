module.exports = {
  siteMetadata: {
    title: "日本料理TAIKO",
    titleTemplate: "日本料理TAIKO",
    description: "日本料理TAIKO",
    url: "https://taikotokyo.herokuapp.com/", // No trailing slash allowed!
    image: "src/images/gatsby-icon.png",
    twitterUsername: "@nihonryouritaiko",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-scss-typescript`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `10737971495`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Taiko Tokio`,
        start_url: `/`,
        background_color: `#0f0f0f`,
        theme_color: `#0f0f0f`,
        display: `minimal-ui`,
        icon: `src/images/taiko-icon.png`,
      },
    },
  ],
}
