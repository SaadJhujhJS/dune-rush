<template>
  <div>
    <AppHeader
      :backgroundImage="slugData?.url || '/images/buggytours/default-bike.webp'"
      :title="t('quadBikingTours.title')"
      :description="
        slugData?.title + ' ' + slugData?.highlightedTitle ||
        'Explore endless dunes, chase the horizon, and let adrenaline guide you through the Desert on a powerful Quad Bikes built for Adventure.'
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
    slug: t("quadBiking.product1.slug"),
    url: "/images/quad-bike-tours/1.webp",
    title: t("quadBiking.product1.title"),
    highlightedTitle: t("quadBiking.product1.highlightedTitle"),
    price: t("quadBiking.product1.price"),
    description: t("quadBiking.product1.description"),
    features: [
      t("quadBiking.product1.feature1"),
      t("quadBiking.product1.feature2"),
      t("quadBiking.product1.feature3"),
      t("quadBiking.product1.feature4"),
      t("quadBiking.product1.feature5"),
      t("quadBiking.product1.feature6"),
      t("quadBiking.product1.feature7"),
    ],
    durations: [
      t("quadBiking.product1.duration1"),
      t("quadBiking.product1.duration2"),
      t("quadBiking.product1.duration3"),
      t("quadBiking.product1.duration4"),
    ],
    included: [
      t("quadBiking.product1.included1"),
      t("quadBiking.product1.included2"),
      t("quadBiking.product1.included3"),
      t("quadBiking.product1.included4"),
    ],
    cta: t("quadBiking.product1.cta"),
  },
  {
    slug: t("quadBiking.product2.slug"),
    url: "/images/quad-bike-tours/2.webp",
    title: t("quadBiking.product2.title"),
    highlightedTitle: t("quadBiking.product2.highlightedTitle"),
    price: t("quadBiking.product2.price"),
    description: t("quadBiking.product2.description"),
    features: [
      t("quadBiking.product2.feature1"),
      t("quadBiking.product2.feature2"),
      t("quadBiking.product2.feature3"),
      t("quadBiking.product2.feature4"),
      t("quadBiking.product2.feature5"),
      t("quadBiking.product2.feature6"),
      t("quadBiking.product2.feature7"),
    ],
    durations: [
      t("quadBiking.product2.duration1"),
      t("quadBiking.product2.duration2"),
      t("quadBiking.product2.duration3"),
      t("quadBiking.product2.duration4"),
    ],
    included: [
      t("quadBiking.product2.included1"),
      t("quadBiking.product2.included2"),
      t("quadBiking.product2.included3"),
      t("quadBiking.product2.included4"),
    ],
    cta: t("quadBiking.product2.cta"),
  },
  {
    slug: t("quadBiking.product3.slug"),
    url: "/images/quad-bike-tours/3.webp",
    title: t("quadBiking.product3.title"),
    highlightedTitle: t("quadBiking.product3.highlightedTitle"),
    price: t("quadBiking.product3.price"),
    description: t("quadBiking.product3.description"),
    features: [
      t("quadBiking.product3.feature1"),
      t("quadBiking.product3.feature2"),
      t("quadBiking.product3.feature3"),
      t("quadBiking.product3.feature4"),
      t("quadBiking.product3.feature5"),
      t("quadBiking.product3.feature6"),
      t("quadBiking.product3.feature7"),
    ],
    durations: [
      t("quadBiking.product3.duration1"),
      t("quadBiking.product3.duration2"),
      t("quadBiking.product3.duration3"),
      t("quadBiking.product3.duration4"),
    ],
    included: [
      t("quadBiking.product3.included1"),
      t("quadBiking.product3.included2"),
      t("quadBiking.product3.included3"),
      t("quadBiking.product3.included4"),
    ],
    cta: t("quadBiking.product3.cta"),
  },
  {
    slug: t("quadBiking.product4.slug"),
    url: "/images/quad-bike-tours/4.webp",
    title: t("quadBiking.product4.title"),
    highlightedTitle: t("quadBiking.product4.highlightedTitle"),
    price: t("quadBiking.product4.price"),
    description: t("quadBiking.product4.description"),
    features: [
      t("quadBiking.product4.feature1"),
      t("quadBiking.product4.feature2"),
      t("quadBiking.product4.feature3"),
      t("quadBiking.product4.feature4"),
      t("quadBiking.product4.feature5"),
      t("quadBiking.product4.feature6"),
      t("quadBiking.product4.feature7"),
    ],
    durations: [
      t("quadBiking.product4.duration1"),
      t("quadBiking.product4.duration2"),
      t("quadBiking.product4.duration3"),
      t("quadBiking.product4.duration4"),
    ],
    included: [
      t("quadBiking.product4.included1"),
      t("quadBiking.product4.included2"),
      t("quadBiking.product4.included3"),
      t("quadBiking.product4.included4"),
    ],
    cta: t("quadBiking.product4.cta"),
  },
  {
    slug: t("quadBiking.product5.slug"),
    url: "/images/quad-bike-tours/5.webp",
    title: t("quadBiking.product5.title"),
    highlightedTitle: t("quadBiking.product5.highlightedTitle"),
    price: t("quadBiking.product5.price"),
    description: t("quadBiking.product5.description"),
    features: [
      t("quadBiking.product5.feature1"),
      t("quadBiking.product5.feature2"),
      t("quadBiking.product5.feature3"),
      t("quadBiking.product5.feature4"),
      t("quadBiking.product5.feature5"),
      t("quadBiking.product5.feature6"),
      t("quadBiking.product5.feature7"),
    ],
    durations: [
      t("quadBiking.product5.duration1"),
      t("quadBiking.product5.duration2"),
      t("quadBiking.product5.duration3"),
      t("quadBiking.product5.duration4"),
    ],
    included: [
      t("quadBiking.product5.included1"),
      t("quadBiking.product5.included2"),
      t("quadBiking.product5.included3"),
      t("quadBiking.product5.included4"),
    ],
    cta: t("quadBiking.product5.cta"),
  },
  {
    slug: t("quadBiking.product6.slug"),
    url: "/images/quad-bike-tours/6.webp",
    title: t("quadBiking.product6.title"),
    highlightedTitle: t("quadBiking.product6.highlightedTitle"),
    price: t("quadBiking.product6.price"),
    description: t("quadBiking.product6.description"),
    features: [
      t("quadBiking.product6.feature1"),
      t("quadBiking.product6.feature2"),
      t("quadBiking.product6.feature3"),
      t("quadBiking.product6.feature4"),
      t("quadBiking.product6.feature5"),
      t("quadBiking.product6.feature6"),
      t("quadBiking.product6.feature7"),
    ],
    durations: [
      t("quadBiking.product6.duration1"),
      t("quadBiking.product6.duration2"),
      t("quadBiking.product6.duration3"),
      t("quadBiking.product6.duration4"),
    ],
    included: [
      t("quadBiking.product6.included1"),
      t("quadBiking.product6.included2"),
      t("quadBiking.product6.included3"),
      t("quadBiking.product6.included4"),
    ],
    cta: t("quadBiking.product6.cta"),
  },
  {
    slug: t("quadBiking.product7.slug"),
    url: "/images/quad-bike-tours/7.webp",
    title: t("quadBiking.product7.title"),
    highlightedTitle: t("quadBiking.product7.highlightedTitle"),
    price: t("quadBiking.product7.price"),
    description: t("quadBiking.product7.description"),
    features: [
      t("quadBiking.product7.feature1"),
      t("quadBiking.product7.feature2"),
      t("quadBiking.product7.feature3"),
      t("quadBiking.product7.feature4"),
      t("quadBiking.product7.feature5"),
      t("quadBiking.product7.feature6"),
      t("quadBiking.product7.feature7"),
    ],
    durations: [
      t("quadBiking.product7.duration1"),
      t("quadBiking.product7.duration2"),
      t("quadBiking.product7.duration3"),
      t("quadBiking.product7.duration4"),
    ],
    included: [
      t("quadBiking.product7.included1"),
      t("quadBiking.product7.included2"),
      t("quadBiking.product7.included3"),
      t("quadBiking.product7.included4"),
    ],
    cta: t("quadBiking.product7.cta"),
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
    ? `${SITE_URL}/${locale}/adventures/quadBikingTours/${route.params.slug}`
    : `${SITE_URL}/adventures/quadBikingTours/${route.params.slug}`;
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
        href: `${SITE_URL}/adventures/quadBikingTours/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/adventures/quadBikingTours/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/adventures/quadBikingTours/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/adventures/quadBikingTours/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/adventures/quadBikingTours/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/adventures/quadBikingTours/${route.params.slug}`,
      },
    ],
  }))
);
</script>
