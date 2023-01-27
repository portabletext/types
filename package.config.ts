import {defineConfig} from '@sanity/pkg-utils'

export default defineConfig({
  extract: {
    rules: {
      'ae-missing-release-tag': 'warn',
      'tsdoc-undefined-tag': 'warn',
    },
  },

  legacyExports: true,
})
