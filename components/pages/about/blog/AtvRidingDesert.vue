<template>
  <div class="py-10 text-[#0C0C0C]">
    <p class="text-3xl font-bold mb-5 text-center">
      {{ $t("atvAdventure.title") }}
      <span class="text-[#CE1D1F]">{{ $t("atvAdventure.titleBold") }}</span>
      {{ $t("atvAdventure.titleLeft") }}
    </p>
    <p class="mb-4 sm:mb-6 md:text-lg">
      {{ $t("atvAdventure.intro.paragraph1") }}
      <span class="font-semibold">{{
        $t("atvAdventure.intro.highlight1")
      }}</span
      >. {{ $t("atvAdventure.intro.paragraph2") }}
      <span class="font-semibold">{{
        $t("atvAdventure.intro.highlight2")
      }}</span>
      {{ $t("atvAdventure.intro.paragraph3") }}
    </p>
    <p class="mb-4 sm:mb-6 md:text-lg">
      {{ $t("atvAdventure.intro.hereAre") }}
      <span class="font-semibold">{{
        $t("atvAdventure.intro.highlight3")
      }}</span>
      {{ $t("atvAdventure.intro.whyHoping") }}
      <span class="font-semibold">{{
        $t("atvAdventure.intro.highlight4")
      }}</span
      >:
    </p>

    <div class="space-y-8">
      <div>
        <p class="text-xl font-semibold mb-2">
          {{ $t("atvAdventure.reason1.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("atvAdventure.reason1.titleNext")
          }}</span>
        </p>
        <p>
          {{ $t("atvAdventure.reason1.paragraph1") }}
          <span class="font-semibold">{{
            $t("atvAdventure.reason1.highlight1")
          }}</span>
          {{ $t("atvAdventure.reason1.paragraph1Next") }}
          <br />
          {{ $t("atvAdventure.reason1.paragraph2") }}
          <span class="font-semibold">
            {{ $t("atvAdventure.reason1.highlight2") }}
          </span>
          {{ $t("atvAdventure.reason1.paragraph2Next") }}
          <span class="font-semibold">
            {{ $t("atvAdventure.reason1.highlight3") }}</span
          >
          {{ $t("atvAdventure.reason1.remaining") }}
        </p>
      </div>

      <div>
        <p class="text-xl font-semibold mb-2">
          {{ $t("atvAdventure.reason2.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("atvAdventure.reason2.titleNext")
          }}</span>
        </p>
        <p class="mb-2">
          {{ $t("atvAdventure.reason2.paragraph1") }}
          <span class="font-semibold">{{
            $t("atvAdventure.reason2.highlight1")
          }}</span>
          {{ $t("atvAdventure.reason2.paragraph1Remaining") }}
        </p>
        <p>{{ $t("atvAdventure.reason2.paragraph2") }}</p>
      </div>

      <div>
        <p class="text-xl font-semibold mb-2">
          {{ $t("atvAdventure.reason3.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("atvAdventure.reason3.titleNext")
          }}</span>
        </p>
        <p class="mb-2">
          {{ $t("atvAdventure.reason3.paragraph1") }}
          <span class="font-semibold">{{
            $t("atvAdventure.reason3.highlight1")
          }}</span>
          {{ $t("atvAdventure.reason3.paragraph1Next") }}
          <span class="font-semibold">{{
            $t("atvAdventure.reason3.highlight2")
          }}</span>
          {{ $t("atvAdventure.reason3.paragraph1Remaining") }}
        </p>
        <p>
          {{ $t("atvAdventure.reason3.paragraph2") }}
          <span class="font-semibold">{{
            $t("atvAdventure.reason3.highlight3")
          }}</span>
          {{ $t("atvAdventure.reason3.paragraph2Remaining") }}
        </p>
      </div>

      <div>
        <p class="text-xl font-semibold mb-2">
          {{ $t("atvAdventure.reason4.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("atvAdventure.reason4.titleNext")
          }}</span>
        </p>
        <p>
          {{ $t("atvAdventure.reason4.paragraph1") }}
          <span class="font-semibold">{{
            $t("atvAdventure.reason4.highlight1")
          }}</span
          >. {{ $t("atvAdventure.reason4.paragraph1Next") }}
          <span class="font-semibold">{{
            $t("atvAdventure.reason4.highlight2")
          }}</span>
          {{ $t("atvAdventure.reason4.paragraph1Remaining") }}
        </p>
      </div>

      <div>
        <p class="text-xl font-semibold mb-2">
          {{ $t("atvAdventure.reason5.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("atvAdventure.reason5.titleNext")
          }}</span>
        </p>
        <p>
          {{ $t("atvAdventure.reason5.paragraph1") }}
          <span class="font-semibold">{{
            $t("atvAdventure.reason5.highlight1")
          }}</span>
          {{ $t("atvAdventure.reason5.paragraph1Remaining") }}
        </p>
      </div>
    </div>

    <div class="mt-4">
      <p class="text-2xl font-bold">
        {{ $t("atvAdventure.cta.title") }}
        <span class="text-[#CE1D1F]">{{
          $t("atvAdventure.cta.titleBold")
        }}</span>
      </p>
      <p class="mt-2">
        {{ $t("atvAdventure.cta.paragraph1") }}
        <span class="font-semibold">{{
          $t("atvAdventure.cta.highlight1")
        }}</span>
        {{ $t("atvAdventure.cta.paragraph1Remaining") }}
      </p>
      <p class="mt-2">
        <span class="font-semibold">{{
          $t("atvAdventure.cta.highlight2")
        }}</span>
        {{ $t("atvAdventure.cta.paragraph2") }}
      </p>
    </div>
  </div>
</template>
