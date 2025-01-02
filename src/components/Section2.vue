<template>
  <section
    class="bg-primary"
    style="
      padding-top: clamp(56px, 12.9061px + 11.4917vw, 160px);
      padding-bottom: clamp(56px, 12.9061px + 11.4917vw, 160px);
    "
  >
    <div
      class="m-auto w-full px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] min-xl:max-w-[1232px]"
    >
      <div class="grid grid-cols-2 items-start gap-6 max-md:grid-cols-1 max-md:gap-0">
        <div class="max-xs:max-w-[22rem]">
          <div
            class="flex items-center rounded-full font-medium uppercase w-fit tracking-[0.10em] bg-secondary text-primary h-[37px] text-[18px] max-xs:h-8 max-xs:text-[16px] px-4"
          >
            Weight lose
          </div>
          <p
            class="pt-6 font-gradual font-bold leading-[1.2] tracking-[-0.03em] text-light max-xs:pt-4 max-xs:leading-[1.15]"
            style="
              font-size: clamp(28px, 16.3978px + 3.09392vw, 56px);
              padding-bottom: clamp(16px, 10.1989px + 1.54696vw, 30px);
            "
          >
            There's a reason<br class="max-lg:hidden" />
            <span class="text-secondary">semaglutide</span> is the<br class="max-lg:hidden" />
            talk of the town: it<br class="max-lg:hidden" />
            delivers results.
          </p>
          <p
            class="max-w-[30rem] text-[1.5rem] font-medium leading-[1.4] tracking-[-0.015em] text-light max-xs:text-[18px] max-xs:leading-[1.24]"
          >
            On average, people on Semaglutide <span class="text-secondary">lose 15%</span> of their
            weight in a year*.
          </p>
        </div>
        <div
          class="flex flex-col items-center rounded-3xl bg-white p-[3rem_2.625rem_2rem] max-xs:p-[1.625rem_1.25rem] min-lg:!m-0"
          style="margin-top: clamp(24px, 13.2265px + 2.87293vw, 50px)"
        >
          <p
            class="font-medium leading-tight tracking-[-0.015em] text-primary"
            style="font-size: clamp(20px, 18.3425px + 0.441989vw, 24px)"
          >
            Your Current Weight
          </p>
          <div
            class="mt-4 flex h-[4.5rem] w-[13.5rem] items-center justify-center rounded-xl bg-teaGreen max-xs:h-[3.75rem] max-xs:w-[180px]"
          >
            <span
              class="font-medium leading-none tracking-[-0.015em] text-primary"
              style="font-size: clamp(28px, 24.6851px + 0.883978vw, 36px)"
              >{{ weight }} lbs</span
            >
          </div>
          <div class="relative flex w-full items-center">
            <input
              type="range"
              min="120"
              max="300"
              class="lose-weight-calc h-2 w-full appearance-none rounded-full bg-light outline-none max-xs:h-[6px]"
              :value="weight"
              @input="weight = $event.target.value"
              :style="{
                background: `linear-gradient(to right, rgb(0, 78, 53) ${percentage}, rgb(192, 232, 192) ${percentage})`,
              }"
              style="
                margin-top: clamp(40px, 31.7127px + 2.20994vw, 60px);
                margin-bottom: clamp(40px, 25.0829px + 3.9779vw, 76px);
              "
            />
          </div>
          <div
            class="flex h-[4.5rem] w-full items-center justify-center gap-2 rounded-xl bg-primary tracking-[-0.015em] max-xs:h-[3.375rem]"
          >
            <p
              class="font-medium text-light"
              style="font-size: clamp(16px, 12.6851px + 0.883978vw, 24px)"
            >
              You could easily lose:
            </p>
            <p
              class="min-w-[6.25rem] font-bold text-secondary max-xs:min-w-[66px]"
              style="font-size: clamp(24px, 19.0276px + 1.32597vw, 36px)"
            >
              {{ loseWeight }} lbs
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const weight = ref(209)
const percentage = computed(() => ((weight.value - 120) / (300 - 120)) * 100 + '%')
const loseWeight = computed(() => Math.floor(weight.value * 0.15) + 1)
</script>
