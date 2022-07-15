<template>
  <div class="flex flex-col gap-[20px] ">
    <h1 class="h-[40px] text-[24px] font-medium">
      Клинический анализ крови в Ростове-на-Дону
    </h1>
    <!-- right section -->
    <div class="bg-white shadow-md rounded-[5px] ">
        <div>
          <div
            class="hidden xl:grid lg:grid-cols-[3fr,3fr,2fr,1fr]   xl:grid-cols-[2fr,13fr,2fr,3fr] w-full border-b border-b-[#C3C3C3] gap-[20px] py-[12px] p-[10px]"
          >
            <span class="">Код</span>
            <span class="">Наименование исследования</span>
            <span class="">Цена</span>
          </div>
          <div class="flex flex-col w-full   xl:mt-[12px]">
            <!-- one analiz  -->
            <div
              v-for="item in itemsSlice"
              :key="item.id"
              class="grid grid-cols-[3fr,3fr,2fr,1fr]  lg:grid-cols-[3fr,3fr,1fr] xl:grid-cols-[2fr,13fr,2fr,3fr] grid-rows-2 xl:grid-rows-1  gap-2 xl:gap-[20px] items-center hover:bg-[#F5F5F5] p-[10px] anime border-b-[0.5px] border-b-[#e4e4e4]"
            >
              <span class="hidden xl:block font-medium text-[14px] "
                >{{ item.attributes[2].options[0] }}
              </span>
              <div
                class="row-span-1 col-span-4 xl:col-span-1 flex  flex-col font-medium text-[14px]   lg:text-[16px]  py-2 xl:py-[20px] "
              >
                <nuxt-link
                  :to="
                    '/all-analyzes/' +
                      item.categories[0].slug +
                      '/' +
                      item.categories[0].id +
                      '/' +
                      item.id
                  "
                  replace
                >
                  <p
                    class="test-text anime cursor-pointer  h-full text-[#343434] xl:text-[#777777] hover:text-[#343434]"
                    :title="item.name"
                  >
                    {{ item.name }}
                  </p>
                </nuxt-link>
                <!-- <span class="text-[#858585]">{{ item.sunItems }}</span> -->
              </div>
              <div class="hidden xl:flex flex-col col-span-1">
                <span
                  class="text-[16px] font-semibold cursor-pointer flex items-start"
                  v-tooltip.top-end="{
                    content: 'Цена указана без учета забора биоматериала',
                    classes: [
                      'bg-white text-[12px] lg:text-[14px] px-2 py-4 border border-[#777777] rounded-[5px]'
                    ]
                  }"
                  >{{ parseInt(item.price).toLocaleString('ru-RU') }} руб.
                  <article class="text-[#A75F4F]">*</article>
                </span>
                <span
                  v-if="parseInt(item.attributes[0].options[0]) == 1"
                  class="text-[14px] text-[#9A9A9A] pt-1"
                  >{{ item.attributes[0].options[0] }} день</span
                >
                <span
                  v-else-if="parseInt(item.attributes[0].options[0]) < 5"
                  class="text-[14px] text-[#9A9A9A] pt-1"
                  >{{ item.attributes[0].options[0] }} дня</span
                >
                <span v-else class="text-[14px] text-[#9A9A9A] pt-1"
                  >{{ item.attributes[0].options[0] }} дней</span
                >
              </div>
              <!-- modile -->
              <div
                class=" flex xl:hidden gap-2 lg:gap-4 col-span-2 text-[10px] lg:text-[14px] font-normal text-[#777777]"
              >
                <span>Код: {{ item.attributes[2].options[0] }}</span>
                <div
                  class="flex gap-2 cursor-pointer"
                  
                >
                  <span v-for="(material, i) in item.upsell_ids" :key="i">
                    <span v-if="material == 10387">
                      Пробоподготовка (МИК)(+200₽)
                    </span>
                    <span v-if="material == 9837">
                      Пробоподготовка (КГИСТ)(+100₽)
                    </span>
                    <span v-if="material == 9838">
                      Забор биоматериала на энетеробиоз(+100₽)
                    </span>
                    <span v-if="material == 9839">
                      Пробоподготовка (МИК)(+200₽)
                    </span>
                    <span v-if="material == 9840">
                      Пробоподготовка (МЭ) кровь(+650₽)
                    </span>
                    <span v-if="material == 9842">
                      Пробоподготовка (МЭ) волосы(+650₽)
                    </span>
                    <span v-if="material == 9843">
                      Пробоподготовка (МЭ) ногти(+650₽)
                    </span>
                    <span v-if="material == 9844">
                      Пробоподготовка (НПЯТ)(+250₽)
                    </span>
                    <span v-if="material == 9845">
                      Забор мазка/соскоба (буккальный эпителий)(+100₽)
                    </span>
                    <span v-if="material == 9846">
                      Пробоподготовка (КЖЦ)(+300₽)
                    </span>
                    <span v-if="material == 9847">
                      Забор венозной крови(+150₽)
                    </span>
                    <span v-if="material == 9848">
                      Забор мазка/соскоба(+250₽)
                    </span>
                  </span>
                </div>

                <span v-if="parseInt(item.attributes[0].options[0]) == 1"
                  >{{ item.attributes[0].options[0] }} день</span
                >
                <span v-else-if="parseInt(item.attributes[0].options[0]) < 5"
                  >{{ item.attributes[0].options[0] }} дня</span
                >
                <span v-else>{{ item.attributes[0].options[0] }} дней</span>
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
                class="col-span-2 xl:col-span-1 group   flex justify-center items-center border bg-white  border-main rounded-[5px] xl:py-2 text-main  hover:bg-main hover:text-white anime h-[40px] px-[8px] text-[14px]"
              >
                <span class="flex xl:hidden pr-2 border-r-[1px] border-main"
                  >{{ parseInt(item.price).toLocaleString('ru-RU') }} ₽</span
                >
                <img
                  class="block xl:hidden group-hover:hidden pl-2"
                  src="/img/icons/add-to-cart-mob.svg"
                  alt=""
                />
                <img
                  class="group-hover:block hidden pl-2"
                  src="/img/icons/add-to-cart-mob-white.svg"
                  alt=""
                />
                <span class="hidden xl:block"> В корзину</span>
              </button>
              <pop-add-to-cart v-show="addCartItem">
                {{ addCartItem }}
              </pop-add-to-cart>
            </div>
            <!-- end one analiz -->
          </div>
        </div>
      </div>

    <div class="w-full flex justify-center">
      <button
        @click="limit = null"
        v-if="
          limit !== null &&
            !this.$nuxt._route.query.search &&
            this.GET_ALL_PRODUCTS.length > 7
        "
      >
        Показать еще
      </button>
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
      addCartItem: '',
      searchProductsAll: [],
      msg: 'Цена указана без учета забора биоматериала'
    }
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart (item) {
      this.ADD_TO_CART(item)
      this.addCartItem = item.name
    }
  },

  async asyncData ({ $axios, query }) {
    const searchProducts = await $axios.$get(
      'https://foxsis.ru/alvd/wp-json/wc/v3/products',
      {
        auth: {
          username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
          password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
        },
        params: {
          search: query.search,
          per_page: 50
        }
      }
    )

    let filtered_results = searchProducts.filter(item =>
      item.name.toLowerCase().includes(query.search)
    )
    console.log(filtered_results)
    return { filtered_results }
  },
  computed: {
    ...mapGetters(['GET_ALL_PRODUCTS', 'CART']),
    itemsSlice () {
      if (this.$nuxt._route.query.search) {
        return this.filtered_results
      } else {
        console.log('ne analiz: ')
        return this.limit
          ? this.GET_ALL_PRODUCTS.slice(0, this.limit)
          : this.GET_ALL_PRODUCTS
      }
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
