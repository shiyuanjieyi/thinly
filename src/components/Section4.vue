<template>
  <div
    class="proud-of-work-section overflow-hidden bg-accent-purple"
    style="
      padding-top: clamp(56px, 54.3425px + 0.441989vw, 60px);
      padding-bottom: clamp(56px, 12.9061px + 11.4917vw, 160px);
    "
  >
    <div
      class="m-auto w-full px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] min-xl:max-w-[1232px]"
    >
      <div
        class="flex items-center rounded-full font-medium uppercase w-fit tracking-[0.10em] bg-violet10 text-blue20 h-[37px] text-[18px] max-xs:h-8 max-xs:text-[16px] px-4"
      >
        Proud of our work
      </div>
      <div
        class="mt-6 flex flex-wrap items-end justify-between max-xs:mt-4"
        style="gap: clamp(16px, 10.1989px + 1.54696vw, 30px)"
      >
        <h2
          class="max-w-[36rem] whitespace-pre-line font-gradual font-bold leading-[1.2] tracking-[-0.03em] text-blue20 max-xs:leading-[1.15]"
          style="font-size: clamp(28px, 16.3978px + 3.09392vw, 56px)"
        >
          Thousands of people are <span class="text-white">losing weight</span> with GLP-1
          medications
        </h2>
        <p
          class="whitespace-pre-line font-medium leading-[1.24] tracking-[-0.015em] text-black10"
          style="font-size: clamp(18px, 15.5138px + 0.662983vw, 24px)"
        >
          Hear more form our Thinly Members, whose success inspired the metabolic weight loss
          program.
        </p>
      </div>
    </div>
    <div style="padding-top: clamp(24px, 7.42541px + 4.41989vw, 64px)">
      <div :style="{ 'padding-left': paddingLeft + 'px' }">
        <div class="swiper swiper-initialized swiper-horizontal !px-4 swiper-backface-hidden">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide swiper-slide-active max-w-[303px] active:cursor-grab"
              style="margin-right: 24px"
            >
              <div class="relative w-full overflow-hidden rounded-[24px]">
                <video
                  id="video-player-1"
                  preload="metadata"
                  class="h-auto w-full"
                  src="@/assets/video/review-1.mp4"
                  @click="togglePlay(1)"
                ></video>
                <div
                  id="duration-1"
                  class="absolute left-3 top-3 flex h-[2.25rem] items-center rounded-full bg-white px-4 text-base font-medium tracking-[0.1em] text-primary max-xs:h-[22px] max-xs:px-3 max-xs:text-sm"
                >
                  00:32
                </div>
                <button
                  id="play-button-1"
                  class="absolute rounded-full bg-secondary p-2 font-medium uppercase tracking-[0.1em] text-primary focus:outline-none max-xs:!bottom-1/2 max-xs:!left-1/2 max-xs:-translate-x-1/2 max-xs:translate-y-1/2"
                  style="
                    font-size: clamp(14px, 9.85635px + 1.10497vw, 24px);
                    height: clamp(56px, 23.2652px + 8.72928vw, 135px);
                    width: clamp(56px, 23.2652px + 8.72928vw, 135px);
                    bottom: clamp(16px, 6.05525px + 2.65193vw, 40px);
                    right: clamp(16px, 6.05525px + 2.65193vw, 40px);
                  "
                  @click="togglePlay(1)"
                >
                  Play
                </button>
              </div>
            </div>
            <div
              class="swiper-slide swiper-slide-next max-w-[303px] active:cursor-grab"
              style="margin-right: 24px"
            >
              <div class="relative w-full overflow-hidden rounded-[24px]">
                <video
                  id="video-player-2"
                  preload="metadata"
                  class="h-auto w-full"
                  src="@/assets/video/review-2.mp4"
                  @click="togglePlay(2)"
                ></video>
                <div
                  id="duration-2"
                  class="absolute left-3 top-3 flex h-[2.25rem] items-center rounded-full bg-white px-4 text-base font-medium tracking-[0.1em] text-primary max-xs:h-[22px] max-xs:px-3 max-xs:text-sm"
                >
                  00:10
                </div>
                <button
                  id="play-button-2"
                  class="absolute rounded-full bg-secondary p-2 font-medium uppercase tracking-[0.1em] text-primary focus:outline-none max-xs:!bottom-1/2 max-xs:!left-1/2 max-xs:-translate-x-1/2 max-xs:translate-y-1/2"
                  style="
                    font-size: clamp(14px, 9.85635px + 1.10497vw, 24px);
                    height: clamp(56px, 23.2652px + 8.72928vw, 135px);
                    width: clamp(56px, 23.2652px + 8.72928vw, 135px);
                    bottom: clamp(16px, 6.05525px + 2.65193vw, 40px);
                    right: clamp(16px, 6.05525px + 2.65193vw, 40px);
                  "
                  @click="togglePlay(2)"
                >
                  Play
                </button>
              </div>
            </div>
            <div class="swiper-slide max-w-[303px] active:cursor-grab" style="margin-right: 24px">
              <div class="relative w-full overflow-hidden rounded-[24px]">
                <video
                  id="video-player-3"
                  preload="metadata"
                  class="h-auto w-full"
                  src="@/assets/video/review-3.mp4"
                  @click="togglePlay(3)"
                ></video>
                <div
                  id="duration-3"
                  class="absolute left-3 top-3 flex h-[2.25rem] items-center rounded-full bg-white px-4 text-base font-medium tracking-[0.1em] text-primary max-xs:h-[22px] max-xs:px-3 max-xs:text-sm"
                >
                  00:47
                </div>
                <button
                  id="play-button-3"
                  class="absolute rounded-full bg-secondary p-2 font-medium uppercase tracking-[0.1em] text-primary focus:outline-none max-xs:!bottom-1/2 max-xs:!left-1/2 max-xs:-translate-x-1/2 max-xs:translate-y-1/2"
                  style="
                    font-size: clamp(14px, 9.85635px + 1.10497vw, 24px);
                    height: clamp(56px, 23.2652px + 8.72928vw, 135px);
                    width: clamp(56px, 23.2652px + 8.72928vw, 135px);
                    bottom: clamp(16px, 6.05525px + 2.65193vw, 40px);
                    right: clamp(16px, 6.05525px + 2.65193vw, 40px);
                  "
                  @click="togglePlay(3)"
                >
                  Play
                </button>
              </div>
            </div>
            <div class="swiper-slide max-w-[303px] active:cursor-grab" style="margin-right: 24px">
              <div class="relative w-full overflow-hidden rounded-[24px]">
                <video
                  id="video-player-4"
                  preload="metadata"
                  class="h-auto w-full"
                  src="@/assets/video/review-4.mp4"
                  @click="togglePlay(4)"
                ></video>
                <div
                  id="duration-4"
                  class="absolute left-3 top-3 flex h-[2.25rem] items-center rounded-full bg-white px-4 text-base font-medium tracking-[0.1em] text-primary max-xs:h-[22px] max-xs:px-3 max-xs:text-sm"
                >
                  00:35
                </div>
                <button
                  id="play-button-4"
                  class="absolute rounded-full bg-secondary p-2 font-medium uppercase tracking-[0.1em] text-primary focus:outline-none max-xs:!bottom-1/2 max-xs:!left-1/2 max-xs:-translate-x-1/2 max-xs:translate-y-1/2"
                  style="
                    font-size: clamp(14px, 9.85635px + 1.10497vw, 24px);
                    height: clamp(56px, 23.2652px + 8.72928vw, 135px);
                    width: clamp(56px, 23.2652px + 8.72928vw, 135px);
                    bottom: clamp(16px, 6.05525px + 2.65193vw, 40px);
                    right: clamp(16px, 6.05525px + 2.65193vw, 40px);
                  "
                  @click="togglePlay(4)"
                >
                  Play
                </button>
              </div>
            </div>
            <div class="swiper-slide max-w-[303px] active:cursor-grab" style="margin-right: 24px">
              <div class="relative w-full overflow-hidden rounded-[24px]">
                <video
                  id="video-player-5"
                  preload="metadata"
                  class="h-auto w-full"
                  src="@/assets/video/review-5.mp4"
                  @click="togglePlay(5)"
                ></video>
                <div
                  id="duration-5"
                  class="absolute left-3 top-3 flex h-[2.25rem] items-center rounded-full bg-white px-4 text-base font-medium tracking-[0.1em] text-primary max-xs:h-[22px] max-xs:px-3 max-xs:text-sm"
                >
                  01:20
                </div>
                <button
                  id="play-button-5"
                  class="absolute rounded-full bg-secondary p-2 font-medium uppercase tracking-[0.1em] text-primary focus:outline-none max-xs:!bottom-1/2 max-xs:!left-1/2 max-xs:-translate-x-1/2 max-xs:translate-y-1/2"
                  style="
                    font-size: clamp(14px, 9.85635px + 1.10497vw, 24px);
                    height: clamp(56px, 23.2652px + 8.72928vw, 135px);
                    width: clamp(56px, 23.2652px + 8.72928vw, 135px);
                    bottom: clamp(16px, 6.05525px + 2.65193vw, 40px);
                    right: clamp(16px, 6.05525px + 2.65193vw, 40px);
                  "
                  @click="togglePlay(5)"
                >
                  Play
                </button>
              </div>
            </div>
            <div class="swiper-slide max-w-[303px] active:cursor-grab" style="margin-right: 24px">
              <div class="relative w-full overflow-hidden rounded-[24px]">
                <video
                  id="video-player-6"
                  preload="metadata"
                  class="h-auto w-full"
                  src="@/assets/video/review-6.mp4"
                  @click="togglePlay(6)"
                ></video>
                <div
                  id="duration-6"
                  class="absolute left-3 top-3 flex h-[2.25rem] items-center rounded-full bg-white px-4 text-base font-medium tracking-[0.1em] text-primary max-xs:h-[22px] max-xs:px-3 max-xs:text-sm"
                >
                  00:37
                </div>
                <button
                  id="play-button-6"
                  class="absolute rounded-full bg-secondary p-2 font-medium uppercase tracking-[0.1em] text-primary focus:outline-none max-xs:!bottom-1/2 max-xs:!left-1/2 max-xs:-translate-x-1/2 max-xs:translate-y-1/2"
                  style="
                    font-size: clamp(14px, 9.85635px + 1.10497vw, 24px);
                    height: clamp(56px, 23.2652px + 8.72928vw, 135px);
                    width: clamp(56px, 23.2652px + 8.72928vw, 135px);
                    bottom: clamp(16px, 6.05525px + 2.65193vw, 40px);
                    right: clamp(16px, 6.05525px + 2.65193vw, 40px);
                  "
                  @click="togglePlay(6)"
                >
                  Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="m-auto w-full px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] min-xl:max-w-[1232px]"
      >
        <div
          :class="operatingZoneClass"
          style="margin-top: clamp(24px, 19.0276px + 1.32597vw, 36px)"
        >
          <div class="flex items-center justify-between gap-2">
            <button
              class="swiper-prev-button max-xs:text-base rounded-full tracking-[0.1em] uppercase flex items-center justify-center font-medium text-lg text-nowrap text-center gap-2 relative bg-white text-blue20 h-14 w-14 p-0 max-xs:h-[2.75rem] max-xs:w-[2.75rem]"
              type="button"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5M5 12L12 5M5 12L12 19"
                  stroke="#004E35"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <button
              class="swiper-next-button max-xs:text-base rounded-full tracking-[0.1em] uppercase flex items-center justify-center font-medium text-lg text-nowrap text-center gap-2 relative bg-white text-blue20 h-14 w-14 p-0 max-xs:h-[2.75rem] max-xs:w-[2.75rem]"
              type="button"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="#004E35"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="relative flex h-1 w-full flex-col items-center justify-start gap-4 bg-transparent max-sm:hidden"
          >
            <div
              class="swiper-scrollbar swiper-scrollbar-proudOfWorkSection swiper-scrollbar-horizontal !top-1/2 -translate-y-1/2 !bg-white"
            >
              <div class="swiper-scrollbar-drag"></div>
            </div>
          </div>
          <a
            id="button-proudOfWorkSection"
            class="max-xs:h-12 max-xs:text-base rounded-full tracking-[0.1em] uppercase h-14 flex items-center justify-center font-medium text-lg text-nowrap px-4 text-center gap-2 relative bg-white text-blue20 min-w-[18.5rem] max-xs:min-w-[10rem]"
            href="/"
          >
            SEE 13+ MORE STORIES
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swiper from 'swiper'
import { Navigation, Scrollbar } from 'swiper/modules'
import { ref, onMounted } from 'vue'
import { isMobile, formatDuration } from '@/utils/index'

