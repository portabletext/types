# @portabletext/types

[![npm version](https://img.shields.io/npm/v/@portabletext/types.svg?style=flat-square)](https://www.npmjs.com/package/@portabletext/types)[![Build Status](https://img.shields.io/github/workflow/status/portabletext/types/test/main.svg?style=flat-square)](https://github.com/portabletext/types/actions?query=workflow%3Atest)

TypeScript types for Portable Text

## Installation

```
npm install --save-dev @portabletext/types
```

## Documentation

See [https://portabletext.github.io/types/](https://portabletext.github.io/types/)

## Usage

```ts
import type {PortableTextBlock, PortableTextSpan} from '@portabletext/types'

const headingSpan: PortableTextSpan = {
  _type: 'span',
  _key: '5p4n',
  text: 'A simple Portable Text heading block',
  marks: [],
}

const myBlocks: PortableTextBlock[] = [
  {
    _type: 'block',
    _key: 'abc123',
    style: 'h1',
    children: [headingSpan],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: 'xyz987',
    style: 'normal',
    children: [
      {_type: 'span', _key: 'c7', text: 'Check out the ', marks: []}
      {_type: 'span', _key: 'x2', text: 'TypeScript definitions', marks: ['m4hl1nk']},
      {_type: 'span', _key: 'u5', text: ' if you are using TS!', marks: []}
    ],
    markDefs: [
      {
        _key: 'm4hl1nk',
        _type: 'link',
        href: 'https://github.com/portabletext/types'
      }
    ],
  },
]
```

## License

MIT © [Sanity.io](https://www.sanity.io/)
