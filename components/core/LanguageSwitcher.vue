<template>
  <div class="relative z-50">
    <button
      @click="showDropdown = !showDropdown"
      class="flex items-center hover:bg-gray-100 rounded transition cursor-pointer bg-white p-2"
    >
      <img
        :src="currentLang.flag"
        class="w-5 h-5 mr-2 rounded-sm"
        alt="Current Flag"
      />
      <span>{{ currentLang.name }}</span>

      <span
        :class="[
          'ml-2 mt-1 w-4 h-4 transform transition-transform duration-300',
          showDropdown ? 'rotate-180' : '',
        ]"
      >
        <IconArrowDown />
      </span>
    </button>

    <div
      v-if="showDropdown"
      class="absolute left-0 sm:right-0 mt-3 w-40 bg-white rounded-md shadow-2xl drop-shadow-2xl"
    >
      <ul class="py-1">
        <li
          v-for="lang in languages"
          :key="lang.code"
          @click="switchLocale(lang.code)"
          class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          <img :src="lang.flag" class="w-5 h-5 mr-2 rounded-sm" alt="Flag" />
          <span>{{ lang.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import IconArrowDown from "../icons/IconArrowDown.vue";

const { locale } = useI18n();
const showDropdown = ref(false);

const { $i18n } = useNuxtApp();

const languages = [
  { code: "en", name: "English", flag: "https://flagcdn.com/w40/us.png" },
  { code: "fr", name: "Français", flag: "https://flagcdn.com/w40/fr.png" },
  { code: "ar", name: "العربية", flag: "https://flagcdn.com/w40/sa.png" },
  { code: "gr", name: "German", flag: "https://flagcdn.com/w40/de.png" },
  { code: "ru", name: "Russian", flag: "https://flagcdn.com/w40/ru.png" },
  { code: "ch", name: "Chinese", flag: "https://flagcdn.com/w40/cn.png" },
];

const switchLocale = (code: string) => {
  //locale.value = code;
  $i18n.setLocale(code as "en" | "fr" | "ar" | "gr" | "ru" | "ch" );
  showDropdown.value = false;
};

const currentLang = computed(
  () => languages.find((lang) => lang.code === locale.value) || languages[0]
);
</script>
