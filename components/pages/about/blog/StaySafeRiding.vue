<template>
  <BaseContainer>
    <div class="py-10 sm:py-20">
      <!-- Title -->
      <p
        class="mb-5 sm:mb-10 text-center text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
      >
        {{ $t("blog6.title") }}
        <span class="italic font-semibold text-[#CE1D1F]">
          {{ $t("blog6.titleBold") }}
        </span>
        {{ $t("blog6.titleLeft") }}
      </p>

      <!-- Intro -->
      <p class="mb-4 md:text-lg">
        {{ $t("blog6.intro.paragraph1") }}
        <span class="font-semibold">{{
          $t("blog6.intro.paragraph1Highlight")
        }}</span>
        {{ $t("blog6.intro.paragraph1Remaining") }}
        {{ $t("blog6.intro.highlight1") }}
        <span class="font-semibold">
          {{ $t("blog6.intro.highlight1Bold") }}</span
        >
      </p>
      <p class="mb-4 md:text-lg">
        {{ $t("blog6.intro.paragraph2") }}
      </p>

      <div class="space-y-6">
        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog6.reason1.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog6.reason1.titleNext")
            }}</span>
          </h2>
          <p>
            {{ $t("blog6.reason1.paragraph1") }}
          </p>
          <ul class="mb-2">
            <li class="list-disc list-inside">
              <span class="font-semibold">{{
                $t("blog6.reason1.highlight1")
              }}</span>
              {{ $t("blog6.reason1.content1") }}
            </li>
            <li class="list-disc list-inside">
              <span class="font-semibold">
                {{ $t("blog6.reason1.highlight2") }}</span
              >
              {{ $t("blog6.reason1.content2") }}
            </li>
            <li class="list-disc list-inside">
              <span class="font-semibold">{{
                $t("blog6.reason1.highlight3")
              }}</span>
              {{ $t("blog6.reason1.content3") }}
            </li>
            <li class="list-disc list-inside">
              <span class="font-semibold">{{
                $t("blog6.reason1.highlight4")
              }}</span>
              {{ $t("blog6.reason1.content4") }}
            </li>
          </ul>
          <p>{{ $t("blog6.reason1.paragraph1Remaining") }}</p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog6.reason2.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog6.reason2.titleNext")
            }}</span>
          </h2>
          <p>
            {{ $t("blog6.reason2.paragraph1") }}
            <span>{{ $t("blog6.reason2.highlight1") }}</span>
            {{ $t("blog6.reason2.paragraph1Remaining") }}
            {{ $t("blog6.reason2.paragraph2") }}
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog6.reason3.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog6.reason3.titleNext")
            }}</span>
          </h2>
          <p>
            {{ $t("blog6.reason3.paragraph1highlight") }}
            {{ $t("blog6.reason3.paragraph1") }}
          </p>
          <ul class="mb-2">
            <li class="list-disc list-inside">
              {{ $t("blog6.reason3.highlight1") }}
            </li>
            <li class="list-disc list-inside">
              {{ $t("blog6.reason3.highlight2") }}
            </li>
            <li class="list-disc list-inside">
              {{ $t("blog6.reason3.highlight3") }}
            </li>
          </ul>
          <p>
            {{ $t("blog6.reason3.highlight4") }}
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog6.reason4.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog6.reason4.titleNext")
            }}</span>
          </h2>
          <p>
            {{ $t("blog6.reason4.paragraph1") }}
            {{ $t("blog6.reason4.highlight1") }}
            {{ $t("blog6.reason4.paragraph1Next")
            }}{{ $t("blog6.reason4.highlight2") }}
            {{ $t("blog6.reason4.paragraph1Remaining") }}
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog6.reason5.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog6.reason5.titleNext")
            }}</span>
          </h2>
          <p>
            {{ $t("blog6.reason5.paragraph1") }}
            {{ $t("blog6.reason5.highlight1") }}
            {{ $t("blog6.reason5.paragraph1Remaining") }}
          </p>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog6.reason6.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog6.reason6.titleNext")
            }}</span>
          </h2>
          <p>
            {{ $t("blog6.reason6.paragraph1") }}
            {{ $t("blog6.reason6.highlight1") }}
            {{ $t("blog6.reason6.paragraph1Remaining") }}
          </p>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog6.reason7.title") }}
            <span class="text-[#CE1D1F]">{{
              $t("blog6.reason7.titleNext")
            }}</span>
          </h2>
          <p>
            {{ $t("blog6.reason7.paragraph1") }}
            {{ $t("blog6.reason7.highlight1") }}
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">
            {{ $t("blog6.cta.title") }}
            <span class="text-[#CE1D1F]">{{ $t("blog6.cta.titleBold") }}</span>
          </h2>
          <p>
            {{ $t("blog6.cta.paragraph1") }}
            <span class="font-semibold">{{ $t("blog6.cta.highlight1") }} </span>
            {{ $t("blog6.cta.paragraph1Next") }}
            {{ $t("blog6.cta.remainingParagraph1") }}
            {{ $t("blog6.cta.paragraph1Remaining") }}
          </p>
          <p class="mt-4">
            {{ $t("blog6.cta.highlight2") }}
            {{ $t("blog6.cta.paragraph2") }}
          </p>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
