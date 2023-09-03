<template>
  <div
    class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2"
  >
    <figure
      class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700"
    >
      <blockquote
        class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400"
      >
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          프로젝트 기획, 아키텍처 설계, 프로젝트 일정관리, 기술 스택 선정
        </h3>
        <p class="my-4 text-sm">
          "프로젝트 규모 설정과 진행 일정을 관리하였습니다. 팀원이 개발을 할때
          서로가 서로에게 병목이 되거나 코드충돌을 일으키지 않도록 프로젝트를
          구성하였고 팀원들 중간에서 서로의 원활한 의사소통을 도왔습니다."
        </p>
      </blockquote>
      <figcaption class="flex items-center justify-center space-x-3">
        <img
          class="rounded-full w-9 h-9"
          src="/images/profile/yukmaro.jpeg"
          alt="profile picture"
        />
        <div class="space-y-0.5 font-medium dark:text-white text-left">
          <button
            @click="
              redirect(
                'https://catkin-peridot-2ae.notion.site/0e44d8c6b5fb4f5796d74b064c563348'
              )
            "
          >
            육마로
          </button>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            프로젝트 매니저
          </div>
        </div>
      </figcaption>
    </figure>
    <figure
      class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700"
    >
      <blockquote
        class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400"
      >
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          AI 모델 파이프라인 개발
        </h3>
        <p class="my-4 text-sm">
          "AI 모델 파이프라인을 진행할 때 처리 속도가 느려 성능 개선을 위해
          겪었던 시행착오들이 떠오릅니다." <br />성능 개선을 위해 비동기 처리,
          멀티 스레드, 멀티 프로세스 방식을 시도해 보았습니다.
        </p>
      </blockquote>
      <figcaption class="flex items-center justify-center space-x-3">
        <img
          class="rounded-full w-9 h-9"
          src="/images/profile/kimdogun.jpeg"
          alt="profile picture"
        />
        <div class="space-y-0.5 font-medium dark:text-white text-left">
          <button
            @click="
              redirect(
                'https://gravel-vanilla-047.notion.site/1498217de1c049d9ae2e04246751afd8'
              )
            "
          >
            김도건
          </button>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            백엔드 개발자
          </div>
        </div>
      </figcaption>
    </figure>
    <figure
      class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700"
    >
      <blockquote
        class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400"
      >
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Spring-Java을 이용한 백엔드 서버 개발
        </h3>
        <p class="my-4 text-sm">
          "웹과 AI 서버에서 들어오는 요청에 대한 에러가 없이 알맞은 데이터를
          전달하는 것을 목표로 두었습니다."
        </p>
      </blockquote>
      <figcaption class="flex items-center justify-center space-x-3">
        <img
          class="rounded-full w-9 h-9"
          src="/images/profile/jungehun.jpeg"
          alt="profile picture"
        />
        <div class="space-y-0.5 font-medium dark:text-white text-left">
          <button
            @click="
              redirect(
                'https://sandy-tadpole-ca0.notion.site/0970a21483e44af29ee96480c2c4ea03'
              )
            "
          >
            정의현
          </button>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            백엔드 개발자
          </div>
        </div>
      </figcaption>
    </figure>
    <figure
      class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700"
    >
      <blockquote
        class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400"
      >
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Vue3.js를 이용한 프론트엔드 개발 및 디자인
        </h3>
        <p class="my-4 text-sm">
          "Adobe XD를 사용해 웹 디자인을 하고, Vuejs와 tailwind를 사용하여
          프론트 웹개발을 진행하였습니다."
        </p>
      </blockquote>
      <figcaption class="flex items-center justify-center space-x-3">
        <img
          class="rounded-full w-9 h-9"
          src="/images/profile/kimsongjun.jpeg"
          alt="profile picture"
        />
        <div class="space-y-0.5 font-medium dark:text-white text-left">
          <div>김성준</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            프론트엔드 개발자
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<script setup>
  import { onMounted } from "vue";
  import { initFlowbite } from "flowbite";

  // initialize components based on data attribute selectors
  onMounted(() => {
    initFlowbite();
  });

  const redirect = (url) => window.open(url);
</script>
<style lang="scss" scoped></style>
