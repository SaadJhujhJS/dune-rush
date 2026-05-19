<template>
  <div class="py-10 sm:py-20">
    <p class="mb-4 sm:mb-6 text-3xl md:text-[34.32px] font-bold text-[#0C0C0C] text-center">
      <span class="text-[#CE1D1F]">{{ $t("atvVsDirtBike.titleBold") }}</span>
      {{ $t("atvVsDirtBike.title") }}
    </p>
    <p class="mb-4 sm:mb-6 md:text-lg">
      {{ $t("atvVsDirtBike.intro1") }}
      <span class="font-semibold">{{ $t("atvVsDirtBike.boldWord1") }}</span>
      {{ $t("atvVsDirtBike.orA") }}
      <span class="font-semibold">{{ $t("atvVsDirtBike.boldWord2") }}</span>
      {{ $t("atvVsDirtBike.remainingIntro1") }}
    </p>
    <p class="mb-4 sm:mb-6 md:text-lg">
      {{ $t("atvVsDirtBike.intro2.text") }}
      <span class="font-semibold">{{
        $t("atvVsDirtBike.intro2.highlight")
      }}</span
      >?
    </p>
    <div class="space-y-6">
      <div>
        <p class="text-xl font-semibold mb-2">
          {{ $t("atvVsDirtBike.sections.difference.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("atvVsDirtBike.sections.difference.titleBold")
          }}</span>
        </p>
        <p>{{ $t("atvVsDirtBike.sections.difference.letsBreak") }}</p>
        <ul class="list-disc list-inside mt-2">
          <li>
            <strong
              >{{ $t("atvVsDirtBike.sections.difference.atv") }}
              {{ $t("atvVsDirtBike.sections.difference.atvBold") }}</strong
            ><br />
            {{ $t("atvVsDirtBike.sections.difference.point1") }} <br />
            {{ $t("atvVsDirtBike.sections.difference.point2") }}
            <br />{{ $t("atvVsDirtBike.sections.difference.point3") }}
          </li>
          <li>
            <strong
              >{{ $t("atvVsDirtBike.sections.difference.dirtBike") }}
              {{
                $t("atvVsDirtBike.sections.difference.dirtBikeBold")
              }} </strong
            ><br />
            {{ $t("atvVsDirtBike.sections.difference.point4") }} <br />
            {{ $t("atvVsDirtBike.sections.difference.point5") }}
            <br />{{ $t("atvVsDirtBike.sections.difference.point6") }}
          </li>
        </ul>
        <p class="mt-2">
          {{ $t("atvVsDirtBike.sections.difference.note") }}
        </p>
      </div>
      <div>
        <p class="text-xl font-semibold">
          {{ $t("atvVsDirtBike.sections.controlStability.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("atvVsDirtBike.sections.controlStability.titleBold")
          }}</span>
        </p>
        <ul class="list-disc list-inside mt-2">
          <li>
            <strong>{{
              $t("atvVsDirtBike.sections.controlStability.atv")
            }}</strong>
            {{ $t("atvVsDirtBike.sections.controlStability.atvNote") }}
          </li>
          <li>
            <strong
              >{{ $t("atvVsDirtBike.sections.controlStability.dirtBike") }}
              {{
                $t("atvVsDirtBike.sections.controlStability.dirtBikeBold")
              }}</strong
            >
            {{ $t("atvVsDirtBike.sections.controlStability.dirtBikeNote") }}
          </li>
        </ul>
        <ul class="space-y-1 mt-2">
          <li class="relative flex items-start">
            <span class="mr-1 mt-0.5"><IconTick /></span>
            {{ $t("atvVsDirtBike.sections.controlStability.tips.atvNote") }}
          </li>
          <li class="relative flex items-start">
            <span class="mr-1 mt-0.5"><IconTick /></span>
            {{
              $t("atvVsDirtBike.sections.controlStability.tips.dirtBikeNote")
            }}
          </li>
        </ul>
      </div>
      <div>
        <p class="text-xl font-semibold">
          {{ $t("atvVsDirtBike.sections.skillLevel.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("atvVsDirtBike.sections.skillLevel.titleBold")
          }}</span>
        </p>
        <ul class="list-disc list-inside mt-2">
          <li>
            <strong>{{ $t("atvVsDirtBike.sections.skillLevel.atv") }}</strong>
            {{ $t("atvVsDirtBike.sections.skillLevel.atvNote") }}
          </li>
          <li>
            <strong
              >{{ $t("atvVsDirtBike.sections.skillLevel.dirtBike") }}
              {{ $t("atvVsDirtBike.sections.skillLevel.dirtBikeBold") }}</strong
            >
            {{ $t("atvVsDirtBike.sections.skillLevel.dirtBikeNote") }}
          </li>
        </ul>
        <ul class="space-y-1 mt-2">
          <li class="relative flex items-start">
            <span class="mr-1 mt-0.5"><IconTick /></span>
            {{ $t("atvVsDirtBike.sections.skillLevel.tips.atvNote") }}
          </li>
          <li class="relative flex items-start">
            <span class="mr-1 mt-0.5"><IconTick /></span>
            {{ $t("atvVsDirtBike.sections.skillLevel.tips.dirtBikeNote") }}
          </li>
        </ul>
      </div>

      <div>
        <p class="text-xl font-semibold">
          {{ $t("atvVsDirtBike.sections.terrainHandling.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("atvVsDirtBike.sections.terrainHandling.titleBold")
          }}</span>
        </p>
        <ul class="list-disc list-inside mt-2">
          <li>
            <strong>{{
              $t("atvVsDirtBike.sections.terrainHandling.atv")
            }}</strong>
            {{ $t("atvVsDirtBike.sections.terrainHandling.atvNote") }}
          </li>
          <li>
            <strong
              >{{ $t("atvVsDirtBike.sections.terrainHandling.dirtBike") }}
              {{
                $t("atvVsDirtBike.sections.terrainHandling.dirtBikeBold")
              }}</strong
            >
            {{ $t("atvVsDirtBike.sections.terrainHandling.dirtBikeNote") }}
          </li>
        </ul>
        <ul class="space-y-1 mt-2">
          <li class="relative flex items-start">
            <span class="mr-1 mt-0.5"><IconTick /></span>
            {{ $t("atvVsDirtBike.sections.terrainHandling.tips.atvNote") }}
          </li>
          <li class="relative flex items-start">
            <span class="mr-1 mt-0.5"><IconTick /></span>
            {{ $t("atvVsDirtBike.sections.terrainHandling.tips.dirtBikeNote") }}
          </li>
        </ul>
      </div>

      <div>
        <p class="text-xl font-semibold">
          {{ $t("atvVsDirtBike.sections.safetyComfort.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("atvVsDirtBike.sections.safetyComfort.titleBold")
          }}</span>
        </p>
        <ul class="list-disc list-inside mt-2">
          <li>
            <strong>{{
              $t("atvVsDirtBike.sections.safetyComfort.atv")
            }}</strong>
            {{ $t("atvVsDirtBike.sections.safetyComfort.atvNote") }}
          </li>
          <li>
            <strong
              >{{ $t("atvVsDirtBike.sections.safetyComfort.dirtBike") }}
              {{
                $t("atvVsDirtBike.sections.safetyComfort.dirtBikeBold")
              }}</strong
            >
            {{ $t("atvVsDirtBike.sections.safetyComfort.dirtBikeNote") }}
          </li>
        </ul>
        <ul class="space-y-1 mt-2">
          <li class="relative flex items-start">
            <span class="mr-1 mt-0.5"><IconTick /></span>
            {{ $t("atvVsDirtBike.sections.safetyComfort.tips.atvNote") }}
          </li>
          <li class="relative flex items-start">
            <span class="mr-1 mt-0.5"><IconTick /></span>
            {{ $t("atvVsDirtBike.sections.safetyComfort.tips.dirtBikeNote") }}
          </li>
        </ul>
      </div>

      <div>
        <p class="text-xl font-semibold">
          {{ $t("atvVsDirtBike.sections.soloOrGroup.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("atvVsDirtBike.sections.soloOrGroup.titleBold")
          }}</span>
        </p>
        <ul class="list-disc list-inside mt-2">
          <li>
            <strong>{{ $t("atvVsDirtBike.sections.soloOrGroup.atv") }}</strong>
            {{ $t("atvVsDirtBike.sections.soloOrGroup.atvNote") }}
          </li>
          <li>
            <strong
              >{{ $t("atvVsDirtBike.sections.soloOrGroup.dirtBike") }}
              {{
                $t("atvVsDirtBike.sections.soloOrGroup.dirtBikeBold")
              }}</strong
            >
            {{ $t("atvVsDirtBike.sections.soloOrGroup.dirtBikeNote") }}
          </li>
        </ul>
        <ul class="space-y-1 mt-2">
          <li class="relative flex items-start">
            <span class="mr-1 mt-0.5"><IconTick /></span>
            {{ $t("atvVsDirtBike.sections.soloOrGroup.tips.atvNote") }}
          </li>
          <li class="relative flex items-start">
            <span class="mr-1 mt-0.5"><IconTick /></span>
            {{ $t("atvVsDirtBike.sections.soloOrGroup.tips.dirtBikeNote") }}
          </li>
        </ul>
      </div>

      <div class="mt-4">
        <p class="text-xl font-semibold">
          {{ $t("atvVsDirtBike.sections.verdict.title") }}
          <span class="text-[#CE1D1F]">{{
            $t("atvVsDirtBike.sections.verdict.titleBold")
          }}</span>
        </p>
        <p class="mt-2">
          {{ $t("atvVsDirtBike.sections.verdict.conclusion1") }}
        </p>
        <p class="mt-2">
          <span class="font-semibold">{{
            $t("atvVsDirtBike.sections.verdict.conclusion2.highlight")
          }}</span>
          {{ $t("atvVsDirtBike.sections.verdict.conclusion2.text") }}
        </p>
      </div>
    </div>
  </div>
</template>
