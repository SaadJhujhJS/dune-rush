<template>
  <BaseContainer>
    <div class="py-10 sm:py-20">
      <!-- Title -->
      <p
        class="mb-5 sm:mb-10 text-center text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
      >
        {{ $t("blog9.title") }}
        <span class="italic font-semibold text-[#CE1D1F]">
          {{ $t("blog9.titleBold") }}
        </span>
      </p>

      <!-- Intro -->
      <p class="mb-4 md:text-lg">
        {{ $t("blog9.intro.paragraph1") }}
        <span class="font-semibold">{{
          $t("blog9.intro.highlight1")
        }}</span>
        {{ $t("blog9.intro.paragraph2") }}
      </p>

      <div class="space-y-6">
        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog9.reason1.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog9.reason1.titleNext")
            }}</span>
          </h2>
          <p>
            {{ $t("blog9.reason1.paragraph1") }}
          </p>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog9.reason2.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog9.reason2.titleNext")
            }}</span>
          </h2>
          <p>
            {{ $t("blog9.reason2.paragraph1") }}
          </p>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog9.reason3.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog9.reason3.titleNext")
            }}</span>
          </h2>
          <p>
            {{ $t("blog9.reason3.paragraph1") }}
          </p>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog9.reason4.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog9.reason4.titleNext")
            }}</span>
          </h2>
          <p>
            {{ $t("blog9.reason4.paragraph1") }}
          </p>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog9.reason5.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog9.reason5.titleNext")
            }}</span>
          </h2>
          <p>
            {{ $t("blog9.reason5.paragraph1") }}
          </p>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog9.reason6.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog9.reason6.titleNext")
            }}</span>
          </h2>
          <p>
            {{ $t("blog9.reason6.paragraph1") }}
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog9.cta.title") }}
            <span class="text-[#CE1D1F]">{{ $t("blog9.cta.titleBold") }}</span>
          </h2>
          <p>
            {{ $t("blog9.cta.paragraph1") }}
          </p>
          <p class="mt-4">
            {{ $t("blog9.cta.highlight1") }}
          </p>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
