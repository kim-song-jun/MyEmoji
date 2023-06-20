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
  };
</script>

<style></style>
