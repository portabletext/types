import {defineConfig} from '@sanity/tsdown-config'
import type {UserConfig} from 'tsdown'

const config: UserConfig = defineConfig({
  tsconfig: './tsconfig.dist.json',
})

export default config
