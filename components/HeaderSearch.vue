<template>
  <div>
    <div class="absolute sm:relative w-full top-0 left-0 px-[16px] sm:px-0">
      <div class="flex relative w-full  ">
        <div
          class="fixed bg-[#343434]/40  w-screen h-screen left-0 top-0 pt-[13px] z-[1]"
          v-if="searchInputFake.length >= 1 && showSearch == true"
          @click="showSearch = false"
        ></div>
        <div
          class="sm:hidden fixed bg-[#343434]/40  w-screen h-screen left-0 top-0 pt-[13px] z-[1] "
          @click="mobSearchClose()"
        ></div>
        <input
          @input="search($event.target.value)"
          v-bind:value="searchInput"
          type="text"
          id="default-search"
          class="block w-full pr-20 rounded-tl-[5px] rounded-bl-[5px] bg-white pl-4   h-[47px] focus:outline-none text-[#979797] z-[4]"
          placeholder="Поиск анализов"
          autocomplete="off"
        />
        <nuxt-link
          :to="{ path: '/search-result', query: { search: searchInput } }"
          @click="showSearch = false"
          class="flex justify-center items-center px-[16px]  z-[1] bg-white  anime rounded-tr-[5px] rounded-br-[5px]"
        >
          <img
            @click="closeSearch()"
            src="/img/icons/search.svg"
            alt=""
            class="block w-full h-auto hover:scale-110 anime"
          />
        </nuxt-link>
      </div>

      <ul
        v-show="searchInputFake.length >= 1 && showSearch == true"
        class="absolute top-[4rem] left-0 flex flex-col bg-white z-[4] pt-4 shadow-md sm:px-0 [px-16px] sm:rounded-[5px] w-full overflow-y-auto sm:h-auto  max-h-[440px]"
      >
        <li
          v-for="(item, i) in sortedArray"
          :key="i"
          class="border-b-[0.5px] border-b-[#D9D9D9]/50 px-4 py-3  grid grid-cols-[8fr,4fr] lg:grid-cols-[9fr,4fr] sm:grid-cols-[10fr,3fr] gap-2 items-center hover:bg-[#F5F5F5] anime"
        >
          <div class="flex flex-col gap-1">
            <!-- если комплекс -->
            <nuxt-link
              v-if="item.node.crossSell.edges.length"
              @click="showSearch = false"
              :to="
                '/all-complecs' +
                  '/' +
                  item.node.productCategories.edges[0].node.slug +
                  '/' +
                  item.node.productCategories.edges[0].node.databaseId +
                  '/' +
                  item.node.databaseId
              "
              class=" text-[#777777] hover:text-[#343434] anime font-semibold text-[12px] sm:text-[14px]"
              :title="item.node.name"
              >{{ item.node.name }}</nuxt-link
            >
            <!-- если анализ -->
            <nuxt-link
              v-else
              @click="showSearch = false"
              :to="
                '/all-analyzes' +
                  '/' +
                  item.node.productCategories.edges[0].node.slug +
                  '/' +
                  item.node.productCategories.edges[0].node.databaseId +
                  '/' +
                  item.node.databaseId
              "
              class="test-text2 text-[#777777] hover:text-[#343434] font-semibold anime text-[12px] sm:text-[14px]"
              :title="item.node.name"
              >{{ item.node.name }}</nuxt-link
            >
            <div class="flex gap-3 flex-wrap sm:flex-nowrap">
              <span class="text-[12px] text-[#9A9A9A] pt-1"
                >код: {{ item.node.allPaSku.nodes[0].name }}</span
              >
              <span
                v-if="
                  parseInt(item.node.attributes.edges[0].node.options[0]) == 1
                "
                class="text-[12px] text-[#9A9A9A] pt-1"
                >{{ item.node.attributes.edges[0].node.options[0] }} день</span
              >
              <span
                v-else-if="
                  parseInt(item.node.attributes.edges[0].node.options[0]) < 5 ||
                    parseInt(item.node.attributes.edges[0].node.options[0]) >=
                      22
                "
                class="text-[12px] text-[#9A9A9A] pt-1"
                >{{ item.node.attributes.edges[0].node.options[0] }} дня</span
              >
              <span v-else class="text-[12px] text-[#9A9A9A] pt-1"
                >{{ item.node.attributes.edges[0].node.options[0] }} дней</span
              >
              <span
                v-if="item.node.crossSell.edges.length"
                class="text-[12px] text-[#757575] pt-1 bg-main/20 px-2 py-1 rounded-[5px]"
                >Комплекс</span
              >
            </div>
          </div>
          <div
            v-if="
              inCart.includes(item.node.name) ||
                CART_IDS.includes(item.node.databaseId)
            "
            class="flex justify-center items-center   rounded-[5px] py-2 text-main gap-1   h-[40px] px-[8px] text-[14px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 hidden sm:block"
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
            <span class="text-[12px]">В корзине</span>
          </div>
          <div
            v-if="item.node.stockStatus !== 'IN_STOCK'"
            class="w-full flex justify-center items-center"
          >
            <span class="text-[12px] text-danger">Временно недоступен</span>
          </div>
          <button
            v-else
            @click="productInCart(item.node.databaseId)"
            class="bg-main/20   text-[#343434] rounded-[5px] flex justify-center items-center gap-2 p-2"
          >
            <img src="/img/icons/add-to-cart.svg" alt="" />
            <span class="text-[12px] sm:text-[16px]"
              >{{ parseInt(item.node.price).toLocaleString('ru-RU') }} ₽</span
            >
          </button>
        </li>
        <nuxt-link
          v-if="searchResults.length != 0"
          :to="{ path: '/search-result', query: { search: searchInput } }"
          replace
          class=" w-full flex justify-center items-center py-4 text-[#343434] hover:bg-[#CBCBCB] anime bg-[#E2E2E2]"
        >
          <span
            @click="closeSearch()"
          >
            Все результаты</span
          >
        </nuxt-link>
        <span
          v-else
          class=" w-full flex justify-center items-center py-4 text-[#343434] hover:bg-[#CBCBCB] anime bg-[#E2E2E2]"
          >К сожалению ничего не найдено</span
        >
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import gql from 'graphql-tag'
import _ from 'lodash'

