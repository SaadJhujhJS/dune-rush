<template>
  <div>
    <AppHeader
      backgroundImage="/images/moto-mini-gp-banner.webp"
      :title="t('motoMiniGp.title')"
      :description="t('motoMiniGp.description1')"
    />
    <MotoMiniGpMain />
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
    ? `${SITE_URL}/${locale}/activities/motoMiniGp`
    : `${SITE_URL}/activities/motoMiniGp`;
useHead(
  computed(() => ({
    title: t("motoMiniGp.title"),
    meta: [
      { name: "description", content: t("motoMiniGp.description1") },
      { name: "keywords", content: "moto mini GP Dubai, mini motorcycle racing, desert motorcycle track, racing activities UAE, mini bike racing, family racing adventure" },
      { name: "author", content: "Dune Rush Adventure Tours" },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      
      // Open Graph tags
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: t("motoMiniGp.title") },
      { property: "og:description", content: t("motoMiniGp.description1") },
      { property: "og:image", content: `${SITE_URL}/images/moto-mini-gp-banner.webp` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Dune Rush Adventure Tours" },
      { property: "og:locale", content: locale === "en" ? "en_US" : `${locale}_${String(locale).toUpperCase()}` },
      
      // Twitter Card tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t("motoMiniGp.title") },
      { name: "twitter:description", content: t("motoMiniGp.description1") },
      { name: "twitter:image", content: `${SITE_URL}/images/moto-mini-gp-banner.webp` },
      { name: "twitter:image:alt", content: "Dune Rush Adventure Tours - Moto Mini GP - Mini motorcycle racing in Dubai desert" },
      
      // Additional SEO meta tags
      { name: "theme-color", content: "#CE1D1F" },
      { name: "msapplication-TileColor", content: "#CE1D1F" },
    ],
    link: [
      { rel: 'preload', as: 'image', href: '/images/moto-mini-gp-banner.webp', fetchpriority: "high" },
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${SITE_URL}/activities/motoMiniGp`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/activities/motoMiniGp`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/activities/motoMiniGp`,
      },
      {
        rel: "alternate",
        hreflang: "gr",
        href: `${SITE_URL}/gr/activities/motoMiniGp`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/activities/motoMiniGp`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/activities/motoMiniGp`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/activities/motoMiniGp`,
      },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": t("motoMiniGp.title"),
          "description": t("motoMiniGp.description1"),
          "url": canonicalUrl,
          "image": `${SITE_URL}/images/moto-mini-gp-banner.webp`,
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
            "name": "Moto Mini GP Activity",
            "description": "Mini motorcycle racing in desert setting",
            "category": "Racing Activity",
            "availability": "https://schema.org/InStock"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Dubai Desert"
          },
          "serviceType": "Racing Activity",
          "category": "Mini Motorcycle Racing"
        })
      }
    ]
  }))
);
</script>
