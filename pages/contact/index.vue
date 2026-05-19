<template>
  <div>
    <AppHeader
      backgroundImage="/images/contact-us.webp"
      :title="t('appHeader.title')"
      :description="t('appHeader.description')"
    />
    <InquiryForm />
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();
const locale = route.params?.locale || "en";

const config = useRuntimeConfig();
const SITE_URL = config.public.SITE_URL;

const canonicalUrl = locale !== "en" ? `${SITE_URL}/${locale}/contact` : `${SITE_URL}/contact`;
useHead(
  computed(() => ({
    title: t("appHeader.title"),
    meta: [
      { name: "description", content: t("appHeader.description") },
      { name: "keywords", content: "contact dune rush, desert adventure booking, inquiry form, Dubai adventure tours, off-road tours contact, desert safari booking" },
      { name: "author", content: "Dune Rush Adventure Tours" },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      
      // Open Graph tags
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: t("appHeader.title") },
      { property: "og:description", content: t("appHeader.description") },
      { property: "og:image", content: `${SITE_URL}/images/contact-us.webp` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Dune Rush Adventure Tours" },
      { property: "og:locale", content: locale === "en" ? "en_US" : `${locale}_${String(locale).toUpperCase()}` },
      
      // Twitter Card tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t("appHeader.title") },
      { name: "twitter:description", content: t("appHeader.description") },
      { name: "twitter:image", content: `${SITE_URL}/images/contact-us.webp` },
      { name: "twitter:image:alt", content: "Dune Rush Adventure Tours - Contact Us - Desert adventure booking and inquiry" },
      
      // Additional SEO meta tags
      { name: "theme-color", content: "#CE1D1F" },
      { name: "msapplication-TileColor", content: "#CE1D1F" },
    ],
    link: [
      { rel: 'preload', as: 'image', href: '/images/contact-us.webp', fetchpriority: "high" },
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${SITE_URL}/contact`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/contact`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/contact`,
      },
      {
        rel: "alternate",
        hreflang: "gr",
        href: `${SITE_URL}/gr/contact`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/contact`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/contact`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/contact`,
      },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": t("appHeader.title"),
          "description": t("appHeader.description"),
          "url": canonicalUrl,
          "image": `${SITE_URL}/images/contact-us.webp`,
          "mainEntity": {
            "@type": "Organization",
            "name": "Dune Rush Adventure Tours",
            "url": SITE_URL,
            "logo": `${SITE_URL}/images/logo.png`,
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AE",
              "addressRegion": "Dubai",
              "streetAddress": "Dubai-Hatta Road, Al Badayer, Industrial 1, Sharjah, United Arab Emirates"
            },
            "telephone": "+971567075765",
            "email": "info@dunerush.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971567075765",
              "contactType": "customer service",
              "availableLanguage": ["English", "Arabic", "French", "German", "Russian", "Chinese"]
            },
            "sameAs": [
              "https://www.facebook.com/dunerush",
              "https://www.instagram.com/dunerushadventure",
              "https://wa.me/971567075765"
            ]
          }
        })
      }
    ]
  }))
);
</script>
