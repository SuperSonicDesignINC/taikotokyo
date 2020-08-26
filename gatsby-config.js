module.exports = {
  siteMetadata: {
    title: `日本料理TAIKO`,
    titleTemplate: `日本料理TAIKO`,
    description: `日本料理TAIKO`,
    siteUrl: `https://taikotokyo.com/`,
    image: `src/images/taiko-icon.png`,
    twitterUsername: `@nihonryouritaiko`,
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
    {
      resolve: `gatsby-source-strapi`,
      options: {
        // apiURL: `http://localhost:1337`,
        apiURL: `https://taiko-admin.herokuapp.com`,
        queryLimit: -1,
        contentTypes: [
          `notice`,
          `top-slide`,
          `about-taiko`,
          `menu-slide`,
          `menu`,
          `taiko-address`,
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-htaccess`,
      options: {
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: "www.taikotokyo.com",
        redirect: [
          "RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]",
          {
            from: "http://taikotokyo.com",
            to: "https://taikotokyo.com",
          },
        ],
      },
    },
  ],
}
