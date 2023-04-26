// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    css: ['assets/css/bootstrap.min.css',
        '@fortawesome/fontawesome-svg-core/styles.css',
        'assets/css/pink-theme.css'],
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/supabase'
    ]
})
