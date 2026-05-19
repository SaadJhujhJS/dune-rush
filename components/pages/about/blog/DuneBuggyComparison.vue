<template>
  <BaseContainer>
    <div class="py-10 sm:py-20">
      <!-- Title -->
      <p
        class="mb-5 sm:mb-10 text-center text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
      >
        {{ $t("blog8.title") }}
        <span class="text-[#CE1D1F]">{{ $t("blog8.titleBold") }}</span>
        {{ $t("blog8.titleLeft") }}
      </p>
      <!-- Intro -->
      <div>
        <p class="mb-4 md:text-lg">
          {{ $t("blog8.intro.paragraph1") }}
          <span class="font-semibold text-[#CE1D1F]">
            {{ $t("blog8.intro.highlight1") }}
          </span>
          {{ $t("blog8.intro.paragraph2") }}
        </p>
        <p class="mb-4 md:text-lg">
          {{ $t("blog8.intro.paragraph3") }}
          <span class="font-semibold text-[#CE1D1F]">
            {{ $t("blog8.intro.highlight2") }}
          </span>
          {{ $t("blog8.intro.paragraph3Left") }}
        </p>
      </div>

      <div class="space-y-6">
        <div>
        <h2 class="text-xl font-semibold mb-3">
          {{ $t("blog8.reason1.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("blog8.reason1.titleNext")
          }}</span>
        </h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>
            {{ $t("blog8.reason1.lists.one") }}
            <span class="font-semibold">{{
              $t("blog8.reason1.lists.oneLeft")
            }}</span>
          </li>
          <li>
            {{ $t("blog8.reason1.lists.two") }}
            <span class="font-semibold">{{
              $t("blog8.reason1.lists.twoBold")
            }}</span>
            {{ $t("blog8.reason1.lists.twoLeft") }}
          </li>
          <li>
            {{ $t("blog8.reason1.lists.three") }}
            <span class="font-semibold">{{
              $t("blog8.reason1.lists.threeBold")
            }}</span>
            {{ $t("blog8.reason1.lists.threeLeft") }}
          </li>
          <li>
            {{ $t("blog8.reason1.lists.four") }}
            <span class="font-semibold">{{
              $t("blog8.reason1.lists.fourLeft")
            }}</span>
          </li>
        </ul>
        <p class="mt-3">{{ $t("blog8.reason1.paragraph") }}</p>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-3">
          {{ $t("blog8.reason2.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("blog8.reason2.titleNext")
          }}</span>
        </h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>
            {{ $t("blog8.reason2.lists.one") }}
            <span class="font-semibold">{{
              $t("blog8.reason2.lists.oneBold")
            }}</span>
            {{ $t("blog8.reason2.lists.oneLeft") }}
          </li>
          <li>
            {{ $t("blog8.reason2.lists.two") }}
            <span class="font-semibold">{{
              $t("blog8.reason2.lists.twoBold")
            }}</span>
            {{ $t("blog8.reason2.lists.twoLeft") }}
          </li>
          <li>
            {{ $t("blog8.reason2.lists.three") }}
            <span class="font-semibold">{{
              $t("blog8.reason2.lists.threeBold")
            }}</span>
            {{ $t("blog8.reason2.lists.threeLeft") }}
          </li>
          <li>
            {{ $t("blog8.reason2.lists.four") }}
            <span class="font-semibold">{{
              $t("blog8.reason2.lists.fourBold")
            }}</span>
            {{ $t("blog8.reason2.lists.fourLeft") }}
          </li>
        </ul>
        <p class="mt-3">{{ $t("blog8.reason2.paragraph") }}</p>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-3">
          {{ $t("blog8.reason3.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("blog8.reason3.titleNext")
          }}</span>
        </h2>
        <p class="">
          {{ $t("blog8.reason3.paragraph1") }}
        </p>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-3">
          {{ $t("blog8.reason4.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("blog8.reason4.titleNext")
          }}</span>
        </h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>
            <span class="font-semibold">
              {{ $t("blog8.reason4.lists.one") }}</span
            >
            <span>{{ $t("blog8.reason4.lists.oneLeft") }}</span>
          </li>
          <li>
            <span class="font-semibold">
              {{ $t("blog8.reason4.lists.two") }}</span
            >
            <span>{{ $t("blog8.reason4.lists.twoLeft") }}</span>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-3">
          {{ $t("blog8.cta.title") }}
          <span class="text-[#CE1D1F]">{{ $t("blog8.cta.titleBold") }}</span>
        </h2>
        <p class="mb-4">
          {{ $t("blog8.cta.paragraph1") }}
        </p>
        <p>
          {{ $t("blog8.cta.highlight1") }}
        </p>
      </div>
      </div>      
    </div>
  </BaseContainer>
</template>
