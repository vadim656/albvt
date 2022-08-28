<template>
  <div class="">
    <div class="flex flex-col gap-[20px] ">
      <div class="flex flex-col sm:flex-row gap-2 sm:justify-between">
        <h1
          class="text-[24px] font-medium flex gap-2 items-center scroll-to"
          id="scroll-to"
        >
          <button
            @click="$router.back()"
            class=" flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-main"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          {{ pageName }}
        </h1>
      </div>
      <div class="bg-white shadow-md rounded-[5px] ">
        <div>
          <div
            class="hidden xl:grid lg:grid-cols-[3fr,3fr,2fr,1fr]   xl:grid-cols-[2fr,13fr,2fr,3fr] w-full border-b border-b-[#C3C3C3] gap-[20px] py-[12px] p-[10px]"
          >
            <span class="">Код</span>
            <span class="">Наименование исследования</span>
            <span class="">Цена</span>
          </div>
          <div class="flex flex-col w-full  xl:mt-[12px]">
            <med-product
              v-for="item in itemsSlice"
              :key="item.id"
              :item="item"
              @addToCart="addToCart(item)"
            />
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center">
        <button
          @click="getProductToParams()"
          v-if="limit !== null && products.length > 7"
        >
          Показать еще
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PopAddToCart from '~/components/elements/PopAddToCart.vue'
import MedProduct from '~/components/med-product.vue'
import SidebarAnaliz from '~/components/Sidebars/SidebarAnaliz.vue'

export default {
  components: { PopAddToCart, SidebarAnaliz, MedProduct },
  layout: 'AnalizWrapper',
  data () {
    return {
      title: '',
      limit: 7,
      addCartItem: '',
      test: [],
      products: [],
      posts: [],
      pageName: ''
    }
  },
  methods: {
    ...mapActions(['ADD_TO_CART']),
    addToCart (item) {
      this.ADD_TO_CART(item), (this.addCartItem = item.name)
    },
    preFetchData (id) {
      console.log('tut  --  ' + id)
    },

    async getProductToParams () {
      this.limit = null
      const category = 'category='
      const PerPage = 'per_page='
      const all_products = await this.$axios.$get(
        'https://foxsis.ru/alvd/wp-json/wc/v3/products?' +
          category +
          this.$route.params.id +
          '&' +
          PerPage +
          100
      )

      return { all_products }, (this.products = all_products)
    },
    scrollToAnaliz () {
      var scrollDiv = document.getElementById('scroll-to').offsetTop - 90
      window.scrollTo({ top: scrollDiv, behavior: 'smooth' })
    }
  },
  computed: {
    ...mapGetters(['CART', 'CATEGORY', 'CART_IDS']),

    itemsSlice () {
      return this.limit ? this.products.slice(0, this.limit) : this.products
    }
  },
  async fetch () {
    const category = 'category='
    const PerPage = 'per_page='
    this.products = await fetch(
      'https://foxsis.ru/alvd/wp-json/wc/v3/products?' +
        category +
        this.$route.params.id +
        '&' +
        PerPage +
        8
    ).then(res => res.json())
    this.pageName = this.products[0].categories[0].name
      .replace(/[0-9]/g, '')
      .replace(/\./g, '')
  },
  mounted () {
     if (window.screen.width <= 600) {
      this.scrollToAnaliz()
    }
  },
  updated () {
    if (window.screen.width <= 600) {
      this.scrollToAnaliz()
    }
  },
  watch: {
    $route () {
      if (window.screen.width <= 600) {
      this.scrollToAnaliz()
    }
    }
  }
}
</script>

<style>
/* .test-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  box-orient: vertical;
} */
</style>
