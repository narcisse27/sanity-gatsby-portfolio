export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5200b08b84695c3c037aec',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-urr7xws1',
                  apiId: 'f4f4d731-c411-4285-8e7d-7a2d35465086'
                },
                {
                  buildHookId: '5e5200b0985d27b8eb71b2d7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-inpfdhoj',
                  apiId: '2795fb7c-abd9-4bce-8196-c42c8cdac173'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/narcisse27/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-inpfdhoj.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
