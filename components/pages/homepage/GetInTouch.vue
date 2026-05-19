<template>
  <BaseContainer>
    <div
      class="w-full mx-auto lg:max-w-[1070px] flex justify-between flex-col-reverse lg:flex-row gap-5 lg:gap-10 px-10 py-9 bg-[#F0F0F0] rounded-2xl mb-10 md:mb-16 lg:mb-22.5"
    >
      <div
        class="w-full lg:w-1/2 flex flex-col justify-center gap-4 lg:gap-7.5"
      >
        <div class="flex flex-col gap-2 md:gap-4 text-[#0C0C0C]">
          <h2 class="text-2xl sm:text-3xl font-semibold">
            {{ $t("getInTouch.title") }}
          </h2>
          <p class="text-sm font-normal opacity-60">
            {{ $t("getInTouch.description") }}
          </p>
          <b> {{ $t("getInTouch.contactUs") }}</b>
        </div>
        <div class="flex flex-col justify-center gap-3 lg:gap-5 text-[#0C0C0C]">
          <div v-for="(contact, index) in contactInfo" :key="index">
            <div class="flex items-start gap-3">
              <div class="w-6 flex justify-center pt-2">
                <component :is="contact.icon" />
              </div>
              <div>
                <h3 class="text-lg font-semibold">{{ contact.title }}</h3>
                <p class="text-sm font-normal opacity-60">
                  {{ contact.info1 }}
                </p>
                <p v-if="contact.info2" class="text-sm font-normal opacity-60">
                  {{ contact.info2 }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <NuxtLinkLocale aria-label="contact-button" to="/contact">
            <button
              type="button"
              name="contact us"
              class="flex items-center gap-2.5 px-[18.5px] py-[13.5px] bg-[#CE1D1F] rounded-[113.14px] text-sm font-semibold text-white cursor-pointer transition shine"
            >
              {{ $t("getInTouch.contactButton") }}
              <IconArrowRight />
            </button>
          </NuxtLinkLocale>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <img
          src="/images/get-in-touch.webp"
          alt="Contact Dune Rush Adventure Tours - Get in touch for desert adventure bookings and inquiries"
          class="w-full h-auto lg:w-[548px] lg:h-[402px] object-cover rounded-[22.5px]"
        />
      </div>
    </div>
  </BaseContainer>
</template>
<script setup lang="ts">
import IconPhone from "@/components/icons/IconPhone.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconLocation from "@/components/icons/IconLocation.vue";

const { t } = useI18n();
const contactInfo = [
  {
    icon: IconPhone,
    title: t("getInTouch.reservationNumber"),
    info1: "+971 56 707 5765",
    info2: "+971 58 635 0788",
  },
  {
    icon: IconMail,
    title: t("getInTouch.generalInquiry"),
    info1: "info@dunerush.com",
  },
  {
    icon: IconLocation,
    title: t("getInTouch.baseLocation"),
    info1: t("getInTouch.locationAddress"),
  },
];
</script>
