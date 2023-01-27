/* eslint-disable no-console */
import assert from 'node:assert'
import * as ptTypes from '../dist/index.js'
import esmWrapper from '../dist/index.cjs.js'

assert.strictEqual(Object.keys(ptTypes).length, 0)
console.log('✅ ESM bundle should have no non-type exports')

assert.strictEqual(Object.keys(esmWrapper).length, 0)
console.log('✅ ESM wrapper should have no non-type exports')
