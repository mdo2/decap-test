import { defineDocumentType } from 'contentlayer2/source-files';
import { BasicMeta, Opengraph } from './shared/meta';

export const SiteMeta = defineDocumentType(() => ({
  name: 'SiteMeta',
  filePathPattern: `site-meta.json`,
  contentType: 'data',
  fields: {
    'basicMeta': {
      type: 'nested',
      of: BasicMeta,
      required: true,
    },
    opengraph: {
      type: 'nested',
      of: Opengraph,
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))
