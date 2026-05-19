<template>
  <BaseContainer>
    <div class="my-12 md:my-20 lg:my-27.5">
      <h2
        class="text-center mb-3 md:mb-5.5 xl:mb-12.5 text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
      >
        {{ $t("homePage.blogs") }}
        <span class="italic font-semibold text-[#CE1D1F]">{{
          $t("homePage.news")
        }}</span>
      </h2>
      <div
        class="flex flex-col-reverse lg:flex-row justify-between gap-4 mb-4 lg:mb-7.5"
      >
        <div class="text-[#0C0C0C] w-full lg:w-[40%]">
          <p class="text-[19.01px] font-semibold mb-3">
            {{ $t("homePage.blogTitle") }}
          </p>
          <div
            class="flex flex-col lg:justify-between lg:h-[330px] xl:h-[340px]"
          >
            <p>
              {{ $t("homePage.blogDescription") }}
            </p>
            <div class="flex justify-between items-center">
              <span> {{ $t("homePage.blogDateTime") }} </span>
              <NuxtLinkLocale
                :to="`/about/blog/atv-riding-desert`"
                aria-label="view blog"
                class="p-[11.2px] bg-[#CE1D1F] rounded-full cursor-pointer transition shine"
              >
                <IconArrowRightCorner />
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/public/images/blogimages/blog-1.webp"
            alt="ATV riding in the desert - Adventure blog post about desert quad biking experiences"
            class="w-full h-auto lg:w-[725.5px] lg:h-[375px] rounded-[22.5px]"
          />
        </div>
      </div>
      <BlogsCard :cards="cards" />
      <div class="flex justify-center items-center mt-5 lg:mt-10">
        <NuxtLinkLocale to="/about/blog">
          <button
            name="view blogs"
            class="w-fit flex items-center gap-3 px-5 py-3 border-[1.13px] border-[#CE1D1F] bg-[#CE1D1F] rounded-[103.6px] text-sm font-semibold text-white cursor-pointer transition shine"
          >
            {{ $t("homePage.viewBlogs") }}
            <IconArrowRight />
          </button>
        </NuxtLinkLocale>
      </div>
    </div>
  </BaseContainer>
</template>
<script setup lang="ts">
const { t } = useI18n();
const cards = [
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
];
</script>
