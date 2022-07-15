<template>
  <div>
    <div class="flex flex-col gap-[20px]">
      <!-- left sidebar -->
      <nuxt-link
        to="/all-analyzes/"
        v-if="$route.params.analiz && WidhtDevice <= 600"
        class="px-4 mt-2 py-2 flex justify-center items-center gap-2  bg-white shadow-md"
      >
        <img src="/img/icons/arrow-back.svg" alt="" />
        <span>Назад</span>
      </nuxt-link>
      <tabs class="flex flex-col gap-[20px] w-full mt-4 sm:mt-0" v-else>
        <tab title="Анализы" class="cursor-pointer">
          <div class="bg-white shadow-md rounded-[5px] p-[10px]">
            <ul class="flex flex-col">
              <li
                v-for="item in testCat.data.productCategories.edges"
                class="pt-[12px]"
                :key="item.node.databaseId"
              >
                <h4
                  class="hover:text-[#4cbdee] anime cursor-pointer text-[16px] pb-[12px] border-b-[0.5px] border-b-[#343434]/10 "
                  @click="clickCategory(item.node.databaseId)"
                >
                  {{ item.node.name }}
                </h4>
                <transition name="fade">
                  <ul
                    v-if="viewItem == item.node.databaseId"
                    class=" pt-2  flex flex-col gap-[10px]"
                  >
                    <li
                      v-for="subitem in item.node.children.edges"
                      :key="subitem.node.databaseId"
                      class="text-[14px] hover:text-[#4cbdee] anime cursor-pointer"
                    >
                      <nuxt-link
                        :to="
                          '/all-analyzes/' +
                            item.node.slug +
                            '/' +
                            subitem.node.databaseId
                        "
                        class="text-left flex gap-2 justify-start"
                      >
                        <span>-</span>
                        {{
                          subitem.node.name
                            .replace(/[0-9]/g, '')
                            .replace(/\./g, '')
                        }}
                      </nuxt-link>
                    </li>
                  </ul>
                </transition>
              </li>
            </ul>
          </div>
        </tab>
        <tab title="Комплексы" class="cursor-pointer">
          <div class="">
            <div class="bg-white shadow-md rounded-[5px] p-[10px]">
              <ul class="flex flex-col">
                <li
                  v-for="item in testCatCom.data.productCategories.edges"
                  class="pt-[12px]"
                  :key="item.node.databaseId"
                >
                  <h4
                    class="hover:text-main anime cursor-pointer text-[16px] pb-[12px] border-b-[0.5px] border-b-[#343434]/10 "
                  >
                    <nuxt-link
                      :to="
                        '/all-analyzes/' +
                          item.node.slug +
                          '/' +
                          item.node.databaseId
                      "
                      >{{
                        item.node.name.replace(/[0-9]/g, '').replace(/\./g, '')
                      }}</nuxt-link
                    >
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </tab>
      </tabs>

      <!-- end left sidebar -->
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import tab from '../tabs/tab.vue'
import Tabs from '../tabs/tabs.vue'
import gql from 'graphql-tag'
import categoryAnaliz from '~/static/fakeBD/category.json'
import categoryComplecs from '~/static/fakeBD/categoryComplecs.json'

const GET_COMPLECS_CAT = gql`
  query GET_COMPLECS_CAT($parent: Int = 2823) {
    productCategories(where: { parent: $parent }, first: 20) {
      edges {
        node {
          databaseId
          name
          slug
          parentDatabaseId
        }
      }
    }
  }
`

const GET_ANALIZES_CAT = gql`
  query GET_ANALIZES_CAT($parent: Int = 2822) {
    productCategories(where: { parent: $parent }, first: 20) {
      edges {
        node {
          databaseId
          name
          slug
          parentDatabaseId
        }
      }
    }
  }
`

export default {
  components: { tab, Tabs },
  props: {
    dataCat: Array
  },
  data () {
    return {
      testCat: categoryAnaliz,
      testCatCom: categoryComplecs,
      viewAllAnalizes: true,
      viewItem: null,
      mouseItem: null,
      WidhtDevice: null,
      complecs: [],
      analizes: [],
      subAnalizesData: [],
      preSubAnalizesData: [],

    }
  },

  methods: {
    viewSubMenu (item) {
      console.log(item.id)
      this.viewItem = !this.viewItem
    },
    clickCategory (subcategory) {
      if (this.viewItem == null) {
        this.viewItem = subcategory
        this.$emit('toCat', subcategory)
      } else if (this.viewItem !== subcategory) {
        this.viewItem = subcategory
        this.$emit('toCat', subcategory)
      } else {
        this.viewItem = null
      }
    },

    ...mapActions([
      'GET_CATEGORIES_FROM_API',
      'GET_KOM_CATEGORIES_FROM_API',
      'GET_SUBCATEGORIES_FROM_API'
    ]),
    async complecsData () {
      const complecs = await this.$apollo.query({
        query: GET_COMPLECS_CAT
      })

      const { complecsDataRes } = complecs.data.productCategories.edges

      return (
        { complecsDataRes },
        (this.complecs = complecs.data.productCategories.edges)
      )
    },
    async analizesData () {
      const analizes = await this.$apollo.query({
        query: GET_ANALIZES_CAT
      })

      const { analizesDataRes } = analizes.data.productCategories.edges

      return (
        { analizesDataRes },
        (this.analizes = analizes.data.productCategories.edges)
      )
    }
  },

  mounted () {
    this.GET_CATEGORIES_FROM_API(),
      this.GET_SUBCATEGORIES_FROM_API(),
      this.GET_KOM_CATEGORIES_FROM_API(),
      this.complecsData(),
      this.analizesData(),
      (this.WidhtDevice = window.screen.width)
  },

  computed: {
    ...mapGetters([
      'GET_ALL_CATEGORIES',
      'GET_ALL_SUBCATEGORIES',
      'GET_ALL_KOM_CATEGORIES'
    ]),
    filteredRecipes () {
      return this.GET_ALL_CATEGORIES.filter(item => item.parent == 2822)
    }
  }
}
</script>

<style>
a.nuxt-link-active {
  color: #4cbdee;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
