/* eslint-disable no-console */
import assert from 'node:assert'
import * as ptTypes from '../dist/index.js'

assert.strictEqual(Object.keys(ptTypes).length, 0)
console.log('✅ should have no non-type exports')
