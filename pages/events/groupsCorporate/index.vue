<template>
  <div>
    <AppHeader
      backgroundImage="/images/groups-corporate-image.webp"
      :title="$t('groupsCorporate.title')"
      :description="$t('groupsCorporate.description')"
    />
    <ContactForm />
    <EventsMedia />
    <AdventureTourExperience />
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
    ? `${SITE_URL}/${locale}/events/groupsCorporate`
    : `${SITE_URL}/events/groupsCorporate`;
useHead(
  computed(() => ({
    title: t("groupsCorporate.title"),
    meta: [
      { name: "description", content: t("groupsCorporate.description") },
      { name: "keywords", content: "corporate events Dubai, team building activities, group adventure tours, corporate desert safari, company events UAE, team building desert" },
      { name: "author", content: "Dune Rush Adventure Tours" },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      
      // Open Graph tags
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: t("groupsCorporate.title") },
      { property: "og:description", content: t("groupsCorporate.description") },
      { property: "og:image", content: `${SITE_URL}/images/groups-corporate-image.webp` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Dune Rush Adventure Tours" },
      { property: "og:locale", content: locale === "en" ? "en_US" : `${locale}_${String(locale).toUpperCase()}` },
      
      // Twitter Card tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t("groupsCorporate.title") },
      { name: "twitter:description", content: t("groupsCorporate.description") },
      { name: "twitter:image", content: `${SITE_URL}/images/groups-corporate-image.webp` },
      { name: "twitter:image:alt", content: "Dune Rush Adventure Tours - Groups & Corporate Events - Team building in Dubai desert" },
      
      // Additional SEO meta tags
      { name: "theme-color", content: "#CE1D1F" },
      { name: "msapplication-TileColor", content: "#CE1D1F" },
    ],
    link: [
      { rel: 'preload', as: 'image', href: '/images/groups-corporate-image.webp', fetchpriority: "high" },
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${SITE_URL}/events/groupsCorporate`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/events/groupsCorporate`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/events/groupsCorporate`,
      },
      {
        rel: "alternate",
        hreflang: "gr",
        href: `${SITE_URL}/gr/events/groupsCorporate`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/events/groupsCorporate`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/events/groupsCorporate`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/events/groupsCorporate`,
      },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": t("groupsCorporate.title"),
          "description": t("groupsCorporate.description"),
          "url": canonicalUrl,
          "image": `${SITE_URL}/images/groups-corporate-image.webp`,
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
            "name": "Corporate Group Events",
            "description": "Team building and corporate events in desert setting",
            "category": "Corporate Events",
            "availability": "https://schema.org/InStock"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Dubai Desert"
          },
          "serviceType": "Corporate Events",
          "category": "Team Building Activities"
        })
      }
    ]
  }))
);
</script>
