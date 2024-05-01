import { defineNuxtConfig, type DefineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt'
    ],
    plugins: [
        { src: '~/plugins/i18n' }
    ],
    srcDir: './src',
    css: [
        './assets/main.css'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: true,
        },
    }
}) as DefineNuxtConfig