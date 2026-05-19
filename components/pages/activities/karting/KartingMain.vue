<template>
  <BaseContainer>
    <div
      class="flex flex-col lg:flex-row justify-between gap-8 lg:gap-14.5 my-12 md:my-20 lg:my-27.5"
    >
      <div class="w-full lg:w-[40%] flex flex-col gap-6 lg:gap-10">
        <div class="flex flex-col gap-3.5">
          <div>
            <img
              src="/images/go-karting-image.webp"
              alt="GoKarting"
              class="h-auto max-h-[340.5px] object-contain rounded-2xl mb-3"
            />
            <div class="mb-3">
              <h2 class="text-lg sm:text-2xl font-bold text-[#0C0C0C]">
                {{ $t("karting.productName") }}
                <span class="text-[#CE1D1F]">{{ $t("karting.title") }}</span>
              </h2>
            </div>
            <div>
              <p class="text-lg font-semibold mb-3">
                {{ $t("karting.startingPrice") }}
              </p>
              <h3 class="text-[#CE1D1F]">
                <span class="text-3xl lg:text-[50px] font-bold">
                  {{ $t("karting.price") }}
                </span>
                <span class="text-lg lg:text-3xl font-semibold text-[#0C0C0C]">
                  {{ $t("karting.perVehcile") }}
                </span>
              </h3>
            </div>
          </div>
          <div>
            <p
              class="flex items-center gap-1 text-sm text-[#0C0C0C] font-normal mb-1"
            >
              <IconTime />
              <span class="font-medium">{{ $t("karting.tourDuration") }}</span>
              {{ $t("karting.20min") }} | {{ $t("karting.40min") }}
            </p>
            <p
              class="flex items-center gap-1 text-sm text-[#0C0C0C] font-normal"
            >
              <IconUsers />
              <span class="font-medium">{{ $t("karting.seats") }}</span>
              {{ $t("karting.noOfSeats") }}
            </p>
          </div>
          <div class="text-[#0C0C0C]">
            <p class="text-2xl font-semibold mb-1">
              {{ $t("karting.description") }}
            </p>
            <p>
              {{ $t("karting.description2") }}
            </p>
          </div>
        </div>
        <div
          v-for="(section, index) in kartingSections"
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
          {{ t("karting.start") }}
          <i class="font-semibold text-[#CE1D1F]">
            {{ t("karting.bookingNow") }}
          </i>
        </h5>
        <div class="bg-[#F0F0F0] rounded-2xl py-6 lg:py-8.5 px-7 lg:px-11">
          <div class="flex flex-col gap-4 lg:gap-6.5">
            <div>
              <input
                type="text"
                :placeholder="t('karting.name')"
                class="w-full py-4 px-5.5 text-[#0C0C0C] placeholder-[#BFBFBF] bg-white border-[1.12px] border-[#BFBFBF] rounded-md focus:outline-none focus:border-[#CE1D1F]"
              />
            </div>
            <div>
              <vue-tel-input
                type="phone"
                :inputOptions="{
                  placeholder: t('karting.phone'),
                }"
                class="w-full py-3 px-5.5 text-[#0C0C0C] !placeholder-[#BFBFBF] bg-white border-[1.12px] !border-[#BFBFBF] !rounded-md !outline-none focus-within:!border-[#CE1D1F] focus-within:!shadow-none"
              />
            </div>
            <div>
              <input
                type="email"
                :placeholder="t('karting.email')"
                class="w-full py-4 px-5.5 text-[#0C0C0C] placeholder-[#BFBFBF] bg-white border-[1.12px] border-[#BFBFBF] rounded-md focus:outline-none focus:border-[#CE1D1F]"
              />
            </div>
            <div>
              <input
                type="date"
                :placeholder="t('karting.date')"
                class="w-full py-4 px-5.5 text-gray-500 bg-white border-[1.12px] border-[#BFBFBF] rounded-md focus:outline-none focus:border-[#CE1D1F]"
              />
            </div>
            <div class="relative flex-1">
              <select
              aria-label="no of karting"
                :class="[
                  'appearance-none w-full py-4 px-5.5 border-[1.12px] border-[#BFBFBF] rounded-md bg-[white] text-[#0C0C0C] placeholder-[#BFBFBF] focus:outline-none focus:border-[#CE1D1F]',
                  NoOfkarting === '' ? 'text-gray-500' : 'text-black',
                ]"
              >
                <option disabled selected>
                  {{ t("karting.noOfVehicles") }}
                </option>
                <option>{{ t("karting.1") }}</option>
                <option>{{ t("karting.2") }}</option>
                <option>{{ t("karting.3") }}</option>
                <option>{{ t("karting.4") }}</option>
                <option>{{ t("karting.5") }}</option>
                <option>{{ t("karting.6") }}</option>
                <option>{{ t("karting.7") }}</option>
                <option>{{ t("karting.8") }}</option>
                <option>{{ t("karting.9") }}</option>
                <option>{{ t("karting.10") }}</option>
                <option>{{ t("karting.11") }}</option>
                <option>{{ t("karting.12") }}</option>
                <option>{{ t("karting.13") }}</option>
                <option>{{ t("karting.14") }}</option>
                <option>{{ t("karting.15") }}</option>
                <option>{{ t("karting.16") }}</option>
                <option>{{ t("karting.17") }}</option>
                <option>{{ t("karting.18") }}</option>
                <option>{{ t("karting.19") }}</option>
                <option>{{ t("karting.20") }}</option>
                <option>{{ t("karting.21") }}</option>
                <option>{{ t("karting.22") }}</option>
                <option>{{ t("karting.23") }}</option>
                <option>{{ t("karting.24") }}</option>
                <option>{{ t("karting.25") }}</option>
              </select>
              <div
                class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black"
              >
                <IconArrowDown color="#131313" />
              </div>
            </div>
            <div class="relative flex-1">
              <select
              aria-label="tour duration"
                :class="[
                  'appearance-none w-full py-4 px-5.5 border-[1.12px] border-[#BFBFBF] rounded-md bg-[white] text-[#0C0C0C] placeholder-[#BFBFBF] focus:outline-none focus:border-[#CE1D1F]',
                  NoOfPlayers === '' ? 'text-gray-500' : 'text-black',
                ]"
              >
                <option disabled selected class="text-[#BFBFBF]">
                  {{ t("karting.tourDurationForm") }}
                </option>
                <option>{{ t("karting.20min") }}</option>
                <option>{{ t("karting.40min") }}</option>
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
                <span>{{ t("karting.sendMessage") }}</span>
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
const NoOfkarting = ref<string>("");

const { t } = useI18n();
const kartingSections = [
  {
    title: t("paintBall.keyFeatures.title"),
    titleBold: t("paintBall.keyFeatures.titleBold"),
    items: [
      t("karting.keyFeatures.one"),
      t("karting.keyFeatures.two"),
      t("karting.keyFeatures.three"),
      t("karting.keyFeatures.four"),
      t("karting.keyFeatures.five"),
    ],
  },
  {
    title: t("paintBall.whatsIncluded.title"),
    titleBold: t("paintBall.whatsIncluded.titleBold"),
    items: [
      t("karting.whatsIncluded.one"),
      t("karting.whatsIncluded.two"),
      t("karting.whatsIncluded.three"),
    ],
  },
  {
    title: t("paintBall.callTo"),
    titleBold: t("paintBall.Action"),
    items: [t("karting.callToActionDescription")],
  },
];
</script>
