<template>
  <div>
    <AppHeader
      backgroundImage="/images/about-us.webp"
      :title="t('aboutUs.title')"
      :description="t('aboutUs.description')"
    />
    <ExceptionalServices />
    <FounderMessage />
    <CoFounderMesage />
    <ClientSays />
    <GetInTouch />
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
    ? `${SITE_URL}/${locale}/about/about-us`
    : `${SITE_URL}/about/about-us`;
useHead(
  computed(() => ({
    title: t("aboutUs.title"),
    meta: [
      { name: "description", content: t("aboutUs.description") },
      { name: "keywords", content: "about dune rush, desert adventure company, team mission vision, off-road tours Dubai, adventure tourism UAE, desert safari company" },
      { name: "author", content: "Dune Rush Adventure Tours" },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      
      // Open Graph tags
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: t("aboutUs.title") },
      { property: "og:description", content: t("aboutUs.description") },
      { property: "og:image", content: `${SITE_URL}/images/about-us.webp` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Dune Rush Adventure Tours" },
      { property: "og:locale", content: locale === "en" ? "en_US" : `${locale}_${String(locale).toUpperCase()}` },
      
      // Twitter Card tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t("aboutUs.title") },
      { name: "twitter:description", content: t("aboutUs.description") },
      { name: "twitter:image", content: `${SITE_URL}/images/about-us.webp` },
      { name: "twitter:image:alt", content: "Dune Rush Adventure Tours - About Us - Desert adventure company team" },
      
      // Additional SEO meta tags
      { name: "theme-color", content: "#CE1D1F" },
      { name: "msapplication-TileColor", content: "#CE1D1F" },
    ],
    link: [
      { rel: 'preload', as: 'image', href: '/images/about-us.webp', fetchpriority: "high" },
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${SITE_URL}/about/about-us`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/about/about-us`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/about/about-us`,
      },
      {
        rel: "alternate",
        hreflang: "gr",
        href: `${SITE_URL}/gr/about/about-us`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/about/about-us`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/about/about-us`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/about/about-us`,
      },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": t("aboutUs.title"),
          "description": t("aboutUs.description"),
          "url": canonicalUrl,
          "image": `${SITE_URL}/images/about-us.webp`,
          "mainEntity": {
            "@type": "Organization",
            "name": "Dune Rush Adventure Tours",
            "description": t("aboutUs.description"),
            "url": SITE_URL,
            "logo": `${SITE_URL}/images/logo.png`,
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AE",
              "addressRegion": "Dubai",
              "streetAddress": "Dubai-Hatta Road, Al Badayer, Industrial 1, Sharjah"
            },
            "telephone": "+971567075765",
            "email": "info@dunerush.com",
            "founder": {
              "@type": "Person",
              "name": "Saqib Aziz Bajwa",
              "jobTitle": "Founder & CEO"
            },
            "coFounder": {
              "@type": "Person", 
              "name": "Ammar Shahid",
              "jobTitle": "Co-Founder & CTO"
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
