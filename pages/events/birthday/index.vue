<template>
  <div>
    <AppHeader
      backgroundImage="/images/birthday-image.webp"
      :title="$t('birthday.title')"
      :description="$t('birthday.description')"
    />
    <BirthdayForm />
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
    ? `${SITE_URL}/${locale}/events/birthday`
    : `${SITE_URL}/events/birthday`;
useHead(
  computed(() => ({
    title: t("birthday.title"),
    meta: [
      { name: "description", content: t("birthday.description") },
      { name: "keywords", content: "birthday party Dubai, desert birthday celebration, kids birthday party, unique birthday events UAE, adventure birthday party, desert birthday experience" },
      { name: "author", content: "Dune Rush Adventure Tours" },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      
      // Open Graph tags
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: t("birthday.title") },
      { property: "og:description", content: t("birthday.description") },
      { property: "og:image", content: `${SITE_URL}/images/birthday-image.webp` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Dune Rush Adventure Tours" },
      { property: "og:locale", content: locale === "en" ? "en_US" : `${locale}_${String(locale).toUpperCase()}` },
      
      // Twitter Card tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t("birthday.title") },
      { name: "twitter:description", content: t("birthday.description") },
      { name: "twitter:image", content: `${SITE_URL}/images/birthday-image.webp` },
      { name: "twitter:image:alt", content: "Dune Rush Adventure Tours - Birthday Events - Unique desert birthday celebration in Dubai" },
      
      // Additional SEO meta tags
      { name: "theme-color", content: "#CE1D1F" },
      { name: "msapplication-TileColor", content: "#CE1D1F" },
    ],
    link: [
      { rel: 'preload', as: 'image', href: '/images/birthday-image.webp', fetchpriority: "high" },
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${SITE_URL}/events/birthday`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/events/birthday`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/events/birthday`,
      },
      {
        rel: "alternate",
        hreflang: "gr",
        href: `${SITE_URL}/gr/events/birthday`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/events/birthday`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/events/birthday`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/events/birthday`,
      },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": t("birthday.title"),
          "description": t("birthday.description"),
          "url": canonicalUrl,
          "image": `${SITE_URL}/images/birthday-image.webp`,
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
            "name": "Birthday Party Events",
            "description": "Unique birthday celebration in desert setting",
            "category": "Birthday Events",
            "availability": "https://schema.org/InStock"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Dubai Desert"
          },
          "serviceType": "Birthday Events",
          "category": "Party Planning"
        })
      }
    ]
  }))
);
</script>
