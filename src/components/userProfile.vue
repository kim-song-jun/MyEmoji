<template>
  <div
    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex flex-col items-center py-6">
      <img
        class="w-24 h-24 mb-3 rounded-full shadow-lg"
        :src="this.userInfo.picture"
        alt="Bonnie image"
      />
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {{ this.userInfo.nickName }}
      </h5>
      <span class="text-sm text-gray-600 dark:text-gray-400">User</span>
      <span class="text-sm text-gray-400 dark:text-gray-400">{{
        this.userInfo.email
      }}</span>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        userInfo: {},
      };
    },
    methods: {
      async getUserInfo() {
        const formData = {
          userId: this.$store.state.USERID,
        };
        const frm = Object.entries(formData).reduce((acc, [key, value]) => {
          acc.append(key, value);
          return acc;
        }, new FormData());
        const response = await axios.post(
          "http://3.34.178.125:8080/user/info",
          frm,
          {
            headers: {
              "Google-AccessToken-Header": this.$store.state.ACCESSTOKEN,
            },
          }
        );
        this.userInfo = response.data;
        console.log(this.userInfo);
      },
    },
    mounted() {
      this.getUserInfo();
    },
  };
</script>

<style></style>
