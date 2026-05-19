<template>
  <div>
    <AppHeader
      backgroundImage="/images/privacy-policy-image.webp"
      :title="t('privacyPolicy.title1') + ' ' + t('privacyPolicy.title2')"
      :description="t('privacyPolicy.description1')"
    />
    <PrivacyPolicyMain />
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
    ? `${SITE_URL}/${locale}/about/privacy-policy`
    : `${SITE_URL}/about/privacy-policy`;
useHead(
  computed(() => ({
    title: t('privacyPolicy.title1') + ' ' + t('privacyPolicy.title2'),
    meta: [
      { name: "description", content: t('privacyPolicy.description1') },
      { name: "twitter:title", content: t('privacyPolicy.title1') + ' ' + t('privacyPolicy.title2') },
      { name: "twitter:description", content: t('privacyPolicy.description1') },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: t('privacyPolicy.title1') + ' ' + t('privacyPolicy.title2') },
      { property: "og:description", content: t('privacyPolicy.description1') },
    ],
    link: [
      { rel: 'preload', as: 'image', href: '/images/privacy-policy-image.webp', fetchpriority: "high" },
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${SITE_URL}/about/privacy-policy`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/about/privacy-policy`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/about/privacy-policy`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/about/privacy-policy`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/about/privacy-policy`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/about/privacy-policy`,
      },
    ],
  }))
);
</script>
