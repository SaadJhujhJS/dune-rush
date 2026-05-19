<template>
  <section
    class="relative w-full h-screen overflow-hidden"
    role="banner"
    aria-label="Hero section"
  >
    <img
      src="/images/homepage-banner.webp"
      alt="Dune Rush Adventure Tours - Desert landscape with ATV and dune buggy vehicles ready for adventure"
      class="absolute inset-0 h-full w-full object-cover"
      loading="eager"
      fetchpriority="high"
    />

    <div class="absolute inset-0 bg-black/60" aria-hidden="true"></div>

    <div class="relative z-10 text-white h-full flex items-center">
      <BaseContainer>
        <div class="flex flex-col items-start gap-4.5">
          <h1
            class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight"
          >
            {{ $t("homePage.subtitle1") }} <br />
            {{ $t("homePage.subtitle2") }}
          </h1>
          <p
            class="text-xs sm:text-sm lg:text-[21px] font-normal max-w-5xl leading-relaxed"
          >
            {{ $t("homePage.description") }}
          </p>
          <NuxtLinkLocale
            to="/contact"
            aria-label="Book your desert adventure tour"
          >
            <button
              name="book now"
              class="flex items-center justify-center gap-2.5 py-3 px-7 text-xs font-semibold bg-[#CE1D1F] rounded-full cursor-pointer w-fit transition shine"
              type="button"
            >
              {{ $t("homePage.bookNow") }} <IconButtonArrow />
            </button>
          </NuxtLinkLocale>
        </div>
      </BaseContainer>
    </div>
  </section>

  <!-- <div class="absolute -mt-14 left-1/2 -translate-x-1/2 z-20 w-full">
     <SearchRide />
  </div> -->
</template>
