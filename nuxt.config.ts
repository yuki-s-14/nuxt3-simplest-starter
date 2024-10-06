// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxtjs/i18n',
  ],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'ja',
    locales: [
      { code: 'ja', language: 'ja-JP', name: 'Japanese', file: 'ja.ts' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.ts' },
      { code: 'fr', language: 'fr-FR', name: 'French', file: 'fr.ts' },
    ],
    lazy: true,
    langDir: 'locales',
  },
  compatibilityDate: '2024-10-06',
})
