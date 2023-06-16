
<template>
  <div class="Main-Content">
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<style scoped>
.Main-Content{
  width: 390px;
  height: 844px;
  /* background-color: rgb(239, 239, 223); */
  overflow: auto;
}
</style>
