module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `56v14njjdxpf`,
        accessToken: `Rx6kCyrUGLpTMyeA4yYK0GV97-AslMm5olAQ5mSkgx8`,
      },
    },
  ],
};
