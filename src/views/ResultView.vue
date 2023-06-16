<template>
<ResultModal v-if="this.$store.state.openModal" ></ResultModal>

<div class="flex flex-col justify-center">
    <!-- top menu -->
    <TopMenu></TopMenu>
    
    <!-- image -->
    <div class="flex flex-row mt-10 px-8 items-center justify-between">
      <div class="flex flex-row items-center gap-2">
        <imageIcon></imageIcon>
        <div class="font-light text-gray-400">{{this.$store.state.currentImageName ?? ''}}</div>
      </div>
      <div class="flex flex-row items-center gap-3">
      </div>
    </div>

    <!-- Preview Image -->
    <div class="flex flex-row gap-6 mx-8 mt-4 mb-8">
      <div class="w-1/2 h-40 bg-gray-50 bg-contain bg-no-repeat bg-center"  :style="{backgroundImage: this.$store.state.currentImageSrc}">
      </div>
      <div class="w-1/2 h-40 bg-gray-50 bg-contain bg-no-repeat bg-center" :style="{backgroundImage: `url('http://13.114.204.13:8000/showEmojiGif/${this.$store.state.requestId}/gogh painting style/${this.first}/${this.second}')`}">
      </div>
    </div>
  
    <!-- filter -->
    <div class="flex flex-col gap-6">
      <div class="flex flex-col px-8 flex-nowrap" v-for="(item,key) in 3" :key="key">
        <div class="flex flex-row text-gray-400 items-center gap-2 mb-4">
          <imageIcon></imageIcon>
          Emoji Set {{ item }}</div>
        <div class="flex flew-row gap-4 overflow-auto flex-wrap justify-between">
          <div class="w-24 h-20 rounded-md border-solid border-2 basis-24 shrink-0 bg-contain bg-no-repeat bg-center" v-for="(item2,key) in 6" :key="key"
          :style="{backgroundImage: `url('http://13.114.204.13:8000/showEmojiGif/${this.$store.state.requestId}/gogh painting style/${this.emojiList[key]}/${item}')`}"
          @click="selectMyEmoji(key,item2)"
          ></div>
        </div>
      </div>
    </div>


    <!-- next button -->
    <div @click="clickHandler" class="flex flex-row mx-8 font-bold text-2xl items-center justify-center h-16 bg-orange-300 text-white mt-12 mb-4 rounded-md cursor-pointer">
      SELECT
    </div>

  </div>
</template>

<script>
import imageIcon from '../components/icons/imageIcon.vue'
import ResultModal from '../components/resultModal.vue';
import TopMenu from '../components/topMenu.vue';
  export default {
    components:{
    imageIcon,
    TopMenu,
    ResultModal
  },
  data(){
    return{
      emojiList:['smile','angry','add a heart emoji','sad','yawn'],
      isOpen: false,
      first: 1,
      second : 1,
    }
  },
  methods:{
    clickHandler(){
      this.$store.commit('setOpenModal',true);
    },
    selectMyEmoji(f,s){
        this.first = f
        this.second = s
        this.$store.commit('setMy',f,s)
    }
  }
  }
</script>

<style scoped>

</style>