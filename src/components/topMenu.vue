<template>
  <div class="flex flex-row px-8 mt-8 justify-between items-center">
    <img src="../assets/images/Emoji_Logo.png" class="w-8 h-8" @click="this.$router.push('/')"/>
    <div class="text-xl font-bold">Maker</div>
    <menuIcon/>
  </div>
</template>

<script>
import menuIcon from './icons/menuIcon.vue'
  export default {
    components:{
      menuIcon
    },
  }
</script>

<style scoped>

</style>