<template>
  <div class="py-10 sm:py-20">
    <p class="mb-4 sm:mb-6 text-3xl md:text-[34.32px] font-bold text-[#0C0C0C] text-center">
      <span class="text-[#CE1D1F]">{{
        $t("beginnerDesertAdventure.titleBold")
      }}</span
      >{{ $t("beginnerDesertAdventure.title") }}
    </p>
    <p class="mb-4 sm:mb-6 md:text-lg">
      {{ $t("beginnerDesertAdventure.intro.paragraph1") }}
    </p>
    <p class="mb-4 sm:mb-6 md:text-lg">
      {{ $t("beginnerDesertAdventure.intro.paragraph2") }}
      <span class="font-semibold">{{
        $t("beginnerDesertAdventure.intro.highlight1")
      }}</span
      >.
    </p>
    <div class="grid gap-6">
      <div>
        <h2 class="text-xl font-bold mb-2">
          {{ $t("beginnerDesertAdventure.section1.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("beginnerDesertAdventure.section1.titleBold")
          }}</span>
        </h2>
        <p class="mb-2">
          {{ $t("beginnerDesertAdventure.section1.paragraph1") }}
        </p>
        <p>{{ $t("beginnerDesertAdventure.section1.paragraph2") }}</p>
      </div>

      <div>
        <h2 class="text-xl font-bold mb-2">
          {{ $t("beginnerDesertAdventure.section2.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("beginnerDesertAdventure.section2.titleBold")
          }}</span>
        </h2>
        <p>
          {{ $t("beginnerDesertAdventure.section2.paragraph1") }}
        </p>
        <ul class="list-disc list-inside ml-4">
          <li>
            {{ $t("beginnerDesertAdventure.section2.list.item1") }}
          </li>
          <li>
            {{ $t("beginnerDesertAdventure.section2.list.item2") }}
          </li>
          <li>
            {{ $t("beginnerDesertAdventure.section2.list.item3") }}
          </li>
        </ul>
        <p>
          {{ $t("beginnerDesertAdventure.section2.paragraph2") }}
        </p>
      </div>

      <div>
        <h2 class="text-xl font-bold mb-2">
          {{ $t("beginnerDesertAdventure.section3.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("beginnerDesertAdventure.section3.titleBold")
          }}</span>
        </h2>
        <p>
          {{ $t("beginnerDesertAdventure.section3.paragraph1") }}
        </p>
        <ul class="list-disc list-inside ml-4">
          <li>
            {{ $t("beginnerDesertAdventure.section3.list.item1") }}
          </li>
          <li>
            {{ $t("beginnerDesertAdventure.section3.list.item2") }}
          </li>
          <li>
            {{ $t("beginnerDesertAdventure.section3.list.item3") }}
          </li>
        </ul>
        <p>
          {{ $t("beginnerDesertAdventure.section3.paragraph2") }}
        </p>
      </div>

      <div>
        <h2 class="text-xl font-bold mb-2">
          {{ $t("beginnerDesertAdventure.section4.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("beginnerDesertAdventure.section4.titleBold")
          }}</span>
        </h2>
        <p>
          {{ $t("beginnerDesertAdventure.section4.paragraph1") }}
        </p>
        <p>
          {{ $t("beginnerDesertAdventure.section4.paragraph2") }}
        </p>
        <ul class="list-disc list-inside ml-4">
          <li>
            {{ $t("beginnerDesertAdventure.section4.list.item1") }}
          </li>
          <li>
            {{ $t("beginnerDesertAdventure.section4.list.item2") }}
          </li>
        </ul>
      </div>

      <div>
        <h2 class="text-xl font-bold mb-2">
          {{ $t("beginnerDesertAdventure.section5.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("beginnerDesertAdventure.section5.titleBold")
          }}</span>
        </h2>
        <p>
          {{ $t("beginnerDesertAdventure.section5.paragraph1") }}
        </p>
        <ul class="list-disc list-inside ml-4">
          <li>
            {{ $t("beginnerDesertAdventure.section5.list.item1") }}
          </li>
          <li>
            {{ $t("beginnerDesertAdventure.section5.list.item2") }}
          </li>
          <li>
            {{ $t("beginnerDesertAdventure.section5.list.item3") }}
          </li>
          <li>
            {{ $t("beginnerDesertAdventure.section5.list.item4") }}
          </li>
        </ul>
        <p>
          {{ $t("beginnerDesertAdventure.section5.paragraph2") }}
        </p>
      </div>
    </div>

    <div class="mt-4">
      <p class="text-xl font-semibold">
        {{ $t("beginnerDesertAdventure.cta.title") }}
        <span class="text-[#CE1D1F]">{{
          $t("beginnerDesertAdventure.cta.titleBold")
        }}</span>
      </p>
      <p class="mt-2">
        {{ $t("beginnerDesertAdventure.cta.paragraph1") }}
      </p>
      <p class="mt-2">
        <span class="font-semibold">{{
          $t("beginnerDesertAdventure.cta.bookNow")
        }}</span>
        {{ $t("beginnerDesertAdventure.cta.paragraph2") }}
      </p>
    </div>
  </div>
</template>
