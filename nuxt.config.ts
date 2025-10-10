// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
        '@nuxt/eslint',
        '@nuxtjs/i18n',
        '@nuxt/image',
        '@nuxt/ui',
    ],
    css: ['~/assets/css/main.css'],
    i18n: {
        locales: [
            { code: 'en', language: 'en-US' },
            { code: 'de', language: 'de-DE' }
        ],
        defaultLocale: 'de',
        vueI18n: './i18n/i18n.config.ts',
    }
})