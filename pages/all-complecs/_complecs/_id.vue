<template>
  <div class="">
    <div class="flex flex-col gap-[20px] ">
      <h1 class="text-[24px] font-medium">
        {{ pageName }}
      </h1>
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

import MedProduct from '~/components/med-product.vue'

export default {
  components: { MedProduct },
  layout: 'ComplecsWrapper',
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
      const params2 = this.$route.params
      const all_products = await this.$axios.$get(
        'https://foxsis.ru/alvd/wp-json/wc/v3/products',
        {
          auth: {
            username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
            password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
          },
          params: {
            category: params2.id,
            per_page: 100
          }
        }
      )

      return { all_products }, (this.products = all_products)
    },
    
  },
  computed: {
    ...mapGetters(['CART', 'CATEGORY', 'CART_IDS']),

    itemsSlice () {
      return this.limit ? this.products.slice(0, this.limit) : this.products
    },
  },
  created () {},
  mounted () {},
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
