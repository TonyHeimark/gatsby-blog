import { format } from 'date-fns'

export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'tech',
      type: 'array',
      title: 'Technologies',
      of: [
        {
          type: 'reference',
          to: {
            type: 'technology'
          }
        }
      ]
    },
    {
      name: 'projectUrl',
      type: 'url',
      title: 'Project URL'
    },
    {
      name: 'githubUrl',
      type: 'url',
      title: 'Github URL'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],

  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({ title = 'No title', slug = {}, media }) {
      return {
        title,
        media
      }
    }
  }
}
