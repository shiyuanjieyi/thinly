<template>
  <div
    class="w-full bg-primary"
    style="
      padding-top: clamp(56px, 31.5525px + 6.51934vw, 115px);
      padding-bottom: clamp(56px, 31.5525px + 6.51934vw, 115px);
    "
  >
    <div
      class="m-auto w-full px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] min-xl:max-w-[1232px]"
    >
      <div class="gap grid grid-cols-2 items-start gap-6 max-sm:grid-cols-1">
        <div
          class="flex flex-col min-lg:pt-12"
          style="gap: clamp(16px, 10.1989px + 1.54696vw, 30px)"
        >
          <h2
            class="font-gradual font-bold leading-[1.2] tracking-[-0.03em] text-secondary"
            style="font-size: clamp(28px, 16.3978px + 3.09392vw, 56px)"
          >
            <span class="text-light">Revolutionary</span> medication
          </h2>
          <p
            class="leading-[1.24] tracking-[-0.015em] text-light"
            style="font-size: clamp(18px, 15.5138px + 0.662983vw, 24px)"
          >
            Wegovy and Ozempic are semaglutide (a GLP-1) that may be prescribed for weight loss if
            appropriate. It's a once-weekly shot that works by mimicking your body's natural
            hormones, helping you feel fuller faster and for longer.
          </p>
        </div>
        <img
          src="@/assets/image/medication-full.png"
          class="w-full max-sm:justify-self-center min-md:justify-self-end"
          alt="medication"
          draggable="false"
          style="max-width: clamp(325px, 254.558px + 18.7845vw, 495px)"
        />
      </div>
    </div>
  </div>
</template>
