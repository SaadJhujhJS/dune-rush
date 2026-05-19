<template>
  <div>
    <AppHeader
      backgroundImage="/images/refund&cancellation-image.webp"
      :title="t('refundPolicy.title1') + ' ' + t('refundPolicy.title2')"
      :description="t('refundPolicy.description')"
    />
    <RefundCancellationMain />
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
    ? `${SITE_URL}/${locale}/about/refund-cancellation-policy`
    : `${SITE_URL}/about/refund-cancellation-policy`;
useHead(
  computed(() => ({
    title: t('refundPolicy.title1') + ' ' + t('refundPolicy.title2'),
    meta: [
      { name: "description", content: t('refundPolicy.description') },
      { name: "twitter:title", content: t('refundPolicy.title1') + '' + t('refundPolicy.title2') },
      { name: "twitter:description", content: t('refundPolicy.description') },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: t('refundPolicy.title1') + '' + t('refundPolicy.title2') },
      { property: "og:description", content: t('refundPolicy.description') },
    ],
    link: [
      { rel: 'preload', as: 'image', href: '/images/refund&cancellation-image.webp', fetchpriority: "high" },
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${SITE_URL}/about/refund-cancellation-policy`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/about/refund-cancellation-policy`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/about/refund-cancellation-policy`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/about/refund-cancellation-policy`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/about/refund-cancellation-policy`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/about/refund-cancellation-policy`,
      },
    ],
  }))
);
</script>
