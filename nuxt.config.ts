import { defaultLocale } from './lang/index.js'

const modules = ['@unocss/nuxt']

if (process.env.NODE_ENV === `development`) {
  modules.push('@nuxt/devtools')
}

if (process.env.NUXT_PUBLIC_GTAG_ID) {
  modules.push('nuxt-gtag')
}

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  // components: {
  //   dirs: [
  //     '~/components',
  //   ],
  // },
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
