<template>
  <BaseContainer>
    <div class="mm-10 lg:mb-20 mt-16 lg:mt-27.5">
      <h2
        class="text-center mb-5.5 lg:mb-10 text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
      >
        {{ $t("blogs.mainTitle") }}
        <i class="font-semibold text-[#CE1D1F]">{{ $t("blogs.ourBlog") }}</i>
      </h2>
      <div>
        <div>
          <BlogsCard :cards="blogCards" :with-bg="true" :padding="true" />
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
<script setup lang="ts">
const { t } = useI18n();

const blogCards = [
  {
    slug: "atv-riding-desert",
    url: "/images/blogimages/blog-1.webp",
    alt: "image-1",
    title: t("blog1.title"),
    description: t("blog1.description"),
    dateTime: t("blog1.dateTime"),
  },
  {
    slug: "desert-dune-buggy-tour",
    url: "/images/blogimages/blog-2.webp",
    alt: "image-2",
    title: t("blog2.title"),
    description: t("blog2.description"),
    dateTime: t("blog2.dateTime"),
  },
  {
    slug: "desert-adventure-for-beginners",
    url: "/images/blogimages/blog-3.webp",
    alt: "image-3",
    title: t("blog3.title"),
    description: t("blog3.description"),
    dateTime: t("blog3.dateTime"),
  },
  {
    slug: "atv-vs-dirt-bike",
    url: "/images/blogimages/blog-4.webp",
    alt: "image-4",
    title: t("blog4.title"),
    description: t("blog4.description"),
    dateTime: t("blog4.dateTime"),
  },
  {
    slug: "try-adventure-in-dubai",
    url: "/images/blogimages/blog-5.png",
    alt: "image-5",
    title: t("blog5.cardTitle"),
    description: t("blog5.cardInfo"),
    dateTime: t("blog5.dateTime"),
  },
  {
    slug: "stay-safe-while-riding-atvs",
    url: "/images/blogimages/blog-6.png",
    alt: "image-6",
    title: t("blog6.cardTitle"),
    description: t("blog6.cardInfo"),
    dateTime: t("blog6.dateTime"),
  },
  {
    slug: "try-activity-for-tourists-locals",
    url: "/images/blogimages/blog-7.png",
    alt: "image-7",
    title: t("blog7.cardTitle"),
    description: t("blog7.cardInfo"),
    dateTime: t("blog7.dateTime"),
  },
  {
    slug: "4Seater-vs-2seater-dune-buggy",
    url: "/images/blogimages/blog-8.png",
    alt: "image-8",
    title: t("blog8.cardTitle"),
    description: t("blog8.cardInfo"),
    dateTime: t("blog8.dateTime"),
  },
  {
    slug: "new-weekend-getaway-trend",
    url: "/images/blogimages/blog-9.png",
    alt: "image-9",
    title: t("blog9.cardTitle"),
    description: t("blog9.cardInfo"),
    dateTime: t("blog9.dateTime"),
  },
  {
    slug: "desert-adventures-for-kids",
    url: "/images/blogimages/blog-10.png",
    alt: "image-10",
    title: t("blog10.cardTitle"),
    description: t("blog10.cardInfo"),
    dateTime: t("blog10.dateTime"),
  },
];

</script>
