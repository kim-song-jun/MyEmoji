<template>
  <div class="absolute bg-black bg-opacity-60 w-full h-screen flex flex-col" @click="this.$store.commit('setOpenModal',false)">
    <div class="flex flex-row px-4 text-gray-400 mt-40 justify-between gap-4 h-96 items-center">
      <div  class="h-full flex flex-col justify-center">
        <leftIcon></leftIcon>
      </div>
      <div class="h-full w-80 flex flex-row justify-center">
        <div class="bg-white w-full rounded-xl flex flex-col">
          <div class="flex flex-row justify-center items-center">
            <img src="../assets/images/Emoji_Logo.png" class="w-14 mt-6"/>
          </div>
          <div class="flex flex-row px-8 mt-4 items-center gap-2">
            <ImageIcon></ImageIcon>
            <div>{{this.$store.state.currentImageName ?? ''}}</div>
          </div>
          <div class="flex flex-col bg-gray-100 mx-8 h-32 mt-2"></div>
          <div class="flex flex-col bg-gray-100 mx-8 h-32 mt-3"></div>
          <div class="flex flex-row mx-8 font-bold text-xl items-center justify-center h-10 bg-orange-300 text-white mt-6 mb-4 rounded-md cursor-pointer">
            DOWNLOAD
          </div>
        </div>
      </div>
      <div  class="h-full flex flex-col justify-center">
        <rightIcon></rightIcon>
      </div>
    </div>
  </div>
  

</template>

<script>
import ImageIcon from './icons/imageIcon.vue';
import leftIcon from './icons/leftIcon.vue'
import rightIcon from './icons/rightIcon.vue'
  export default {
    components:{
    rightIcon,
    leftIcon,
    ImageIcon
},
  }
</script>

<style scoped>

</style>