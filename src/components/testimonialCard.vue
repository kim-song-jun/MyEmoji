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
          백엔드 개발자를 꿈꾸는
        </h3>
        <p class="my-4 text-sm">
          "팀원이 개발을 할때 서로가 서로에게 병목이 되거나 코드충돌을 일으키지
          않도록"
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
            data-modal-target="defaultModal"
            data-modal-toggle="defaultModal"
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
          <div>김도건</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            백엔드 개발자
          </div>
        </div>
      </figcaption>
    </figure>
    <!-- <figure
      class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700"
    >
      <blockquote
        class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400"
      >
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Mindblowing workflow
        </h3>
        <p class="my-4">
          Aesthetically, the well designed components are beautiful and will
          undoubtedly level up your next application."
        </p>
      </blockquote>
      <figcaption class="flex items-center justify-center space-x-3">
        <img
          class="rounded-full w-9 h-9"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
          alt="profile picture"
        />
        <div class="space-y-0.5 font-medium dark:text-white text-left">
          <div>Jese Leos</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            Software Engineer at Facebook
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
          Efficient Collaborating
        </h3>
        <p class="my-4">
          You have many examples that can be used to create a fast prototype for
          your team."
        </p>
      </blockquote>
      <figcaption class="flex items-center justify-center space-x-3">
        <img
          class="rounded-full w-9 h-9"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
          alt="profile picture"
        />
        <div class="space-y-0.5 font-medium dark:text-white text-left">
          <div>Joseph McFall</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            CTO at Google
          </div>
        </div>
      </figcaption>
    </figure> -->
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
