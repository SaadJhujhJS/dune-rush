<template>
  <section
    class="size-full mt-16 lg:mt-24"
    aria-labelledby="outdoor-excursions-heading"
  >
    <BaseContainer>
      <div class="flex flex-col lg:flex-row gap-x-12 gap-y-6">
        <div
          class="w-full lg:w-[60%] flex flex-col items-start gap-3.5 order-1 lg:order-none"
        >
          <h2
            id="outdoor-excursions-heading"
            class="text-2xl sm:text-[34.32px] font-bold text-[#0C0C0C] leading-tight"
          >
            {{ $t("homePage.trustyCompanion") }}
            <i class="text-[#CE1D1F]">{{ $t("homePage.outdoor") }}</i>
          </h2>
          <div class="font-normal text-[#0E0E0E]">
            <p class="mb-2">
              {{ $t("homePage.at") }}
              <span class="font-bold">{{
                $t("homePage.duneRushAdventure")
              }}</span
              >, {{ $t("homePage.description2") }}
            </p>
            <p class="mb-2">{{ $t("homePage.description3") }}</p>
            <p>{{ $t("homePage.description4") }}</p>
          </div>
          <NuxtLinkLocale
            to="/contact"
            aria-label="Book your outdoor adventure excursion"
            class="flex items-center justify-center gap-2.5 mt-3.5 py-3 px-4 min-h-[44px] min-w-[50px] text-sm font-semibold text-white bg-[#CE1D1F] rounded-full cursor-pointer w-fit transition shine"
          >
            {{ $t("homePage.bookNow") }}
            <IconButtonArrow />
          </NuxtLinkLocale>
        </div>
        <div>
          <img
            src="/images/trusty-companion.webp"
            alt="Outdoor adventure excursions with professional guides and well-maintained vehicles in the desert"
            class="w-full h-auto lg:h-[454px] lg:w-[545px] object-cover mt-20 lg:mt-2 rounded-[22.5px]"
            loading="lazy"
          />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
