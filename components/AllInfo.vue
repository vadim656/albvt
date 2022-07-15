<template>
  <div class="flex flex-col gap-[20px] sm:gap-[58px]">
    <heading-h-3>Общая информация</heading-h-3>
    <div class="container relative">
      <swiper
        class="!pb-[60px] swiper-2"
        :spaceBetween="20"
        :slidesPerView="'auto'"
        :pagination="true"
       
        @swiper="onSwiper2"
        @slideChange="onSlideChange"
        Virtual
        id="slider2"
      >
        <swiper-slide
          v-for="(slideContent, index) in filteredPost"
          :key="slideContent.id"
          :virtualIndex="slideContent.id"
          :class="slideContent.id"
          class="max-w-[240px]"
        >
          <div
            class="bg-white flex flex-col border-[0.5px] border-[#808080] rounded-[5px] overflow-hidden gap-[12px] "
          >
            <img :src="slideContent.acf.kartinka" alt="" class="w-full h-[138px] object-cover" />
            <div class="flex flex-col gap-[8px] p-[10px]">
              <span class="text-[14px] text-[#A0AFBD] w-full">{{ slideContent.acf.podzagolovok }}</span>
              <span class="text-[16px] font-medium truncate" :title="slideContent.acf.nazvanie">{{ slideContent.acf.nazvanie }} </span>
              <nuxt-link :to="'/posts/' + '/'">
                <button class="border  border-main rounded-[5px] mt-2 py-2 w-full text-main text-[15px] hover:bg-main hover:text-white anime">
                Читать
              </button>
              </nuxt-link>
              
            </div>
         </div>
        </swiper-slide>
      </swiper>


    </div>
  </div>
</template>

<script>
import HeadingH3 from './HeadingH3.vue'
import { Navigation, Pagination, Autoplay } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Autoplay])

export default {
  data () {
    return {}
  },
  props: {
    data_slider: Array
  },
  components: { HeadingH3, Swiper, SwiperSlide },
  methods: {
    onSwiper2 (swiper) {
      console.log(swiper)
    },
    onSlideChange () {
      console.log('slide change')
    }
  },
  computed: {
    filteredPost: function () {
      return this.data_slider.filter(item => item.categories == 4727)
    }
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
