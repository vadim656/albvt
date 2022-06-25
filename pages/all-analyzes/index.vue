<template>
  <div class="flex flex-col gap-[20px] ">
    <h1 class="h-[40px] text-[24px] font-medium">
      Клинический анализ крови в Ростове-на-Дону
    </h1>
    <!-- right section -->
    <div class="bg-white shadow-md rounded-[5px] p-[10px]">
      <div v-if="viewAllAnalizes == false">
        <div
          class="grid grid-cols-[2fr,12fr,2fr,3fr] w-full border-b border-b-[#C3C3C3] gap-[20px] py-[12px]"
        >
          <span class="">Код</span>
          <span class="">Наименование исследования</span>
          <span class="">Цена</span>
        </div>
        <div class="flex flex-col w-full  mt-[12px]">
          <!-- one analiz  -->
          <div
            v-for="item in GET_ALL_PRODUCTS.slice(0, 7)"
            :key="item.sku"
            class="grid grid-cols-[2fr,12fr,2fr,3fr] gap-[20px] items-center "
          >
            <span class="font-medium text-[14px]">{{ item.sku }}</span>
            <div
              class="flex  flex-col font-medium  text-[14px] border-b border-b-[#C3C3C3] border-dashed py-[20px]"
            >
              <nuxt-link class=" test-text anime cursor-pointer hover:text-main h-full" :to=" `/all-analyzes/` + item.id" :title="item.name">{{ item.name }}</nuxt-link>
              <!-- <span class="text-[#858585]">{{ item.sunItems }}</span> -->
            </div>
            <div class="flex flex-col text-[13px] font-medium ">
              <span>{{ item.price }} руб.</span>
              <span class="text-[#9b9b9b] ">{{ item.attributes[3].options[0] }} дней</span>
            </div>

            <button
              class="flex justify-center items-center border  border-main rounded-[5px] py-2 text-main  hover:bg-main hover:text-white anime h-[40px] px-[8px] text-[14px]"
            >
              В корзину
            </button>
          </div>
          <!-- end one analiz -->
        </div>
      </div>
    </div>
    <!-- end right section -->
  
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  layout: 'AnalizWrapper',
  data () {
    return {
      allAnalizes: [],
      products: [],
      viewAllAnalizes: false,
    }
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API'])
  },
  computed:{
    ...mapGetters([
      'GET_ALL_PRODUCTS'
      ])
  },
  mounted () {
    this.GET_PRODUCTS_FROM_API()
  }
 
}
</script>

<style>

.test-text{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -moz-box;
      -moz-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      line-clamp: 1;
      box-orient: vertical;
      transition: all 0.3s ease-in-out;
}

/* .test-text:hover{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -moz-box;
      -moz-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      line-clamp: 3;
      box-orient: vertical;
      transition: all 0.3s ease-in-out;
} */




</style>
