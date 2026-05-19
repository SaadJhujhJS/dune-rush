<template>
  <BaseContainer>
    <div>
      <div class="flex justify-center items-center mb-10 md:mb-12.5">
        <h2 class="text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]">
          <span class="italic font-semibold text-[#CE1D1F]"
            >{{ $t("homePage.quad") }}
          </span>
          {{ $t("homePage.biking") }}
        </h2>
      </div>
      <QuadBikingCard />
      <div class="flex justify-center items-center">
        <NuxtLinkLocale
          aria-label="View all quad bikes"
          title="quad biking"
          to="/adventures/quadBikingTours"
          class="flex justify-center items-center gap-5 md:gap-10 px-8 2xl:px-11.5 py-3 border-[1.04px] border-[#CE1D1F] rounded-[103.6px] text-sm font-semibold text-[#CE1D1F] cursor-pointer"
        >
          {{ $t("homePage.viewAll") }}
          <IconArrowRight color="#CE1D1F" />
        </NuxtLinkLocale>
      </div>
    </div>
  </BaseContainer>
</template>
