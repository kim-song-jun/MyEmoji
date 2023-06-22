<template>
  <div
    class="flex flex-row px-4 text-gray-400 mt-40 justify-between gap-4 h-96 items-center absolute z-10"
  >
    <div class="h-full flex flex-col justify-center">
      <leftIcon></leftIcon>
    </div>
    <div class="h-auto w-80 flex flex-row justify-center">
      <div class="bg-white w-full rounded-xl flex flex-col">
        <div class="ml-72 mt-5">
          <DeleteIcon
            @click="this.$store.commit('setOpenModal', false)"
          ></DeleteIcon>
        </div>
        <div class="flex flex-row justify-center items-center">
          <img src="../assets/images/Emoji_Logo.png" class="w-14 mt-2" />
        </div>
        <div class="flex flex-row px-8 mt-4 items-center gap-2">
          <ImageIcon></ImageIcon>
          <div>{{ this.$store.state.currentImageName ?? "" }}</div>
        </div>
        <div
          class="flex flex-col bg-gray-100 mx-8 h-48 mt-2 justify-center items-center"
        >
          <canvas id="qrcode-canvas"></canvas>
        </div>
        <!-- <div class="flex flex-col bg-gray-100 mx-8 h-32 mt-3"></div> -->
        <div
          class="flex flex-row mx-8 font-bold text-xl items-center justify-center h-10 bg-orange-300 text-white mt-6 mb-4 rounded-md cursor-pointer"
          @click="downloadImage(this.url)"
        >
          DOWNLOAD
        </div>
      </div>
    </div>
    <div class="h-full flex flex-col justify-center">
      <rightIcon></rightIcon>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import ImageIcon from "./icons/imageIcon.vue";
  import leftIcon from "./icons/leftIcon.vue";
  import rightIcon from "./icons/rightIcon.vue";
  import QRCode from "qrcode";
  import DeleteIcon from "./icons/deleteIcon.vue";
  export default {
    props: {
      second: Number,
    },
    components: {
      rightIcon,
      leftIcon,
      ImageIcon,
      DeleteIcon,
    },
    data() {
      return {
        emojiList: ["smile", "angry", "heart", "sad", "yawn"],
        step: 0,
        url: "",
      };
    },
    methods: {
      nextImage() {
        if (this.step < 5) {
          this.step += 1;
          this.url = `http://13.114.204.13:8000/showEmojiGif/${
            this.$store.state.requestId
          }/${this.$store.state.tagName}/${this.emojiList[this.step]}/${
            this.second
          }`;
          this.generateQRCode(this.url);
        }
      },
      prevImage() {
        if (this.step > 0) {
          this.step -= 1;
          this.url = `http://13.114.204.13:8000/showEmojiGif/${
            this.$store.state.requestId
          }/${this.$store.state.tagName}/${this.emojiList[this.step]}/${
            this.second
          }`;
          this.generateQRCode(this.url);
        }
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
          link.download = "이미지 파일명.jpg"; // 다운로드될 파일의 이름을 설정하세요
          link.click();

          URL.revokeObjectURL(url);
        } catch (e) {
          console.error("Error downloading image:", e);
        }
      },
      async generateQRCode(url) {
        try {
          const canvas = document.getElementById("qrcode-canvas");
          await QRCode.toCanvas(canvas, url, { width: 200 });
        } catch (error) {
          console.log("Error in generateQRCode", error);
        }
      },
    },
    mounted() {
      this.url = `http://13.114.204.13:8000/showEmojiGif/${this.$store.state.requestId}/${this.$store.state.tagName}/${this.$store.state.first}/${this.second}`;
      this.generateQRCode(this.url);
    },
  };
</script>

<style scoped></style>
