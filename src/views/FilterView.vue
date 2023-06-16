<template>
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
    <div class="mx-8 mt-4 mb-8 h-48 bg-gray-50  bg-contain bg-no-repeat bg-center" :style="{backgroundImage: this.$store.state.currentImageSrc}">
    </div>
  
    <!-- filter -->
    <div class="flex flex-col gap-4">
      <div class="flex flex-col px-8 flex-nowrap" v-for="(item,key) in this.tagList" :key="key">
        <div class="flex flex-row text-gray-400"># {{ item }}</div>
        <div class="flex flew-row flex-nowrap gap-4 overflow-auto">
          <div class="w-36 h-28 rounded-md border-solid border-2 mt-4 basis-36 shrink-0 bg-contain bg-no-repeat bg-center" v-for="(item2,key) in 3" :key="key"
          :style="{backgroundImage: `url('http://13.114.204.13:8000/showImg/${this.$store.state.requestId}/${item}/${item2}')`}"
          @click="clickHander(item,item2)"
          ></div>
        </div>
      </div>
    </div>


    <!-- next button -->
    <div @click="move()" class="flex flex-row mx-8 font-bold text-2xl items-center justify-center h-16 bg-orange-300 text-white mt-12 rounded-md cursor-pointer">
      SUBMIT
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import imageIcon from '../components/icons/imageIcon.vue'
import TopMenu from '../components/topMenu.vue';
  export default {
    components:{
    imageIcon,
    TopMenu
},
data(){
  return{
    tagList: ["gogh painting style","sketch","cartoon style"],
    myTag: ['태그이름1','태그이름2','태그이름3'],
    cur : false,
    myCurrentTag : '',
    myCurrentTagNum: 1,
    loading: true,
  }
},
methods:{
  clickHander(item,item2){
    console.log(item)
    console.log(item2)
    this.myCurrentTag = item
    this.myCurrentTagNum = item2
    this.cur = true
    this.loading = true
  },  
  move(){
    if (this.cur){
      return
    }
    const result = ''
    axios.get(`http://3.39.22.13:8080/tag/select/${this.$store.state.requestId}/${this.myCurrentTag.split(' ')[0]}/${this.myCurrentTagNum}`).then((res)=>{
      console.log(res.data)
      result.data
    })
    const repeat = setInterval(async () => {
          let response = await axios.get(`http://3.39.22.13:8080/emoji/status/${this.$store.state.requestId}`)
          console.log(response.data)
          this.loading = true
          if(response.data.status == 'COMPLETEEMOJI'){
            console.log('tagging complete')
            console.log(response)
            clearInterval(repeat)
            this.loading = false
            if(!this.cur){
              this.$router.push('/result')
            }
          }
        }, 1000);
  }
}
  }
</script>

<style scoped>

</style>