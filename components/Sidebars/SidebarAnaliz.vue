<template>
  <div>
    <div class="flex flex-col gap-[20px]">
      <!-- left sidebar -->
      <tabs class="flex flex-col gap-[20px] w-full ">
        <tab title="Все анализы" class="cursor-pointer">
          <div class="">
            <div class="bg-white shadow-md rounded-[5px] p-[10px]">
              <ul class="flex flex-col">
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
                          :to="`/all-analyzes/` + item.slug + '/' + subitem.id"
                          class="text-left flex gap-2 justify-start"
                        >
                          <span>-</span>
                          {{ subitem.name }}
                        </nuxt-link>
                      </li>
                    </transition-group>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </tab>
        <!-- <tab title="Комплексы анализов">
          <div class="flex flex-col gap-[20px] w-full max-w-[270px]">
            <div class="bg-white shadow-md rounded-[5px] p-[10px]">
              <ul class="flex flex-col">
                <li
                  v-for="(item, i) in GET_ALL_CATEGORIES"
                  class="pt-[12px]"
                  :key="i"
                >
                  <h4
                    class="hover:text-main anime cursor-pointer text-[16px] pb-[12px] border-b border-b-[#C3C3C3] "
                    @click="viewItem = !viewItem"
                  >
                    {{ item.name }}
                  </h4>
                  <ul
                    v-if="viewItem"
                    class="ml-8 pt-2 list-disc list-outside flex flex-col gap-[10px]"
                  >
                    <li
                      v-for="(subitem, i) in GET_ALL_CATEGORIES.filter(
                        cat => cat.parent == item.id
                      )"
                      :key="i"
                      class="text-[14px] hover:text-main anime cursor-pointer"
                    >
                      <nuxt-link
                        :to="`/all-analyzes/` + item.slug + '/' + subitem.id"
                        class="text-left"
                      >
                        {{ subitem.name }}
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </tab> -->
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
      sidebarMenu: [
        {
          name: 'Гематологические исследования',
          translit: '',
          sku: 'c-1',
          subcategory: [
            {
              name: 'Клинический анализ крови',
              translit: '',
              sku: '1.1'
            },
            {
              name: 'Иммуногематология',
              translit: '',
              sku: '1.2'
            },
            {
              name: 'Оценка свертывающей системы крови (коагулограмма)',
              translit: '',
              sku: '1.3'
            }
          ]
        }
      ],
      subCatProducts: []
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

    ...mapActions(['GET_CATEGORIES_FROM_API', 'GET_SUBCATEGORIES_FROM_API'])
  },

  mounted () {
    this.GET_CATEGORIES_FROM_API(), this.GET_SUBCATEGORIES_FROM_API()
  },

  computed: {
    ...mapGetters(['GET_ALL_CATEGORIES', 'GET_ALL_SUBCATEGORIES']),
    filteredRecipes () {
      return this.GET_ALL_CATEGORIES.filter(item => item.parent == 61)
    }
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
