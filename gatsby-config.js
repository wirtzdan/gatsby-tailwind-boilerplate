module.exports = {
  siteMetadata: {
    title: `Gatsby Tailwind Boilerplate`,
    description: `Boilerplate for projects with TailwindCSS and GatsbyJS`,
    author: `@wirtzdan`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-tailwind-boilerplate`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#007FFF`,
        display: `browser`,
        icon: `./src/assets/favicon.svg`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    }
  ]
};
