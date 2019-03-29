module.exports = {
  siteMetadata: {
    title: 'Eddayy',
    description: `My name's Edmund Tay, a developer from Malaysia`,
    author: 'Edmund Tay',
    github:'https://github.com/Eddayy',
    repo:'https://github.com/Eddayy/Eddayy.github.io/tree/development',
    gitlab:'https://gitlab.com/edmundtay96',
    linkendin:'https://www.linkedin.com/in/eddyble/',
    css: 'https://bulma.io/',
  },
  plugins: [    
    'gatsby-plugin-offline',
    'gatsby-source-git-commit',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Edmund's Blog`,
        short_name: 'Blog',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'static/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
        omitGoogleFont: true,
      },
    },
    'gatsby-plugin-sass',
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              quality:80,
              withWebp:true,
              maxWidth: 600,
              wrapperStyle:'width: 100%'
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131170437-1",
        cookieDomain: "Eddayy.github.io",
      },
    },
    // {
    //   resolve: `gatsby-plugin-hotjar`,
    //   options: {
    //     id: 1154418,
    //     sv: 6
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/`,
        name: "markdown-pages",
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Work Sans:600', 'Quattrocento Sans:400,400i,700']
        }
      }

    }
  ],
}
