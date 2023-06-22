<script setup>
  import { onMounted } from "vue";
  import { initFlowbite } from "flowbite";
  import bottomNav from "./components/bottomNav.vue";
  import ProgressBanner from "./components/progressBanner.vue";
  import ProfileModal from "./components/profileModal.vue";

  // initialize components based on data attribute selectors
  onMounted(() => {
    initFlowbite();
  });
  const callback = (response) => {
    // This callback will be triggered when the user selects or login to
    // his Google account from the popup
    console.log("Handle the response", response);
  };
</script>

<template>
  <ProfileModal></ProfileModal>

  <ProgressBanner v-if="this.$store.state.loading"></ProgressBanner>
  <!-- <GoogleLogin :callback="callback"></GoogleLogin> -->
  <RouterView />
  <bottomNav v-if="this.$route.path != '/'"></bottomNav>
</template>

<style scoped>
  .Main-Content {
    width: 390px;
    height: 844px;
    /* background-color: rgb(239, 239, 223); */
    overflow: auto;
  }
</style>
