<template>
  <div>
    <!-- tut -->
    <div class="flex flex-col gap-[20px] ">
      <h1 class="h-[40px] text-[15px] font-medium">
        {{ title.name }}
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
              v-for="item in products.slice(0, 7)"
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

              <button
             
              @click="addToCart(item)"
                class="flex justify-center items-center border bg-white  border-main rounded-[5px] py-2 text-main  hover:bg-main hover:text-white anime h-[40px] px-[8px] text-[14px]"
              >
                В корзину
              </button>
              <!-- <button
   
                class="flex justify-center items-center border bg-white  border-main rounded-[5px] py-2 text-main  hover:bg-main hover:text-white anime h-[40px] px-[8px] text-[14px]"
              >
                Готово
              </button> -->

            </div>
            <!-- end one analiz -->
          </div>
        </div>
      </div>
      <!-- end right section -->
    </div>

    <!-- tut -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {},
  layout: 'AnalizWrapper',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart (item) {
      this.ADD_TO_CART(item)
    }
  },
  computed: {
    ...mapGetters(['CART'])
  },
  async asyncData ({ $axios , params}) {
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
  },

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