const ALL_CHARACTERS_QUERY = gql`
  query ALL_CHARACTERS_QUERY($search: String) {
    products(first: 40, where: { search: $search }) {
      edges {
        node {
          name
          sku
          attributes {
            edges {
              node {
                name
                options
              }
            }
          }
          allPaSku {
            nodes {
              name
            }
          }
          databaseId
          ... on SimpleProduct {
            price(format: RAW)
            stockStatus
            crossSell(first: 1) {
              edges {
                node {
                  name
                }
              }
            }
          }
          productCategories {
            edges {
              node {
                databaseId
                slug
              }
            }
          }
        }
      }
    }
  }
`

export default {
  data () {
    return {
      searchInput: '',
      searchInputFake: '',
      searchProducts: [],
      searchResults: [],
      inCart: [],
      test: '',
      showSearch: false,
      loading: false
    }
  },
  computed: {
    ...mapGetters(['CART', 'CART_IDS']),
    sortedArray: function () {
      const inputSearhValue = this.searchInput.toLowerCase()
      const inputSearhValueEn = this.test.toLowerCase()

      // длинна строки
      function compareTwo (a, b) {
        var nameA = a.node.name.toLowerCase()
        var nameB = b.node.name.toLowerCase()

        if (nameA.length < nameB.length) return -1
        if (nameA.length > nameB.length) return 1
        return 0
      }
      // точно соответствующий
      function compareTree (a, b) {
        var nameA = a.node.name.toLowerCase()
        var nameB = b.node.name.toLowerCase()

        if (
          nameA.split(' ').includes(inputSearhValue) ||
          nameA.split(' ').includes(inputSearhValueEn) <
            nameB.split(' ').includes(inputSearhValue) ||
          nameB.split(' ').includes(inputSearhValueEn)
        ) {
          return 1
        }
        if (
          nameA.split(' ').includes(inputSearhValue) ||
          nameA.split(' ').includes(inputSearhValueEn) >
            nameB.split(' ').includes(inputSearhValue) ||
          nameB.split(' ').includes(inputSearhValueEn)
        ) {

          return -1
        }

        return 0
      }

      function compareFor (a, b) {
        var nameA = a.node.name.toLowerCase()
        var nameB = b.node.name.toLowerCase()

        if (
          nameA.split(' ').includes(inputSearhValue) ||
          nameA.split(' ').includes(inputSearhValueEn) <
            nameB.split(' ').includes(inputSearhValue) ||
          nameB.split(' ').includes(inputSearhValueEn)
        ) {
          return 1
        }
        if (
          nameA.split(' ').includes(inputSearhValue) ||
          nameA.split(' ').includes(inputSearhValueEn) >
            nameB.split(' ').includes(inputSearhValue) ||
          nameB.split(' ').includes(inputSearhValueEn)
        ) {
          return -1
        }

        return 0
      }

      return this.searchResults
        .sort(compareTree)
        .sort(compareTwo)
        .sort(compareFor)
        .filter(
          item =>
            item.node.name
              .toLowerCase()
              .includes(this.searchInput.toLowerCase()) ||
            item.node.name.toLowerCase().includes(this.test.toLowerCase())
        )
        .splice(0, 10)
    }
  },
  methods: {
    ...mapActions(['ADD_TO_CART']),
    mobSearchClose () {
      this.showSearch = false
      this.$emit('mobSearchClose')
    },
    closeSearch () {
      this.searchInputFake = this.searchInputFake.replace(this.searchInputFake, '')
      this.mobSearchClose()
    },
    async search (value) {
      this.searchInput = value
      this.searchInputFake = value
      this.showSearch = true
      const lowerCase = value.toLowerCase()
      this.autoKeyboardLang(lowerCase)

      try {
        const res = await this.$apollo.query({
          query: ALL_CHARACTERS_QUERY,
          variables: {
            search: lowerCase
          }
        })
        if (res) {
          this.loading = false
          const { results } = res.data.products.edges
          return (
            { results },
            (this.searchResults = res.data.products.edges),
            this.searchToEn()
          )
        }
      } catch (err) {
        this.loading = false
        this.searchToEn()
        this.searchResults = []
      }
    },

    async searchToEn () {
      const EnToRu = this.test
      try {
        const res = await this.$apollo.query({
          query: ALL_CHARACTERS_QUERY,
          variables: {
            search: EnToRu
          }
        })
        if (res) {
          this.loading = false
          const { results } = res.data.products.edges
          if (res.data.products.edges.length != 0) {
            this.searchResults = res.data.products.edges
          }

          return { results }
        }
      } catch (err) {
        this.loading = false
        this.searchResults = []
      }
    },
    autoKeyboardLang (str) {
      var s = [
        'й',
        'ц',
        'у',
        'к',
        'е',
        'н',
        'г',
        'ш',
        'щ',
        'з',
        'х',
        'ъ',
        'ф',
        'ы',
        'в',
        'а',
        'п',
        'р',
        'о',
        'л',
        'д',
        'ж',
        'э',
        'я',
        'ч',
        'с',
        'м',
        'и',
        'т',
        'ь',
        'б',
        'ю'
      ]
      var r = [
        'q',
        'w',
        'e',
        'r',
        't',
        'y',
        'u',
        'i',
        'o',
        'p',
        '\\[',
        '\\]',
        'a',
        's',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        ';',
        "'",
        'z',
        'x',
        'c',
        'v',
        'b',
        'n',
        'm',
        ',',
        '\\.'
      ]
      for (var i = 0; i < r.length; i++) {
        var reg = new RegExp(r[i], 'mig')
        str = str.replace(reg, function (a) {
          return a == a.toLowerCase() ? s[i] : s[i].toUpperCase()
        })
      }

      return str, (this.test = str)
    },
    async productInCart (id) {
      this.showSearch = false
      const searchProductsApi = await this.$axios.$get(
        'https://foxsis.ru/alvd/wp-json/wc/v3/products/' + id,
        {
          auth: {
            username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
            password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
          }
        }
      )
      console.log(searchProductsApi)
      return (
        { searchProductsApi },
        this.inCart.push(searchProductsApi),
        this.ADD_TO_CART(searchProductsApi)
      )
    }
  }
}
</script>

<style>
.button-close {
  position: absolute;

  right: 60px;
  top: 8px;
  bottom: 8px;

  padding: 0 10px;

  transition: background 200ms;

  z-index: 4;
}
.button-close:hover {
  color: #a55b4a;
}

input::-webkit-input-placeholder {
  color: #8a8a8a;
}
/* .test-text2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-clamp: 2;
    box-orient: vertical;
} */
</style>
