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
      resolve: `gatsby-source-instagram`,
      options: {
        username: "10737971495",
        access_token:
          "EAAJY3ioHTO8BAG5wVjRsvnX3G3nfSK2pk47N9pkbt47KqRmakrxf65YkFxxgsEZCj1fSr4ZBQ5q5ZBKglov4UajZB3mQZBvtmZBlDgA61RXCDZA0K3KPZCCmZAXRx74GCH6bvkpgZA9zUNXkjW3AZBHYBJdO5wkZAE3OKaUaic1l6ZBxY3jZARdvLxncbLA7JX2RIYMWpmLBrjZCCtZAokuKgHgqBFwzjMcBD7xOYhjzVfxmwwGJ3AZDZD",
        instagram_id: "310673663452130",
      },
    },
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: `10737971495`,
    //   },
    // },
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
  ],
}
