<template>
  <div>
    <AppHeader
      :backgroundImage="
        slugData?.url || '/images/bikerentalimages/default-bike.webp'
      "
      :title="t('dirtBikeRental.title')"
      :description="
        slugData?.title + ' ' + slugData?.highlightedTitle ||
        'Experience the thrill of off-road biking in the desert.'
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
    slug: t("dirtBike.product1.slug"),
    url: "/images/bikerentalimages/2.webp",
    title: t("dirtBike.product1.title"),
    highlightedTitle: t("dirtBike.product1.highlightedTitle"),
    price: t("dirtBike.product1.price"),
    description: t("dirtBike.product1.description"),
    features: [
      t("dirtBike.product1.feature1"),
      t("dirtBike.product1.feature2"),
      t("dirtBike.product1.feature3"),
      t("dirtBike.product1.feature4"),
      t("dirtBike.product1.feature5"),
      t("dirtBike.product1.feature6"),
      t("dirtBike.product1.feature7"),
    ],
    durations: [
      t("dirtBike.product1.duration1"),
      t("dirtBike.product1.duration2"),
      t("dirtBike.product1.duration3"),
      t("dirtBike.product1.duration4"),
    ],
    included: [
      t("dirtBike.product1.included1"),
      t("dirtBike.product1.included2"),
      t("dirtBike.product1.included3"),
      t("dirtBike.product1.included4"),
      t("dirtBike.product1.included5"),
    ],
    cta: t("dirtBike.product1.cta"),
  },
  {
    slug: t("dirtBike.product2.slug"),
    url: "/images/bikerentalimages/3.webp",
    title: t("dirtBike.product2.title"),
    highlightedTitle: t("dirtBike.product2.highlightedTitle"),
    price: t("dirtBike.product2.price"),
    description: t("dirtBike.product2.description"),
    features: [
      t("dirtBike.product2.feature1"),
      t("dirtBike.product2.feature2"),
      t("dirtBike.product2.feature3"),
      t("dirtBike.product2.feature4"),
      t("dirtBike.product2.feature5"),
      t("dirtBike.product2.feature6"),
      t("dirtBike.product2.feature7"),
    ],
    durations: [
      t("dirtBike.product2.duration1"),
      t("dirtBike.product2.duration2"),
      t("dirtBike.product2.duration3"),
      t("dirtBike.product2.duration4"),
    ],
    included: [
      t("dirtBike.product2.included1"),
      t("dirtBike.product2.included2"),
      t("dirtBike.product2.included3"),
      t("dirtBike.product2.included4"),
      t("dirtBike.product2.included5"),
    ],
    cta: t("dirtBike.product2.cta"),
  },
  {
    slug: t("dirtBike.product3.slug"),
    url: "/images/bikerentalimages/4.webp",
    title: t("dirtBike.product3.title"),
    highlightedTitle: t("dirtBike.product3.highlightedTitle"),
    price: t("dirtBike.product3.price"),
    description: t("dirtBike.product3.description"),
    features: [
      t("dirtBike.product3.feature1"),
      t("dirtBike.product3.feature2"),
      t("dirtBike.product3.feature3"),
      t("dirtBike.product3.feature4"),
      t("dirtBike.product3.feature5"),
      t("dirtBike.product3.feature6"),
      t("dirtBike.product3.feature7"),
    ],
    durations: [
      t("dirtBike.product3.duration1"),
      t("dirtBike.product3.duration2"),
      t("dirtBike.product3.duration3"),
      t("dirtBike.product3.duration4"),
    ],
    included: [
      t("dirtBike.product3.included1"),
      t("dirtBike.product3.included2"),
      t("dirtBike.product3.included3"),
      t("dirtBike.product3.included4"),
      t("dirtBike.product3.included5"),
    ],
    cta: t("dirtBike.product3.cta"),
  },
  {
    slug: t("dirtBike.product4.slug"),
    url: "/images/bikerentalimages/1.webp",
    title: t("dirtBike.product4.title"),
    highlightedTitle: t("dirtBike.product4.highlightedTitle"),
    price: t("dirtBike.product4.price"),
    description: t("dirtBike.product4.description"),
    features: [
      t("dirtBike.product4.feature1"),
      t("dirtBike.product4.feature2"),
      t("dirtBike.product4.feature3"),
      t("dirtBike.product4.feature4"),
      t("dirtBike.product4.feature5"),
      t("dirtBike.product4.feature6"),
      t("dirtBike.product4.feature7"),
    ],
    durations: [
      t("dirtBike.product4.duration1"),
      t("dirtBike.product4.duration2"),
      t("dirtBike.product4.duration3"),
      t("dirtBike.product4.duration4"),
    ],
    included: [
      t("dirtBike.product4.included1"),
      t("dirtBike.product4.included2"),
      t("dirtBike.product4.included3"),
      t("dirtBike.product4.included4"),
      t("dirtBike.product4.included5"),
    ],
    cta: t("dirtBike.product4.cta"),
  },
  {
    slug: t("dirtBike.product5.slug"),
    url: "/images/bikerentalimages/5.webp",
    title: t("dirtBike.product5.title"),
    highlightedTitle: t("dirtBike.product5.highlightedTitle"),
    price: t("dirtBike.product5.price"),
    description: t("dirtBike.product5.description"),
    features: [
      t("dirtBike.product5.feature1"),
      t("dirtBike.product5.feature2"),
      t("dirtBike.product5.feature3"),
      t("dirtBike.product5.feature4"),
      t("dirtBike.product5.feature5"),
      t("dirtBike.product5.feature6"),
      t("dirtBike.product5.feature7"),
    ],
    durations: [
      t("dirtBike.product5.duration1"),
      t("dirtBike.product5.duration2"),
      t("dirtBike.product5.duration3"),
      t("dirtBike.product5.duration4"),
    ],
    included: [
      t("dirtBike.product5.included1"),
      t("dirtBike.product5.included2"),
      t("dirtBike.product5.included3"),
      t("dirtBike.product5.included4"),
      t("dirtBike.product4.included5"),
    ],
    cta: t("dirtBike.product5.cta"),
  },
  {
    slug: t("dirtBike.product6.slug"),
    url: "/images/bikerentalimages/6.webp",
    title: t("dirtBike.product6.title"),
    highlightedTitle: t("dirtBike.product6.highlightedTitle"),
    price: t("dirtBike.product6.price"),
    description: t("dirtBike.product6.description"),
    features: [
      t("dirtBike.product6.feature1"),
      t("dirtBike.product6.feature2"),
      t("dirtBike.product6.feature3"),
      t("dirtBike.product6.feature4"),
      t("dirtBike.product6.feature5"),
      t("dirtBike.product6.feature6"),
      t("dirtBike.product6.feature7"),
    ],
    durations: [
      t("dirtBike.product6.duration1"),
      t("dirtBike.product6.duration2"),
      t("dirtBike.product6.duration3"),
      t("dirtBike.product6.duration4"),
    ],
    included: [
      t("dirtBike.product6.included1"),
      t("dirtBike.product6.included2"),
      t("dirtBike.product6.included3"),
      t("dirtBike.product6.included4"),
      t("dirtBike.product6.included5"),
    ],
    cta: t("dirtBike.product6.cta"),
  },
  {
    slug: t("dirtBike.product7.slug"),
    url: "/images/bikerentalimages/7.webp",
    title: t("dirtBike.product7.title"),
    highlightedTitle: t("dirtBike.product7.highlightedTitle"),
    price: t("dirtBike.product7.price"),
    description: t("dirtBike.product7.description"),
    features: [
      t("dirtBike.product7.feature1"),
      t("dirtBike.product7.feature2"),
      t("dirtBike.product7.feature3"),
      t("dirtBike.product7.feature4"),
      t("dirtBike.product7.feature5"),
      t("dirtBike.product7.feature6"),
      t("dirtBike.product7.feature7"),
    ],
    durations: [
      t("dirtBike.product7.duration1"),
      t("dirtBike.product7.duration2"),
      t("dirtBike.product7.duration3"),
      t("dirtBike.product7.duration4"),
    ],
    included: [
      t("dirtBike.product7.included1"),
      t("dirtBike.product7.included2"),
      t("dirtBike.product7.included3"),
      t("dirtBike.product7.included4"),
      t("dirtBike.product7.included5"),
    ],
    cta: t("dirtBike.product7.cta"),
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
    ? `${SITE_URL}/${locale}/adventures/dirtBikeRental/${route.params.slug}`
    : `${SITE_URL}/adventures/dirtBikeRental/${route.params.slug}`;
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
        href: `${SITE_URL}/adventures/dirtBikeRental/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/adventures/dirtBikeRental/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/adventures/dirtBikeRental/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/adventures/dirtBikeRental/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/adventures/dirtBikeRental/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/adventures/dirtBikeRental/${route.params.slug}`,
      },
    ],
  }))
);
</script>
