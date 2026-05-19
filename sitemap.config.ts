export default {
  hostname: process.env.NUXT_PUBLIC_BASE_URL,
  gzip: true,
  routes: [
    '/',
    '/about/about-us',
    '/about/blog',
    '/about/privacy-policy',
    '/about/terms-conditions',
    '/about/refund-cancellation-policy',
    '/adventures/dirtBikeRental',
    '/adventures/duneBuggyTours',
    '/adventures/quadBikingTours',
    '/activities/paintball',
    '/activities/karting',
    '/activities/motoMiniGp',
    '/activities/camel-ride',
    '/events/groupsCorporate',
    '/events/birthday',
    '/gallery',
    '/faqs',
    '/contact'
  ],
  defaults: {
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  }
}
