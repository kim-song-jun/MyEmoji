<template>
  <div class="Main-Content">
    <div class="flex flex-col justify-center items-center h-full">
      <div class="flex basis-10/12 justify-center items-center">
        <img
          src="../assets/images/Emoji_Logo.png"
          style="width: 150px; height: 150px"
        />
      </div>
      <!-- <div class="basis-1/12" @click="this.$router.push('/banner')"> -->
      <div class="basis-1/12" id="sign-up" @click="this.signUp()">
        Getting Start
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        onSuccess: false,
        onFailure: false,
      };
    },
    methods: {
      signUp() {
        const url =
          "https://accounts.google.com/o/oauth2/auth?client_id=229700534077-ha2l7ee5fnpp7jv4tinbsd40dqij7qe8.apps.googleusercontent.com&redirect_uri=http://ec2-3-34-178-125.ap-northeast-2.compute.amazonaws.com:8080/login/oauth2/code/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
        window.location.href = url;
      },
    },
    mounted() {},
  };
</script>
<style></style>
