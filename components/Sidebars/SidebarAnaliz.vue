<template>
  <div class="">
    <div class="flex flex-col gap-[20px]">
      <!-- left sidebar -->
      <nuxt-link to="/all-analyzes/" v-if="$route.params.analiz && WidhtDevice <= 600" class="px-4 mt-2 py-2 flex justify-center items-center gap-2  bg-white shadow-md">
                <img src="/img/icons/arrow-back.svg" alt="">
                <span>Назад</span>
                 
      </nuxt-link>
      <tabs class="flex flex-col gap-[20px] w-full mt-4 sm:mt-0" v-else>
        <tab title="Все анализы" class="cursor-pointer">
          <div class="">
            
            <div class="bg-white shadow-md rounded-[5px] p-[10px]">
              
              <ul  class="flex flex-col">
                <li
                  v-for="item in GET_ALL_CATEGORIES"
                  class="pt-[12px]"
                  :key="item.id"
                >
                  <h4
                    class="hover:text-main anime cursor-pointer text-[16px] pb-[12px] border-b border-b-[#C3C3C3] "
                    @click="clickCategory(item.id)"
                  >
                    {{ item.name }}
                  </h4>

                  <ul
                    v-if="viewItem == item.id"
                    class=" pt-2  flex flex-col gap-[10px]"
                  >
                    <transition-group name="fade" tag="div" class="pt-2  flex flex-col gap-[10px]">
                      <li
                        v-for="subitem in GET_ALL_SUBCATEGORIES.filter(
                          sub => sub.parent == item.id
                        )"
                        :key="subitem.id"
                        class="text-[14px] hover:text-main anime cursor-pointer"
                      >
                        <nuxt-link
                          :to="'/all-analyzes/' + item.slug + '/' + subitem.id"
                          class="text-left flex gap-2 justify-start"
                        >
                          <span>-</span>
                          {{ subitem.name.replace(/[0-9]/g, '').replace(/\./g, "") }}
                        </nuxt-link>
                      </li>
                    </transition-group>
                  </ul>
                </li>
              </ul>
              
            </div>
          </div>
        </tab>
       <tab title="Комплексы анализов" class="cursor-pointer">
          <div class="">

            <div  class="bg-white shadow-md rounded-[5px] p-[10px]">
              
              <ul  class="flex flex-col">
                <li
                  v-for="item in GET_ALL_KOM_CATEGORIES"
                  class="pt-[12px]"
                  :key="item.id"
                >
                  <h4
                    class="hover:text-main anime cursor-pointer text-[16px] pb-[12px] border-b border-b-[#C3C3C3] "
                    
                  >
                  <nuxt-link :to="'/all-analyzes/' + item.slug + '/' + item.id">{{ item.name.replace(/[0-9]/g, '').replace(/\./g, "") }}</nuxt-link>

                  </h4>
                    <!-- {{item.name}} -->
                  
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

export default {
  components: { tab, Tabs },
  data () {
    return {
      viewAllAnalizes: true,
      viewItem: null,
      mouseItem: null,
      subCatProducts: [],
      WidhtDevice: null
    }
  },
  methods: {
    viewSubMenu (item) {
      console.log(item.id)
      this.viewItem = !this.viewItem
    },
    clickCategory (subcategory) {
      // console.log(subcategory)
      if (this.viewItem == null) {
        this.viewItem = subcategory
        this.GET_SUBCATEGORIES_FROM_API(subcategory)
      } else if (this.viewItem !== subcategory) {
        this.viewItem = subcategory
        this.GET_SUBCATEGORIES_FROM_API(subcategory)
      } else {
        this.viewItem = null
      }
    },

    ...mapActions(['GET_CATEGORIES_FROM_API', 'GET_KOM_CATEGORIES_FROM_API', 'GET_SUBCATEGORIES_FROM_API'])
  },

  mounted () {
    this.GET_CATEGORIES_FROM_API(), this.GET_SUBCATEGORIES_FROM_API(), this.GET_KOM_CATEGORIES_FROM_API(), 
    console.log(window.screen.width);
    this.WidhtDevice = window.screen.width
  },

  computed: {
    ...mapGetters(['GET_ALL_CATEGORIES', 'GET_ALL_SUBCATEGORIES', 'GET_ALL_KOM_CATEGORIES']),
    filteredRecipes () {
      return this.GET_ALL_CATEGORIES.filter(item => item.parent == 2822)
    },
  }
}
</script>

<style>
a.nuxt-link-active {
  color: #54acd2;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
