<template>
  <BaseContainer>
    <div class="py-10 sm:py-20">
      <!-- Title -->
      <p
        class="mb-5 sm:mb-10 text-center text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
      >
        {{ $t("blog5.title") }}
        <span class="italic font-semibold text-[#CE1D1F]">
          {{ $t("blog5.titleBold") }}
        </span>
        {{ $t("blog5.titleLeft") }}
      </p>

      <!-- Intro -->
      <p class="mb-4 md:text-lg">
        {{ $t("blog5.intro.paragraph1") }}
        <span class="font-semibold">{{
          $t("blog5.intro.highlight1")
        }}</span
        >,
        {{ $t("blog5.intro.paragraph2") }}
        <span class="font-semibold">
            {{ $t("blog5.intro.paragraph2Remaining") }}
        </span>
      </p>
      <p class="mb-5 md:text-lg">
        {{ $t("blog5.intro.highlight2") }}
        {{ $t("blog5.intro.paragraph3") }}
      </p>

      <div class="space-y-6">
        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog5.reason1.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog5.reason1.titleNext")
            }}</span>
          </h2>
          <p>
            {{ $t("blog5.reason1.paragraph1") }}
            <span class="font-semibold">{{
              $t("blog5.reason1.highlight1")
            }}</span
            >{{ $t("blog5.reason1.paragraph1Remaining") }}
            {{ $t("blog5.reason1.paragraph1Next") }}
            {{ $t("blog5.reason1.paragraph2") }}
            {{ $t("blog5.reason1.highlight2") }}
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog5.reason2.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog5.reason2.titleNext")
            }}</span>
          </h2>
          <p>
            {{ $t("blog5.reason2.paragraph1") }}
            <span class="font-semibold">{{
              $t("blog5.reason2.highlight1")
            }}</span>
            {{ $t("blog5.reason2.paragraph1Remaining") }}
            {{ $t("blog5.reason2.paragraph2") }}
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog5.reason3.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog5.reason3.titleNext")
            }}</span>
          </h2>
          <ul class="mb-2">
            <li class="list-disc list-inside">
              <span class="font-semibold">{{
                $t("blog5.reason3.paragraph1highlight")
              }}</span>
              {{ $t("blog5.reason3.paragraph1") }}
            </li>
            <li class="list-disc list-inside">
              <span class="font-semibold"
                >{{ $t("blog5.reason3.highlight1") }}
              </span>
              {{ $t("blog5.reason3.paragraph1Next") }}
            </li>
            <li class="list-disc list-inside">
              <span class="font-semibold">{{
                $t("blog5.reason3.highlight2")
              }}</span>
              {{ $t("blog5.reason3.paragraph1Remaining") }}
            </li>
          </ul>
          <p>
            {{ $t("blog5.reason3.paragraph2") }}
            {{ $t("blog5.reason3.highlight3") }}
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog5.reason4.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog5.reason4.titleNext")
            }}</span>
          </h2>
          <p>
            {{ $t("blog5.reason4.paragraph1") }}
            {{ $t("blog5.reason4.highlight1") }}
            {{ $t("blog5.reason4.paragraph1Next")
            }}{{ $t("blog5.reason4.highlight2") }}
            {{ $t("blog5.reason4.paragraph1Remaining") }}
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog5.reason5.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog5.reason5.titleNext")
            }}</span>
          </h2>
          <p>
            {{ $t("blog5.reason5.paragraph1") }}
            {{
              $t("blog5.reason5.highlight1")
            }}
            {{ $t("blog5.reason5.paragraph1Remaining") }}
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog5.cta.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog5.cta.titleBold")
            }}</span>
          </h2>
          <p>
            {{ $t("blog5.cta.paragraph1") }}
            <span class="font-semibold"
              >{{ $t("blog5.cta.highlight1") }}
            </span>
            {{ $t("blog5.cta.remainingParagraph1") }}
            {{ $t("blog5.cta.paragraph1Remaining") }}
          </p>
          <p class="mt-4">
            {{ $t("blog5.cta.highlight2") }}
            {{ $t("blog5.cta.paragraph2") }}
          </p>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
