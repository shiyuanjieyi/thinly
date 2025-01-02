<template>
  <div class="bg-accent-orange200" style="padding-top: clamp(56px, 12.9061px + 11.4917vw, 160px)">
    <div
      class="m-auto w-full px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] min-xl:max-w-[1232px]"
    >
      <div
        class="m-auto flex flex-col items-center gap-6 max-xs:gap-4"
        style="max-width: clamp(350px, 196.685px + 40.884vw, 720px)"
      >
        <div
          id="slogan"
          class="flex items-center rounded-full font-medium uppercase w-fit tracking-[0.10em] bg-white text-primary h-[37px] text-[18px] max-xs:h-8 max-xs:text-[16px] px-4"
        >
          It's not magic, it's metabolic science
        </div>
        <h2
          class="text-center font-gradual font-bold leading-[1.2] tracking-[-0.03em] text-primary"
          style="font-size: clamp(28px, 16.3978px + 3.09392vw, 56px)"
        >
          Lose up to 15% of your body weight in <span class="text-kellyGreen">3 easy steps*</span>
        </h2>
      </div>
    </div>
    <div
      class="flex w-full justify-center gap-4 px-4 max-sm:flex-col max-sm:items-center"
      style="
        margin-top: clamp(24px, 7.42541px + 4.41989vw, 64px);
        margin-bottom: clamp(24px, -26.5525px + 13.4807vw, 146px);
      "
    >
      <div
        class="relative flex w-full max-w-[416px] flex-col justify-between gap-2 rounded-2xl transition-all bg-lavenderBlue min-md:rotate-[-5.14deg] min-md:top-8 min-md:mr-[-38px] min-md:right-[-1rem]"
        :style="getStyle(1)"
        @click="currentIndex = 1"
      >
        <div class="flex flex-col gap-4 px-8 pt-8 max-xs:gap-3 max-md:px-4 max-md:pt-5">
          <div
            class="flex items-center rounded-full font-medium uppercase w-fit tracking-[0.10em] bg-blue10 text-white h-[32px] text-[16px] max-xs:h-[26px] max-xs:text-[14px] px-4 max-xs:px-3"
          >
            Step-1
          </div>
          <div class="flex flex-col gap-5 max-xs:gap-3">
            <h3
              class="font-jakarta font-bold leading-none tracking-[-0.02em] text-blue10"
              style="font-size: clamp(24px, 20.6851px + 0.883978vw, 32px)"
            >
              Take the quiz
            </h3>
            <p class="max-w-[19.25rem] leading-[1.3] tracking-[-0.02em] text-blue10">
              Take the assessment quiz to get pre-approved instantly
            </p>
          </div>
        </div>
        <img
          src="@/assets/image/step-1.png"
          alt="Take the quiz"
          draggable="false"
          class="mx-auto w-full object-contain"
          style="height: clamp(190px, 161.823px + 7.51381vw, 258px)"
        />
      </div>
      <div
        class="relative flex w-full max-w-[416px] flex-col justify-between gap-2 rounded-2xl transition-all bg-primary"
        :style="getStyle(2)"
        @click="currentIndex = 2"
      >
        <div class="flex flex-col gap-4 px-8 pt-8 max-xs:gap-3 max-md:px-4 max-md:pt-5">
          <div
            class="flex items-center rounded-full font-medium uppercase w-fit tracking-[0.10em] bg-secondary text-primary h-[32px] text-[16px] max-xs:h-[26px] max-xs:text-[14px] px-4 max-xs:px-3"
          >
            Step-2
          </div>
          <div class="flex flex-col gap-5 max-xs:gap-3">
            <h3
              class="font-jakarta font-bold leading-none tracking-[-0.02em] text-white"
              style="font-size: clamp(24px, 20.6851px + 0.883978vw, 32px)"
            >
              Get prescribed
            </h3>
            <p class="max-w-[19.25rem] leading-[1.3] tracking-[-0.02em] text-white">
              Our team of doctors will review your answers to determine if you are a good candidate
              for GLP-1s
            </p>
          </div>
        </div>
        <img
          src="@/assets/image/step-2.png"
          alt="Get prescribed"
          draggable="false"
          class="mx-auto w-full object-contain"
          style="height: clamp(190px, 161.823px + 7.51381vw, 258px)"
        />
      </div>
      <div
        class="relative flex w-full max-w-[416px] flex-col justify-between gap-2 rounded-2xl transition-all bg-accent-cyan min-md:rotate-[5.14deg] min-md:top-8 min-md:ml-[-38px] min-md:left-[-1rem]"
        :style="getStyle(3)"
        @click="currentIndex = 3"
      >
        <div class="flex flex-col gap-4 px-8 pt-8 max-xs:gap-3 max-md:px-4 max-md:pt-5">
          <div
            class="flex items-center rounded-full font-medium uppercase w-fit tracking-[0.10em] bg-richBlack text-white h-[32px] text-[16px] max-xs:h-[26px] max-xs:text-[14px] px-4 max-xs:px-3"
          >
            Step-3
          </div>
          <div class="flex flex-col gap-5 max-xs:gap-3">
            <h3
              class="font-jakarta font-bold leading-none tracking-[-0.02em] text-richBlack"
              style="font-size: clamp(24px, 20.6851px + 0.883978vw, 32px)"
            >
              Get your meds
            </h3>
            <p class="max-w-[19.25rem] leading-[1.3] tracking-[-0.02em] text-richBlack">
              You can get your meds delivered or picked up at your local pharmacy
            </p>
          </div>
        </div>
        <img
          src="@/assets/image/step-3.png"
          alt="Get your meds"
          draggable="false"
          class="mx-auto w-full object-contain"
          style="height: clamp(190px, 161.823px + 7.51381vw, 258px)"
        />
      </div>
    </div>
    <div
      class="m-auto w-full px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] min-xl:max-w-[1232px]"
    >
      <div
        class="flex w-full flex-col items-center min-sm:!pb-[14px]"
        style="
          gap: clamp(16px, 11.0276px + 1.32597vw, 28px);
          padding-bottom: clamp(56px, 25.337px + 8.1768vw, 130px);
        "
      >
        <p
          class="font-gradual font-medium leading-tight tracking-[-0.02em] text-primary"
          style="font-size: clamp(24px, 20.6851px + 0.883978vw, 32px)"
        >
          Ready to get approved?
        </p>
        <a
          class="max-xs:h-12 max-xs:text-base rounded-full tracking-[0.1em] uppercase h-14 flex items-center justify-center font-medium text-lg text-nowrap px-4 text-center gap-2 relative bg-secondary text-primary w-full max-w-[425px] max-xs:!h-12 max-xs:!text-[1rem]"
          href="/"
          style="
            height: clamp(48px, 33.0829px + 3.9779vw, 84px);
            font-size: clamp(16px, 12.6851px + 0.883978vw, 24px);
          "
        >
          Take the quiz now
        </a>
      </div>
    </div>
    <svg
      width="1512"
      height="118"
      viewBox="0 0 1512 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="relative bottom-[-1px] h-auto w-full max-xs:hidden"
    >
      <path d="M0 0C739.5 201.401 1129.75 102.857 1512 1.47565V118H0V0Z" fill="#AFA5F5"></path>
    </svg>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const currentIndex = ref(2)
const getStyle = (index) => {
  return currentIndex.value === index
    ? { 'z-index': 10, 'box-shadow': 'rgba(0, 0, 0, 0.12) 0px 12px 16px' }
    : { 'z-index': index === 3 ? 1: 2, 'box-shadow': 'none' }
}

const updateText = () => {
  const element = document.querySelector('#slogan')
  if (window.matchMedia('(max-width: 767px)').matches) {
    element.textContent = 'Not magic, just science'
  } else {
    element.textContent = "It's not magic, it's metabolic science"
  }
}

// 初始调用
onMounted(() => {
  updateText()
})

// 监听窗口大小变化
window.addEventListener('resize', updateText)
</script>