const timer = ref([])
const countdown = ref([])
const togglePlay = (idx) => {
  const video = document.querySelector(`#video-player-${idx}`)
  const playButton = document.querySelector(`#play-button-${idx}`)
  if (video.paused) {
    video.play()
    if (!countdown.value[idx]) {
      countdown.value[idx] = Math.floor(video.duration)
    }
    startCountdown(idx)
    playButton.classList.add('hidden')
  } else {
    video.pause()
    clearInterval(timer.value[idx])
    playButton.classList.remove('hidden')
  }
}

const startCountdown = (idx) => {
  const duration = document.querySelector(`#duration-${idx}`)
  const video = document.querySelector(`#video-player-${idx}`)
  const playButton = document.querySelector(`#play-button-${idx}`)
  timer.value[idx] = setInterval(() => {
    if (countdown.value[idx] > 0) {
      countdown.value[idx]--
      duration.textContent = formatDuration(countdown.value[idx])
    } else {
      countdown.value[idx] = Math.floor(video.duration)
      duration.textContent = formatDuration(countdown.value[idx])
      clearInterval(timer.value[idx])
      playButton.classList.remove('hidden')
    }
  }, 1000)
}

const paddingLeft = ref(0)
const updatePaddingLeft = () => {
  const leftWidth = window.innerWidth > 1236 ? (window.innerWidth - 1236) / 2 : 0
  paddingLeft.value = leftWidth > 16 ? leftWidth : 0
}

const operatingZoneClass = ref('flex items-center gap-8 !mx-[unset]')
const updateText = () => {
  const element = document.querySelector('#button-proudOfWorkSection')
  if (window.matchMedia('(max-width: 767px)').matches) {
    element.textContent = 'see more'
    operatingZoneClass.value =
      'flex items-center gap-8 !mx-[unset] flex-row-reverse justify-between'
  } else {
    element.textContent = 'SEE 13+ MORE STORIES'
    operatingZoneClass.value = 'flex items-center gap-8 !mx-[unset]'
  }
}

// 初始调用
onMounted(() => {
  update()
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    freeMode: true,
    observer: true,
    slidesPerView: 'auto',
    spaceBetween: isMobile() ? 16 : 24,
    modules: [Navigation, Scrollbar],

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-next-button',
      prevEl: '.swiper-prev-button',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar-proudOfWorkSection',
      hide: false,
    },
  })
})

const update = () => {
  updatePaddingLeft()
  updateText()
}

// 监听窗口大小变化
window.addEventListener('resize', update)
</script>
