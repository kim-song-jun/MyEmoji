<template>
  <div></div>
</template>

<script>
  export default {
    mounted() {
      console.log("UserView.vue mounted");
      console.log(this.$route.query);
      console.log(this.$route.query.userId);
      console.log(this.$route.query.accessToken);
      if (
        this.$route.query.userId != undefined &&
        this.$route.query.accessToken != undefined
      ) {
        this.$store.commit("setUserId", this.$route.query.userId);
        this.$store.commit("setAccessToken", this.$route.query.accessToken);
        this.$router.push("/banner");
      } else {
        this.$router.push("/");
      }
    },
  };
</script>

<style></style>
