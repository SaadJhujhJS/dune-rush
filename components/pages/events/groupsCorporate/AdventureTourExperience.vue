<template>
  <BaseContainer>
    <div
      class="flex flex-col lg:flex-row justify-between gap-x-12 gap-y-6 mb-10 md:mb-16 lg:mb-22.5"
    >
      <div
        class="w-full lg:w-[50%] flex flex-col items-start gap-3.5 order-1 lg:order-none"
      >
        <h2 class="text-2xl sm:text-[34.32px] font-bold text-[#0C0C0C]">
          <i class="text-[#CE1D1F]">{{ $t("groupsCorporate.duneRush") }}</i>
          {{ $t("groupsCorporate.adventureTourExperience") }}
        </h2>
        <p class="text-[#0E0E0E]">
          {{ $t("groupsCorporate.experienceDescription") }}
        </p>
      </div>
      <div>
        <img
          src="/images/eventmedia/adventure-experience-image.webp"
          alt="adventure-experience-image"
          class="w-full h-auto lg:w-[545.25px] lg:h-[455px] object-cover rounded-[22.5px]"
        />
      </div>
    </div>
  </BaseContainer>
</template>
