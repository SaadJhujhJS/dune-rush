<template>
  <div
    class="fixed right-0 top-0 z-40 w-full flex items-center justify-center bg-white shadow-lg"
  >
    <BaseContainer>
      <div class="flex justify-between items-center py-2.5 relative">
        <div class="md:hidden flex items-center gap-2">
          <button :aria-label="isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu' " name="toggle-button" class="cursor-pointer">
            <span v-if="!isMobileMenuOpen" @click="toggleMobileMenu"
              ><IconHamburger
            /></span>
            <span
              v-else
              :class="[isMobileMenuOpen ? 'opacity-70' : '']"
              @click="closeMobileMenu"
              ><IconClose
            /></span>
          </button>
          <NuxtLinkLocale
            aria-label="explore"
            title="explore"
            to="/"
            :class="[
              'font-semibold text-lg md:hidden',
              isMobileMenuOpen ? 'opacity-50' : '',
            ]"
            >{{ $t("homePage.explore") }}</NuxtLinkLocale
          >
        </div>
        <div>
          <NuxtLinkLocale
            aria-label="dune rush logo"
            title="dune rush logo"
            to="/"
          >
            <img
              src="/public/images/logo.png"
              alt="logo"
              class="hidden md:block object-contain cursor-pointer"
            />
          </NuxtLinkLocale>
        </div>
        <!-- Desktop Menu -->
        <div class="hidden xl:block">
          <ul class="flex items-center gap-[30px] list-none">
            <li
              v-for="(link, index) in navbarLinks"
              :key="index"
              @mouseenter="openDropdown = index"
              @mouseleave="openDropdown = null"
              class="relative"
            >
              <NuxtLinkLocale
                :to="link.to"
                :aria-label="link.pages"
                :title="link.pages"
                :class="[
                  'flex justify-center items-center gap-2 text-[13.5px] cursor-pointer',
                  route.path === link.to ? 'font-semibold' : 'font-normal',
                ]"
                @click="link.subpages ? $event.preventDefault() : null"
              >
                {{ link.pages }}
                <IconArrowDown
                  v-if="link.subpages"
                  :class="[
                    'w-3.5 h-3.5 transition-transform duration-300',
                    openDropdown === index ? 'rotate-180' : '',
                  ]"
                />
              </NuxtLinkLocale>
              <!-- Dropdown Menu -->
              <ul
                v-if="link.subpages && openDropdown === index"
                :class="[
                  'mt-4',
                  link.pages !== t('AppNavbar.adventures') &&
                  link.pages !== t('AppNavbar.activities')
                    ? 'absolute left-0 bg-[#CE1D1F] rounded-xl shadow-lg py-9 px-5 w-[240px] z-30'
                    : 'xl:hidden',
                ]"
              >
                <li
                  v-for="(child, idx) in link.subpages"
                  :key="idx"
                  @click="openDropdown = null"
                  class="flex flex-col gap-3 text-[#DDDDDD] hover:text-white text-[15px] font-normal"
                >
                  <NuxtLinkLocale
                    :aria-label="child.name"
                    :title="child.name"
                    :to="child.to"
                    >{{ child.name }}</NuxtLinkLocale
                  >
                  <div
                    v-if="idx !== link.subpages.length - 1"
                    class="w-[170px] border border-[#CCCCCC] mb-3"
                  ></div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- Desktop Buttons -->
        <div
          class="hidden md:flex justify-center items-center gap-5 ml-auto xl:ml-0"
        >
          <NuxtLinkLocale to="/contact">
            <button
            name="book online"
              class="flex items-center justify-center gap-1.5 text-[11.45px] py-[10.5px] px-[32.45px] font-semibold text-[#FFFFFF] bg-[#CE1D1F] rounded-[95.44px] cursor-pointer transition shine"
            >
              {{ $t("homePage.bookOnline") }} <IconButtonArrow />
            </button>
          </NuxtLinkLocale>
          <div class="hidden md:flex items-center justify-end">
            <LanguageSwitcher />
          </div>
          <button :aria-label="isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'" name="toggle button" class="xl:hidden block cursor-pointer">
            <span v-if="!isMobileMenuOpen" @click="toggleMobileMenu"
              ><IconHamburger
            /></span>
            <span v-else @click="closeMobileMenu"><IconClose /></span>
          </button>
        </div>
        <div>
          <NuxtLinkLocale aria-label="dune rush mobile logo" to="/">
            <img
              src="/public/images/logo.png"
              alt="logo"
              class="block md:hidden object-contain cursor-pointer"
            />
          </NuxtLinkLocale>
        </div>
      </div>
      <div
        v-if="openDropdown === adventureIndex"
        class="absolute w-full top-12 pt-12 left-0 z-30 hidden xl:block"
        :class="['mt-1']"
        @mouseenter="openDropdown = adventureIndex"
        @mouseleave="openDropdown = null"
      >
        <AdventuresDropDown @close-dropdown="openDropdown = null" />
      </div>
      <div
        v-if="openDropdown === activityIndex"
        class="absolute w-full top-12 pt-12 left-0 z-30 hidden xl:block"
        :class="['mt-1']"
        @mouseenter="openDropdown = activityIndex"
        @mouseleave="openDropdown = null"
      >
        <ActivityDropDown @close-dropdown="openDropdown = null" />
      </div>
      <!-- Side -->
      <div
        :class="[
          'fixed top-21 right-0 w-full h-full bg-white shadow-xl transition-transform duration-300 z-50 xl:hidden',
          isMobileMenuOpen ? '-translate-x-0' : '-translate-x-full',
        ]"
      >
        <div
          class="flex justify-between items-center px-4 border-b border-gray-200"
        ></div>

        <div class="flex flex-col gap-8 p-4 sm:px-14">
          <div class="md:hidden flex items-center justify-start">
            <LanguageSwitcher />
          </div>
          <ul class="flex flex-col gap-4">
            <li v-for="(link, index) in navbarLinks" :key="index">
              <div
                @click="toggleDropdown(index)"
                class="flex justify-between items-center cursor-pointer"
              >
                <NuxtLinkLocale
                  :to="link.to"
                  @click="
                    () => {
                      if (!link.subpages) {
                        closeMobileMenu();
                      }
                    }
                  "
                  class="text-[15px] font-semibold text-[#CE1D1F]"
                  >{{ link.pages }}</NuxtLinkLocale
                >
                <IconArrowDown
                  v-if="link.subpages"
                  :class="[
                    'w-4 h-4 transform transition-transform',
                    openDropdown === index ? 'rotate-180' : '',
                  ]"
                />
              </div>
              <ul
                v-if="link.subpages && openDropdown === index"
                class="pl-4 mt-2"
              >
                <li
                  v-for="(child, idx) in link.subpages"
                  :key="idx"
                  @click="closeMobileMenu"
                  class="text-sm text-[#CE1D1F] mb-2 hover:underline"
                >
                  <NuxtLinkLocale :to="child.to">{{
                    child.name
                  }}</NuxtLinkLocale>
                </li>
              </ul>
            </li>
          </ul>
          <div>
            <button
              @click="closeMobileMenu"
              name="book online"
              class="md:hidden block text-[11.45px] py-[10.5px] px-[32.45px] font-semibold text-[#FFFFFF] bg-[#CE1D1F] rounded-[95.44px] cursor-pointer transition shine"
            >
              {{ $t("homePage.bookOnline") }}
            </button>
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import LanguageSwitcher from "~/components/core/LanguageSwitcher.vue";
const { t } = useI18n();
const route = useRoute();

