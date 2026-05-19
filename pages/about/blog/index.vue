<template>
  <div>
    <AppHeader
      backgroundImage="/images/blogs-banner-image.webp"
      :title="t('blogs.title')"
      :description="t('blogs.description')"
    />
    <OurBlog />
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
    ? `${SITE_URL}/${locale}/about/blog`
    : `${SITE_URL}/about/blog`;
useHead(
  computed(() => ({
    title: t("blogs.title"),
    meta: [
      { name: "description", content: t("blogs.description") },
      { name: "twitter:title", content: t("blogs.title") },
      { name: "twitter:description", content: t("blogs.description") },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: t("blogs.title") },
      { property: "og:description", content: t("blogs.description") },
    ],
    link: [
      { rel: 'preload', as: 'image', href: '/images/blogs-banner-image.webp', fetchpriority: "high" },
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${SITE_URL}/about/blog`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/about/blog`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/about/blog`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/about/blog`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/about/blog`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/about/blog`,
      },
    ],
  }))
);
</script>
