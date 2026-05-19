<template>
  <div>
    <AppHeader
      backgroundImage="/images/paintball-banner.webp"
      :title="t('paintBall.title')"
      :description="t('paintBall.description1')"
    />
    <PaintBallMain />
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
    ? `${SITE_URL}/${locale}/activities/paintball`
    : `${SITE_URL}/activities/paintball`;
useHead(
  computed(() => ({
    title: t("paintBall.title"),
    meta: [
      { name: "description", content: t("paintBall.description1") },
      { name: "keywords", content: "paintball Dubai, desert paintball, team building activities, corporate events, paintball games UAE, outdoor adventure activities" },
      { name: "author", content: "Dune Rush Adventure Tours" },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      
      // Open Graph tags
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: t("paintBall.title") },
      { property: "og:description", content: t("paintBall.description1") },
      { property: "og:image", content: `${SITE_URL}/images/paintball-banner.webp` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Dune Rush Adventure Tours" },
      { property: "og:locale", content: locale === "en" ? "en_US" : `${locale}_${String(locale).toUpperCase()}` },
      
      // Twitter Card tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t("paintBall.title") },
      { name: "twitter:description", content: t("paintBall.description1") },
      { name: "twitter:image", content: `${SITE_URL}/images/paintball-banner.webp` },
      { name: "twitter:image:alt", content: "Dune Rush Adventure Tours - Paintball - Desert team building and adventure activity" },
      
      // Additional SEO meta tags
      { name: "theme-color", content: "#CE1D1F" },
      { name: "msapplication-TileColor", content: "#CE1D1F" },
    ],
    link: [
      { rel: 'preload', as: 'image', href: '/images/paintball-banner.webp', fetchpriority: "high" },
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${SITE_URL}/activities/paintball`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/activities/paintball`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/activities/paintball`,
      },
      {
        rel: "alternate",
        hreflang: "gr",
        href: `${SITE_URL}/gr/activities/paintball`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/activities/paintball`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/activities/paintball`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/activities/paintball`,
      },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": t("paintBall.title"),
          "description": t("paintBall.description1"),
          "url": canonicalUrl,
          "image": `${SITE_URL}/images/paintball-banner.webp`,
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
            "name": "Paintball Activity",
            "description": "Team building paintball games in desert setting",
            "category": "Adventure Activity",
            "availability": "https://schema.org/InStock"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Dubai Desert"
          },
          "serviceType": "Team Building Activity",
          "category": "Paintball Games"
        })
      }
    ]
  }))
);
</script>
