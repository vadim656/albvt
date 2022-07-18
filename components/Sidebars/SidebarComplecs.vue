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
           <nuxt-link to="/all-analyzes/gematologicheskie-issledovaniya/2849/" class="flex  justify-center cursor-pointer items-center border border-[#4CBDEE] rounded-[5px] h-[40px]  text-[16px] w-1/2">Анализы</nuxt-link>
          <nuxt-link to="/all-complecs/1-dlya-zhenshhin/2797" class="flex bg-[#4CBDEE] !text-white  justify-center cursor-pointer items-center border  rounded-[5px] h-[40px]  text-[16px] w-1/2">Комплексы</nuxt-link>
          
        </div>

          <div title="Комплексы" class="cursor-pointer">
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
                        '/all-complecs/' +
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
        </div>
        
      </div>

      <!-- end left sidebar -->
    </div>
  </div>
</template>

<script>
import categoryAnaliz from '~/static/fakeBD/category.json'
import categoryComplecs from '~/static/fakeBD/categoryComplecs.json'
import TabsComplecs from '../tabs/tabs-complecs.vue'
import TabComplecs from '../tabs/tab-complecs.vue'


export default {
  components: {TabsComplecs, TabComplecs },
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
