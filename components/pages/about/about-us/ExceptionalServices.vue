<template>
  <BaseContainer>
    <div class="my-12 md:my-20 lg:my-27.5">
      <div class="flex flex-col lg:flex-row gap-x-12 gap-y-6 mb-6 lg:mb-12.5">
        <div
          class="w-full lg:w-[60%] flex flex-col items-start justify-center gap-3.5 order-1 lg:order-none"
        >
          <h2
            class="text-2xl sm:text-[34.32px] font-bold text-[#0C0C0C] leading-tight"
          >
            {{ $t("teamDedicated.title1") }}
            <i class="text-[#CE1D1F]"> {{ $t("teamDedicated.title2") }} </i>
          </h2>
          <p class="font-normal text-[#0E0E0E]">
            {{ $t("teamDedicated.description1") }}
            <br class="hidden lg:block" />
            {{ $t("teamDedicated.description2") }}
          </p>
          <NuxtLinkLocale to="/contact">
            <button
              class="flex items-center justify-center gap-2.5 mt-4 md:mt-7.5 py-3 px-4 text-xs font-semibold border border-[#CE1D1F] text-white bg-[#CE1D1F] rounded-full cursor-pointer w-fit transition shine"
            >
              {{ $t("teamDedicated.bookNow") }} <IconButtonArrow />
            </button>
          </NuxtLinkLocale>
        </div>
        <div>
          <img
            src="/images/team-dedicating.webp"
            alt="outdoor-excursions"
            class="w-full h-auto lg:w-[555px] lg:h-[325px] object-cover lg:mt-2 rounded-[22.5px]"
          />
        </div>
      </div>
      <div class="w-full flex flex-col lg:flex-row gap-5">
        <div class="w-full lg:w-1/2 bg-[#F0F0F0] p-4 lg:p-8.5 rounded-[22px]">
          <h3 class="text-xl font-semibold text-[#CE1D1F] mb-3.5">
            {{ $t("statements.missiontitle") }}
          </h3>
          <p class="font-normal text-[#0E0E0E]">
            {{ $t("statements.missionDescription") }}
          </p>
        </div>
        <div class="w-full lg:w-1/2 bg-[#F0F0F0] p-4 lg:p-8.5 rounded-[22px]">
          <h3 class="text-xl font-semibold text-[#CE1D1F] mb-3.5">
            {{ $t("statements.visiontitle") }}
          </h3>
          <p class="font-normal text-[#0E0E0E]">
            {{ $t("statements.visionDescription") }}
          </p>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
