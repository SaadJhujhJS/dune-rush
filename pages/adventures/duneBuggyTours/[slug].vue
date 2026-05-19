<template>
  <div>
    <AppHeader
      :backgroundImage="slugData?.url || '/images/buggytours/default-bike.webp'"
      :title="t('duneBuggyTours.title')"
      :description="
        slugData?.title + ' ' + slugData?.highlightedTitle ||
        'Buckle Up for the Ultimate Desert Thrill! Hit the Dunes, Feel the Roar'
      "
    />
    <ProductDetails
      :title="slugData?.title"
      :highlightedTitle="slugData?.highlightedTitle"
      :price="slugData?.price"
      :description="slugData?.description"
      :features="slugData?.features"
      :durations="slugData?.durations"
      :image="slugData?.url"
      :included="slugData?.included"
      :callToAction="slugData?.cta"
    />
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();
const dataList = [
  {
    slug: t("duneBuggy.product1.slug"),
    url: "/images/buggytours/8.webp",
    title: t("duneBuggy.product1.title"),
    highlightedTitle: t("duneBuggy.product1.highlightedTitle"),
    price: t("duneBuggy.product1.price"),
    description: t("duneBuggy.product1.description"),
    features: [
      t("duneBuggy.product1.feature1"),
      t("duneBuggy.product1.feature2"),
      t("duneBuggy.product1.feature3"),
      t("duneBuggy.product1.feature4"),
      t("duneBuggy.product1.feature5"),
      t("duneBuggy.product1.feature6"),
      t("duneBuggy.product1.feature7"),
    ],
    durations: [
      t("duneBuggy.product1.duration1"),
      t("duneBuggy.product1.duration2"),
      t("duneBuggy.product1.duration3"),
      t("duneBuggy.product1.duration4"),
    ],
    included: [
      t("duneBuggy.product1.included1"),
      t("duneBuggy.product1.included2"),
      t("duneBuggy.product1.included3"),
      t("duneBuggy.product1.included4"),
    ],
    cta: t("duneBuggy.product1.cta"),
  },
  {
    slug: t("duneBuggy.product2.slug"),
    url: "/images/buggytours/9.webp",
    title: t("duneBuggy.product2.title"),
    highlightedTitle: t("duneBuggy.product2.highlightedTitle"),
    price: t("duneBuggy.product2.price"),
    description: t("duneBuggy.product2.description"),
    features: [
      t("duneBuggy.product2.feature1"),
      t("duneBuggy.product2.feature2"),
      t("duneBuggy.product2.feature3"),
      t("duneBuggy.product2.feature4"),
      t("duneBuggy.product2.feature5"),
      t("duneBuggy.product2.feature6"),
      t("duneBuggy.product2.feature7"),
    ],
    durations: [
      t("duneBuggy.product2.duration1"),
      t("duneBuggy.product2.duration2"),
      t("duneBuggy.product2.duration3"),
      t("duneBuggy.product2.duration4"),
    ],
    included: [
      t("duneBuggy.product2.included1"),
      t("duneBuggy.product2.included2"),
      t("duneBuggy.product2.included3"),
      t("duneBuggy.product2.included4"),
    ],
    cta: t("duneBuggy.product2.cta"),
  },
  {
    slug: t("duneBuggy.product3.slug"),
    url: "/images/buggytours/5.webp",
    title: t("duneBuggy.product3.title"),
    highlightedTitle: t("duneBuggy.product3.highlightedTitle"),
    price: t("duneBuggy.product3.price"),
    description: t("duneBuggy.product3.description"),
    features: [
      t("duneBuggy.product3.feature1"),
      t("duneBuggy.product3.feature2"),
      t("duneBuggy.product3.feature3"),
      t("duneBuggy.product3.feature4"),
      t("duneBuggy.product3.feature5"),
      t("duneBuggy.product3.feature6"),
      t("duneBuggy.product3.feature7"),
    ],
    durations: [
      t("duneBuggy.product3.duration1"),
      t("duneBuggy.product3.duration2"),
      t("duneBuggy.product3.duration3"),
      t("duneBuggy.product3.duration4"),
    ],
    included: [
      t("duneBuggy.product3.included1"),
      t("duneBuggy.product3.included2"),
      t("duneBuggy.product3.included3"),
      t("duneBuggy.product3.included4"),
    ],
    cta: t("duneBuggy.product3.cta"),
  },
  {
    slug: t("duneBuggy.product4.slug"),
    url: "/images/buggytours/6.webp",
    title: t("duneBuggy.product4.title"),
    highlightedTitle: t("duneBuggy.product4.highlightedTitle"),
    price: t("duneBuggy.product4.price"),
    description: t("duneBuggy.product4.description"),
    features: [
      t("duneBuggy.product4.feature1"),
      t("duneBuggy.product4.feature2"),
      t("duneBuggy.product4.feature3"),
      t("duneBuggy.product4.feature4"),
      t("duneBuggy.product4.feature5"),
      t("duneBuggy.product4.feature6"),
      t("duneBuggy.product4.feature7"),
    ],
    durations: [
      t("duneBuggy.product4.duration1"),
      t("duneBuggy.product4.duration2"),
      t("duneBuggy.product4.duration3"),
      t("duneBuggy.product4.duration4"),
    ],
    included: [
      t("duneBuggy.product4.included1"),
      t("duneBuggy.product4.included2"),
      t("duneBuggy.product4.included3"),
      t("duneBuggy.product4.included4"),
    ],
    cta: t("duneBuggy.product4.cta"),
  },
  {
    slug: t("duneBuggy.product5.slug"),
    url: "/images/buggytours/4.webp",
    title: t("duneBuggy.product5.title"),
    highlightedTitle: t("duneBuggy.product5.highlightedTitle"),
    price: t("duneBuggy.product5.price"),
    description: t("duneBuggy.product5.description"),
    features: [
      t("duneBuggy.product5.feature1"),
      t("duneBuggy.product5.feature2"),
      t("duneBuggy.product5.feature3"),
      t("duneBuggy.product5.feature4"),
      t("duneBuggy.product5.feature5"),
      t("duneBuggy.product5.feature6"),
      t("duneBuggy.product5.feature7"),
    ],
    durations: [
      t("duneBuggy.product5.duration1"),
      t("duneBuggy.product5.duration2"),
      t("duneBuggy.product5.duration3"),
      t("duneBuggy.product5.duration4"),
    ],
    included: [
      t("duneBuggy.product5.included1"),
      t("duneBuggy.product5.included2"),
      t("duneBuggy.product5.included3"),
      t("duneBuggy.product5.included4"),
    ],
    cta: t("duneBuggy.product5.cta"),
  },
  {
    slug: t("duneBuggy.product6.slug"),
    url: "/images/buggytours/3.webp",
    title: t("duneBuggy.product6.title"),
    highlightedTitle: t("duneBuggy.product6.highlightedTitle"),
    price: t("duneBuggy.product6.price"),
    description: t("duneBuggy.product6.description"),
    features: [
      t("duneBuggy.product6.feature1"),
      t("duneBuggy.product6.feature2"),
      t("duneBuggy.product6.feature3"),
      t("duneBuggy.product6.feature4"),
      t("duneBuggy.product6.feature5"),
      t("duneBuggy.product6.feature6"),
      t("duneBuggy.product6.feature7"),
    ],
    durations: [
      t("duneBuggy.product6.duration1"),
      t("duneBuggy.product6.duration2"),
      t("duneBuggy.product6.duration3"),
      t("duneBuggy.product6.duration4"),
    ],
    included: [
      t("duneBuggy.product6.included1"),
      t("duneBuggy.product6.included2"),
      t("duneBuggy.product6.included3"),
      t("duneBuggy.product6.included4"),
    ],
    cta: t("duneBuggy.product6.cta"),
  },
  {
    slug: t("duneBuggy.product7.slug"),
    url: "/images/buggytours/1.webp",
    title: t("duneBuggy.product7.title"),
    highlightedTitle: t("duneBuggy.product7.highlightedTitle"),
    price: t("duneBuggy.product7.price"),
    description: t("duneBuggy.product7.description"),
    features: [
      t("duneBuggy.product7.feature1"),
      t("duneBuggy.product7.feature2"),
      t("duneBuggy.product7.feature3"),
      t("duneBuggy.product7.feature4"),
      t("duneBuggy.product7.feature5"),
      t("duneBuggy.product7.feature6"),
      t("duneBuggy.product7.feature7"),
    ],
    durations: [
      t("duneBuggy.product7.duration1"),
      t("duneBuggy.product7.duration2"),
      t("duneBuggy.product7.duration3"),
      t("duneBuggy.product7.duration4"),
    ],
    included: [
      t("duneBuggy.product7.included1"),
      t("duneBuggy.product7.included2"),
      t("duneBuggy.product7.included3"),
      t("duneBuggy.product7.included4"),
    ],
    cta: t("duneBuggy.product7.cta"),
  },
  {
    slug: t("duneBuggy.product8.slug"),
    url: "/images/buggytours/2.webp",
    title: t("duneBuggy.product8.title"),
    highlightedTitle: t("duneBuggy.product8.highlightedTitle"),
    price: t("duneBuggy.product8.price"),
    description: t("duneBuggy.product8.description"),
    features: [
      t("duneBuggy.product8.feature1"),
      t("duneBuggy.product8.feature2"),
      t("duneBuggy.product8.feature3"),
      t("duneBuggy.product8.feature4"),
      t("duneBuggy.product8.feature5"),
      t("duneBuggy.product8.feature6"),
      t("duneBuggy.product8.feature7"),
    ],
    durations: [
      t("duneBuggy.product8.duration1"),
      t("duneBuggy.product8.duration2"),
      t("duneBuggy.product8.duration3"),
      t("duneBuggy.product8.duration4"),
    ],
    included: [
      t("duneBuggy.product8.included1"),
      t("duneBuggy.product8.included2"),
      t("duneBuggy.product8.included3"),
      t("duneBuggy.product8.included4"),
    ],
    cta: t("duneBuggy.product8.cta"),
  },
  {
    slug: t("duneBuggy.product9.slug"),
    url: "/images/buggytours/7.webp",
    title: t("duneBuggy.product9.title"),
    highlightedTitle: t("duneBuggy.product9.highlightedTitle"),
    price: t("duneBuggy.product9.price"),
    description: t("duneBuggy.product9.description"),
    features: [
      t("duneBuggy.product9.feature1"),
      t("duneBuggy.product9.feature2"),
      t("duneBuggy.product9.feature3"),
      t("duneBuggy.product9.feature4"),
      t("duneBuggy.product9.feature5"),
      t("duneBuggy.product9.feature6"),
      t("duneBuggy.product9.feature7"),
    ],
    durations: [
      t("duneBuggy.product9.duration1"),
      t("duneBuggy.product9.duration2"),
      t("duneBuggy.product9.duration3"),
      t("duneBuggy.product9.duration4"),
    ],
    included: [
      t("duneBuggy.product9.included1"),
      t("duneBuggy.product9.included2"),
      t("duneBuggy.product9.included3"),
      t("duneBuggy.product9.included4"),
    ],
    cta: t("duneBuggy.product9.cta"),
  },
];

