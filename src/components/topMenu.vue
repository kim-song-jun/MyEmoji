<template>
  <div class="flex flex-row px-8 mt-8 justify-start items-center gap-3">
    <img
      src="../assets/images/Emoji_Logo.png"
      class="w-7 h-7"
      @click="this.$router.push('/')"
    />
    <div class="text-xl font-bold">Emoji Maker</div>
  </div>
</template>

<script>
  import menuIcon from "./icons/menuIcon.vue";
  export default {
    components: {
      menuIcon,
    },
  };
</script>

<style scoped></style>
