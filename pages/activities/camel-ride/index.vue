<template>
  <div>
    <AppHeader
      backgroundImage="/images/camel-ride-banner.webp"
      :title="t('camelRide.title')"
      :description="t('camelRide.description1')"
    />
    <DesertActivitesMain />
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();
const locale = route.params?.locale || "en";
const config = useRuntimeConfig();
const SITE_URL = config.public.SITE_URL;

const canonicalUrl =
  locale !== "en"
    ? `${SITE_URL}/${locale}/activities/camel-ride`
    : `${SITE_URL}/activities/camel-ride`;
useHead(
  computed(() => ({
    title: t("camelRide.title"),
    meta: [
      { name: "description", content: t("camelRide.description1") },
      { name: "keywords", content: "camel ride Dubai, desert camel tour, traditional desert experience, cultural activities UAE, desert safari camel, authentic desert adventure" },
      { name: "author", content: "Dune Rush Adventure Tours" },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      
      // Open Graph tags
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: t("camelRide.title") },
      { property: "og:description", content: t("camelRide.description1") },
      { property: "og:image", content: `${SITE_URL}/images/camel-ride-banner.webp` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Dune Rush Adventure Tours" },
      { property: "og:locale", content: locale === "en" ? "en_US" : `${locale}_${String(locale).toUpperCase()}` },
      
      // Twitter Card tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t("camelRide.title") },
      { name: "twitter:description", content: t("camelRide.description1") },
      { name: "twitter:image", content: `${SITE_URL}/images/camel-ride-banner.webp` },
      { name: "twitter:image:alt", content: "Dune Rush Adventure Tours - Camel Ride - Traditional desert experience in Dubai" },
      
      // Additional SEO meta tags
      { name: "theme-color", content: "#CE1D1F" },
      { name: "msapplication-TileColor", content: "#CE1D1F" },
    ],
    link: [
      { rel: 'preload', as: 'image', href: '/images/camel-ride-banner.webp', fetchpriority: "high" },
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${SITE_URL}/activities/camel-ride`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/activities/camel-ride`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/activities/camel-ride`,
      },
      {
        rel: "alternate",
        hreflang: "gr",
        href: `${SITE_URL}/gr/activities/camel-ride`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/activities/camel-ride`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/activities/camel-ride`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/activities/camel-ride`,
      },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": t("camelRide.title"),
          "description": t("camelRide.description1"),
          "url": canonicalUrl,
          "image": `${SITE_URL}/images/camel-ride-banner.webp`,
          "provider": {
            "@type": "Organization",
            "name": "Dune Rush Adventure Tours",
            "url": SITE_URL,
            "logo": `${SITE_URL}/images/logo.png`,
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AE",
              "addressRegion": "Dubai",
              "streetAddress": "Dubai-Hatta Road, Al Badayer, Industrial 1, Sharjah"
            },
            "telephone": "+971567075765",
            "email": "info@dunerush.com"
          },
          "offers": {
            "@type": "Offer",
            "name": "Camel Ride Activity",
            "description": "Traditional camel ride in desert setting",
            "category": "Cultural Activity",
            "availability": "https://schema.org/InStock"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Dubai Desert"
          },
          "serviceType": "Cultural Activity",
          "category": "Camel Riding"
        })
      }
    ]
  }))
);
</script>
