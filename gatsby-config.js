const path = require('path');

module.exports = {
    siteMetadata: {
        title: `TPS by Aathirai`,
        name: `The Pleated Stories`,
        siteUrl: `https://thepleatedstories.com`,
        description: `This is my description that will be used in the meta tags and important for search results`,

        // important to set the main text that appears in the hero
        hero: {
            heading: `Biotech graduate on paper, aspiring stylist at heart!`,
            maxWidth: 652,
        },
        social: [
            {
                name: `twitter`,
                url: `https://twitter.com/narative`,
            },
            {
                name: `github`,
                url: `https://github.com/narative`,
            },
        ],
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: "xi2mcrjeimdd",
                accessToken: "CFPAT-kTaqvS3osuFZ2g--9AJ_Hnp2gd0YWvwof64Su8YBrtQ",
            },
        },
        {
            resolve: "@narative/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                rootPath: "/",
                basePath: "/",
                authorsPage: true,
                mailchimp: false,
                sources: {
                    local: true,
                    contentful: false,
                },
            },
        }
    ],
};
