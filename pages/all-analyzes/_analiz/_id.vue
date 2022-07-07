<template>
  <div>
    <div class="flex flex-col gap-[20px] ">
      <h1 class="h-[40px] text-[15px] font-medium">
        {{ title.name.replace(/[0-9]/g, '').replace(/\./g, "") }}
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
              class="grid grid-cols-[3fr,3fr,2fr,1fr] sm:grid-cols-[2fr,13fr,2fr,3fr] grid-rows-2 sm:grid-rows-1  gap-2 sm:gap-[20px] items-center hover:bg-[#F5F5F5] p-[10px] anime border-b-[0.5px] border-b-[#e4e4e4]"
            >
             <span class="hidden sm:block font-medium text-[14px] ">{{ item.attributes[2].options[0] }}</span>
            <div class="row-span-1 col-span-4 sm:col-span-1 flex  flex-col font-medium text-[14px]   sm:text-[16px]  py-2 sm:py-[20px] ">
              <nuxt-link :to="$route.fullPath + '/'  + item.id" replace>
                <p
                  class="test-text anime cursor-pointer  h-full text-[#343434] sm:text-[#777777] hover:text-[#343434]"
                  :title="item.name"
                >
                  {{ item.name }}
                </p>
              </nuxt-link>
              <!-- <span class="text-[#858585]">{{ item.sunItems }}</span> -->
            </div>
            <div class="hidden sm:flex flex-col col-span-1">
              <span class="text-[16px] font-semibold cursor-pointer flex items-start" v-tooltip.top-end="{ content: 'Цена указана без учета забора биоматериала', classes: ['bg-white text-[12px] px-2 py-4 border border-[#777777] rounded-[5px]'] }"
                >{{ parseInt(item.price).toLocaleString('ru-RU') }} руб. <article class="text-[#A75F4F]">*</article> </span
              >
              <span v-if="parseInt(item.attributes[0].options[0]) == 1" class="text-[14px] text-[#9A9A9A] pt-1">{{ item.attributes[0].options[0] }} день</span>
              <span v-else-if="parseInt(item.attributes[0].options[0]) < 5" class="text-[14px] text-[#9A9A9A] pt-1" >{{ item.attributes[0].options[0] }} дня</span>
              <span v-else class="text-[14px] text-[#9A9A9A] pt-1">{{ item.attributes[0].options[0] }} дней</span >
            </div>
            <!-- modile -->
            <div class=" flex sm:hidden gap-2 col-span-2 text-[10px] font-normal text-[#777777]">
              <span>{{ item.attributes[2].options[0] }}</span>
              <span>Венозная кровь</span>
              <span v-if="parseInt(item.attributes[0].options[0]) == 1" >{{ item.attributes[0].options[0] }} день</span>
              <span v-else-if="parseInt(item.attributes[0].options[0]) < 5" >{{ item.attributes[0].options[0] }} дня</span>
              <span v-else >{{ item.attributes[0].options[0] }} дней</span >
            </div>
            <!-- end modile -->
            <div
              v-if="CART.includes(item)"
              :id="item.id"
              class="flex justify-center items-center   rounded-[5px] py-2 text-main    h-[40px] px-[8px] text-[14px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
      
            <button
              @click="addToCart(item)"
              v-else
              class="col-span-2 sm:col-span-1 flex justify-center items-center border bg-white  border-main rounded-[5px] sm:py-2 text-main  hover:bg-main hover:text-white anime h-[40px] px-[8px] text-[14px]"
            >
            <span class="flex sm:hidden pr-2 border-r-[1px] border-main">{{ parseInt(item.price).toLocaleString('ru-RU') }} ₽</span>
              <img class="block sm:hidden pl-2" src="/img/icons/add-to-cart-mob.svg" alt="" >
              <span class="hidden sm:block"> В корзину</span>
            </button>
            <pop-add-to-cart v-show="addCartItem">
              {{ addCartItem }}
            </pop-add-to-cart>
            </div>

            <!-- end one analiz -->
          </div>
        </div>
      </div>
      <!-- end right section -->
      <div class="w-full flex justify-center">
        <button @click="limit = null" v-if="limit !== null && products.length > 7">
          Показать еще
        </button>
      </div>
    </div>

    <!-- tut -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PopAddToCart from '~/components/elements/PopAddToCart.vue'

export default {
  components: {PopAddToCart},
  layout: 'AnalizWrapper',
  data () {
    return {
      title: '',
      limit: 7,
      addCartItem: ''
    }
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart (item) {
      this.ADD_TO_CART(item),
      this.addCartItem = item.name
    }
  },
  computed: {
    ...mapGetters(['CART']),
   
    itemsSlice () {
      return this.limit ? this.products.slice(0, this.limit) : this.products
    }
  },
  async asyncData ({ $axios, params }) {
    let products = await $axios.$get(
      'https://foxsis.ru/alvd/wp-json/wc/v3/products',
      {
        auth: {
          username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
          password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
        },
        params: {
          category: params.id,
          per_page: 100
        }
      }
    )
    let title = await $axios.$get(
      `https://foxsis.ru/alvd/wp-json/wc/v3/products/categories/` + params.id,
      {
        auth: {
          username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
          password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
        }
      }
    )

    return { title, products }
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
}
</style>