const slugData = computed(() => {
  return dataList.find((item) => item.slug === route.params.slug);
});

const locale = route.params?.locale || "en";
const config = useRuntimeConfig();
const SITE_URL = config.public.SITE_URL;

const canonicalUrl =
  locale !== "en"
    ? `${SITE_URL}/${locale}/adventures/duneBuggyTours/${route.params.slug}`
    : `${SITE_URL}/adventures/duneBuggyTours/${route.params.slug}`;
useHead(
  computed(() => ({
    title: slugData.value?.title + " " + slugData.value?.highlightedTitle,
    meta: [
      { name: "description", content: slugData.value?.description },
      {
        name: "twitter:title",
        content: slugData.value?.title + " " + slugData.value?.highlightedTitle,
      },
      { name: "twitter:description", content: slugData.value?.description },
      { property: "og:url", content: canonicalUrl },
      {
        property: "og:title",
        content: slugData.value?.title + " " + slugData.value?.highlightedTitle,
      },
      { property: "og:description", content: slugData.value?.description },
    ],
    link: [
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: `${SITE_URL}/adventures/duneBuggyTours/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/adventures/duneBuggyTours/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/adventures/duneBuggyTours/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/adventures/duneBuggyTours/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/adventures/duneBuggyTours/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/adventures/duneBuggyTours/${route.params.slug}`,
      },
    ],
  }))
);
</script>
