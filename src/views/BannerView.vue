<template>
  <div class="flex flex-col justify-center">
    <TopMenu></TopMenu>

    <div class="mt-5 mx-5">
      <CarouselBanner></CarouselBanner>
    </div>
    <div class="mt-5 mx-5">
      <navtabCard></navtabCard>
    </div>

    <div class="mt-5 mx-5">
      <TestimonialCard></TestimonialCard>
    </div>
    <div
      @click="this.$router.push('/home')"
      class="mb-4 flex flex-row mx-5 font-bold text-2xl items-center justify-center h-16 bg-orange-300 text-white rounded-md cursor-pointer"
    >
      START
    </div>
  </div>
</template>

<script>
  import CarouselBanner from "../components/carouselBanner.vue";
  import TestimonialCard from "../components/testimonialCard.vue";
  import navtabCard from "../components/navtabCard.vue";
  import TopMenu from "../components/topMenu.vue";

  export default {
    data() {
      return {};
    },
    components: { TopMenu, CarouselBanner, TestimonialCard, navtabCard },
  };
</script>

<style scoped></style>
