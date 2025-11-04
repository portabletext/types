import assert from 'node:assert'
import {createRequire} from 'node:module'
import * as ptTypes from '@portabletext/types'

const require = createRequire(import.meta.url)

const ptTypesCjs = require('@portabletext/types')

assert.strictEqual(Object.keys(ptTypes).length, 0)
console.log('✅ ESM bundle should have no non-type exports')

assert.strictEqual(Object.keys(ptTypesCjs).length, 0)
console.log('✅ ESM wrapper should have no non-type exports')
