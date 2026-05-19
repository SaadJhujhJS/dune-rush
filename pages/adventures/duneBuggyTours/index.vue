<template>
  <div>
    <AppHeader
      backgroundImage="/images/buggytours/dune-buggy-tours.webp"
      :title="t('duneBuggyTours.title')"
      :description="t('duneBuggyTours.description')"
    />
    <DuneBuggyMain />
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();
const locale = route.params?.locale || "en";
const config = useRuntimeConfig();
const SITE_URL = config.public.SITE_URL;

const canonicalUrl =
  locale !== "en" ? `${SITE_URL}/${locale}/adventures/duneBuggyTours` : `${SITE_URL}/adventures/duneBuggyTours`;
useHead(
  computed(() => ({
    title: t('duneBuggyTours.title'),
    meta: [
      { name: "description", content: t('duneBuggyTours.description') },
      { name: "keywords", content: "dune buggy tours Dubai, Can-Am buggy rental, Polaris RZR tours, desert buggy adventure, off-road buggy tours UAE, desert safari buggy" },
      { name: "author", content: "Dune Rush Adventure Tours" },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      
      // Open Graph tags
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: t('duneBuggyTours.title') },
      { property: "og:description", content: t('duneBuggyTours.description') },
      { property: "og:image", content: `${SITE_URL}/images/buggytours/dune-buggy-tours.webp` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Dune Rush Adventure Tours" },
      { property: "og:locale", content: locale === "en" ? "en_US" : `${locale}_${String(locale).toUpperCase()}` },
      
      // Twitter Card tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t('duneBuggyTours.title') },
      { name: "twitter:description", content: t('duneBuggyTours.description') },
      { name: "twitter:image", content: `${SITE_URL}/images/buggytours/dune-buggy-tours.webp` },
      { name: "twitter:image:alt", content: "Dune Rush Adventure Tours - Dune Buggy Tours - Desert off-road adventure in Dubai" },
      
      // Additional SEO meta tags
      { name: "theme-color", content: "#CE1D1F" },
      { name: "msapplication-TileColor", content: "#CE1D1F" },
    ],
    link: [
      { rel: 'preload', as: 'image', href: '/images/buggytours/dune-buggy-tours.webp', fetchpriority: "high" },
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${SITE_URL}/adventures/duneBuggyTours`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/adventures/duneBuggyTours`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/adventures/duneBuggyTours`,
      },
      {
        rel: "alternate",
        hreflang: "gr",
        href: `${SITE_URL}/gr/adventures/duneBuggyTours`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/adventures/duneBuggyTours`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/adventures/duneBuggyTours`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/adventures/duneBuggyTours`,
      },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": t('duneBuggyTours.title'),
          "description": t('duneBuggyTours.description'),
          "url": canonicalUrl,
          "image": `${SITE_URL}/images/buggytours/dune-buggy-tours.webp`,
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
          "offers": [
            {
              "@type": "Offer",
              "name": "Can-Am 1000cc (2-Seater)",
              "description": "High-performance 2-seater dune buggy for desert adventures",
              "price": "1200",
              "priceCurrency": "AED",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "1200",
                "priceCurrency": "AED",
                "unitText": "per 30 minutes"
              }
            },
            {
              "@type": "Offer",
              "name": "Can-Am 1000cc (4-Seater)",
              "description": "Spacious 4-seater dune buggy for group adventures",
              "price": "1400",
              "priceCurrency": "AED",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "1400",
                "priceCurrency": "AED",
                "unitText": "per 30 minutes"
              }
            },
            {
              "@type": "Offer",
              "name": "Polaris RZR 800cc (2-Seater)",
              "description": "Compact and agile 2-seater dune buggy",
              "price": "500",
              "priceCurrency": "AED",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "500",
                "priceCurrency": "AED",
                "unitText": "per 30 minutes"
              }
            }
          ],
          "areaServed": {
            "@type": "Place",
            "name": "Dubai Desert"
          },
          "serviceType": "Adventure Tourism",
          "category": "Dune Buggy Tours"
        })
      }
    ]
  }))
);
</script>
