<template>
  <BaseContainer>
    <div class="my-12 md:my-20 lg:my-27.5">
      <div>
        <h2
          class="text-center mb-6 lg:mb-12.5 text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
        >
          <i class="font-semibold text-[#CE1D1F]">{{
            $t("privacyPolicy.title1")
          }}</i>
          {{ $t("privacyPolicy.title2") }}
        </h2>
        <div class="flex flex-col gap-5">
          <p class="text-[#0C0C0C] text-lg">
            {{ $t("privacyPolicy.description2") }}
          </p>
          <div v-for="(item, index) in privacypolicy" :key="index">
            <h3 class="text-xl font-bold text-[#0C0C0C] mb-[15px]">
              {{ item.subtitle }}
              <i class="text-[#CE1D1F]">{{ item.highlighted }}</i>
            </h3>
            <ul
              v-if="item.content.length > 1"
              v-for="(block, i) in item.content"
              :key="i"
              class="font-normal text-[#0C0C0C]"
            >
              <li v-if="block.content1" class="list-disc list-inside">
                {{ block.content1 }}
              </li>
              <li v-if="block.content2" class="list-disc list-inside mt-2">
                {{ block.content2 }}
              </li>
              <li v-if="block.content3" class="list-disc list-inside mt-2">
                {{ block.content3 }}
              </li>
            </ul>
            <p v-else class="text-[#0C0C0C]">
              {{ item.content[0].content1 }}
            </p>
          </div>
          <p class="text-[#0C0C0C]">
            {{ $t("details.subDescription14") }}
            <a href="mailto:info@dunerush.com" class="text-blue-600 underline"
              >info@dunerush.com</a
            >
            {{ $t("details.subDescription15") }}
            <a
              href="https://wa.me/message/BXISU2T4QQJHD1"
              target="_blank"
              class="text-blue-600"
              >{{ $t("details.whatsappNo") }} .</a
            >
          </p>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
<script setup lang="ts">
const { t } = useI18n();
const privacypolicy = [
  {
    subtitle: t("details.title1"),
    highlighted: t("details.nexttitle1"),
    content: [
      {
        content1: t("details.subDescription1"),
      },
      {
        content2: t("details.subDescription2"),
      },
    ],
  },
  {
    subtitle: t("details.title2"),
    highlighted: t("details.nexttitle2"),
    content: [
      {
        content1: t("details.subDescription3"),
      },
      {
        content2: t("details.subDescription4"),
      },
      {
        content3: t("details.subDescription5"),
      },
    ],
  },
  {
    subtitle: t("details.title3"),
    highlighted: t("details.nexttitle3"),
    content: [
      {
        content1: t("details.subDescription6"),
      },
      {
        content2: t("details.subDescription7"),
      },
    ],
  },
  {
    subtitle: t("details.title4"),
    highlighted: t("details.nexttitle4"),
    content: [
      {
        content1: t("details.subDescription8"),
      },
      {
        content2: t("details.subDescription9"),
      },
    ],
  },
  {
    subtitle: t("details.title5"),
    highlighted: t("details.nexttitle5"),
    content: [
      {
        content1: t("details.subDescription10"),
      },
    ],
  },
  {
    subtitle: t("details.title6"),
    highlighted: t("details.nexttitle6"),
    content: [
      {
        content1: t("details.subDescription11"),
      },
      {
        content2: t("details.subDescription12"),
      },
    ],
  },

  {
    subtitle: t("details.title7"),
    highlighted: t("details.nexttitle7"),
    content: [
      {
        content1: t("details.subDescription13"),
      },
    ],
  },
];
</script>
