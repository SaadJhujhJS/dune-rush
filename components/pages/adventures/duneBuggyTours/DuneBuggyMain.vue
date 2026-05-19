<template>
  <BaseContainer>
    <div class="my-12 md:my-20 lg:my-27.5">
      <div>
        <h2
          class="mb-5.5 xl:mb-12.5 text-center text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
        >
          {{ $t("duneBuggyTours.mainHeading") }}
          <i class="font-semibold text-[#CE1D1F]">
            {{ $t("duneBuggyTours.mainHeadingHighligheted") }}</i
          >
        </h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        <div
          v-for="(buggycard, index) in BuggyTourCards"
          :key="index"
          :class="[
            'flex flex-col transition-all duration-500 bg-[#F0F0F0] rounded-3xl overflow-hidden',
          ]"
        >
          <img
            :src="buggycard.url"
            :alt="buggycard.alt"
            class="object-contain transition-all duration-300 ease-in-out hover:scale-105"
          />
          <div
            class="flex flex-col gap-4.5 transition-opacity duration-500 ease-in-out p-4.5"
          >
            <div class="flex flex-col gap-[8.25px] text-[#0E0E0E]">
              <h3 class="text-[19.01px] font-semibold">
                {{ buggycard.title }}
              </h3>
              <div class="flex items-center gap-[3.46px] text-[13.83px]">
                <IconTime class="w-4.5 h-4.5" />
                <h4 class="font-normal text-[#0C0C0C]">
                  <span class="font-medium">{{ $t("duneBuggyTours.tourDuration") }} </span
                  >{{ buggycard.time }}
                </h4>
              </div>
              <div class="flex items-center gap-[3.46px] text-[13.83px]">
                <IconUsers class="w-4.5 h-4.5" />
                <h4 class="font-normal text-[#0C0C0C]">
                  <span class="font-medium">{{ $t("duneBuggyTours.seats") }} </span>{{ buggycard.seats }}
                </h4>
              </div>
            </div>
            <div class="flex flex-col">
              <h5 class="text-xl font-semibold text-[#CE1D1F] mb-3 md:mb-5">
                {{ buggycard.price }}
              </h5>
              <div
                class="flex flex-col lg:flex-row gap-2 text-[13.02px] font-semibold mb-[5.76px]"
              >
                <NuxtLinkLocale to="/contact">
                  <button
                    class="w-full flex justify-center items-center gap-2.5 px-8 2xl:px-8.5 py-3 border-[1.04px] border-[#CE1D1F] bg-[#CE1D1F] rounded-[103.6px] text-white cursor-pointer transition shine"
                  >
                    {{ $t("duneBuggyTours.bookNow") }}
                    <IconArrowRight />
                  </button>
                </NuxtLinkLocale>
                <NuxtLinkLocale
                  aria-label="Read more about dune buggy tours"
                  title="Read more about dune buggy tours"
                  :to="`/adventures/duneBuggyTours/${buggycard.slug}`"
                >
                <button
                  class="w-full flex justify-center items-center gap-1 px-8 2xl:px-8.5 py-3 border-[1.04px] border-[#CE1D1F] rounded-[103.6px] text-[#CE1D1F] cursor-pointer"
                >
                  {{ $t("duneBuggyTours.readMore") }} <span class="sr-only">{{ buggycard.slug }}</span>
                  <IconArrowRight color="#CE1D1F" />
                </button>
                </NuxtLinkLocale>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
<script setup lang="ts">
const { t } = useI18n();
const BuggyTourCards = [
  {
    slug: "can-am-1000cc-2-seater",
    url: "/images/buggytours/1.webp",
    alt: t("duneBuggyTours.product1.title"),
    title: t("duneBuggyTours.product1.title"),
    time: t("duneBuggyTours.product1.tourDuration"),
    seats: t("duneBuggyTours.product1.seats"),
    price: t("duneBuggyTours.product1.price"),
  },
  {
    slug: "can-am-1000cc-4-seater",
    url: "/images/buggytours/2.webp",
    alt: t("duneBuggyTours.product2.title"),
    title: t("duneBuggyTours.product2.title"),
    time: t("duneBuggyTours.product2.tourDuration"),
    seats: t("duneBuggyTours.product2.seats"),
    price: t("duneBuggyTours.product2.price"),
  },
  {
    slug: "polaris-rzr-800cc-2-seater",
    url: "/images/buggytours/3.webp",
    alt: t("duneBuggyTours.product3.title"),
    title: t("duneBuggyTours.product3.title"),
    time: t("duneBuggyTours.product3.tourDuration"),
    seats: t("duneBuggyTours.product3.seats"),
    price: t("duneBuggyTours.product3.price"),
  },
  {
    slug: "polaris-rzr-1000cc-1-seater",
    url: "/images/buggytours/4.webp",
    alt: t("duneBuggyTours.product4.title"),
    title: t("duneBuggyTours.product4.title"),
    time: t("duneBuggyTours.product4.tourDuration"),
    seats: t("duneBuggyTours.product4.seats"),
    price: t("duneBuggyTours.product4.price"),
  },
  {
    slug: "polaris-rzr-1000cc-2-seater",
    url: "/images/buggytours/5.webp",
    alt: t("duneBuggyTours.product5.title"),
    title: t("duneBuggyTours.product5.title"),
    time: t("duneBuggyTours.product5.tourDuration"),
    seats: t("duneBuggyTours.product5.seats"),
    price: t("duneBuggyTours.product5.price"),
  },
  {
    slug: "polaris-rzr-1000cc-4-seater",
    url: "/images/buggytours/6.webp",
    alt: t("duneBuggyTours.product6.title"),
    title: t("duneBuggyTours.product6.title"),
    time: t("duneBuggyTours.product6.tourDuration"),
    seats: t("duneBuggyTours.product6.seats"),
    price: t("duneBuggyTours.product6.price"),
  },
  {
    slug: "polaris-pro-r-2000cc-4-seater",
    url: "/images/buggytours/7.webp",
    alt: t("duneBuggyTours.product7.title"),
    title: t("duneBuggyTours.product7.title"),
    time: t("duneBuggyTours.product7.tourDuration"),
    seats: t("duneBuggyTours.product7.seats"),
    price: t("duneBuggyTours.product7.price"),
  },
  {
    slug: "cf-moto-zforce-1000cc-2-seater",
    url: "/images/buggytours/8.webp",
    alt: t("duneBuggyTours.product8.title"),
    title: t("duneBuggyTours.product8.title"),
    time: t("duneBuggyTours.product8.tourDuration"),
    seats: t("duneBuggyTours.product8.seats"),
    price: t("duneBuggyTours.product8.price"),
  },
  {
    slug: "cf-moto-zforce-1000cc-4-seater",
    url: "/images/buggytours/9.webp",
    alt: t("duneBuggyTours.product9.title"),
    title: t("duneBuggyTours.product9.title"),
    time: t("duneBuggyTours.product9.tourDuration"),
    seats: t("duneBuggyTours.product9.seats"),
    price: t("duneBuggyTours.product9.price"),
  },
];
</script>
