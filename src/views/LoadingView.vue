<template>
  <div class="flex flex-col justify-center items-center h-full">
    <div class="flex basis-10/12 justify-center items-center">
      <img src="../assets/images/Emoji_Logo.png" style="width: 150px; height: 150px;"/>
    </div>
    <div class="basis-1/12" @click="this.$router.push('/banner')">Getting Start</div>
  </div>
</template>

<script>
  export default {
    mounted() {
      // setTimeout(() => {
      //   this.$router.push('/home')
      // }, 2000)
    }
  }
</script>
