import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { defaultLocale } from './lang/index.js'
const currentDir = dirname(fileURLToPath(import.meta.url))

const modules = ['@unocss/nuxt']

if (process.env.NODE_ENV === `development`) {
  modules.push('@nuxt/devtools')
}

if (process.env.NUXT_PUBLIC_GTAG_ID) {
  modules.push('nuxt-gtag')
}

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  components: {
    dirs: [
      join(currentDir, 'components'),
    ],
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  content: {
    locales: ['en', 'zh',],
    defaultLocale,
  },
  experimental: {
    reactivityTransform: true,
    viewTransition: true,
    renderJsonPayloads: true
  },
  modules
})
