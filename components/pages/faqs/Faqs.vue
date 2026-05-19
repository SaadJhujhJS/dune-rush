<template>
  <BaseContainer>
    <div class="mb-10 md:mb-14 lg:mb-25 mt-12 md:mt-20 lg:mt-27.5">
      <div
        v-for="(item, index) in faqs"
        @click="toggleFaq(index)"
        :key="index"
        class="flex flex-col gap-4 mb-4 lg:mb-8 px-7.5 py-9.5 border border-[#00000033] rounded-[20px] transition-all duration-300 cursor-pointer"
        :class="{
          'bg-[#CE1D1F] text-white': activeIndex === index,
          'bg-white text-[#232323]': activeIndex !== index,
        }"
      >
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-bold">{{ item.question }}</h2>
          <span
            v-if="activeIndex !== index"
            class="p-2"
          >
            <IconPlus />
          </span>
          <span v-else class="p-2">
            <IconMinus />
          </span>
        </div>

        <transition name="expand">
          <div
            v-show="activeIndex === index"
            class="overflow-hidden text-sm font-normal"
          >
            <p class="py-2">
              {{ item.answer }}
            </p>
          </div>
        </transition>
      </div>
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
const { t } = useI18n();
const activeIndex = ref<null | number>(null);

function toggleFaq(index: number | null) {
  activeIndex.value = activeIndex.value === index ? null : index;
}

const faqs = [
  {
    question: t('faqQuestions.one'),
    answer: t('faqAnswers.one'),
  },
  {
    question: t('faqQuestions.two'),
    answer: t('faqAnswers.two'),
  },
  {
    question: t('faqQuestions.three'),
    answer: t('faqAnswers.three'),
  },
  {
    question: t('faqQuestions.four'),
    answer: t('faqAnswers.four'),
  },
  {
    question: t('faqQuestions.five'),
    answer: t('faqAnswers.five'),
  },
  {
    question: t('faqQuestions.six'),
    answer: t('faqAnswers.six'),
  },
  {
    question: t('faqQuestions.seven'),
    answer: t('faqAnswers.seven'),
  },
  {
    question: t('faqQuestions.eight'),
    answer: t('faqAnswers.eight'),
  },
  {
    question: t('faqQuestions.nine'),
    answer: t('faqAnswers.nine'),
  },
  {
    question: t('faqQuestions.ten'),
    answer: t('faqAnswers.ten'),
  },
  {
    question: t('faqQuestions.eleven'),
    answer: t('faqAnswers.eleven'),
  },
  {
    question: t('faqQuestions.twelve'),
    answer: t('faqAnswers.twelve'),
  },
  {
    question: t('faqQuestions.thirteen'),
    answer: t('faqAnswers.thirteen'),
  },
  {
    question: t('faqQuestions.fourteen'),
    answer: t('faqAnswers.fourteen'),
  },
];

</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.4s ease, opacity 0.3s ease;
  overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
.expand-enter-to,
.expand-leave-from {
  max-height: 300px;
  opacity: 1;
}
</style>
