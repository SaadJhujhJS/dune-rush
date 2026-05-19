<template>
  <BaseContainer>
    <div class="py-10 sm:py-20">
      <p
        class="mb-5 sm:mb-10 text-center text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
      >
        {{ $t("contactForm.title1") }}
        <span class="italic font-semibold text-[#CE1D1F]">
          {{ $t("contactForm.title2") }}</span
        >
      </p>
      <div class="flex flex-col lg:flex-row">
        <div
          class="w-full lg:w-1/3 bg-[#CE1D1F] py-8 lg:py-13.5 px-6 lg:px-11 rounded-tl-2xl max-[1024px]:rounded-tr-2xl lg:rounded-bl-2xl"
        >
          <div class="flex flex-col justify-center gap-4 lg:gap-7.5">
            <div class="flex flex-col gap-2 md:gap-4 text-white">
              <p class="text-2xl sm:text-3xl font-semibold">
                {{ $t("contactForm.formTitle") }}
              </p>
              <p class="text-sm font-normal">
                {{ $t("contactForm.description") }}
              </p>
            </div>
            <div
              class="flex flex-col justify-center gap-3.5 lg:gap-5.5 text-white"
            >
              <div v-for="(inquiry, index) in InquiryInfo" :key="index">
                <div class="flex items-start gap-3">
                  <div class="w-6 flex justify-center pt-2">
                    <component color="white" :is="inquiry.icon" />
                  </div>
                  <div>
                    <p class="text-lg font-semibold">
                      {{ inquiry.title }}
                    </p>
                    <p class="text-sm font-normal">
                      {{ inquiry.info1 }}
                    </p>
                    <p v-if="inquiry.info2" class="text-sm font-normal">
                      {{ inquiry.info2 }}
                    </p>
                  </div>
                </div>
              </div>

              <p class="font-semibold text-base">
                {{ $t("contactForm.socialLinksLabel") }}
              </p>
              <div class="flex items-center gap-2.5">
                <a
                  href="https://wa.me/message/BXISU2T4QQJHD1"
                  target="_blank"
                  aria-label="whatsapp"
                  title="whatsapp"
                  rel="noopener noreferrer"
                  class="w-10 h-10 flex items-center justify-center border-[1.5px] border-white rounded-full"
                >
                  <IconFooterWhatsapp />
                </a>
                <a
                  href="https://www.facebook.com/dunerush/"
                  target="_blank"
                  aria-label="facebook"
                  title="facebook"
                  rel="noopener noreferrer"
                  class="w-10 h-10 flex items-center justify-center border-[1.5px] border-white rounded-full"
                >
                  <IconFacebook />
                </a>
                <a
                  href="https://www.instagram.com/dunerushadventure/"
                  target="_blank"
                  aria-label="instagram"
                  title="instagram"
                  rel="noopener noreferrer"
                  class="w-10 h-10 flex items-center justify-center border-[1.5px] border-white rounded-full"
                >
                  <IconInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full lg:w-2/3 flex items-center bg-[#F0F0F0] max-[1024px]:rounded-bl-2xl lg:rounded-tr-2xl rounded-br-2xl px-7 lg:px-11"
        >
          <div class="w-full py-6 lg:py-8.5">
            <form
              @submit.prevent="sendForm"
              class="flex flex-col gap-4 lg:gap-6.5"
            >
              <div class="flex flex-col md:flex-row gap-4 md:gap-6.5">
                <input
                  v-model="firstName"
                  type="text"
                  :placeholder="t('contactForm.firstNamePlaceHolder')"
                  required
                  class="w-full md:w-1/2 py-4 px-5.5 text-[#0C0C0C] placeholder-[#BFBFBF] bg-white border-[1.12px] border-[#BFBFBF] rounded-md focus:outline-none focus:border-black"
                />
                <input
                  v-model="lastName"
                  type="text"
                  :placeholder="t('contactForm.lastNamePlaceHolder')"
                  class="w-full md:w-1/2 py-4 px-5.5 text-[#0C0C0C] placeholder-[#BFBFBF] bg-white border-[1.12px] border-[#BFBFBF] rounded-md focus:outline-none focus:border-black"
                />
              </div>
              <div class="flex flex-col md:flex-row gap-4 md:gap-6.5">
                <input
                  v-model="email"
                  type="email"
                  :placeholder="t('contactForm.emailPlaceHolder')"
                  required
                  class="w-full md:w-1/2 py-4 px-5.5 text-[#0C0C0C] placeholder-[#BFBFBF] bg-white border-[1.12px] border-[#BFBFBF] rounded-md focus:outline-none focus:border-black"
                />
                <div class="w-full md:w-1/2 relative">
                  <vue-tel-input
                    v-model="phone"
                    :inputOptions="{
                      placeholder: t('contactForm.phoneNoPlaceHolder'),
                    }"
                    required
                    :validCharactersOnly="true"
                    :enableValidCheck="true"
                    @validate="onPhoneValidate"
                    class="w-full py-3 px-5.5 text-[#0C0C0C] !placeholder-[#BFBFBF] bg-white border-[1.12px] !border-[#BFBFBF] !rounded-md !outline-none focus-within:!shadow-none"
                    :class="{
                      '!border-red-500 focus-within:!border-red-500':
                        !isPhoneValid && phone,
                      'focus-within:!border-black': isPhoneValid || !phone,
                    }"
                  />
                  <p
                    v-if="!isPhoneValid && phone"
                    class="absolute top-full left-0 text-[8px] sm:text-xs text-red-500"
                  >
                    {{ t("contactForm.error") }}
                  </p>
                </div>
              </div>
              <div class="relative flex-1">
                <select
                  v-model="inquiryType"
                  required
                  aria-label="type of inquiry"
                  :class="[
                    'appearance-none w-full py-4 px-5.5 border-[1.12px] border-[#BFBFBF] rounded-md bg-white focus:outline-none focus:border-black',
                    inquiryType === '' ? 'text-gray-500' : 'text-black',
                  ]"
                >
                  <option disabled selected value="">
                    {{ $t("contactForm.typeOfInquiry.typeOfInquiry") }}
                  </option>
                  <option value="general-inquiry">
                    {{ $t("contactForm.typeOfInquiry.generalInquiry") }}
                  </option>
                  <option value="booking-request">
                    {{ $t("contactForm.typeOfInquiry.bookingRequest") }}
                  </option>
                  <option value="group-booking">
                    {{ $t("contactForm.typeOfInquiry.groupCorporateBooking") }}
                  </option>
                  <option value="event-planning">
                    {{ $t("contactForm.typeOfInquiry.eventPlanning") }}
                  </option>
                  <option value="complaint-feedback">
                    {{ $t("contactForm.typeOfInquiry.complaintOrFeedback") }}
                  </option>
                  <option value="lost-found">
                    {{ $t("contactForm.typeOfInquiry.lostAndFound") }}
                  </option>
                  <option value="pickup-dropoff">
                    {{
                      $t("contactForm.typeOfInquiry.pickupAndDropoffService")
                    }}
                  </option>
                  <option value="safety-requirements">
                    {{ $t("contactForm.typeOfInquiry.safetyAndRequirements") }}
                  </option>
                  <option value="cancellation-rescheduling">
                    {{
                      $t("contactForm.typeOfInquiry.cancellationOrRescheduling")
                    }}
                  </option>
                  <option value="payment-billing">
                    {{
                      $t("contactForm.typeOfInquiry.paymentAndBillingQuestions")
                    }}
                  </option>
                  <option value="location-directions">
                    {{
                      $t("contactForm.typeOfInquiry.locationAndDirectionsHelp")
                    }}
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black"
                >
                  <IconArrowDown color="#131313" />
                </div>
              </div>
              <div>
                <textarea
                  v-model="message"
                  rows="6"
                  :placeholder="t('contactForm.messagePlaceHolder')"
                  class="w-full py-4 px-5.5 border-[1.12px] border-[#BFBFBF] rounded-md bg-[white] text-[#0C0C0C] placeholder-[#BFBFBF] focus:outline-none focus:border-black resize-none"
                ></textarea>
              </div>
              <div class="flex justify-end items-center">
                <button
                  :disabled="isSubmitting"
                  class="w-fit flex items-center gap-2.5 px-7.5 py-3.5 mt-1 lg:mt-2 border-[1.13px] border-[#CE1D1F] bg-[#CE1D1F] rounded-[103.6px] text-sm font-semibold text-white cursor-pointer transition shine"
                >
                  {{
                    isSubmitting
                      ? t("contactForm.submitting")
                      : t("contactForm.submitButton")
                  }}
                  <IconArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
