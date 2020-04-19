export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    { name: 'structure-menu' },
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
                  buildHookId: '5d1e42707b9323e8d64244bc',
                  title: 'Sanity Studio',
                  name: 'portfolio-studio',
                  apiId: '6b69b1fe-a5e4-4a8a-ad29-ce7a50a30393'
                },
                {
                  buildHookId: '5d1e42708ac7328bece49c6d',
                  title: 'Blog Website',
                  name: 'portfolio-web',
                  apiId: 'bdf2292f-bc5c-4727-94fe-e043ac2411d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TonyHeimark/personal-portfolio',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://gatsby-blog-web.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
