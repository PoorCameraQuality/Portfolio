import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    excerpt: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    image: { type: 'string', required: false },
    author: { type: 'string', required: false, default: 'Braxcraft' },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath.replace('blog/', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.replace('blog/', ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Blog],
  disableImportAliasWarning: true,
})
