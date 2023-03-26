module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `tulztm6elvq7`,
        accessToken: `BfNPL0WLj9Z4kDageacra572UJfI8FfyxjGHCsmbkyI`,
      },
    },
  ],
};
