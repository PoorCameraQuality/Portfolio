declare module 'contentlayer/generated' {
  export interface Blog {
    _id: string
    _raw: {
      sourceFilePath: string
      sourceFileName: string
      sourceFileDir: string
      contentType: string
      flattenedPath: string
    }
    title: string
    date: string
    excerpt: string
    tags: string[]
    image?: string
    author: string
    body: {
      html: string
    }
    url: string
    slug: string
  }

  export const allBlogs: Blog[]
}
