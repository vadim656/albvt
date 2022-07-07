<template>
  <div class="flex flex-col gap-[20px] sm:gap-[58px]">
    <heading-h-3>Комплексы анализов</heading-h-3>
    <div class="container relative">
      <swiper
        class=" !pb-[60px]"
        :spaceBetween="20"
        :slidesPerView="'auto'"
        :pagination="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        Virtual
      >
        <swiper-slide
          v-for="(slideContent, index) in data_slider"
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
                Подробнее
              </button>
            </div>
          </div>
          
          </swiper-slide
        >
      </swiper>


      <div
        class="shadow-swaiper h-[363px] w-[130px] absolute top-0 right-0 z-[2]"
      ></div>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination, Virtual } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])
import HeadingH3 from './HeadingH3.vue'
export default {
  data () {
    return {
    }
  },
  props: {
    data_slider: Array
  },
  components: {  HeadingH3, Swiper, SwiperSlide },
  methods: {
    onSwiper (swiper) {
      console.log(swiper)
    },
    onSlideChange () {
      console.log('slide change')
    }
    // async testGet () {
    //   const slides = await this.$axios.$get(
    //     'https://foxsis.ru/alvd/wp-json/wp/v2/posts',
    //     {
    //       auth: {
    //         username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
    //         password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
    //       },
    //       params: {
    //         per_page: 20
    //       }
    //     }
    //   )
    //   return { slides }
    // }
  }
  // created () {
  //   this.testGet()
  // },
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
