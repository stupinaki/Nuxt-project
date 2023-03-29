// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // target: 'static',
    pages: true,
    app: {
        head: {
            title: "Nuxt-project",
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
                },
                {
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/tooltipster/2.2.3/css/reset.css",
                }
            ]
        }
    }
})
