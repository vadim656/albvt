<template>
  <div>
    <div class="relative">
      <div class="flex relative">
        <input
          v-model="searchResult"
          type="search"
          id="default-search"
          class="block w-full pr-20 rounded-tl-[5px] rounded-bl-[5px] bg-white pl-4   h-[47px] focus:outline-none"
          placeholder="Поиск анализов..."
        />
        <button
          class="flex justify-center border-l border-l-blue  items-center px-[16px]  z-[1] bg-white hover:bg-[#ECECEC] anime rounded-tr-[5px] rounded-br-[5px]"
        >
          <!-- <span class=" h-full flex justify-center items-center px-2"></span> -->
          <img src="/img/icons/search.svg" alt="" class="block w-full h-auto" />
        </button>
      </div>
      <client-only>
        <ul
          v-if="searchResult"
          class="absolute top-[4rem] left-0 flex flex-col bg-white z-[999] pt-4 shadow-md rounded-[5px]"
        >
          <li
            v-for="item in data"
            :key="item.id"
            class="border-b-[0.5px] border-b-[#D9D9D9]/50 px-4 py-3  grid grid-cols-[10fr,2fr] gap-2 items-center"
          >
            <div class="flex flex-col">
              <nuxt-link :to="'/all-analyzes' + '/' + item.categories[1].slug + '/' + item.categories[0].id + '/' + item.id" class="test-text" :title="item.name">{{
                item.name
              }}</nuxt-link>
              <div class="flex gap-2">
                <span class="text-[12px] text-[#9A9A9A] pt-1">{{
                  item.sku
                }}</span>
                <span></span>
              </div>
            </div>
            <button
              class="bg-main/10 hover:bg-main/20 anime text-[#343434] rounded-[5px] flex justify-center items-center gap-2 p-2"
            >
              <img src="/img/icons/add-to-cart.svg" alt="" />
              <span>{{ item.price }} ₽</span>
            </button>
          </li>
        </ul>
      </client-only>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      searchResult: '',
      data: []
    }
  },

  computed: {
    async filteredProducts ({ $axios }) {
      let searchProducts = await $axios.$get(
        'https://foxsis.ru/alvd/wp-json/wc/v3/products',
        {
          auth: {
            username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
            password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
          },
          params: {
            search: this.searchResult,
            per_page: 10
          }
        }
      )

      return { searchProducts }, (this.data = searchProducts)
    }
  }
}
</script>

<style></style>
