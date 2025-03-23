import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

import { SiteMeta } from '@/contentlayer/SiteMeta'

const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    date: {
      type: 'date',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Page, SiteMeta],
  fieldOptions: {
    typeFieldName: '_type',
  },
  // disableImportAliasWarning: true,
})
