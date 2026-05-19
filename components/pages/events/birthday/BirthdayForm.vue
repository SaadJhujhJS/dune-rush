<template>
  <BaseContainer>
    <div class="mb-10 md:mb-16 lg:mb-22.5 mt-12 md:mt-20 lg:mt-27.5">
      <h2
        class="text-center mb-5.5 xl:mb-12.5 text-3xl md:text-[34.32px] font-bold text-[#0C0C0C]"
      >
        {{ $t("birthday.heading") }}
        <i class="font-semibold text-[#CE1D1F]">
          {{ $t("birthday.headinghighlight") }}</i
        >
      </h2>
      <div class="bg-[#F0F0F0] rounded-2xl py-6 lg:py-8.5 px-7 lg:px-11">
        <form @submit.prevent="sendForm" class="flex flex-col gap-4 lg:gap-6.5">
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
              required
              class="w-full md:w-1/2 py-4 px-5.5 text-[#0C0C0C] placeholder-[#BFBFBF] bg-white border-[1.12px] border-[#BFBFBF] rounded-md focus:outline-none focus:border-black"
            />
          </div>
          <div class="flex flex-col md:flex-row gap-4 md:gap-6.5">
            <input
              v-model="email"
              type="email"
              :placeholder="t('contactForm.emailPlaceHolder')"
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
                class="absolute top-full left-0 text-xs text-red-500"
              >
                {{ t("contactForm.error") }}
              </p>
            </div>
          </div>
          <div>
            <textarea
              v-model="message"
              rows="6"
              :placeholder="t('contactForm.messagePlaceHolder')"
              required
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
                  ? t("birthday.form.submitting")
                  : t("birthday.form.sendMessage")
              }}
              <IconArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  </BaseContainer>
</template>
<script setup lang="ts">
import Swal from "sweetalert2";

const { t } = useI18n();
const isSubmitting = ref(false);

const showSuccessModal = () => {
  Swal.fire({
    icon: "success",
    title: "Thank you!",
    html: `
      Your message has been received.<br />
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
const firstName = ref<string>("");
const lastName = ref<string>("");
const email = ref<string>("");
const phone = ref<string>("");
const inquiryType = ref<string>("Birthday Planning");
const message = ref<string>("");
const isPhoneValid = ref(true);
const onPhoneValidate = (payload: { valid: boolean; number: string }) => {
  isPhoneValid.value = payload.valid;
};
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
