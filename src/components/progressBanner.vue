<template>
  <div class="fixed inset-0 flex items-center justify-center z-30">
    <div class="absolute inset-0 bg-black opacity-60"></div>
  </div>
  <div
    id="marketing-banner"
    tabindex="-1"
    class="fixed z-50 flex flex-col md:flex-row justify-between w-[calc(100%-4rem)] p-4 -translate-x-1/2 bg-slate-100 border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6 dark:bg-gray-700 dark:border-gray-600"
  >
    <div
      class="flex flex-col items-start mb-3 mr-4 md:items-center md:flex-row md:mb-0"
    >
      <a
        class="flex items-center mb-2 border-gray-200 md:pr-4 md:mr-4 md:border-r md:mb-0 dark:border-gray-600"
      >
        <img
          src="/src/assets/images/Emoji_Logo.png"
          class="h-6 mr-2"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
          >MyEmoji</span
        >
      </a>
      <p
        class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
      >
        이미지가 서버에서 처리되고 있어요. 잠시 기다려주세요.
      </p>
    </div>
    <div class="flex justify-center items-center gap-4 mb-3">
      <img
        class="rounded-lg w-32 h-42"
        :src="this.orign_url"
        alt="profile picture"
      />
      <div>to</div>
      <img class="rounded-lg w-32 h-42" :src="this.url" alt="profile picture" />
    </div>

    <div class="flex justify-between mb-1">
      <span class="text-base font-medium text-blue-700 dark:text-white"
        >{{ this.$store.state.loadingStatus.status }} Loading...</span
      >
      <span class="text-sm font-medium text-blue-700 dark:text-white"
        >{{ this.$store.state.loadingStatus.progress }}%</span
      >
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        class="bg-blue-600 h-2.5 rounded-full"
        :style="{ width: `${this.$store.state.loadingStatus.progress}%` }"
      ></div>
    </div>

    <div class="flex items-center flex-shrink-0">
      <button
        @click="this.$store.commit('setLoading', false)"
        type="button"
        class="absolute top-2.5 right-2.5 md:relative md:top-auto md:right-auto flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          class="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: "/images/example/exam_gogh.png",
        orign_url: "/images/example/exam_origin.png",
        step: 0,
        tag: ["gogh", "sketch", "cartoon"],
        emoji: ["smile", "sad", "angry"],
      };
    },
    mounted() {
      this.setLoop();
    },
    methods: {
      setImageByStatus(status) {
        if (status == "tag") {
          return "";
        }
        if (status == "emoji") {
          return "";
        }
      },
      setLoop() {
        const repeat = setInterval(() => {
          if (this.$store.state.loadingStatus.status == "tag") {
            this.orign_url = "/images/example/exam_origin.png";
            this.url = `/images/example/exam_${this.tag[this.step % 3]}.png`;
          } else {
            this.orign_url = `/images/example/exam_emoji_${
              this.tag[this.step % 3]
            }.png`;
            this.url = `/images/example/exam_emoji_${this.tag[this.step % 3]}_${
              this.emoji[this.step % 3]
            }.png`;
          }
          this.step++;
          if (!this.$store.state.loading) {
            clearInterval(repeat);
          }
        }, 2000);
      },
    },
  };
</script>

<style></style>
