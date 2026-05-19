import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  routeRules: {
    '/images/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/': { 
      prerender: true,
      headers: { 'cache-control': 'public, max-age=3600' }
    },
    '/about/**': { 
      prerender: true,
      headers: { 'cache-control': 'public, max-age=86400' }
    },
    '/adventures/**': { 
      prerender: true,
      headers: { 'cache-control': 'public, max-age=86400' }
    },
    '/activities/**': { 
      prerender: true,
      headers: { 'cache-control': 'public, max-age=86400' }
    },
    '/events/**': { 
      prerender: true,
      headers: { 'cache-control': 'public, max-age=86400' }
    },
    '/gallery': { 
      prerender: true,
      headers: { 'cache-control': 'public, max-age=86400' }
    },
    '/faqs': { 
      prerender: true,
      headers: { 'cache-control': 'public, max-age=86400' }
    },
    '/contact': { 
      prerender: true,
      headers: { 'cache-control': 'public, max-age=3600' }
    }
  },
  modules: ["@nuxtjs/i18n", "@nuxtjs/sitemap"],
  i18n: {
    locales: [
      { code: "en", name: "English", files: ["en-contact-us.json", "en-about-us.json", "en-privacy-policy.json", "en-blogs.json", "en-faqs-gallery.json", "en-events.json", "en-activities.json", "en-adventures.json", "en-products-details.json", "en-homepage.json", "en-remaining-blogs.json"] },
      { code: "fr", name: "Français", files: ["fr-contact-us.json", "fr-about-us.json", "fr-privacy-policy.json", "fr-blogs.json", "fr-faqs-gallery.json", "fr-events.json", "fr-activities.json", "fr-adventures.json", "fr-products-details.json", "fr-homepage.json", "fr-remaining-blogs.json"] },
      { code: "ar", name: "العربية", files: ["ar-contact-us.json", "ar-about-us.json", "ar-privacy-policy.json", "ar-blogs.json", "ar-faqs-gallery.json", "ar-events.json", "ar-activities.json", "ar-adventures.json", "ar-products-details.json", "ar-homepage.json", "ar-remaining-blogs.json"], dir: "rtl" },
      { code: "gr", name: "German", files: ["gr-contact-us.json", "gr-about-us.json", "gr-privacy-policy.json", "gr-blogs.json", "gr-faqs-gallery.json", "gr-events.json", "gr-activities.json", "gr-adventures.json", "gr-products-details.json", "gr-homepage.json", "gr-remaining-blogs.json"] },
      { code: "ru", name: "Russian", files: ["ru-contact-us.json", "ru-about-us.json", "ru-privacy-policy.json", "ru-blogs.json", "ru-faqs-gallery.json", "ru-events.json", "ru-activities.json", "ru-adventures.json", "ru-products-details.json", "ru-homepage.json", "ru-remaining-blogs.json"] },
      { code: "ch", name: "Chinese", files: ["ch-contact-us.json", "ch-about-us.json", "ch-privacy-policy.json", "ch-blogs.json", "ch-faqs-gallery.json", "ch-events.json", "ch-activities.json", "ch-adventures.json", "ch-products-details.json", "ch-homepage.json", "ch-remaining-blogs.json"] },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    langDir: "locales/",
    vueI18n: "./i18n.config.ts",
  },
  css: ["~/assets/css/main.css", "~/assets/css/global.css", "swiper/css"],
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
    },
  },
  runtimeConfig: {
    SMTP_EMAIL: process.env.SMTP_EMAIL,
    SMTP_APP_PASSWORD: process.env.SMTP_APP_PASSWORD,
    public: {
      SITE_URL: process.env.NUXT_PUBLIC_BASE_URL,
    },
  },
  nitro: {
    prerender: {
      routes: [
        '/about/blog/desert-dune-buggy-tour',
        '/about/blog/desert-adventure-for-beginners',
        '/about/blog/atv-vs-dirt-bike',
        '/about/blog/every-mount-bromo'
      ]
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
});
