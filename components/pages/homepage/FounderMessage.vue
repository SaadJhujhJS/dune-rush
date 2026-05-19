<template>
  <BaseContainer>
    <div class="flex flex-col lg:flex-row gap-4 xl:gap-11 mt-27.5 mb-17.5">
      <div>
        <img
          src="/images/directors/Founder Saqib Aziz Bajwa.webp"
          alt="Founder"
          class="w-[480px] h-[517px] rounded-[22.5px] object-cover"
        />
      </div>
      <div class="w-full lg:w-2/3 flex flex-col gap-4 lg:gap-7.5">
        <div class="flex flex-col gap-4 lg:gap-6 text-[#0C0C0C]">
          <h2 class="text-2xl md:text-[34.32px] font-bold pb-3 md:pb-5">
            <span
              class="italic font-semibold text-[#CE1D1F] pb-3 md:pb-5 border-b-2 border-[#CE1D1F]"
              >{{ $t("directors.founder") }}</span
            >
            {{ $t("directors.founderMessage") }}
          </h2>
          <div>
            <p class="font-normal">
              {{ $t("directors.founderDescription1") }}
              <br />
              {{ $t("directors.founderDescription2") }}
              <br />
              {{ $t("directors.founderDescription3") }}
            </p>
            <p class="mt-2 font-semibold">{{ $t("directors.join") }}</p>
          </div>
        </div>
        <div>
          <h3 class="text-2xl font-bold sm:text-3xl">
            {{ $t("directors.founderName") }}
          </h3>
          <h4
            class="text-xl font-semibold sm:font-bold text-[#CE1D1F] mt-1 md:mt-1.5"
          >
            {{ $t("directors.founderDesignation") }}
          </h4>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
