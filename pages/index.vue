<template>
  <main role="main">
    <AppHeroSection />
    <OutdoorExcursions />
    <DirtBikeRental />
    <BuggyTours />
    <QuadBiking />
    <ClientSays />
    <FounderMessage />
    <CoFounderMesage />
    <WhyChooseUs />
    <BlogNews />
    <GetInTouch />
  </main>
</template>
<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();
const locale = route.params?.locale || "en";
const config = useRuntimeConfig();
const SITE_URL = config.public.SITE_URL;
const canonicalUrl =
  locale !== "en" ? `${SITE_URL}` : `${SITE_URL}`;
useHead(
  computed(() => ({
    title: t("homePage.title"),
    meta: [
      { name: "description", content: t("homePage.description") },
      { name: "keywords", content: "desert adventure tours, ATV tours, dune buggy tours, dirt bike rental, quad biking, outdoor excursions, Dubai desert, adventure activities, desert safari" },
      { name: "author", content: "Dune Rush Adventure Tours" },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      
      // Open Graph tags
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: t("homePage.title") },
      { property: "og:description", content: t("homePage.description") },
      { property: "og:image", content: `${SITE_URL}/images/homepage-banner.webp` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Dune Rush Adventure Tours" },
      { property: "og:locale", content: locale === "en" ? "en_US" : `${locale}_${String(locale).toUpperCase()}` },
      
      // Twitter Card tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t("homePage.title") },
      { name: "twitter:description", content: t("homePage.description") },
      { name: "twitter:image", content: `${SITE_URL}/images/homepage-banner.webp` },
      { name: "twitter:image:alt", content: "Dune Rush Adventure Tours - Desert landscape with ATV and dune buggy vehicles" },
      
      // Additional SEO meta tags
      { name: "theme-color", content: "#CE1D1F" },
      { name: "msapplication-TileColor", content: "#CE1D1F" },
    ],
    link: [
      { rel: 'preload', as: 'image', href: '/images/homepage-banner.webp' },
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}`,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${SITE_URL}`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr`,
      },
      {
        rel: "alternate",
        hreflang: "gr",
        href: `${SITE_URL}/gr`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch`,
      }
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          "name": t("homePage.title"),
          "description": t("homePage.description"),
          "url": canonicalUrl,
          "image": `${SITE_URL}/images/homepage-banner.webp`,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "AE",
            "addressRegion": "Dubai"
          },
          "telephone": "+971567075765",
          "email": "info@dunerush.com",
          "openingHours": "Mo-Su 08:00-18:00",
          "priceRange": "$$",
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "ATV Tours",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification", 
              "name": "Dune Buggy Tours",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Dirt Bike Rental",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Quad Biking",
              "value": true
            }
          ],
          "offers": {
            "@type": "Offer",
            "category": "Adventure Tours",
            "availability": "https://schema.org/InStock"
          },
          "sameAs": [
            "https://www.facebook.com/dunerush",
            "https://www.instagram.com/dunerush",
            "https://wa.me/971567075765"
          ]
        })
      }
    ]
  }))
);
</script>