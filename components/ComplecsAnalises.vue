<template>
  <div class="flex flex-col gap-[20px] sm:gap-[58px]">
    <heading-h-3>Комплексы анализов</heading-h-3>
    <div class="container relative">
      <!-- <swiper
        class=" !pb-[60px]"
        :spaceBetween="20"
        :slidesPerView="'auto'"
        :autoplay="{
      delay: 2500,
      disableOnInteraction: true,
    }"
        :pagination="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        Virtual
      >
        <swiper-slide
          v-for="(slideContent, index) in filteredPost"
          :key="index"
          :virtualIndex="index"
          :class="index"
          class="max-w-[240px]"
          > 
          <div
            class="bg-white flex flex-col border-[0.5px] border-[#808080] rounded-[5px] overflow-hidden gap-[12px]"
          >
        
            <img :src="slideContent.acf.kartinka" alt="" class="w-full h-[200px] object-cover" />
            <div class="flex flex-col gap-[16px] p-[10px]">
              <span class="text-[18px] border-b border-b-[#8D8D8D] w-full pb-4  ">{{ slideContent.acf.nazvanie }} </span>
              <span class="text-blue text-[18px]">{{ slideContent.acf.czena }} ₽</span>
              <button class="border  border-main rounded-[5px] py-2 text-main text-[16px] hover:bg-main hover:text-white anime">
               <nuxt-link :to="slideContent.acf.ssylka_na_kompleks">Подробнее</nuxt-link>
               
              </button>
            </div>
          </div>
          
          </swiper-slide
        >
      </swiper> -->



    </div>
  </div>
</template>

<script>
// import { Navigation, Pagination, Autoplay } from 'swiper'

// import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
// import 'swiper/swiper-bundle.css'


// SwiperCore.use([Navigation, Pagination, Autoplay])
import HeadingH3 from './HeadingH3.vue'
export default {
  data () {
    return {
    }
  },
  props: {
    data_slider: Array
  },
  components: {  HeadingH3 },
  methods: {
    // onSwiper (swiper) {
      
    // },
    // onSlideChange () {
      
    // }
  },
  computed: {
    // filteredPost: function () {
    //   return this.data_slider.filter(item => item.categories == 4726)
    // }
  }

}
</script>

<style>
.shadow-swaiper {
  background: linear-gradient(
    270deg,
    #f8f8f8 0%,
    rgba(217, 217, 217, 0) 90.91%
  );
}
</style>
