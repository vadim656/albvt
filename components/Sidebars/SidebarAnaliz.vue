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
      <div class="flex flex-col gap-[20px] w-full mt-4 sm:mt-0" v-else>
        <div class="flex  justify-between w-full gap-4">
          <nuxt-link to="/all-analyzes/gematologicheskie-issledovaniya/2849/" class="flex bg-[#4CBDEE] !text-white  justify-center cursor-pointer items-center border  rounded-[5px] h-[40px]  text-[16px] w-1/2">Анализы</nuxt-link>
          <nuxt-link to="/all-complecs/1-dlya-zhenshhin/2797" class="flex  justify-center cursor-pointer items-center border border-[#4CBDEE] rounded-[5px] h-[40px]  text-[16px] w-1/2">Комплексы</nuxt-link>
        </div>
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
      </div>

      <!-- end left sidebar -->
    </div>

  </div>
</template>

<script>
import tab from '../tabs/tab.vue'
import Tabs from '../tabs/tabs.vue'
import categoryAnaliz from '~/static/fakeBD/category.json'
import categoryComplecs from '~/static/fakeBD/categoryComplecs.json'


export default {
  components: { tab, Tabs },
  data () {
    return {
      testCat: categoryAnaliz,
      testCatCom: categoryComplecs,
      viewAllAnalizes: true,
      viewItem: 2824,
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
      } else if (this.viewItem !== subcategory) {
        this.viewItem = subcategory
      } else {
        this.viewItem = null
      }
    },



  },

  mounted () {

      (this.WidhtDevice = window.screen.width)
  },


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
