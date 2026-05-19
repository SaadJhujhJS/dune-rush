<template>
  <div>
    <AppHeader
      backgroundImage="/images/bikerentalimages/dirt-bike-rental.webp"
      :title="t('dirtBikeRental.title')"
      :description="t('dirtBikeRental.description')"
    />
    <DirtBikeMain />
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();
const locale = route.params?.locale || "en";
const config = useRuntimeConfig();
const SITE_URL = config.public.SITE_URL;

const canonicalUrl =
  locale !== "en" ? `${SITE_URL}/${locale}/adventures/dirtBikeRental` : `${SITE_URL}/adventures/dirtBikeRental`;
useHead(
  computed(() => ({
    title: t('dirtBikeRental.title'),
    meta: [
      { name: "description", content: t('dirtBikeRental.description') },
      { name: "keywords", content: "dirt bike rental Dubai, off-road motorcycle tours, Honda CRF 450cc, KTM dirt bikes, desert motorcycle adventure, guided dirt bike tours UAE" },
      { name: "author", content: "Dune Rush Adventure Tours" },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      
      // Open Graph tags
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: t('dirtBikeRental.title') },
      { property: "og:description", content: t('dirtBikeRental.description') },
      { property: "og:image", content: `${SITE_URL}/images/bikerentalimages/dirt-bike-rental.webp` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Dune Rush Adventure Tours" },
      { property: "og:locale", content: locale === "en" ? "en_US" : `${locale}_${String(locale).toUpperCase()}` },
      
      // Twitter Card tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t('dirtBikeRental.title') },
      { name: "twitter:description", content: t('dirtBikeRental.description') },
      { name: "twitter:image", content: `${SITE_URL}/images/bikerentalimages/dirt-bike-rental.webp` },
      { name: "twitter:image:alt", content: "Dune Rush Adventure Tours - Dirt Bike Rental - Off-road motorcycle adventure in Dubai desert" },
      
      // Additional SEO meta tags
      { name: "theme-color", content: "#CE1D1F" },
      { name: "msapplication-TileColor", content: "#CE1D1F" },
    ],
    link: [
      { rel: 'preload', as: 'image', href: '/images/bikerentalimages/dirt-bike-rental.webp', fetchpriority: "high" },
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${SITE_URL}/adventures/dirtBikeRental`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/adventures/dirtBikeRental`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/adventures/dirtBikeRental`,
      },
      {
        rel: "alternate",
        hreflang: "gr",
        href: `${SITE_URL}/gr/adventures/dirtBikeRental`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/adventures/dirtBikeRental`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/adventures/dirtBikeRental`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/adventures/dirtBikeRental`,
      },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": t('dirtBikeRental.title'),
          "description": t('dirtBikeRental.description'),
          "url": canonicalUrl,
          "image": `${SITE_URL}/images/bikerentalimages/dirt-bike-rental.webp`,
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
              "name": "Honda CRF 450cc Dirt Bike",
              "description": "High-performance dirt bike for desert adventures",
              "price": "350",
              "priceCurrency": "AED",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "350",
                "priceCurrency": "AED",
                "unitText": "per 30 minutes"
              }
            },
            {
              "@type": "Offer", 
              "name": "KTM 450cc Dirt Bike",
              "description": "Professional-grade dirt bike for experienced riders",
              "price": "350",
              "priceCurrency": "AED",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "350",
                "priceCurrency": "AED",
                "unitText": "per 30 minutes"
              }
            },
            {
              "@type": "Offer",
              "name": "Kids KTM 50cc Dirt Bike", 
              "description": "Safe and fun dirt bike for children",
              "price": "250",
              "priceCurrency": "AED",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "250",
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
          "category": "Off-road Motorcycle Rental"
        })
      }
    ]
  }))
);
</script>
