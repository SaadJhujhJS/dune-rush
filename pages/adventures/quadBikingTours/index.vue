<template>
  <div>
    <AppHeader
      backgroundImage="/images/quad-bike-tours/quad-biking.webp"
      :title="t('quadBikingTours.title')"
      :description="t('quadBikingTours.description')"
    />
    <QuadBikingMain />
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();
const locale = route.params?.locale || "en";
const config = useRuntimeConfig();
const SITE_URL = config.public.SITE_URL;

const canonicalUrl =
  locale !== "en" ? `${SITE_URL}/${locale}/adventures/quadBikingTours` : `${SITE_URL}/adventures/quadBikingTours`;
useHead(
  computed(() => ({
    title: t('quadBikingTours.title'),
    meta: [
      { name: "description", content: t('quadBikingTours.description') },
      { name: "keywords", content: "quad biking Dubai, ATV tours desert, Yamaha Raptor 700cc, quad bike rental UAE, desert ATV adventure, guided quad tours" },
      { name: "author", content: "Dune Rush Adventure Tours" },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      
      // Open Graph tags
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: t('quadBikingTours.title') },
      { property: "og:description", content: t('quadBikingTours.description') },
      { property: "og:image", content: `${SITE_URL}/images/quad-bike-tours/quad-biking.webp` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Dune Rush Adventure Tours" },
      { property: "og:locale", content: locale === "en" ? "en_US" : `${locale}_${String(locale).toUpperCase()}` },
      
      // Twitter Card tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t('quadBikingTours.title') },
      { name: "twitter:description", content: t('quadBikingTours.description') },
      { name: "twitter:image", content: `${SITE_URL}/images/quad-bike-tours/quad-biking.webp` },
      { name: "twitter:image:alt", content: "Dune Rush Adventure Tours - Quad Biking Tours - ATV desert adventure in Dubai" },
      
      // Additional SEO meta tags
      { name: "theme-color", content: "#CE1D1F" },
      { name: "msapplication-TileColor", content: "#CE1D1F" },
    ],
    link: [
      { rel: 'preload', as: 'image', href: '/images/quad-bike-tours/quad-biking.webp', fetchpriority: "high" },
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${SITE_URL}/adventures/quadBikingTours`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/adventures/quadBikingTours`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/adventures/quadBikingTours`,
      },
      {
        rel: "alternate",
        hreflang: "gr",
        href: `${SITE_URL}/gr/adventures/quadBikingTours`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/adventures/quadBikingTours`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/adventures/quadBikingTours`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/adventures/quadBikingTours`,
      },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": t('quadBikingTours.title'),
          "description": t('quadBikingTours.description'),
          "url": canonicalUrl,
          "image": `${SITE_URL}/images/quad-bike-tours/quad-biking.webp`,
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
              "name": "Yamaha Raptor 700cc Quad Bike",
              "description": "High-performance quad bike for desert adventures",
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
              "name": "Adly Quad Bike 320cc",
              "description": "Reliable and fun quad bike for all skill levels",
              "price": "200",
              "priceCurrency": "AED",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "200",
                "priceCurrency": "AED",
                "unitText": "per 30 minutes"
              }
            },
            {
              "@type": "Offer",
              "name": "Kids Quad Bike 80/100cc",
              "description": "Safe and fun quad bike designed for children",
              "price": "150",
              "priceCurrency": "AED",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "150",
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
          "category": "Quad Biking Tours"
        })
      }
    ]
  }))
);
</script>