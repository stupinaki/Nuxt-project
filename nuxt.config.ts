// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: "Nutx-project",
            meta: [
                {
                    name: "description",
                    content: "Nuxt 3 js project"
                }
            ],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
                }
            ]
        }
    }
})
