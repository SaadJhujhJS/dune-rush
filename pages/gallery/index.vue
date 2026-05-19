<template>
  <div>
    <AppHeader
      backgroundImage="/images/media-gallery.webp"
      :title="t('mediaGallery.title')"
      :description="t('mediaGallery.description')"
    />
    <ExploreMedia />
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();
const locale = route.params?.locale || "en";
const config = useRuntimeConfig();
const SITE_URL = config.public.SITE_URL;

const canonicalUrl =
  locale !== "en" ? `${SITE_URL}/${locale}/gallery` : `${SITE_URL}/gallery`;
useHead(
  computed(() => ({
    title: t("mediaGallery.title"),
    meta: [
      { name: "description", content: t("mediaGallery.description") },
      { name: "keywords", content: "desert adventure photos, Dubai adventure gallery, ATV tour images, dune buggy photos, desert safari pictures, adventure tour gallery UAE" },
      { name: "author", content: "Dune Rush Adventure Tours" },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      
      // Open Graph tags
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: t("mediaGallery.title") },
      { property: "og:description", content: t("mediaGallery.description") },
      { property: "og:image", content: `${SITE_URL}/images/media-gallery.webp` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Dune Rush Adventure Tours" },
      { property: "og:locale", content: locale === "en" ? "en_US" : `${locale}_${String(locale).toUpperCase()}` },
      
      // Twitter Card tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t("mediaGallery.title") },
      { name: "twitter:description", content: t("mediaGallery.description") },
      { name: "twitter:image", content: `${SITE_URL}/images/media-gallery.webp` },
      { name: "twitter:image:alt", content: "Dune Rush Adventure Tours - Gallery - Desert adventure photos and videos" },
      
      // Additional SEO meta tags
      { name: "theme-color", content: "#CE1D1F" },
      { name: "msapplication-TileColor", content: "#CE1D1F" },
    ],
    link: [
      { rel: 'preload', as: 'image', href: '/images/media-gallery.webp', fetchpriority: "high" },
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${SITE_URL}/gallery`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/gallery`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/gallery`,
      },
      {
        rel: "alternate",
        hreflang: "gr",
        href: `${SITE_URL}/gr/gallery`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/gallery`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/gallery`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/gallery`,
      },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": t("mediaGallery.title"),
          "description": t("mediaGallery.description"),
          "url": canonicalUrl,
          "image": `${SITE_URL}/images/media-gallery.webp`,
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
            "name": "Adventure Tour Gallery",
            "description": "Collection of photos and videos from desert adventure tours"
          }
        })
      }
    ]
  }))
);
</script>
