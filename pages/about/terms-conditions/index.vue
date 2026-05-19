<template>
  <div>
    <AppHeader
      backgroundImage="/images/terms-conditions.webp"
      :title="t('termsAndConditions.title') + ' ' + t('termsAndConditions.titleBold')"
      :description="t('termsAndConditions.description')"
    />
    <TermsAndConditions />
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
    ? `${SITE_URL}/${locale}/about/terms-conditions`
    : `${SITE_URL}/about/terms-conditions`;
useHead(
  computed(() => ({
    title: t('termsAndConditions.title') + ' ' + t('termsAndConditions.titleBold'),
    meta: [
      { name: "description", content: t('termsAndConditions.description') },
      { name: "twitter:title", content: t('termsAndConditions.title') + ' ' + t('termsAndConditions.titleBold') },
      { name: "twitter:description", content: t('termsAndConditions.description') },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: t('termsAndConditions.title') + ' ' + t('termsAndConditions.titleBold') },
      { property: "og:description", content: t('termsAndConditions.description') },
    ],
    link: [
      { rel: 'preload', as: 'image', href: '/images/terms-conditions.webp', fetchpriority: "high" },
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${SITE_URL}/about/terms-conditions`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/about/terms-conditions`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/about/terms-conditions`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/about/terms-conditions`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/about/terms-conditions`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/about/terms-conditions`,
      },
    ],
  }))
);
</script>
