<template>
  <div class="mx-6 py-6">
    <!-- <div class="mx-6 bg-white border border-gray-200 rounded-lg shadow py-6"> -->
    <div class="flex items-center justify-center md:py-8 flex-wrap mb-4">
      <button
        type="button"
        class="text-blue-700 hover:text-white bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        @click="getUserHistory()"
      >
        All
      </button>
      <button
        type="button"
        class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        @click="showImg()"
      >
        Img
      </button>
      <button
        type="button"
        class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        @click="showGif()"
      >
        Gif
      </button>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-3 gap-4">
      <!-- <div class="grid grid-cols-2 md:grid-cols-3 gap-4 px-4"> -->
      <div v-for="(item, index) in this.temp" :key="index">
        <img
          class="h-auto max-w-full rounded-lg"
          :src="`http://${item}`"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        history: [],
        temp: [],
      };
    },

    methods: {
      showImg() {
        this.temp = this.history.filter((item) => {
          if (item.includes("Img")) {
            return item;
          }
        });
      },
      showGif() {
        this.temp = this.history.filter((item) => {
          if (item.includes("Gif")) {
            return item;
          }
        });
      },
      showAll() {
        this.temp = [...this.history];
      },
      async getUserHistory() {
        const formData = {
          userId: this.$store.state.USERID,
        };
        const frm = Object.entries(formData).reduce((acc, [key, value]) => {
          acc.append(key, value);
          return acc;
        }, new FormData());
        const response = await axios.post(
          "http://3.34.178.125:8080/user/history",
          frm,
          {
            headers: {
              "Google-AccessToken-Header": this.$store.state.ACCESSTOKEN,
            },
          }
        );
        const temp = response.data;
        this.history = temp.filter((item) => {
          if (!item.includes("http")) {
            return item;
          }
        });
        this.temp = [...this.history];
        // console.log(this.history);
      },
    },
    mounted() {
      this.getUserHistory();
    },
  };
</script>

<style></style>
