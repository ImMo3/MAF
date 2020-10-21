<template src="./SliderTemplate.html"></template>

<script>
import villasData from "@/assets/data/villas.json";
const images = require.context("@/assets/images", false, /\.png$|\.jpg$/);

export default {
  name: "Slider",
  data: function () {
    return {
      currentSlide: 0,
      isPreviousSlide: false,
      isFirstLoad: true,
      slides: villasData,
    };
  },
  mounted: function () {},
  methods: {
    loadImg(imgPath) {
      return images("./" + imgPath);
    },
    openNav() {
      document.getElementById("st-container").classList.toggle("st-effect-1");
      document.getElementById("st-container").classList.toggle("st-menu-open");
    },
    plusSlides(n) {
      if (
        this.currentSlide + n > this.slides.length - 1 ||
        Math.sign(this.currentSlide + n) === -1
      ) {
        return;
      }

      if (Math.sign(n) === 1) {
        this.isPreviousSlide = false;
      } else {
        this.isPreviousSlide = true;
      }
      this.currentSlide += n;
      this.isFirstLoad = false;
    },
  },
};
</script>

<style scoped lang="scss" src="./SliderStyle.scss"></style>
