<template>
  <BaseContainer>
    <div
      class="flex flex-col xl:flex-row gap-10 lg:gap-16 2xl:gap-21 my-12 md:20 lg:my-27.5"
    >
      <div class="w-full xl:w-[70%] flex flex-col gap-5.5">
        <div>
          <h2
            class="mb-3 md:mb-5.5 text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
          >
            {{ $t("homePage.why") }}
            <span class="font-semibold text-[#CE1D1F]">{{
              $t("homePage.choose")
            }}</span>
          </h2>
          <p class="font-normal leading-[1.6]">
            {{ $t("homePage.at") }}
            <span class="font-semibold">{{
              $t("homePage.duneRushAdventure")
            }}</span
            >, {{ $t("homePage.whyChooseDescription") }}
          </p>
        </div>
        <NuxtLinkLocale to="/contact">
          <button
            name="book now"
            class="w-fit flex items-center gap-3 px-4.5 py-3 border-[1.13px] border-[#CE1D1F] bg-[#CE1D1F] rounded-[103.6px] text-sm font-semibold text-white cursor-pointer transition shine"
          >
            {{ $t("homePage.bookNow") }}
            <IconArrowRight />
          </button>
        </NuxtLinkLocale>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col md:pr-5 md:border-r-[1.2px] border-[#D5D5D5]">
          <div
            v-for="(item, index) in featureItems1"
            :key="index"
            :class="[
              'w-full flex gap-4 pb-7.5',
              index === 0
                ? 'md:border-b-[1.2px] border-[#D5D5D5] md:pt-16'
                : '',
              index === 1 ? 'md:pt-7.5' : '',
            ]"
          >
            <!-- Icon -->
            <span>
              <IconTeams />
            </span>

            <!-- Content -->
            <div class="text-[#0C0C0C]">
              <h3 class="font-semibold text-base mb-2">
                {{ item.title }}
              </h3>
              <p class="text-sm font-normal leading-[1.6]">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:pl-5">
          <div
            v-for="(item, index) in featureItems2"
            :key="index"
            :class="[
              'w-full flex gap-4 pb-7.5',
              index === 0 ? 'md:border-b-[1.2px] border-[#D5D5D5]' : '',
              index === 1 ? 'md:pt-7.5' : '',
            ]"
          >
            <span>
              <IconTeams />
            </span>

            <div class="text-[#0C0C0C]">
              <h3 class="font-semibold text-base mb-2">
                {{ item.title }}
              </h3>
              <p class="text-sm font-normal leading-[1.6]">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
const { t } = useI18n();
const featureItems1 = [
  {
    title: t("homePage.whyChooseTitle1"),
    description: t("homePage.whyChooseDescription1"),
  },
  {
    title: t("homePage.whyChooseTitle2"),
    description: t("homePage.whyChooseDescription2"),
  },
];
const featureItems2 = [
  {
    title: t("homePage.whyChooseTitle3"),
    description: t("homePage.whyChooseDescription3"),
  },
  {
    title: t("homePage.whyChooseTitle4"),
    description: t("homePage.whyChooseDescription4"),
  },
];
</script>
