<template>
  <div class="flex flex-col justify-center">
    <TopMenu></TopMenu>

    <!-- User History image... -->
    <div class="px-6 pt-6">
      <UserProfile></UserProfile>
    </div>
    <galleryHistory></galleryHistory>
  </div>
</template>

<script>
  import TopMenu from "../components/topMenu.vue";
  import galleryHistory from "../components/galleryHistory.vue";
  import UserProfile from "../components/userProfile.vue";

  export default {
    components: { TopMenu, galleryHistory, UserProfile },
    mounted() {
      console.log(this.$store.state.ACCESSTOKEN);
      console.log(this.$store.state.USERID);
      if (
        this.$store.state.ACCESSTOKEN == undefined ||
        this.$store.state.ACCESSTOKEN == "" ||
        this.$store.state.USERID == undefined ||
        this.$store.state.USERID == ""
      ) {
        this.$router.push("/");
      }
    },
  };
</script>

<style></style>
