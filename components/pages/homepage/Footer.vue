<template>
  <div class="relative size-full bg-[#0C0C0C]">
    <BaseContainer>
      <div
        class="grid grid-cols-1 md:grid-cols-12 gap-10 xl:gap-20 text-white pt-25 z-0"
      >
        <div
          class="md:col-span-4 flex flex-col items-center md:items-start gap-5"
        >
          <img
            src="/public/images/logo_white.png"
            alt="Dune Rush Adventure Tours Logo - Desert adventure and outdoor excursion company"
            class="w-46 h-23 object-contain cursor-pointer"
            @click="scrollToTop"
          />
          <p class="text-center md:text-left md:max-w-[350px]">
            {{ $t("AppNavbar.footercontent") }}
          </p>
          <p>{{ $t("AppNavbar.socialLinks") }}</p>
          <div class="flex items-center gap-2.5">
            <a
              href="https://wa.me/message/BXISU2T4QQJHD1"
              target="_blank"
              aria-label="whatsapp"
              title="whatsapp"
              rel="noopener noreferrer"
              class="w-10 h-10 flex items-center justify-center border-[1.5px] border-white rounded-full"
            >
              <IconFooterWhatsapp />
            </a>
            <a
              href="https://www.facebook.com/dunerush/"
              target="_blank"
              aria-label="facebook"
              title="facebook"
              rel="noopener noreferrer"
              class="w-10 h-10 flex items-center justify-center border-[1.5px] border-white rounded-full"
            >
              <IconFacebook />
            </a>
            <a
              href="https://www.instagram.com/dunerushadventure/"
              target="_blank"
              aria-label="instagram"
              title="instagram"
              rel="noopener noreferrer"
              class="w-10 h-10 flex items-center justify-center border-[1.5px] border-white rounded-full"
            >
              <IconInstagram />
            </a>
          </div>
        </div>

        <div
          class="md:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-12.5 mx-auto md:mx-0"
        >
          <div
            v-for="(section, index) in footerSections"
            :key="index"
            class="flex flex-col gap-7.5"
          >
            <h2 class="text-xl font-medium">{{ section.title }}</h2>
            <ul class="flex flex-col gap-3.5 text-[16px] font-normal">
              <li v-for="(link, idx) in section.links" :key="idx">
                <NuxtLinkLocale
                  :to="link.to"
                  class="hover:underline cursor-pointer"
                  :aria-label="link.label"
                  :title="link.label"
                >
                  {{ link.label }}
                </NuxtLinkLocale>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center mt-8">
        <h3 class="text-[16px] font-normal text-white pb-4.5">
          {{ $t("AppNavbar.rightsReserved") }}
        </h3>
      </div>
    </BaseContainer>
  </div>
</template>
<script setup lang="ts">
interface FooterSection {
  title: string;
  links: { label: string; to: string }[];
}
const { t } = useI18n();
const footerSections = computed<FooterSection[]>(() => [
  {
    title: t("AppNavbar.legalSupport"),
    links: [
      { label: t("AppNavbar.termsConditions"), to: "/about/terms-conditions" },
      { label: t("AppNavbar.privacyPolicy"), to: "/about/privacy-policy" },
      {
        label: t("AppNavbar.refundCancellationPolicy"),
        to: "/about/refund-cancellation-policy",
      },
      { label: t("AppNavbar.faqs"), to: "/faqs" },
      { label: t("AppNavbar.aboutUs"), to: "/about/about-us" },
      { label: t("AppNavbar.contactUs"), to: "/contact" },
    ],
  },
  {
    title: t("AppNavbar.adventures"),
    links: [
      {
        label: t("AppNavbar.dirtBikeRental"),
        to: "/adventures/dirtBikeRental",
      },
      {
        label: t("AppNavbar.duneBuggyTours"),
        to: "/adventures/duneBuggyTours",
      },
      {
        label: t("AppNavbar.quadBikingTours"),
        to: "/adventures/quadBikingTours",
      },
    ],
  },
  {
    title: t("AppNavbar.activities"),
    links: [
      { label: t("AppNavbar.paintball"), to: "/activities/paintball" },
      { label: t("AppNavbar.karting"), to: "/activities/karting" },
      { label: t("AppNavbar.motoMiniGp"), to: "/activities/MotoMiniGp" },
      { label: t("AppNavbar.camelRide"), to: "/activities/camel-ride" },
    ],
  },
  {
    title: t("AppNavbar.events"),
    links: [
      { label: t("AppNavbar.groupCorporate"), to: "/events/groupsCorporate" },
      { label: t("AppNavbar.birthday"), to: "/events/birthday" },
    ],
  },
]);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>
