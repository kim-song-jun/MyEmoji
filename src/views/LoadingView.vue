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
        const agent = window.navigator.userAgent.toLowerCase();
        let browser = "";
        if (agent.indexOf("chrome") != -1) browser = "Chrome";
        else if (agent.indexOf("safari") != -1) browser = "Safari";
        else if (agent.indexOf("firefox") != -1) browser = "Firefox";
        else if (agent.indexOf("opera") != -1) browser = "Opera";
        else if (agent.indexOf("whale") != -1) browser = "Whale";
        else if (agent.indexOf("edg") != -1) browser = "Edge";
        else browser = "IE";

        if (confirm("구글 로그인을 하시겠습니까?")) {
          const url =
            "https://accounts.google.com/o/oauth2/auth?client_id=229700534077-ha2l7ee5fnpp7jv4tinbsd40dqij7qe8.apps.googleusercontent.com&redirect_uri=http://ec2-3-34-178-125.ap-northeast-2.compute.amazonaws.com:8080/login/oauth2/code/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
          window.location.href = url;
          return;
        }
        this.$store.commit("setUserId", "114763554871731061100");
        this.$store.commit(
          "setAccessToken",
          "ya29.a0AfB_byCTYnedXVvVfHQFj6ZFtjfhNU5Cg9kbu8l-p2J2vbeNmKTVdVuM_irFgv6PkinYoBI9jRU8rJPFDyUcL3D6iBQQGAcFpJA-PlbavYYApmN3z5rM3hXQgT3xdM6waZmuCehqdgwJTrpMQem-UnNP_vhgQxsrWl_V5loaCgYKAc4SARMSFQHsvYlsbE-n846VOiBLPGNtka2pzQ0174"
        );
        this.$router.push("/banner");
      },
    },
    mounted() {},
  };
</script>
<style>
  .Main-Content {
    width: 100%;
    height: 100vh;
    overflow: auto;
  }
</style>
