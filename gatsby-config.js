/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "A website",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: ["gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blarg`,
        path: `${__dirname}/blarg`,
      }
    },],
}
