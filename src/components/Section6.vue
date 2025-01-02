<template>
  <div
    class="user-reviews-section overflow-hidden"
    style="
      padding-top: clamp(56px, 12.9061px + 11.4917vw, 160px);
      padding-bottom: clamp(56px, 12.9061px + 11.4917vw, 160px);
    "
  >
    <div
      class="m-auto w-full px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] min-xl:max-w-[1232px]"
    >
      <div
        class="flex items-center rounded-full font-medium uppercase w-fit tracking-[0.10em] bg-secondary text-primary h-[37px] text-[18px] max-xs:h-8 max-xs:text-[16px] px-4"
      >
        User reviews
      </div>
      <h2
        class="mt-6 font-gradual font-bold leading-[1.2] tracking-[-0.03em] text-primary max-xs:mt-4 max-xs:leading-[1.15]"
        style="font-size: clamp(28px, 16.3978px + 3.09392vw, 56px)"
      >
        Real people, Real <span class="text-kellyGreen max-xs:text-primary">Experiences</span>
      </h2>
    </div>
    <div style="padding-top: clamp(24px, 7.42541px + 4.41989vw, 64px)">
      <div :style="{ 'padding-left': paddingLeft + 'px' }">
        <div class="swiper swiper-initialized swiper-horizontal !px-4 swiper-backface-hidden">
          <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px)">
            <div
              class="swiper-slide swiper-slide-active max-w-[792px] max-xs:!max-w-[334px] max-sm:max-w-[400px]"
              style="margin-right: 24px"
            >
              <div
                class="flex h-full w-full flex-col items-stretch justify-between gap-6 rounded-3xl border-[1px] border-green30 bg-cyan10 p-[28px] text-primary active:cursor-grab max-xs:p-4"
              >
                <div class="flex items-start justify-between gap-6 max-sm:h-full max-sm:flex-col">
                  <div class="flex flex-col items-start justify-start gap-2">
                    <div class="h-6 max-xs:h-4">
                      <svg
                        width="34"
                        height="24"
                        viewBox="0 0 34 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-full w-full"
                      >
                        <path
                          d="M25.4295 7.87115L25.248 8.3695H25.7784C29.751 8.3695 33.2273 11.7834 33.2273 16.0003C33.2273 20.2134 29.812 23.6287 25.5989 23.6287C21.3859 23.6287 17.9706 20.2134 17.9706 16.0003C17.9706 15.0285 18.0198 14.1934 18.2068 13.0763C18.4903 11.3822 19.0218 9.72744 19.8652 8.1755C22.1239 4.01911 26.2668 1.19514 32.7448 0.375723C33.2257 0.314892 33.4222 0.973709 32.9866 1.18627C29.8254 2.72868 27.4693 4.59662 26.2055 6.36723C25.9733 6.69248 25.8328 6.91379 25.7219 7.13864C25.6224 7.34035 25.5503 7.53885 25.4567 7.79652C25.4478 7.82085 25.4388 7.84571 25.4295 7.87115ZM7.83031 7.87115L7.64881 8.3695H8.17918C12.1517 8.3695 15.6281 11.7834 15.6281 16.0003C15.6281 20.2134 12.2127 23.6287 7.99969 23.6287C3.78666 23.6287 0.37133 20.2134 0.37133 16.0003C0.37133 15.0285 0.420597 14.1934 0.607525 13.0763C0.891026 11.3822 1.42252 9.72744 2.26592 8.1755C4.52469 4.01911 8.66752 1.19514 15.1456 0.375723C15.6265 0.314894 15.823 0.973707 15.3874 1.18627C12.2262 2.72868 9.87008 4.59662 8.60625 6.36723C8.37409 6.69248 8.23352 6.91379 8.12265 7.13865C8.0232 7.34033 7.95109 7.5388 7.85749 7.79641C7.84863 7.82078 7.83959 7.84567 7.83031 7.87115Z"
                          stroke="#004E35"
                          stroke-width="0.742574"
                        ></path>
                      </svg>
                    </div>
                    <h4
                      class="text-[1.5rem] font-medium leading-[1.4] tracking-[-0.01em] max-xs:text-[1.25rem]"
                    >
                      Caring customer service
                    </h4>
                    <p class="text-base font-medium tracking-[-0.01em]">
                      Mike reached out to me when I didn't complete my order online. He was patient
                      and kind and answered all my questions. Mike made me feel so comfortable about
                      starting the program. I feel confident that I will have good results.
                    </p>
                    <ul class="pt-4">
                      <li class="flex items-start text-base font-medium tracking-[-0.01em]">
                        <span class="px-3">•</span>Down 35 LBS In 5 months
                      </li>
                      <li class="flex items-start text-base font-medium tracking-[-0.01em]">
                        <span class="px-3">•</span>Slow and steady weight loss
                      </li>
                    </ul>
                  </div>
                  <img
                    src="@/assets/image/review-1.png"
                    alt="Rachel K."
                    class="w-full max-w-[380px]"
                  />
                </div>
                <div class="flex w-full items-end justify-between">
                  <div class="flex flex-col items-start gap-2">
                    <span
                      class="text-[1.25rem] font-medium leading-none tracking-[-0.01em] max-xs:text-[18px]"
                      >Rachel K.</span
                    ><span
                      class="flex items-center gap-1 text-[1rem] leading-none tracking-[-0.01em] max-xs:text-[14px]"
                      ><div class="h-6 w-6 max-xs:h-[18px] max-xs:w-[18px]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-full w-full"
                        >
                          <path
                            d="M21.5589 10.7405L20.1989 9.16055C19.9389 8.86055 19.7289 8.30055 19.7289 7.90055V6.20055C19.7289 5.14055 18.8589 4.27055 17.7989 4.27055H16.0989C15.7089 4.27055 15.1389 4.06055 14.8389 3.80055L13.2589 2.44055C12.5689 1.85055 11.4389 1.85055 10.7389 2.44055L9.16891 3.81055C8.86891 4.06055 8.29891 4.27055 7.90891 4.27055H6.17891C5.11891 4.27055 4.24891 5.14055 4.24891 6.20055V7.91055C4.24891 8.30055 4.03891 8.86055 3.78891 9.16055L2.43891 10.7505C1.85891 11.4405 1.85891 12.5605 2.43891 13.2505L3.78891 14.8405C4.03891 15.1405 4.24891 15.7005 4.24891 16.0905V17.8005C4.24891 18.8605 5.11891 19.7305 6.17891 19.7305H7.90891C8.29891 19.7305 8.86891 19.9405 9.16891 20.2005L10.7489 21.5605C11.4389 22.1505 12.5689 22.1505 13.2689 21.5605L14.8489 20.2005C15.1489 19.9405 15.7089 19.7305 16.1089 19.7305H17.8089C18.8689 19.7305 19.7389 18.8605 19.7389 17.8005V16.1005C19.7389 15.7105 19.9489 15.1405 20.2089 14.8405L21.5689 13.2605C22.1489 12.5705 22.1489 11.4305 21.5589 10.7405ZM16.1589 10.1105L11.3289 14.9405C11.1889 15.0805 10.9989 15.1605 10.7989 15.1605C10.5989 15.1605 10.4089 15.0805 10.2689 14.9405L7.84891 12.5205C7.55891 12.2305 7.55891 11.7505 7.84891 11.4605C8.13891 11.1705 8.61891 11.1705 8.90891 11.4605L10.7989 13.3505L15.0989 9.05055C15.3889 8.76055 15.8689 8.76055 16.1589 9.05055C16.4489 9.34055 16.4489 9.82055 16.1589 10.1105Z"
                            fill="#004E35"
                          ></path>
                        </svg>
                      </div>
                      Verified Customer</span
                    >
                  </div>
                  <div
                    class="flex h-[38px] items-center gap-1 rounded-full bg-secondary px-4 max-xs:h-[28px] max-xs:px-3"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.09355 9.25692V7.4354H14.2318C14.2918 7.75286 14.3227 8.12839 14.3227 8.5349C14.3227 9.90152 13.9491 11.5914 12.7451 12.7954C11.574 14.015 10.0777 14.6654 8.09549 14.6654C4.42146 14.6654 1.33203 11.6727 1.33203 7.9987C1.33203 4.32468 4.42146 1.33203 8.09549 1.33203C10.128 1.33203 11.5759 2.12955 12.6638 3.16904L11.3785 4.45437C10.5984 3.72266 9.54148 3.15356 8.09355 3.15356C5.41062 3.15356 3.31229 5.31577 3.31229 7.9987C3.31229 10.6816 5.41062 12.8438 8.09355 12.8438C9.83377 12.8438 10.8249 12.145 11.4598 11.5101C11.9747 10.9952 12.3134 10.2596 12.447 9.25499L8.09355 9.25692Z"
                        fill="#004E35"
                      ></path>
                    </svg>
                    <div class="flex items-center pb-[1px] max-xs:hidden">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#9FE870"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 max-w-4 fill-primary"
                      >
                        <path
                          d="M17.9189 14.32C17.6599 14.571 17.5409 14.934 17.5999 15.29L18.4889 20.21C18.5639 20.627 18.3879 21.049 18.0389 21.29C17.6969 21.54 17.2419 21.57 16.8689 21.37L12.4399 19.06C12.2859 18.978 12.1149 18.934 11.9399 18.929H11.6689C11.5749 18.943 11.4829 18.973 11.3989 19.019L6.96888 21.34C6.74988 21.45 6.50188 21.489 6.25888 21.45C5.66688 21.338 5.27188 20.774 5.36888 20.179L6.25888 15.259C6.31788 14.9 6.19888 14.535 5.93988 14.28L2.32888 10.78C2.02688 10.487 1.92188 10.047 2.05988 9.65C2.19388 9.254 2.53588 8.965 2.94888 8.9L7.91888 8.179C8.29688 8.14 8.62888 7.91 8.79888 7.57L10.9889 3.08C11.0409 2.98 11.1079 2.888 11.1889 2.81L11.2789 2.74C11.3259 2.688 11.3799 2.645 11.4399 2.61L11.5489 2.57L11.7189 2.5H12.1399C12.5159 2.539 12.8469 2.764 13.0199 3.1L15.2389 7.57C15.3989 7.897 15.7099 8.124 16.0689 8.179L21.0389 8.9C21.4589 8.96 21.8099 9.25 21.9489 9.65C22.0799 10.051 21.9669 10.491 21.6589 10.78L17.9189 14.32Z"
                          fill="inherit"
                        ></path>
                      </svg>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#9FE870"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 max-w-4 fill-primary"
                      >
                        <path
                          d="M17.9189 14.32C17.6599 14.571 17.5409 14.934 17.5999 15.29L18.4889 20.21C18.5639 20.627 18.3879 21.049 18.0389 21.29C17.6969 21.54 17.2419 21.57 16.8689 21.37L12.4399 19.06C12.2859 18.978 12.1149 18.934 11.9399 18.929H11.6689C11.5749 18.943 11.4829 18.973 11.3989 19.019L6.96888 21.34C6.74988 21.45 6.50188 21.489 6.25888 21.45C5.66688 21.338 5.27188 20.774 5.36888 20.179L6.25888 15.259C6.31788 14.9 6.19888 14.535 5.93988 14.28L2.32888 10.78C2.02688 10.487 1.92188 10.047 2.05988 9.65C2.19388 9.254 2.53588 8.965 2.94888 8.9L7.91888 8.179C8.29688 8.14 8.62888 7.91 8.79888 7.57L10.9889 3.08C11.0409 2.98 11.1079 2.888 11.1889 2.81L11.2789 2.74C11.3259 2.688 11.3799 2.645 11.4399 2.61L11.5489 2.57L11.7189 2.5H12.1399C12.5159 2.539 12.8469 2.764 13.0199 3.1L15.2389 7.57C15.3989 7.897 15.7099 8.124 16.0689 8.179L21.0389 8.9C21.4589 8.96 21.8099 9.25 21.9489 9.65C22.0799 10.051 21.9669 10.491 21.6589 10.78L17.9189 14.32Z"
                          fill="inherit"
                        ></path>
                      </svg>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#9FE870"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 max-w-4 fill-primary"
                      >
                        <path
                          d="M17.9189 14.32C17.6599 14.571 17.5409 14.934 17.5999 15.29L18.4889 20.21C18.5639 20.627 18.3879 21.049 18.0389 21.29C17.6969 21.54 17.2419 21.57 16.8689 21.37L12.4399 19.06C12.2859 18.978 12.1149 18.934 11.9399 18.929H11.6689C11.5749 18.943 11.4829 18.973 11.3989 19.019L6.96888 21.34C6.74988 21.45 6.50188 21.489 6.25888 21.45C5.66688 21.338 5.27188 20.774 5.36888 20.179L6.25888 15.259C6.31788 14.9 6.19888 14.535 5.93988 14.28L2.32888 10.78C2.02688 10.487 1.92188 10.047 2.05988 9.65C2.19388 9.254 2.53588 8.965 2.94888 8.9L7.91888 8.179C8.29688 8.14 8.62888 7.91 8.79888 7.57L10.9889 3.08C11.0409 2.98 11.1079 2.888 11.1889 2.81L11.2789 2.74C11.3259 2.688 11.3799 2.645 11.4399 2.61L11.5489 2.57L11.7189 2.5H12.1399C12.5159 2.539 12.8469 2.764 13.0199 3.1L15.2389 7.57C15.3989 7.897 15.7099 8.124 16.0689 8.179L21.0389 8.9C21.4589 8.96 21.8099 9.25 21.9489 9.65C22.0799 10.051 21.9669 10.491 21.6589 10.78L17.9189 14.32Z"
                          fill="inherit"
                        ></path>
                      </svg>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#9FE870"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 max-w-4 fill-primary"
                      >
                        <path
                          d="M17.9189 14.32C17.6599 14.571 17.5409 14.934 17.5999 15.29L18.4889 20.21C18.5639 20.627 18.3879 21.049 18.0389 21.29C17.6969 21.54 17.2419 21.57 16.8689 21.37L12.4399 19.06C12.2859 18.978 12.1149 18.934 11.9399 18.929H11.6689C11.5749 18.943 11.4829 18.973 11.3989 19.019L6.96888 21.34C6.74988 21.45 6.50188 21.489 6.25888 21.45C5.66688 21.338 5.27188 20.774 5.36888 20.179L6.25888 15.259C6.31788 14.9 6.19888 14.535 5.93988 14.28L2.32888 10.78C2.02688 10.487 1.92188 10.047 2.05988 9.65C2.19388 9.254 2.53588 8.965 2.94888 8.9L7.91888 8.179C8.29688 8.14 8.62888 7.91 8.79888 7.57L10.9889 3.08C11.0409 2.98 11.1079 2.888 11.1889 2.81L11.2789 2.74C11.3259 2.688 11.3799 2.645 11.4399 2.61L11.5489 2.57L11.7189 2.5H12.1399C12.5159 2.539 12.8469 2.764 13.0199 3.1L15.2389 7.57C15.3989 7.897 15.7099 8.124 16.0689 8.179L21.0389 8.9C21.4589 8.96 21.8099 9.25 21.9489 9.65C22.0799 10.051 21.9669 10.491 21.6589 10.78L17.9189 14.32Z"
                          fill="inherit"
                        ></path>
                      </svg>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#9FE870"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 max-w-4 fill-primary"
                      >
                        <path
                          d="M17.9189 14.32C17.6599 14.571 17.5409 14.934 17.5999 15.29L18.4889 20.21C18.5639 20.627 18.3879 21.049 18.0389 21.29C17.6969 21.54 17.2419 21.57 16.8689 21.37L12.4399 19.06C12.2859 18.978 12.1149 18.934 11.9399 18.929H11.6689C11.5749 18.943 11.4829 18.973 11.3989 19.019L6.96888 21.34C6.74988 21.45 6.50188 21.489 6.25888 21.45C5.66688 21.338 5.27188 20.774 5.36888 20.179L6.25888 15.259C6.31788 14.9 6.19888 14.535 5.93988 14.28L2.32888 10.78C2.02688 10.487 1.92188 10.047 2.05988 9.65C2.19388 9.254 2.53588 8.965 2.94888 8.9L7.91888 8.179C8.29688 8.14 8.62888 7.91 8.79888 7.57L10.9889 3.08C11.0409 2.98 11.1079 2.888 11.1889 2.81L11.2789 2.74C11.3259 2.688 11.3799 2.645 11.4399 2.61L11.5489 2.57L11.7189 2.5H12.1399C12.5159 2.539 12.8469 2.764 13.0199 3.1L15.2389 7.57C15.3989 7.897 15.7099 8.124 16.0689 8.179L21.0389 8.9C21.4589 8.96 21.8099 9.25 21.9489 9.65C22.0799 10.051 21.9669 10.491 21.6589 10.78L17.9189 14.32Z"
                          fill="inherit"
                        ></path>
                      </svg>
                    </div>
                    <span class="text-lg font-medium max-xs:text-base">5.0</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="swiper-slide swiper-slide-next max-w-[792px] max-xs:!max-w-[334px] max-sm:max-w-[400px]"
              style="margin-right: 24px"
            >
              <div
                class="flex h-full w-full flex-col items-stretch justify-between gap-6 rounded-3xl border-[1px] border-green30 bg-cyan10 p-[28px] text-primary active:cursor-grab max-xs:p-4"
              >
                <div class="flex items-start justify-between gap-6 max-sm:h-full max-sm:flex-col">
                  <div class="flex flex-col items-start justify-start gap-2">
                    <div class="h-6 max-xs:h-4">
                      <svg
                        width="34"
                        height="24"
                        viewBox="0 0 34 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-full w-full"
                      >
                        <path
                          d="M25.4295 7.87115L25.248 8.3695H25.7784C29.751 8.3695 33.2273 11.7834 33.2273 16.0003C33.2273 20.2134 29.812 23.6287 25.5989 23.6287C21.3859 23.6287 17.9706 20.2134 17.9706 16.0003C17.9706 15.0285 18.0198 14.1934 18.2068 13.0763C18.4903 11.3822 19.0218 9.72744 19.8652 8.1755C22.1239 4.01911 26.2668 1.19514 32.7448 0.375723C33.2257 0.314892 33.4222 0.973709 32.9866 1.18627C29.8254 2.72868 27.4693 4.59662 26.2055 6.36723C25.9733 6.69248 25.8328 6.91379 25.7219 7.13864C25.6224 7.34035 25.5503 7.53885 25.4567 7.79652C25.4478 7.82085 25.4388 7.84571 25.4295 7.87115ZM7.83031 7.87115L7.64881 8.3695H8.17918C12.1517 8.3695 15.6281 11.7834 15.6281 16.0003C15.6281 20.2134 12.2127 23.6287 7.99969 23.6287C3.78666 23.6287 0.37133 20.2134 0.37133 16.0003C0.37133 15.0285 0.420597 14.1934 0.607525 13.0763C0.891026 11.3822 1.42252 9.72744 2.26592 8.1755C4.52469 4.01911 8.66752 1.19514 15.1456 0.375723C15.6265 0.314894 15.823 0.973707 15.3874 1.18627C12.2262 2.72868 9.87008 4.59662 8.60625 6.36723C8.37409 6.69248 8.23352 6.91379 8.12265 7.13865C8.0232 7.34033 7.95109 7.5388 7.85749 7.79641C7.84863 7.82078 7.83959 7.84567 7.83031 7.87115Z"
                          stroke="#004E35"
                          stroke-width="0.742574"
                        ></path>
                      </svg>
                    </div>
                    <h4
                      class="text-[1.5rem] font-medium leading-[1.4] tracking-[-0.01em] max-xs:text-[1.25rem]"
                    >
                      Smooth process
                    </h4>
                    <p class="text-base font-medium tracking-[-0.01em]">
                      Smooth process. Bane called me and gave me an offer I couldn't refuse.
                      Lorraine with support is so professional and quick with responses. I just
                      signed up today so I hope I'm not jumping the gun with this review but so far,
                      they have exceeded my expectations and I look forward to a long successful
                      journey with thinly.
                    </p>
                  </div>
                  <img
                    src="@/assets/image/review-2.png"
                    alt="Lauren B."
                    class="w-full max-w-[380px]"
                  />
                </div>
                <div class="flex w-full items-end justify-between">
                  <div class="flex flex-col items-start gap-2">
                    <span
                      class="text-[1.25rem] font-medium leading-none tracking-[-0.01em] max-xs:text-[18px]"
                      >Lauren B.</span
                    ><span
                      class="flex items-center gap-1 text-[1rem] leading-none tracking-[-0.01em] max-xs:text-[14px]"
                      ><div class="h-6 w-6 max-xs:h-[18px] max-xs:w-[18px]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-full w-full"
                        >
                          <path
                            d="M21.5589 10.7405L20.1989 9.16055C19.9389 8.86055 19.7289 8.30055 19.7289 7.90055V6.20055C19.7289 5.14055 18.8589 4.27055 17.7989 4.27055H16.0989C15.7089 4.27055 15.1389 4.06055 14.8389 3.80055L13.2589 2.44055C12.5689 1.85055 11.4389 1.85055 10.7389 2.44055L9.16891 3.81055C8.86891 4.06055 8.29891 4.27055 7.90891 4.27055H6.17891C5.11891 4.27055 4.24891 5.14055 4.24891 6.20055V7.91055C4.24891 8.30055 4.03891 8.86055 3.78891 9.16055L2.43891 10.7505C1.85891 11.4405 1.85891 12.5605 2.43891 13.2505L3.78891 14.8405C4.03891 15.1405 4.24891 15.7005 4.24891 16.0905V17.8005C4.24891 18.8605 5.11891 19.7305 6.17891 19.7305H7.90891C8.29891 19.7305 8.86891 19.9405 9.16891 20.2005L10.7489 21.5605C11.4389 22.1505 12.5689 22.1505 13.2689 21.5605L14.8489 20.2005C15.1489 19.9405 15.7089 19.7305 16.1089 19.7305H17.8089C18.8689 19.7305 19.7389 18.8605 19.7389 17.8005V16.1005C19.7389 15.7105 19.9489 15.1405 20.2089 14.8405L21.5689 13.2605C22.1489 12.5705 22.1489 11.4305 21.5589 10.7405ZM16.1589 10.1105L11.3289 14.9405C11.1889 15.0805 10.9989 15.1605 10.7989 15.1605C10.5989 15.1605 10.4089 15.0805 10.2689 14.9405L7.84891 12.5205C7.55891 12.2305 7.55891 11.7505 7.84891 11.4605C8.13891 11.1705 8.61891 11.1705 8.90891 11.4605L10.7989 13.3505L15.0989 9.05055C15.3889 8.76055 15.8689 8.76055 16.1589 9.05055C16.4489 9.34055 16.4489 9.82055 16.1589 10.1105Z"
                            fill="#004E35"
                          ></path>
                        </svg>
                      </div>
                      Verified Customer</span
                    >
                  </div>
                  <div
                    class="flex h-[38px] items-center gap-1 rounded-full bg-secondary px-4 max-xs:h-[28px] max-xs:px-3"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.09355 9.25692V7.4354H14.2318C14.2918 7.75286 14.3227 8.12839 14.3227 8.5349C14.3227 9.90152 13.9491 11.5914 12.7451 12.7954C11.574 14.015 10.0777 14.6654 8.09549 14.6654C4.42146 14.6654 1.33203 11.6727 1.33203 7.9987C1.33203 4.32468 4.42146 1.33203 8.09549 1.33203C10.128 1.33203 11.5759 2.12955 12.6638 3.16904L11.3785 4.45437C10.5984 3.72266 9.54148 3.15356 8.09355 3.15356C5.41062 3.15356 3.31229 5.31577 3.31229 7.9987C3.31229 10.6816 5.41062 12.8438 8.09355 12.8438C9.83377 12.8438 10.8249 12.145 11.4598 11.5101C11.9747 10.9952 12.3134 10.2596 12.447 9.25499L8.09355 9.25692Z"
                        fill="#004E35"
                      ></path>
                    </svg>
                    <div class="flex items-center pb-[1px] max-xs:hidden">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#9FE870"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 max-w-4 fill-primary"
                      >
                        <path
                          d="M17.9189 14.32C17.6599 14.571 17.5409 14.934 17.5999 15.29L18.4889 20.21C18.5639 20.627 18.3879 21.049 18.0389 21.29C17.6969 21.54 17.2419 21.57 16.8689 21.37L12.4399 19.06C12.2859 18.978 12.1149 18.934 11.9399 18.929H11.6689C11.5749 18.943 11.4829 18.973 11.3989 19.019L6.96888 21.34C6.74988 21.45 6.50188 21.489 6.25888 21.45C5.66688 21.338 5.27188 20.774 5.36888 20.179L6.25888 15.259C6.31788 14.9 6.19888 14.535 5.93988 14.28L2.32888 10.78C2.02688 10.487 1.92188 10.047 2.05988 9.65C2.19388 9.254 2.53588 8.965 2.94888 8.9L7.91888 8.179C8.29688 8.14 8.62888 7.91 8.79888 7.57L10.9889 3.08C11.0409 2.98 11.1079 2.888 11.1889 2.81L11.2789 2.74C11.3259 2.688 11.3799 2.645 11.4399 2.61L11.5489 2.57L11.7189 2.5H12.1399C12.5159 2.539 12.8469 2.764 13.0199 3.1L15.2389 7.57C15.3989 7.897 15.7099 8.124 16.0689 8.179L21.0389 8.9C21.4589 8.96 21.8099 9.25 21.9489 9.65C22.0799 10.051 21.9669 10.491 21.6589 10.78L17.9189 14.32Z"
                          fill="inherit"
                        ></path>
                      </svg>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#9FE870"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 max-w-4 fill-primary"
                      >
                        <path
                          d="M17.9189 14.32C17.6599 14.571 17.5409 14.934 17.5999 15.29L18.4889 20.21C18.5639 20.627 18.3879 21.049 18.0389 21.29C17.6969 21.54 17.2419 21.57 16.8689 21.37L12.4399 19.06C12.2859 18.978 12.1149 18.934 11.9399 18.929H11.6689C11.5749 18.943 11.4829 18.973 11.3989 19.019L6.96888 21.34C6.74988 21.45 6.50188 21.489 6.25888 21.45C5.66688 21.338 5.27188 20.774 5.36888 20.179L6.25888 15.259C6.31788 14.9 6.19888 14.535 5.93988 14.28L2.32888 10.78C2.02688 10.487 1.92188 10.047 2.05988 9.65C2.19388 9.254 2.53588 8.965 2.94888 8.9L7.91888 8.179C8.29688 8.14 8.62888 7.91 8.79888 7.57L10.9889 3.08C11.0409 2.98 11.1079 2.888 11.1889 2.81L11.2789 2.74C11.3259 2.688 11.3799 2.645 11.4399 2.61L11.5489 2.57L11.7189 2.5H12.1399C12.5159 2.539 12.8469 2.764 13.0199 3.1L15.2389 7.57C15.3989 7.897 15.7099 8.124 16.0689 8.179L21.0389 8.9C21.4589 8.96 21.8099 9.25 21.9489 9.65C22.0799 10.051 21.9669 10.491 21.6589 10.78L17.9189 14.32Z"
                          fill="inherit"
                        ></path>
                      </svg>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#9FE870"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 max-w-4 fill-primary"
                      >
                        <path
                          d="M17.9189 14.32C17.6599 14.571 17.5409 14.934 17.5999 15.29L18.4889 20.21C18.5639 20.627 18.3879 21.049 18.0389 21.29C17.6969 21.54 17.2419 21.57 16.8689 21.37L12.4399 19.06C12.2859 18.978 12.1149 18.934 11.9399 18.929H11.6689C11.5749 18.943 11.4829 18.973 11.3989 19.019L6.96888 21.34C6.74988 21.45 6.50188 21.489 6.25888 21.45C5.66688 21.338 5.27188 20.774 5.36888 20.179L6.25888 15.259C6.31788 14.9 6.19888 14.535 5.93988 14.28L2.32888 10.78C2.02688 10.487 1.92188 10.047 2.05988 9.65C2.19388 9.254 2.53588 8.965 2.94888 8.9L7.91888 8.179C8.29688 8.14 8.62888 7.91 8.79888 7.57L10.9889 3.08C11.0409 2.98 11.1079 2.888 11.1889 2.81L11.2789 2.74C11.3259 2.688 11.3799 2.645 11.4399 2.61L11.5489 2.57L11.7189 2.5H12.1399C12.5159 2.539 12.8469 2.764 13.0199 3.1L15.2389 7.57C15.3989 7.897 15.7099 8.124 16.0689 8.179L21.0389 8.9C21.4589 8.96 21.8099 9.25 21.9489 9.65C22.0799 10.051 21.9669 10.491 21.6589 10.78L17.9189 14.32Z"
                          fill="inherit"
                        ></path>
                      </svg>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#9FE870"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 max-w-4 fill-primary"
                      >
                        <path
                          d="M17.9189 14.32C17.6599 14.571 17.5409 14.934 17.5999 15.29L18.4889 20.21C18.5639 20.627 18.3879 21.049 18.0389 21.29C17.6969 21.54 17.2419 21.57 16.8689 21.37L12.4399 19.06C12.2859 18.978 12.1149 18.934 11.9399 18.929H11.6689C11.5749 18.943 11.4829 18.973 11.3989 19.019L6.96888 21.34C6.74988 21.45 6.50188 21.489 6.25888 21.45C5.66688 21.338 5.27188 20.774 5.36888 20.179L6.25888 15.259C6.31788 14.9 6.19888 14.535 5.93988 14.28L2.32888 10.78C2.02688 10.487 1.92188 10.047 2.05988 9.65C2.19388 9.254 2.53588 8.965 2.94888 8.9L7.91888 8.179C8.29688 8.14 8.62888 7.91 8.79888 7.57L10.9889 3.08C11.0409 2.98 11.1079 2.888 11.1889 2.81L11.2789 2.74C11.3259 2.688 11.3799 2.645 11.4399 2.61L11.5489 2.57L11.7189 2.5H12.1399C12.5159 2.539 12.8469 2.764 13.0199 3.1L15.2389 7.57C15.3989 7.897 15.7099 8.124 16.0689 8.179L21.0389 8.9C21.4589 8.96 21.8099 9.25 21.9489 9.65C22.0799 10.051 21.9669 10.491 21.6589 10.78L17.9189 14.32Z"
                          fill="inherit"
                        ></path>
                      </svg>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#9FE870"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 max-w-4 fill-primary"
                      >
                        <path
                          d="M17.9189 14.32C17.6599 14.571 17.5409 14.934 17.5999 15.29L18.4889 20.21C18.5639 20.627 18.3879 21.049 18.0389 21.29C17.6969 21.54 17.2419 21.57 16.8689 21.37L12.4399 19.06C12.2859 18.978 12.1149 18.934 11.9399 18.929H11.6689C11.5749 18.943 11.4829 18.973 11.3989 19.019L6.96888 21.34C6.74988 21.45 6.50188 21.489 6.25888 21.45C5.66688 21.338 5.27188 20.774 5.36888 20.179L6.25888 15.259C6.31788 14.9 6.19888 14.535 5.93988 14.28L2.32888 10.78C2.02688 10.487 1.92188 10.047 2.05988 9.65C2.19388 9.254 2.53588 8.965 2.94888 8.9L7.91888 8.179C8.29688 8.14 8.62888 7.91 8.79888 7.57L10.9889 3.08C11.0409 2.98 11.1079 2.888 11.1889 2.81L11.2789 2.74C11.3259 2.688 11.3799 2.645 11.4399 2.61L11.5489 2.57L11.7189 2.5H12.1399C12.5159 2.539 12.8469 2.764 13.0199 3.1L15.2389 7.57C15.3989 7.897 15.7099 8.124 16.0689 8.179L21.0389 8.9C21.4589 8.96 21.8099 9.25 21.9489 9.65C22.0799 10.051 21.9669 10.491 21.6589 10.78L17.9189 14.32Z"
                          fill="inherit"
                        ></path>
                      </svg>
                    </div>
                    <span class="text-lg font-medium max-xs:text-base">5.0</span>
                  </div>
                </div>
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
              class="swiper-prev-button max-xs:text-base rounded-full tracking-[0.1em] uppercase flex items-center justify-center font-medium text-lg text-nowrap text-center gap-2 relative text-primary border border-primary h-14 w-14 p-0 max-xs:h-[2.75rem] max-xs:w-[2.75rem]"
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
              class="swiper-next-button max-xs:text-base rounded-full tracking-[0.1em] uppercase flex items-center justify-center font-medium text-lg text-nowrap text-center gap-2 relative text-primary border border-primary h-14 w-14 p-0 max-xs:h-[2.75rem] max-xs:w-[2.75rem]"
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
            class="relative flex h-1 w-full flex-col items-center justify-start gap-4 bg-transparent max-sm:hidden [&amp;>.swiper-scrollbar]:!bg-cyan10 [&amp;>.swiper-scrollbar-drag]:!bg-primary"
          >
            <div
              class="swiper-scrollbar swiper-scrollbar-userReviews swiper-scrollbar-horizontal !top-1/2 -translate-y-1/2 !bg-white"
            >
              <div class="swiper-scrollbar-drag"></div>
            </div>
          </div>
          <a
            id="button-userReviews"
            class="max-xs:h-12 max-xs:text-base rounded-full tracking-[0.1em] uppercase h-14 flex items-center justify-center font-medium text-lg text-nowrap px-4 text-center gap-2 relative text-primary border border-primary min-w-[18.5rem] max-xs:min-w-[10rem]"
            href="/"
          >
            See more reviews
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
import { isMobile } from '@/utils/index'

const paddingLeft = ref(0)
const updatePaddingLeft = () => {
  const leftWidth = window.innerWidth > 1236 ? (window.innerWidth - 1236) / 2 : 0
  paddingLeft.value = leftWidth > 16 ? leftWidth : 0
}

const operatingZoneClass = ref('flex items-center gap-8 !mx-[unset]')
const updateText = () => {
  const element = document.querySelector('#button-userReviews')
  if (window.matchMedia('(max-width: 767px)').matches) {
    element.textContent = 'see more'
    operatingZoneClass.value =
      'flex items-center gap-8 !mx-[unset] flex-row-reverse justify-between'
  } else {
    element.textContent = 'See more reviews'
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
      el: '.swiper-scrollbar-userReviews',
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
