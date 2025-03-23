import { defineNestedType } from "contentlayer2/source-files";

const CustomMeta = defineNestedType(() => ({
  name: 'CustomMeta',
  fields: {
    name: { type: 'string', required: true },
    content: { type: 'string', required: true },
  },
}))

export const BasicMeta = defineNestedType(() => ({
  name: 'BasicMeta',
  description: 'See documentation [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name)',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    keywords: {
      type: 'list',
      of: { type: 'string' },
    },
    referrer: {
      type: 'enum',
      options: ['no-referrer', 'origin', 'no-referrer-when-downgrade', 'origin-when-cross-origin', 'same-origin', 'strict-origin', 'strict-origin-when-cross-origin'],
    },
    extraMeta: {
      type: 'list',
      of: CustomMeta,
    },
  },
}))

export const Opengraph = defineNestedType(() => ({
  name: 'Opengraph',
  description: 'See documentation [here](https://ogp.me/)',
  fields: {
    title: { type: 'string' },
    description: { type: 'string' },
    type: {
      type: 'enum',
      options: ['website', 'article', 'profile', 'book'],
      required: true,
    },
    url: { type: 'string' },
    siteName: { type: 'string' },
    image: { type: 'string' },
    audio: { type: 'string' },
    video: { type: 'string' },
  }
}))
