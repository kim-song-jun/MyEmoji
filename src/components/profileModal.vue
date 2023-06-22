<template>
  <!-- Main modal -->
  <div
    id="defaultModal"
    data-modal-target="defaultModal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            이모티콘 다운로드
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="defaultModal"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
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
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
 
        <div class="flex flex-col bg-gray-100  justify-center items-center h-32 mx-8">
          <img
          class="h-32"
          :src="this.url"
          @error="errorImage"
        />
        </div>
          <div
          class="flex flex-col bg-gray-100 mx-8 h-32 mt-2 justify-center items-center"
        >
          <canvas id="qrcode-canvas"></canvas>
        </div>
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            @click="downloadImage(this.url)"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Download
          </button>
          <button
            data-modal-hide="defaultModal"
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import QRCode from "qrcode";
  import gif from '../assets/images/exam_emoji_cartoon_angry_gif_out.gif'

  export default {
    data() {
      return {
        emojiList: ["smile", "angry", "heart", "sad", "yawn"],
        step: 0,
        url: "",
      };
    },
    methods:{
      errorImage(event) {
        console.log(event)
        event.target.src = gif
        this.generateQRCode('/image/exmaple/banner/exam_emoji_cartoon_angry_gif_out.gif')
        this.url = '/image/exmaple/banner/exam_emoji_cartoon_angry_gif_out.gif'
      },
      async downloadImage(imageUrl) {
        try {
          const response = await axios.get(imageUrl, {
            responseType: "blob",
            headers: {
              "Content-Type": "image/jpeg",       
            },
          });
          const blob = new Blob([response.data]);
          const url = URL.createObjectURL(blob);

          const link = document.createElement("a");
          link.href = url;
          link.download = `${this.$store.state.tagName}_${this.$store.state.first}_${this.$store.state.second}.gif`; // 다운로드될 파일의 이름을 설정하세요
          link.click();

          URL.revokeObjectURL(url);
        } catch (e) {
          console.error("Error downloading image:", e);
        }
      },
      async generateQRCode(url) {
        try {
          const canvas = document.getElementById("qrcode-canvas");
          await QRCode.toCanvas(canvas, url, { width: 150 });
        } catch (error) {
          console.log("Error in generateQRCode", error);
        }
      },
    },
    mounted() {
      this.url = `http://13.114.204.13:8000/showEmojiGif/${this.$store.state.requestId}/${this.$store.state.tagName}/${this.$store.state.first}/${this.$store.state.second}`;
      this.generateQRCode(this.url);
    },
  };
</script>

<style></style>
