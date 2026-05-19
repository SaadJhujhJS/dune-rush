<template>
  <div>
    <AppHeader
      backgroundImage="/images/faq-banner.webp"
      :title="t('faqs.title')"
      :description="t('faqs.description')"
    />
    <Faqs />
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();
const locale = route.params?.locale || "en";
const config = useRuntimeConfig();
const SITE_URL = config.public.SITE_URL;

const canonicalUrl =
  locale !== "en" ? `${SITE_URL}/${locale}/faqs` : `${SITE_URL}/faqs`;
useHead(
  computed(() => ({
    title: t("faqs.title"),
    meta: [
      { name: "description", content: t("faqs.description") },
      { name: "keywords", content: "desert adventure FAQ, Dubai adventure questions, ATV tour information, dune buggy safety, desert safari FAQ, adventure tour help" },
      { name: "author", content: "Dune Rush Adventure Tours" },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      
      // Open Graph tags
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: t("faqs.title") },
      { property: "og:description", content: t("faqs.description") },
      { property: "og:image", content: `${SITE_URL}/images/faq-banner.webp` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Dune Rush Adventure Tours" },
      { property: "og:locale", content: locale === "en" ? "en_US" : `${locale}_${String(locale).toUpperCase()}` },
      
      // Twitter Card tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t("faqs.title") },
      { name: "twitter:description", content: t("faqs.description") },
      { name: "twitter:image", content: `${SITE_URL}/images/faq-banner.webp` },
      { name: "twitter:image:alt", content: "Dune Rush Adventure Tours - FAQs - Frequently asked questions about desert adventures" },
      
      // Additional SEO meta tags
      { name: "theme-color", content: "#CE1D1F" },
      { name: "msapplication-TileColor", content: "#CE1D1F" },
    ],
    link: [
      { rel: 'preload', as: 'image', href: '/images/faq-banner.webp', fetchpriority: "high" },
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${SITE_URL}/faqs`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/faqs`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/faqs`,
      },
      {
        rel: "alternate",
        hreflang: "gr",
        href: `${SITE_URL}/gr/faqs`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/faqs`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/faqs`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/faqs`,
      },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "name": t("faqs.title"),
          "description": t("faqs.description"),
          "url": canonicalUrl,
          "image": `${SITE_URL}/images/faq-banner.webp`,
          "publisher": {
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
          "mainEntity": {
            "@type": "ItemList",
            "name": "Adventure Tour FAQs",
            "description": "Frequently asked questions about desert adventure tours and activities"
          }
        })
      }
    ]
  }))
);
</script>
