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
    <div
      class="mx-8 mt-4 mb-8 h-48 bg-gray-50 bg-contain bg-no-repeat bg-center"
      :style="{ backgroundImage: this.$store.state.currentImageSrc }"
    ></div>

    <!-- filter -->
    <div class="flex flex-col gap-4">
      <div
        class="flex flex-col px-8 flex-nowrap"
        v-for="(item, key) in this.tagList"
        :key="key"
      >
        <div class="flex flex-row text-gray-400"># {{ item }}</div>
        <div class="flex flew-row flex-nowrap gap-4 overflow-auto">
          <div
            class="w-36 h-28 rounded-md border-solid border-2 mt-2 basis-36 shrink-0 bg-contain bg-no-repeat bg-center"
            :class="setBorderActive(item, item2)"
            v-for="(item2, key) in 3"
            :key="key"
            :style="{
              backgroundImage: `url('${this.$store.state.PYTHON_API_URL}/showImg/${this.$store.state.requestId}/${item}/${item2}')`,
            }"
            @click="clickHander(item, item2)"
          ></div>
        </div>
      </div>
    </div>

    <!-- next button -->
    <div
      @click="move()"
      class="mb-4 flex flex-row mx-8 font-bold text-2xl items-center justify-center h-16 bg-orange-300 text-white mt-12 rounded-md cursor-pointer"
    >
      SUBMIT
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import imageIcon from "../components/icons/imageIcon.vue";
  import TopMenu from "../components/topMenu.vue";
  export default {
    components: {
      imageIcon,
      TopMenu,
    },
    data() {
      return {
        tagList: ["gogh", "sketch", "cartoon"],
        cur: false,
        myCurrentTag: "gogh",
        myCurrentTagNum: 1,
        loading: true,
      };
    },
    methods: {
      setBorderActive(item, item2) {
        if (item == this.myCurrentTag && item2 == this.myCurrentTagNum) {
          return "border-2 border-orange-300";
        }
        return "border-gray-200";
      },
      clickHander(item, item2) {
        console.log(item);
        console.log(item2);
        this.myCurrentTag = item;
        this.myCurrentTagNum = item2;
        // this.cur = true;
        // this.loading = true;
      },
      async move() {
        if (this.$store.state.loading) {
          return;
        }
        this.$store.commit("initLoadingStatus");
        this.$store.commit("setLoading", true);
        try {
          const result = await axios.get(
            `${this.$store.state.JAVA_API_URL}/tag/select/${this.$store.state.USERID}/${this.$store.state.requestId}/${this.myCurrentTag}/${this.myCurrentTagNum}`
          );
          console.log(result);
          this.$store.commit("setEmojiRequestId", result.data);
        } catch (error) {
          console.log(error);
          this.$store.commit("setLoading", false);
          alert("Error in select tag");
          return;
        }

        // this.$store.commit("setEmojiRequestId", "20230621203633cartoon3");
        // this.$store.commit("setRequestId", "20230621203633");

        const repeat = setInterval(async () => {
          try {
            const response = await axios.get(
              `${this.$store.state.JAVA_API_URL}/emoji/status/${this.$store.state.emojiRequestId}`
            );
            console.log(response.data);
            this.$store.commit("setLoadingStatus", {
              progress: response.data.wait,
              status: `Emoji ${response.data.tagName}`,
            });
            if (response.data.status == "COMPLETEEMOJI") {
              console.log("Emoji complete");
              this.$store.commit("setTagName", response.data.tagName);
              this.$store.commit("setEmojiList", response.data.emojiDTOS);
              clearInterval(repeat);
              this.$store.commit("setLoading", false);
              this.$router.push("/result");
            }
          } catch (error) {
            console.log(error);
            clearInterval(repeat);
            this.$store.commit("setLoading", false);
            alert("Error in Emoji image");
          }
        }, 1000);
      },
    },
  };
</script>

<style scoped></style>
