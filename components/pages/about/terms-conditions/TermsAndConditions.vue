<template>
  <BaseContainer>
    <div class="my-12 md:my-20 lg:my-27.5">
      <div class="mb-7 lg:mb-12.5">
        <h2
          class="text-center mb-6 lg:mb-12.5 text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
        >
          {{ $t("termsAndConditions.title") }}
          <i class="font-semibold text-[#CE1D1F]">
            {{ $t("termsAndConditions.titleBold") }}
          </i>
        </h2>
        <div class="flex flex-col gap-5">
          <p class="text-lg text-[#0C0C0C]">
            <span class="font-bold">{{
              $t("termsAndConditions.introBold")
            }}</span>
            {{ $t("termsAndConditions.intro") }}
          </p>
          <div v-for="(item, index) in termsData" :key="index">
            <h3 class="text-xl font-bold text-[#0C0C0C] mb-[15px]">
              {{ item.subtitle }}
              <i class="text-[#CE1D1F]">{{ item.highlighted }}</i>
            </h3>
            <ul
              v-if="item.content.length > 1"
              v-for="(block, i) in item.content"
              class="font-normal text-[#0C0C0C]"
            >
              <li v-if="block.content1" class="list-disc list-inside">
                {{ block.content1 }}
              </li>
              <li v-if="block.content2" class="mt-2 list-disc list-inside">
                {{ block.content2 }}
              </li>
              <li v-if="block.content3" class="mt-2 list-disc list-inside">
                {{ block.content3 }}
              </li>
            </ul>
            <p v-else class="text-[#0C0C0C]">
              {{ item.content[0].content1 }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
<script setup lang="ts">
const { t } = useI18n();
const termsData = [
  {
    subtitle: t("termsAndConditions.title1"),
    highlighted: t("termsAndConditions.title1Bold"),
    content: [
      {
        content1: t("termsAndConditions.point1"),
      },
      {
        content2: t("termsAndConditions.point2"),
      },
    ],
  },
  {
    subtitle: t("termsAndConditions.title2"),
    highlighted: t("termsAndConditions.title2Bold"),
    content: [
      {
        content1: t("termsAndConditions.point3"),
      },
      {
        content2: t("termsAndConditions.point4"),
      },
    ],
  },
  {
    subtitle: t("termsAndConditions.title3"),
    highlighted: t("termsAndConditions.title3Bold"),
    content: [
      {
        content1: t("termsAndConditions.point5"),
      },
      {
        content2: t("termsAndConditions.point6"),
      },
      {
        content3: t("termsAndConditions.point7"),
      },
    ],
  },
  {
    subtitle: t("termsAndConditions.title4"),
    highlighted: t("termsAndConditions.title4Bold"),
    content: [
      {
        content1: t("termsAndConditions.point8"),
      },
      {
        content2: t("termsAndConditions.point9"),
      },
      {
        content3: t("termsAndConditions.point10"),
      },
    ],
  },
  {
    subtitle: t("termsAndConditions.title5"),
    content: [
      {
        content1: t("termsAndConditions.point11"),
      },
      {
        content2: t("termsAndConditions.point12"),
      },
    ],
  },
  {
    subtitle: t("termsAndConditions.title6"),
    highlighted: t("termsAndConditions.title6Bold"),
    content: [
      {
        content1: t("termsAndConditions.point13"),
      },
      {
        content2: t("termsAndConditions.point14"),
      },
    ],
  },
  {
    subtitle: t("termsAndConditions.title7"),
    highlighted: t("termsAndConditions.title7Bold"),
    content: [
      {
        content1: t("termsAndConditions.point15"),
      },
      {
        content2: t("termsAndConditions.point16"),
      },
    ],
  },
  {
    subtitle: t("termsAndConditions.title8"),
    highlighted: t("termsAndConditions.title8Bold"),
    content: [
      {
        content1: t("termsAndConditions.point17"),
      },
      {
        content2: t("termsAndConditions.point18"),
      },
    ],
  },
  {
    subtitle: t("termsAndConditions.title9"),
    content: [
      {
        content1: t("termsAndConditions.point19"),
      },
    ],
  },
  {
    subtitle: t("termsAndConditions.title10"),
    highlighted: t("termsAndConditions.title10Bold"),
    content: [
      {
        content1: t("termsAndConditions.point20"),
      },
    ],
  },
];
</script>
