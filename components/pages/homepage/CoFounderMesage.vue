<template>
  <BaseContainer>
    <div class="flex flex-col-reverse lg:flex-row gap-4 xl:gap-11 mb-27.5">
      <div class="w-full lg:w-2/3 flex flex-col gap-4 lg:gap-7.5">
        <div class="flex flex-col gap-4 lg:gap-6 text-[#0C0C0C]">
          <h2 class="text-2xl md:text-[34.32px] font-bold pb-3 md:pb-5">
            <span
              class="italic font-semibold text-[#CE1D1F] pb-3 md:pb-5 border-b-2 border-[#CE1D1F]"
              >{{ $t("directors.coFounder") }}</span
            >
            {{ $t("directors.coFounderMessage") }}
          </h2>
          <div>
            <p class="font-normal">
              {{ $t("directors.coFounderDescription1") }}
              <br />
              {{ $t("directors.coFounderDescription2") }}
              <br />
              {{ $t("directors.coFounderDescription3") }}
            </p>
            <p class="mt-2 font-semibold">{{ $t("directors.weLook") }}</p>
          </div>
        </div>
        <div>
          <h3 class="text-2xl font-bold sm:text-3xl">
            {{ $t("directors.coFounderName") }}
          </h3>
          <h4
            class="text-xl font-semibold sm:font-bold text-[#CE1D1F] mt-1 md:mt-1.5"
          >
            {{ $t("directors.coFounderDesignation") }}
          </h4>
        </div>
      </div>
      <div>
        <img
          src="/public/images/directors/Co-Founder Ammar Shahid.webp"
          alt="Co Founder"
          class="w-[480px] h-[517px] rounded-[22.5px] object-cover"
        />
      </div>
    </div>
  </BaseContainer>
</template>
