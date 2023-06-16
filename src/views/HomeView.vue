<template>
  <div class="flex flex-col justify-center">
    <!-- top menu -->
    <TopMenu></TopMenu>
    
    <!-- image, reload, delete -->
    <div class="flex flex-row mt-10 px-8 items-center justify-between">
      <div class="flex flex-row items-center gap-2">
        <imageIcon></imageIcon>
        <div class="font-light text-gray-400">{{this.$store.state.currentImageName ?? ''}}</div>
      </div>
      <div class="flex flex-row items-center gap-3">
        <reloadIcon></reloadIcon>
        <deleteIcon></deleteIcon>
      </div>
    </div>

    <!-- input image box -->
    <div class="flex flex-col mx-8 mt-4 h-96 justify-center items-center bg-contain bg-no-repeat bg-center bg-gray-50" id="inputBox">
      <div class="flex items-center justify-center w-full" id="innerInputBox">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-96 cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 ">
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div> 
    </div>
  
    <!-- next button -->
    <div @click="clickHandler()" class="flex flex-row mx-8 font-bold text-2xl items-center justify-center h-16 bg-orange-300 text-white mt-52 rounded-md cursor-pointer">
      NEXT
    </div>

  </div>
</template>

<script>
import imageIcon from '../components/icons/imageIcon.vue'
import reloadIcon from '../components/icons/reloadIcon.vue'
import deleteIcon from '../components/icons/deleteIcon.vue'
import TopMenu from '../components/topMenu.vue'
  export default {
    components:{
    imageIcon,
    reloadIcon,
    deleteIcon,
    TopMenu
    },
    data(){
      return{
        loading : false,
      }
    },
    methods:{
      async clickHandler(){
        this.loading = true
        const status = await this.$store.dispatch('postImageUpload')
        console.log(status)
        if (!status){
          console.log('Error in uploading image')
          this.loading = false
          return
        }
        // this.$store.commit('setRequestId','20230606134109')
        const repeat = setInterval(async () => {
          let tagStatus = await this.$store.dispatch('getTagStatus')
          if(tagStatus.status == 'COMPLETETAG'){
            console.log('tagging complete')
            console.log(tagStatus)
            this.$store.commit('setTagList',tagStatus.tagDTOS)
            clearInterval(repeat)
            this.loading = false
            this.$router.push('/filter')
          }
        }, 1000);
      }
    },  
    mounted(){
      const dropzone = document.getElementById('innerInputBox')
      const vm = this
      dropzone.addEventListener('change', (event) => {
        const file = event.target.files[0];
        
        if (file.type === 'image/svg+xml' || file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/jpeg') {
          const reader = new FileReader();
          reader.onload = function(event) {
            const image = new Image();
            console.log(file)
            vm.$store.commit("setFileData",file);
            image.src = event.target.result;
            image.onload = function() {
              // if (image.width > 800 || image.height > 400) {
              //   alert('The image should be smaller than 800x400px.');
              // } else {
              // }
              dropzone.style.display = 'none';
              const parents = document.getElementById('inputBox')
              vm.$store.commit('setCurrentImageName', file.name)
              vm.$store.commit('setMyImageNumber',file.name.slice(-5,-4))
              vm.$store.commit('setCurrentImageSrc', `url('${event.target.result}')`);
              vm.$store.commit('setImgSrc',`${event.target.result}`)
              // console.log(vm.$store.state.imgSrc)
              parents.style.backgroundImage = `url('${event.target.result}')`;
            
            };
          };
          reader.readAsDataURL(file);
        } else {
          alert('The file should be an image.');
  }
});
    }
  }
</script>

<style scoped>

</style>