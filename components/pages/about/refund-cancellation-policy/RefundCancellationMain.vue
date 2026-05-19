<template>
  <BaseContainer>
    <div class="my-12 md:my-20 lg:my-27.5">
      <div class="mb-7 lg:mb-12.5">
        <h2
          class="text-center mb-6 lg:mb-12.5 text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
        >
          <i class="font-semibold text-[#CE1D1F]">{{ $t("refundPolicy.title1") }}</i>
          {{ $t("refundPolicy.title2") }}
        </h2>
        <div class="flex flex-col gap-5">
          <p class="text-lg text-[#0C0C0C]">
            {{ $t("refundPolicy.intro1") }}
            <span class="font-bold"
              >{{ $t("refundPolicy.introBold") }}</span
            >.
            {{ $t("refundPolicy.intro2") }}
          </p>
          <ul class="font-normal text-[#0C0C0C]">
            <li class="list-disc list-inside">
              {{ $t("refundPolicy.description1") }}
              <span class="font-bold">{{ $t("refundPolicy.description2Bold") }}</span> 
              {{ $t("refundPolicy.description2") }}
            </li>
            <li class="list-disc list-inside mt-2">
              {{ $t("refundPolicy.description3") }}
            </li>
            <li class="list-disc list-inside mt-2">
              {{ $t("refundPolicy.description4") }}
              <span class="font-bold">{{ $t("refundPolicy.description4Bold") }}</span>,
              {{ $t("refundPolicy.description5") }}
            </li>
            <li class="list-disc list-inside mt-2">
              {{ $t("refundPolicy.description6") }}
            </li>
          </ul>
          <p>
            {{ $t("refundPolicy.recommendation") }}
          </p>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
