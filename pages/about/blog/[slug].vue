<template>
  <div>
    <header
      class="relative w-full overflow-hidden h-[450px] bg-cover bg-center"
      :style="{
        backgroundImage: `url(${
          blog?.url || '/images/blogs-banner-image.webp'
        })`,
      }"
    >
      <div class="absolute inset-0 bg-black/60 z-10"></div>
    </header>
    <BaseContainer>
      <div>
        <component :is="blog?.component" v-if="blog?.component" />
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import ActivityTouristsLocal from "~/components/pages/about/blog/ActivityTouristsLocal.vue";
import AdventureForKids from "~/components/pages/about/blog/AdventureForKids.vue";
import AtvDirtBike from "~/components/pages/about/blog/AtvDirtBike.vue";
import AtvRidingDesert from "~/components/pages/about/blog/AtvRidingDesert.vue";
import DesertAdventureForBeginners from "~/components/pages/about/blog/DesertAdventureForBeginners.vue";
import DesertDuneBuggyTours from "~/components/pages/about/blog/DesertDuneBuggyTours.vue";
import DuneBuggyComparison from "~/components/pages/about/blog/DuneBuggyComparison.vue";
import StaySafeRiding from "~/components/pages/about/blog/StaySafeRiding.vue";
import TryAdventureInDubai from "~/components/pages/about/blog/TryAdventureInDubai.vue";
import WeekendGateWayTrend from "~/components/pages/about/blog/WeekendGateWayTrend.vue";

const { t } = useI18n();
const route = useRoute();
const locale = route.params?.locale || "en";
const config = useRuntimeConfig();
const SITE_URL = config.public.SITE_URL;

const blogs = [
  {
    slug: "atv-riding-desert",
    url: "/images/blogimages/blog-1.webp",
    title: t("blog1.title"),
    description: t("blog1.description"),
    component: AtvRidingDesert,
  },
  {
    slug: "desert-dune-buggy-tour",
    url: "/images/blogimages/blog-2.webp",
    title: t("blog2.title"),
    description: t("blog2.description"),
    component: DesertDuneBuggyTours,
  },
  {
    slug: "desert-adventure-for-beginners",
    url: "/images/blogimages/blog-3.webp",
    title: t("blog3.title"),
    description: t("blog3.description"),
    component: DesertAdventureForBeginners,
  },
  {
    slug: "atv-vs-dirt-bike",
    url: "/images/blogimages/blog-4.webp",
    title: t("blog4.title"),
    description: t("blog4.description"),
    component: AtvDirtBike,
  },
  {
    slug: "try-adventure-in-dubai",
    url: "/images/blogimages/blog-5.png",
    title: t("blog5.cardTitle"),
    description: t("blog5.cardInfo"),
    component: TryAdventureInDubai,
  },
  {
    slug: "stay-safe-while-riding-atvs",
    url: "/images/blogimages/blog-6.png",
    title: t("blog6.cardTitle"),
    description: t("blog6.cardInfo"),
    component: StaySafeRiding,
  },
  {
    slug: "try-activity-for-tourists-locals",
    url: "/images/blogimages/blog-7.png",
    title: t("blog7.cardTitle"),
    description: t("blog7.cardInfo"),
    component: ActivityTouristsLocal,
  },
  {
    slug: "4Seater-vs-2seater-dune-buggy",
    url: "/images/blogimages/blog-8.png",
    title: t("blog8.cardTitle"),
    description: t("blog8.cardInfo"),
    component: DuneBuggyComparison,
  },
  {
    slug: "new-weekend-getaway-trend",
    url: "/images/blogimages/blog-9.png",
    title: t("blog9.cardTitle"),
    description: t("blog9.cardInfo"),
    component: WeekendGateWayTrend,
  },
  {
    slug: "desert-adventures-for-kids",
    url: "/images/blogimages/blog-10.png",
    title: t("blog10.cardTitle"),
    description: t("blog10.cardInfo"),
    component: AdventureForKids,
  },
];

const blog = blogs.find((b) => b.slug === route.params.slug);

const canonicalUrl =
  locale !== "en"
    ? `${SITE_URL}/${locale}/about/blog/${route.params.slug}`
    : `${SITE_URL}/about/blog/${route.params.slug}`;
useHead(
  computed(() => ({
    title: blog?.title,
    meta: [
      { name: "description", content: blog?.description },
      { name: "twitter:title", content: blog?.title },
      { name: "twitter:description", content: blog?.description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: blog?.title },
      { property: "og:description", content: blog?.description },
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
        href: `${SITE_URL}/about/blog/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "fr",
        href: `${SITE_URL}/fr/about/blog/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "ar",
        href: `${SITE_URL}/ar/about/blog/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "ru",
        href: `${SITE_URL}/ru/about/blog/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "ch",
        href: `${SITE_URL}/ch/about/blog/${route.params.slug}`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/about/blog/${route.params.slug}`,
      },
    ],
  }))
);
</script>
