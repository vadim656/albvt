<template>
  <div class="flex flex-col gap-[20px] ">
    <h1 class="h-[40px] text-[24px] font-medium">
      Клинический анализ крови в Ростове-на-Дону
    </h1>
    <!-- right section -->
    <div class="bg-white shadow-md rounded-[5px] ">
        <div>
          <div
            class="grid grid-cols-[2fr,13fr,2fr,3fr] w-full border-b border-b-[#C3C3C3] gap-[20px] py-[12px] p-[10px]"
          >
            <span class="">Код</span>
            <span class="">Наименование исследования</span>
            <span class="">Цена</span>
          </div>
          <div class="flex flex-col w-full  mt-[12px]">
            <!-- one analiz  -->
            <div
              v-for="item in itemsSlice"
              :key="item.id"
              class="grid grid-cols-[2fr,13fr,2fr,3fr] gap-[20px] items-center hover:bg-[#F5F5F5] p-[10px] anime border-b-[0.5px] border-b-[#e4e4e4]"
            >
              <span class="font-medium text-[14px]">{{ item.sku }}</span>
              <div
                class="flex  flex-col font-medium  text-[16px]  py-[20px] "
              >
                <nuxt-link :to="$route.fullPath + '/' + item.id" replace>
                  <p
                    class="test-text anime cursor-pointer  h-full text-[#777777] hover:text-[#343434]"
                    :title="item.name"
                  >
                    {{ item.name }}
                  </p>
                </nuxt-link>
                <!-- <span class="text-[#858585]">{{ item.sunItems }}</span> -->
              </div>
              <div class="flex flex-col ">
                <span class="text-[16px] font-semibold ">{{ parseInt(item.price).toLocaleString('ru-RU') }} руб.</span>
                <span class="text-[#9b9b9b] text-[14px]"
                  >{{ item.attributes[3].options[0] }} дней</span
                >
              </div>

              <div
                v-if="CART.includes(item)"
                :id="item.id"
                class="flex justify-center items-center   rounded-[5px] py-2 text-main    h-[40px] px-[8px] text-[14px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
             
              <button
                @click="addToCart(item)"
                v-else
                class="flex justify-center items-center border bg-white  border-main rounded-[5px] py-2 text-main  hover:bg-main hover:text-white anime h-[40px] px-[8px] text-[14px]"
              >
                В корзину
              </button>
              <!-- <button
   
                class="flex justify-center items-center border bg-white  border-main rounded-[5px] py-2 text-main  hover:bg-main hover:text-white anime h-[40px] px-[8px] text-[14px]"
              >
                Готово
              </button> -->
             <pop-add-to-cart v-show="addCartItem">
               {{ addCartItem }}
              </pop-add-to-cart>
            </div>
            <!-- end one analiz -->
            
          </div>
        </div>
      </div>
      
      <div class="w-full flex justify-center">
      <button @click="limit = null" v-if="limit !== null">Показать еще</button>
    </div>
    <!-- end right section -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PopAddToCart from '~/components/elements/PopAddToCart.vue'
export default {
  components: { PopAddToCart },
  layout: 'AnalizWrapper',
  data () {
    return {
      allAnalizes: [],
      products: [],
      viewAllAnalizes: false,
      limit: 7,
      addCartItem: ''
    }
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart (item) {
      this.ADD_TO_CART(item)
      this.addCartItem = item.name
    }
  },
  computed: {
    ...mapGetters(['GET_ALL_PRODUCTS', 'CART']),
    itemsSlice () {
      return this.limit ? this.GET_ALL_PRODUCTS.slice(0, this.limit) : this.GET_ALL_PRODUCTS
    }
  },
  mounted () {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style>
.test-text {
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
