module.exports = {
  siteMetadata: {
    title: "Shopify-Gatspy-Tailwind",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop.
        shopName: `[some-shop]`,
        // The storefront access token
        accessToken: `[token]`,
      },
    },
  ],
};