<script setup lang="ts">
import IconLocation from "~/components/icons/IconLocation.vue";
import IconMail from "~/components/icons/IconMail.vue";
import IconPhone from "~/components/icons/IconPhone.vue";
import Swal from "sweetalert2";

const { t } = useI18n();
const isSubmitting = ref(false);

const showSuccessModal = () => {
  Swal.fire({
    icon: "success",
    title: "Thank you!",
    html: `
      Your inquiry has been received.<br />
      Our team will get back to you shortly.<br />
      For urgent queries, feel free to call or WhatsApp us directly.
    `,
    confirmButtonColor: "#CE1D1F",
  });
};

const showErrorModal = () => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong. Please try again later.",
    confirmButtonColor: "#CE1D1F",
  });
};

const inquiryType = ref<string>("");
const firstName = ref<string>("");
const lastName = ref<string>("");
const email = ref<string>("");
const phone = ref<string>("");
const message = ref<string>("");
const isPhoneValid = ref(true);
const onPhoneValidate = (payload: { valid: boolean; number: string }) => {
  isPhoneValid.value = payload.valid;
};
const InquiryInfo = [
  {
    icon: IconPhone,
    title: t("contactForm.reservationNumberLabel"),
    info1: "+971 56 707 5765",
    info2: "+971 58 635 0788",
  },
  {
    icon: IconMail,
    title: t("contactForm.InquiryLabel"),
    info1: "info@dunerush.com",
  },
  {
    icon: IconLocation,
    title: t("contactForm.locationLabel"),
    info1: t("contactForm.location"),
  },
];

const sendForm = async () => {
  if (isSubmitting.value) return;
  if (!isPhoneValid.value) {
    return;
  }
  isSubmitting.value = true;
  try {
    const response = await $fetch("/api/send-email", {
      method: "POST",
      body: {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        inquiryType: inquiryType.value,
        message: message.value,
      },
    });
    console.log("response: ", response);
    if (response.success) {
      showSuccessModal();
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      phone.value = "";
      inquiryType.value = "";
      message.value = "";
    } else {
      showErrorModal();
    }
  } catch (error) {
    console.error("Error sending form:", error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
