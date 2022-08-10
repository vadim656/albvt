<template>
  <div class="flex w-full flex-col sm:flex-row   gap-[20px]">
    <div class="w-full sm:w-2/3  order-2 sm:order-1 gap-[20px]">
      <div class="flex flex-col gap-[8px]">
        <h1
          class="font-medium pb-[8px] text-[24px]   block overflow-hidden"
        >
          {{ subcategory.name.replace(/[0-9]/g, '').replace(/\./g, '') }}:
        </h1>
        <h3 class="font-medium pb-4  text-[13px]">{{ products.name }}</h3>
      </div>

      <div class=" flex flex-col gap-[20px] ">
        <div class="flex flex-col gap-[20px]">
         
          <div class="w-full ">
            <tabs-analiz class="w-full ">
              <tab-analiz
                title="Описание"
                class="cursor-pointer flex flex-col gap-4"
                v-if="products.description.length > 0"
              >
                <div
                  v-html="products.description"
                  class="text-[14px] pt-4"
                ></div>
                <span class="text-center w-full font-medium text-[16px]">Состав комплекса:</span>
                <div class="flex flex-col gap-2">
                  <div
                    v-for="(item, i) in crossel"
                    :key="i"
                    class="bg-white p-4 rounded-[5px] shadow-md  h-full grid grid-cols-5 items-center gap-4"
                  >
                    <div class="h-full flex flex-col gap-2 col-span-5 sm:col-span-4">
                      <nuxt-link
                        :to="
                          `/all-analyzes/in-complecs/` +
                            item.categories[0].id +
                            '/' +
                            item.id
                        "
                        class="text-[14px] sm:text-[16px] text-[#4CBDEE]"
                        >{{ item.name }}</nuxt-link
                      >
                      <span class="text-[14px] text-[#343434]/70">
                        Код: {{ item.attributes[2].options[0] }}
                      </span>
                    </div>
                    <div class="font-medium text-[14px] sm:text-[16px] h-full col-span-5 sm:col-span-1 flex justify-end">
                      {{ item.price }} ₽
                    </div>
                  </div>
                </div>
              </tab-analiz>
              <tab-analiz title="Подготовка" class="text-[14px] pt-4">
                <div
                  v-html="products.short_description"
                  class="text-[14px] pt-4"
                ></div>
              </tab-analiz>
            </tabs-analiz>
          </div>
          <div></div>
        </div>
      </div>
    </div>

    <div class="w-full sm:w-1/3 order-1 sm:order-2">
      <cart-item-analiz
        :data="products"
        :bio="GET_ALL_BIOMATERIALS"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import CartItemAnaliz from '~/components/cart/CartItemAnaliz.vue'
import TabAnaliz from '~/components/tabs/tab-analiz.vue'
import TabsAnaliz from '~/components/tabs/tabs-analiz.vue'

import { mapActions, mapGetters } from 'vuex'
export default {
  components: { CartItemAnaliz, TabAnaliz, TabsAnaliz },
  layout: 'ComplecsWrapper',
  head () {
    return {
      title: this.products.name,

      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  data () {
    return {
      title: '',
      crossel: [],
      addCartItem: ''
    }
  },
  methods: {
    ...mapActions(['ADD_TO_CART', 'GET_BIOMATERIALS_FROM_API']),
    addToCart (data) {
      this.ADD_TO_CART(data), (this.addCartItem = data.name)
    },
    getCrosselsProducts () {
      const crosselProducts = this.products.cross_sell_ids
      crosselProducts.forEach(element => {
        this.fetchSomething(element)
      })
    },
    async fetchSomething (element) {
      const id = await this.$axios.$get(
        `https://foxsis.ru/alvd/wp-json/wc/v3/products/` + element,
        {
          auth: {
            username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
            password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
          }
        }
      )

      this.crossel.push(id)
      console.log(id)
    }
  },
  mounted () {
    this.GET_BIOMATERIALS_FROM_API()
    this.getCrosselsProducts()
  },
  computed: {
    ...mapGetters(['GET_ALL_BIOMATERIALS'])
  },

  async asyncData ({ $axios, params }) {
    const title = params.id
    let products = await $axios.$get(
      `https://foxsis.ru/alvd/wp-json/wc/v3/products/` + params.id,
      {
        auth: {
          username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
          password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
        }
      }
    )
    let subcategory = await $axios.$get(
      `https://foxsis.ru/alvd/wp-json/wc/v3/products/categories/` + params.sht,
      {
        auth: {
          username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
          password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
        },
        _fields: 'id,name'
      }
    )

    return { products, title, subcategory }
  }
}
</script>

<style></style>
