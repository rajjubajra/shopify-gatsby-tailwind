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
        shopName: `Spify Gatsby Tailwind`,
        // The storefront access token
        accessToken: `a4108da094e73c78d7eb08ea2354ce91`,
      },
    },
  ],
};
