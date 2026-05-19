<template>
  <div class="py-10 space-y-6 text-[#0C0C0C]">
    <p class="mb-4 sm:mb-6 text-3xl md:text-[34.32px] font-bold text-[#0C0C0C] text-center">
      {{ $t("buggyTour.title") }}
      <span class="text-[#CE1D1F]">{{ $t("buggyTour.titleBold") }}</span>
    </p>
    <p class="mb-4 sm:mb-6 md:text-lg">
      {{ $t("buggyTour.letterA") }}
      <span class="font-semibold">{{ $t("buggyTour.descriptionBold") }}</span>
      {{ $t("buggyTour.description") }}
    </p>
    <p class="mb-4 sm:mb-6 md:text-lg">
      {{ $t("buggyTour.butBefore") }}
      <span class="font-semibold"> {{ $t("buggyTour.topThings") }} </span>
      {{ $t("buggyTour.make") }}
    </p>

    <div class="space-y-4">
      <div>
        <h2 class="text-xl font-semibold">
          {{ $t("buggyTour.section1.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("buggyTour.section1.titleBold")
          }}</span>
        </h2>
        <p>
          {{ $t("buggyTour.section1.paragraph1") }}
        </p>
        <ul class="list-disc list-inside ml-4">
          <li>{{ $t("buggyTour.section1.list.item1") }}</li>
          <li>{{ $t("buggyTour.section1.list.item2") }}</li>
          <li>{{ $t("buggyTour.section1.list.item3") }}</li>
        </ul>
        <p>
          {{ $t("buggyTour.section1.paragraph2") }}
        </p>
      </div>

      <div>
        <h2 class="text-xl font-semibold">
          {{ $t("buggyTour.section2.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("buggyTour.section2.titleBold")
          }}</span>
        </h2>
        <p>
          {{ $t("buggyTour.section2.paragraph1") }}
        </p>
        <p>
          {{ $t("buggyTour.section2.paragraph2") }}
        </p>
      </div>

      <div>
        <h2 class="text-xl font-semibold">
          {{ $t("buggyTour.section3.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("buggyTour.section3.titleBold")
          }}</span>
        </h2>
        <p>{{ $t("buggyTour.section3.paragraph1") }}</p>
        <ul class="list-disc list-inside ml-4">
          <li>{{ $t("buggyTour.section3.list.item1") }}</li>
          <li>{{ $t("buggyTour.section3.list.item2") }}</li>
          <li>{{ $t("buggyTour.section3.list.item3") }}</li>
        </ul>
        <p>{{ $t("buggyTour.section3.paragraph2") }}</p>
      </div>

      <div>
        <h2 class="text-xl font-semibold">
          {{ $t("buggyTour.section4.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("buggyTour.section4.titleBold")
          }}</span>
        </h2>
        <p>{{ $t("buggyTour.section4.paragraph1") }}</p>
        <ul class="list-disc list-inside ml-4">
          <li>{{ $t("buggyTour.section4.list.item1") }}</li>
          <li>{{ $t("buggyTour.section4.list.item2") }}</li>
          <li>{{ $t("buggyTour.section4.list.item3") }}</li>
        </ul>
        <p>{{ $t("buggyTour.section4.paragraph2") }}</p>
      </div>

      <div>
        <h2 class="text-xl font-semibold">
          {{ $t("buggyTour.section5.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("buggyTour.section5.titleBold")
          }}</span>
        </h2>
        <p>{{ $t("buggyTour.section5.paragraph1") }}</p>
        <ul class="list-disc list-inside ml-4">
          <li>{{ $t("buggyTour.section5.list.item1") }}</li>
          <li>{{ $t("buggyTour.section5.list.item2") }}</li>
          <li>{{ $t("buggyTour.section5.list.item3") }}</li>
        </ul>
        <p>{{ $t("buggyTour.section4.paragraph2") }}</p>
      </div>
    </div>

    <div class="mt-4 sm:mt-6">
      <h2 class="text-2xl font-bold">
        {{ $t("buggyTour.cta.title") }}
        <span class="text-[#CE1D1F]">{{ $t("buggyTour.cta.titleBold") }}</span>
      </h2>
      <p class="mt-2">
        {{ $t("buggyTour.cta.paragraph1") }}
      </p>
      <p class="mt-2">
        <span class="font-semibold">{{ $t("buggyTour.cta.bookNow") }}</span>
        {{ $t("buggyTour.cta.paragraph2") }}
      </p>
    </div>
  </div>
</template>
