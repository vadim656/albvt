<template>
  <div>
    <div class="relative">
      <div class="flex relative">
        <input
          v-model="searchInput"
          @input="getResults"
          type="search"
          id="default-search"
          class="block w-full pr-20 rounded-tl-[5px] rounded-bl-[5px] bg-white pl-4   h-[47px] focus:outline-none"
          placeholder="Поиск анализов..."
        />
        <button
          class="flex justify-center border-l border-l-blue  items-center px-[16px]  z-[1] bg-white  anime rounded-tr-[5px] rounded-br-[5px]"
        >
          <img
            src="/img/icons/search.svg"
            alt=""
            class="block w-full h-auto hover:scale-110 anime"
          />
        </button>
      </div>

      <ul
        v-show="searchInput.length >= 3 "
        class="absolute top-[4rem] left-0 flex flex-col bg-white z-[999] pt-4 shadow-md rounded-[5px] w-full"
      >
        <li
          v-for="item in searchProducts.slice(0, 5)"
          :key="item.id"
          class="border-b-[0.5px] border-b-[#D9D9D9]/50 px-4 py-3  grid grid-cols-[10fr,3fr] gap-2 items-center hover:bg-[#F5F5F5] anime"
        >
          <div class="flex flex-col">
            <nuxt-link
              :to="
                '/all-analyzes' +
                  '/' +
                  item.categories[0].slug +
                  '/' +
                  item.categories[0].id +
                  '/' +
                  
                  item.id
              "
              class="test-text text-[#777777] hover:text-[#343434] anime"
              :title="item.name"
              >{{ item.name }}</nuxt-link
            >
            <!-- {{ item.name }} -->
            <div class="flex gap-3">
              <span class="text-[12px] text-[#9A9A9A] pt-1">код: {{
                item.attributes[2].options[0]
              }}</span>
              <span v-if="parseInt(item.attributes[0].options[0]) == 1" class="text-[12px] text-[#9A9A9A] pt-1">{{ item.attributes[0].options[0] }} день</span>
              <span v-else-if="parseInt(item.attributes[0].options[0]) < 5" class="text-[12px] text-[#9A9A9A] pt-1">{{ item.attributes[0].options[0] }} дня</span>
              <span v-else class="text-[12px] text-[#9A9A9A] pt-1">{{ item.attributes[0].options[0] }} дней</span>
            </div>
          </div>
          <div
            v-if="CART.includes(item)"
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
            v-else
            @click="addToCart(item)"
            class="bg-main/10 hover:bg-main/20 anime text-[#343434] rounded-[5px] flex justify-center items-center gap-2 p-2"
          >
            <img src="/img/icons/add-to-cart.svg" alt="" />
            <span>{{ parseInt(item.price).toLocaleString('ru-RU') }} ₽</span>
          </button>
        </li>
        <nuxt-link
        v-if="searchProducts.length > 0 "
          :to="{ path: '/all-analyzes/', query: { search: searchInput }}" replace
          class=" w-full flex justify-center items-center py-4 text-[#343434] hover:bg-[#CBCBCB] anime bg-[#E2E2E2]"
         
          >
          <span  @click="searchProducts = ''"> Все результаты</span>
         </nuxt-link
        >
        <span v-else class=" w-full flex justify-center items-center py-4 text-[#343434] hover:bg-[#CBCBCB] anime bg-[#E2E2E2]">К сожалению ничего не найдено</span>
      </ul>
    </div>
    <!-- test search -->
    <!-- <div>
      <li v-for="(eee, i) in SEARCH_RESULT" :key="i">{{ eee.name }}</li>
    </div> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      searchInput: '',
      searchProducts: []
    }
  },
  computed: {
    ...mapGetters(['CART'])
  },

  methods: {
    ...mapActions(['ADD_TO_CART']),
    addToCart (item) {
      this.ADD_TO_CART(item)
    },

    async getResults () {
      if (this.searchInput.length >= 3) {
        let searchProducts = await this.$axios.$get(
          'https://foxsis.ru/alvd/wp-json/wc/v3/products',
          {
            auth: {
              username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
              password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
            },
            params: {
              search: this.searchInput,
              per_page: 20,
              _fields: 'id,name,categories,sku,attributes,price'
            }
          }
        )

        let filtered_results = searchProducts.filter(item =>
          item.name.toLowerCase().includes(this.searchInput)
        )
        this.searchProducts = filtered_results
      }
    }
  }
}
</script>

<style></style>
