<template>
  <div>
    <AppNavbar />
    <a
      :href="whatsappLink"
      target="_blank"
      aria-label="whatsapp"
      title="whatsapp"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-[9999] cursor-pointer hover:scale-105 transition-transform"
    >
      <IconWhatsapp :width="30" :height="30" class="block md:hidden" />
      <IconWhatsapp class="hidden md:block" />
    </a>
    <slot></slot>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import IconWhatsapp from "~/components/icons/IconWhatsapp.vue";

const phone = "971567075765";
const text = encodeURIComponent("Hello! I want to inquire about your services.");
const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
</script>
