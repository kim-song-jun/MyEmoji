<template>
  <div
    class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <ul
      class="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
      id="defaultTab"
      data-tabs-toggle="#defaultTabContent"
      role="tablist"
    >
      <li class="mr-4">
        <button
          id="about-tab"
          data-tabs-target="#about"
          type="button"
          role="tab"
          aria-controls="about"
          aria-selected="false"
          class="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
        >
          About
        </button>
      </li>
      <li class="mr-4">
        <button
          id="services-tab"
          data-tabs-target="#services"
          type="button"
          role="tab"
          aria-controls="services"
          aria-selected="true"
          class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
        >
          Services
        </button>
      </li>
      <li class="mr-4">
        <button
          id="statistics-tab"
          data-tabs-target="#statistics"
          type="button"
          role="tab"
          aria-controls="statistics"
          aria-selected="false"
          class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
        >
          Future
        </button>
      </li>
    </ul>
    <div id="defaultTabContent">
      <div
        class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
        id="about"
        role="tabpanel"
        aria-labelledby="about-tab"
      >
        <h2
          class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          A web app that takes pictures and generates various emoji
        </h2>
        <p class="mb-3 text-gray-500 dark:text-gray-400">
          Get the file in jpg and png format AI pipeline including pre- and
          post-processing of images Pass through to provide a custom gif to the
          user
        </p>
        <a
          href="https://docs.google.com/presentation/d/1acuZfNtBWpVujeP6HmmH1w_68qRiJjKCEQcSLF6DrXU/edit#slide=id.p"
          class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
        >
          Learn more
          <svg
            class="w-6 h-6 ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div
        class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
        id="services"
        role="tabpanel"
        aria-labelledby="services-tab"
      >
        <h2
          class="mb-5 text-3xl text-center font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          나만의 이모티콘 만들기
        </h2>
        <!-- List -->
        <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
          <li class="flex gap-8 justify-center pb-4">
            <div class="grid gap-4">
              <div>
                <img
                  class="h-auto w-full rounded-lg"
                  src="/images/example/banner/exam_emoji_cartoon_angry_gif_out.gif"
                  alt=""
                />
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="/images/example/banner/exam_emoji_origin.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="/images/example/banner/exam_emoji_cartoon.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="/images/example/banner/exam_emoji_cartoon_angry.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </li>
          <li class="flex space-x-2 items-center">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="leading-tight"
              >나의 모습을 이모티콘으로 남겨보세요!</span
            >
          </li>
          <li class="flex space-x-2 items-center">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="leading-tight"
              >풍부한 표정의 이모티콘을 만나보세요!</span
            >
          </li>
          <li class="flex space-x-2 items-center">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="leading-tight">업그레이드된 속도!</span>
          </li>
          <li class="flex space-x-2 items-center">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="leading-tight">다양한 화풍 지원</span>
          </li>
        </ul>
        <div class="w-full flex justify-end">
          <button
            type="button"
            class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="this.$router.push('/home')"
          >
            Getting Start &nbsp;
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Icon description</span>
          </button>
        </div>
      </div>
      <div
        class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
        id="statistics"
        role="tabpanel"
        aria-labelledby="statistics-tab"
      >
        <dl
          class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-2 xl:grid-cols-6 dark:text-white sm:p-8"
        >
          <div class="flex flex-col">
            <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
            <dd class="text-gray-500 dark:text-gray-400">Developers</dd>
          </div>
          <div class="flex flex-col">
            <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
            <dd class="text-gray-500 dark:text-gray-400">
              Public repositories
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted } from "vue";
  import { initFlowbite } from "flowbite";

  // initialize components based on data attribute selectors
  onMounted(() => {
    initFlowbite();
  });
</script>

<style lang="scss" scoped></style>
