<template>
  <div class="flex flex-col justify-center">
    <!-- top menu -->
    <TopMenu></TopMenu>

    <!-- image -->
    <div class="flex flex-row mt-10 px-8 items-center justify-between">
      <div class="flex flex-row items-center gap-2">
        <imageIcon></imageIcon>
        <div class="font-light text-gray-400">
          {{ this.$store.state.currentImageName ?? "" }}
        </div>
      </div>
      <div class="flex flex-row items-center gap-3"></div>
    </div>

    <!-- Preview Image -->
    <div class="flex flex-row gap-6 mx-8 mt-4 mb-8">
      <div
        class="w-1/2 h-40 bg-gray-50 bg-contain bg-no-repeat bg-center"
        :style="{ backgroundImage: this.$store.state.currentImageSrc }"
      ></div>
      <div
        class="w-1/2 h-40 bg-gray-50 bg-contain bg-no-repeat bg-center"
        :style="{
          backgroundImage: `url('http://219.250.128.100:8000/showEmojiGif/${this.$store.state.requestId}/${this.$store.state.tagName}/${this.first}/${this.second}')`,
        }"
      ></div>
    </div>

    <!-- filter -->
    <div class="flex flex-col gap-6">
      <div
        class="flex flex-col px-8 flex-nowrap"
        v-for="(item, key) in 3"
        :key="key"
      >
        <div class="flex flex-row text-gray-400 items-center gap-2 mb-4">
          <imageIcon></imageIcon>
          Emoji Set {{ item }}
        </div>
        <div
          class="flex flew-row gap-4 overflow-auto flex-wrap justify-between"
        >
          <div
            class="w-24 h-20 rounded-md border-solid border-2 basis-24 shrink-0 bg-contain bg-no-repeat bg-center"
            :class="setBorderActive(this.emojiList[key2], item)"
            v-for="(item2, key2) in 6"
            :key="key2"
            :style="setBackgroundImage(item, key2)"
            @click="selectMyEmoji(this.emojiList[key2], item)"
          ></div>
        </div>
      </div>
    </div>

    <!-- next button -->
    <button
      class="flex flex-row mx-8 font-bold text-2xl items-center justify-center h-16 bg-orange-300 text-white mt-12 mb-4 rounded-md cursor-pointer"
      @click="clickHandler()"
    >
      SELECT
    </button>
  </div>
</template>

<script>
  import imageIcon from "../components/icons/imageIcon.vue";
  import TopMenu from "../components/topMenu.vue";
  export default {
    components: {
      imageIcon,
      TopMenu,
    },
    data() {
      return {
        emojiList: ["smile", "angry", "heart", "sad", "yawn"],
        isOpen: false,
        first: "smile",
        second: 1,
      };
    },
    methods: {
      setBackgroundImage(item, key2) {
        if (key2 > 4) return;
        return {
          backgroundImage: `url('${this.$store.state.PYTHON_API_URL}/showEmojiGif/${this.$store.state.requestId}/${this.$store.state.tagName}/${this.emojiList[key2]}/${item}')`,
        };
      },
      clickHandler() {
        this.$store.commit("setOpenModal", true);
      },
      selectMyEmoji(f, s) {
        if (f == undefined || s == undefined) return;
        this.first = f;
        this.second = s;
        console.log(f);
        console.log(s);
        this.$store.commit("setFirst", f);
        this.$store.commit("setSecond", s);
      },
      setBorderActive(f, s) {
        if (this.first == f && this.second == s) {
          return "border-2 border-orange-300";
        }
        return "";
      },
    },
  };
</script>

<style scoped></style>
