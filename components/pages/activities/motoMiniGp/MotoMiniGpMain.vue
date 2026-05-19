<template>
  <BaseContainer>
    <div
      class="flex flex-col lg:flex-row justify-between gap-8 lg:gap-14.5 my-12 md:my-20 lg:my-27.5"
    >
      <div class="w-full lg:w-[40%] flex flex-col gap-6 lg:gap-10">
        <div class="flex flex-col gap-3.5">
          <div>
            <img
              src="/images/moto-mini-gp-image.webp"
              alt="Moto Mini GP"
              class="h-auto max-h-[340.5px] object-contain rounded-2xl mb-3"
            />
            <div class="mb-3">
              <h2 class="text-lg sm:text-2xl font-bold text-[#0C0C0C]">
                {{ $t("motoMiniGp.productName") }}
                <span class="text-[#CE1D1F]">{{ $t("motoMiniGp.title") }}</span>
              </h2>
            </div>
            <div>
              <p class="text-lg font-semibold mb-3">
                {{ $t("motoMiniGp.startingPrice") }}
              </p>
              <h3 class="text-[#CE1D1F]">
                <span class="text-3xl lg:text-[50px] font-bold">
                  {{ $t("motoMiniGp.price") }}
                </span>
                <span class="text-lg lg:text-3xl font-semibold text-[#0C0C0C]">
                  {{ $t("motoMiniGp.perVehcile") }}
                </span>
              </h3>
            </div>
          </div>
          <div>
            <p
              class="flex items-center gap-1 text-sm text-[#0C0C0C] font-normal mb-1"
            >
              <IconTime />
              <span class="font-medium">{{
                $t("motoMiniGp.tourDuration")
              }}</span>
              {{ $t("motoMiniGp.20min") }}
            </p>
            <p
              class="flex items-center gap-1 text-sm text-[#0C0C0C] font-normal"
            >
              <IconUsers />
              <span class="font-medium">{{ $t("motoMiniGp.players") }}</span>
              {{ $t("motoMiniGp.noOfSeats") }}
            </p>
          </div>
          <div class="text-[#0C0C0C]">
            <p class="text-2xl font-semibold mb-1">
              {{ $t("motoMiniGp.description") }}
            </p>
            <p>
              {{ $t("motoMiniGp.description2") }}
            </p>
          </div>
        </div>
        <div
          v-for="(section, index) in motoMiniGpSections"
          :key="index"
          class="flex flex-col gap-3"
        >
          <h4 class="text-3xl lg:text-[34px] font-bold text-[#0C0C0C] mb-2">
            {{ section.title }}
            <span class="text-[#CE1D1F]">{{ section.titleBold }}</span>
          </h4>
          <div
            v-for="(item, i) in section.items"
            :key="i"
            class="flex items-center gap-5"
          >
            <ul v-if="section.items.length > 1" class="list-disc list-inside">
              <li class="text-sm font-normal">{{ item }}</li>
            </ul>
            <p
              v-if="section.items.length === 1"
              class="text-sm font-normal"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-[50%]">
        <h5
          class="text-center mb-5.5 xl:mb-12.5 text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
        >
          {{ t("motoMiniGp.start") }}
          <i class="font-semibold text-[#CE1D1F]">
            {{ t("motoMiniGp.bookingNow") }}
          </i>
        </h5>
        <div class="bg-[#F0F0F0] rounded-2xl py-6 lg:py-8.5 px-7 lg:px-11">
          <div class="flex flex-col gap-4 lg:gap-6.5">
            <div>
              <input
                type="text"
                :placeholder="t('motoMiniGp.name')"
                class="w-full py-4 px-5.5 text-[#0C0C0C] placeholder-[#BFBFBF] bg-white border-[1.12px] border-[#BFBFBF] rounded-md focus:outline-none focus:border-[#CE1D1F]"
              />
            </div>
            <div>
              <vue-tel-input
                type="phone"
                :inputOptions="{
                  placeholder: t('motoMiniGp.phone'),
                }"
                class="w-full py-3 px-5.5 text-[#0C0C0C] !placeholder-[#BFBFBF] bg-white border-[1.12px] !border-[#BFBFBF] !rounded-md !outline-none focus-within:!border-[#CE1D1F] focus-within:!shadow-none"
              />
            </div>
            <div>
              <input
                type="email"
                :placeholder="t('motoMiniGp.email')"
                class="w-full py-4 px-5.5 text-[#0C0C0C] placeholder-[#BFBFBF] bg-white border-[1.12px] border-[#BFBFBF] rounded-md focus:outline-none focus:border-[#CE1D1F]"
              />
            </div>
            <div>
              <input
                type="date"
                :placeholder="t('motoMiniGp.date')"
                class="w-full py-4 px-5.5 text-gray-500 bg-white border-[1.12px] border-[#BFBFBF] rounded-md focus:outline-none focus:border-[#CE1D1F]"
              />
            </div>
            <div class="relative flex-1">
              <select
              aria-label="no of moto mini gp"
                :class="[
                  'appearance-none w-full py-4 px-5.5 border-[1.12px] border-[#BFBFBF] rounded-md bg-[white] text-[#0C0C0C] placeholder-[#BFBFBF] focus:outline-none focus:border-[#CE1D1F]',
                  NoOfmotoMiniGp === '' ? 'text-gray-500' : 'text-black',
                ]"
              >
                <option disabled selected>
                  {{ t("motoMiniGp.noOfVehicles") }}
                </option>
                <option>{{ t("motoMiniGp.1") }}</option>
                <option>{{ t("motoMiniGp.2") }}</option>
                <option>{{ t("motoMiniGp.3") }}</option>
                <option>{{ t("motoMiniGp.4") }}</option>
                <option>{{ t("motoMiniGp.5") }}</option>
                <option>{{ t("motoMiniGp.6") }}</option>
                <option>{{ t("motoMiniGp.7") }}</option>
                <option>{{ t("motoMiniGp.8") }}</option>
                <option>{{ t("motoMiniGp.9") }}</option>
                <option>{{ t("motoMiniGp.10") }}</option>
                <option>{{ t("motoMiniGp.11") }}</option>
                <option>{{ t("motoMiniGp.12") }}</option>
                <option>{{ t("motoMiniGp.13") }}</option>
                <option>{{ t("motoMiniGp.14") }}</option>
                <option>{{ t("motoMiniGp.15") }}</option>
                <option>{{ t("motoMiniGp.16") }}</option>
                <option>{{ t("motoMiniGp.17") }}</option>
                <option>{{ t("motoMiniGp.18") }}</option>
                <option>{{ t("motoMiniGp.19") }}</option>
                <option>{{ t("motoMiniGp.20") }}</option>
                <option>{{ t("motoMiniGp.21") }}</option>
                <option>{{ t("motoMiniGp.22") }}</option>
                <option>{{ t("motoMiniGp.23") }}</option>
                <option>{{ t("motoMiniGp.24") }}</option>
                <option>{{ t("motoMiniGp.25") }}</option>
              </select>
              <div
                class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black"
              >
                <IconArrowDown color="#131313" />
              </div>
            </div>
            <div class="flex justify-end items-center">
              <button
                class="w-fit flex items-center gap-2.5 px-7.5 py-3.5 mt-1 lg:mt-2 border-[1.13px] border-[#CE1D1F] bg-[#CE1D1F] rounded-[103.6px] font-semibold text-white cursor-pointer transition shine"
              >
                <span>{{ t("motoMiniGp.sendMessage") }}</span>
                <IconArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
<script setup lang="ts">
const NoOfPlayers = ref<string>("");
const NoOfmotoMiniGp = ref<string>("");

const { t } = useI18n();
const motoMiniGpSections = [
  {
    title: t("paintBall.keyFeatures.title"),
    titleBold: t("paintBall.keyFeatures.titleBold"),
    items: [
      t("motoMiniGp.keyFeatures.one"),
      t("motoMiniGp.keyFeatures.two"),
      t("motoMiniGp.keyFeatures.three"),
      t("motoMiniGp.keyFeatures.four"),
      t("motoMiniGp.keyFeatures.five"),
    ],
  },
  {
    title: t("paintBall.whatsIncluded.title"),
    titleBold: t("paintBall.whatsIncluded.titleBold"),
    items: [
      t("motoMiniGp.whatsIncluded.one"),
      t("motoMiniGp.whatsIncluded.two"),
      t("motoMiniGp.whatsIncluded.three"),
      t("motoMiniGp.whatsIncluded.four"),
    ],
  },
  {
    title: t("paintBall.callTo"),
    titleBold: t("paintBall.Action"),
    items: [t("motoMiniGp.callToActionDescription")],
  },
];
</script>