const navbarLinks = computed(() => [
  { pages: t("AppNavbar.home"), to: "/" },
  {
    pages: t("AppNavbar.adventures"),
    to: "/adventures/dirtBikeRental", // Default to first adventure page
    subpages: [
      { name: t("AppNavbar.dirtBikeRental"), to: "/adventures/dirtBikeRental" },
      { name: t("AppNavbar.duneBuggyTours"), to: "/adventures/duneBuggyTours" },
      {
        name: t("AppNavbar.quadBikingTours"),
        to: "/adventures/quadBikingTours",
      },
    ],
  },
  {
    pages: t("AppNavbar.activities"),
    to: "/activities/paintball", // Default to first activity page
    subpages: [
      { name: t("AppNavbar.paintball"), to: "/activities/paintball" },
      { name: t("AppNavbar.karting"), to: "/activities/karting" },
      { name: t("AppNavbar.motoMiniGp"), to: "/activities/MotoMiniGp" },
      { name: t("AppNavbar.camelRide"), to: "/activities/camel-ride" },
    ],
  },
  {
    pages: t("AppNavbar.events"),
    to: "/events/groupsCorporate", // Default to first event page
    subpages: [
      { name: t("AppNavbar.groupCorporate"), to: "/events/groupsCorporate" },
      { name: t("AppNavbar.birthday"), to: "/events/birthday" },
    ],
  },
  { pages: t("AppNavbar.gallery"), to: "/gallery" },
  { pages: t("AppNavbar.faqs"), to: "/faqs" },
  {
    pages: t("AppNavbar.about"),
    to: "/about/about-us", // Default to about us page
    subpages: [
      { name: t("AppNavbar.aboutUs"), to: "/about/about-us" },
      { name: t("AppNavbar.blog"), to: "/about/blog" },
      { name: t("AppNavbar.termsConditions"), to: "/about/terms-conditions" },
      {
        name: t("AppNavbar.refundCancellationPolicy"),
        to: "/about/refund-cancellation-policy",
      },
      { name: t("AppNavbar.privacyPolicy"), to: "/about/privacy-policy" },
    ],
  },
  { pages: t("AppNavbar.contactUs"), to: "/contact" },
]);

const localePath = useLocalePath();
const isMobileMenuOpen = ref(false);
const openDropdown = ref<number | null>(null);

function toggleMobileMenu() {
  isMobileMenuOpen.value = true;
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
  openDropdown.value = null;
}

function toggleDropdown(index: number) {
  openDropdown.value = openDropdown.value === index ? null : index;
}

const adventureIndex = computed(() =>
  navbarLinks.value.findIndex(
    (link) => link.pages === t("AppNavbar.adventures")
  )
);

const activityIndex = computed(() =>
  navbarLinks.value.findIndex(
    (link) => link.pages === t("AppNavbar.activities")
  )
);
</script>
<style scoped>
li.relative:hover ul::before {
  content: "";
  position: absolute;
  top: -16px;
  left: 0;
  width: 100%;
  height: 16px;
}
</style>
