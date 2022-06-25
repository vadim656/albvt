<template>
  <div>
    <div class="flex flex-col gap-[20px]">
      <!-- left sidebar -->
      <div class="flex justify-between w-full max-w-[270px]">
        <button
          class="flex justify-center items-center border border-[#54ACD2] rounded-[5px] h-[40px] px-[8px] text-[13px]"
        >
          Все анализы
        </button>
        <button
          class="flex justify-center items-center border border-[#54ACD2] rounded-[5px] h-[40px] px-[8px] text-[13px]"
        >
          Комплексы анализов
        </button>
      </div>
      <!-- end left sidebar -->
      <div class="flex flex-col gap-[20px] w-full max-w-[270px]">
        <div class="bg-white shadow-md rounded-[5px] p-[10px]">
          <ul class="flex flex-col">
            <li
              v-for="(item, i) in GET_ALL_CATEGORIES.filter(cat => cat.parent == 22)"
              class="pt-[12px]"
              :key="i"
            >
              <h4
                class="hover:text-main anime cursor-pointer text-[16px] pb-[12px] border-b border-b-[#C3C3C3] "
                @click="viewItem = !viewItem "
              >
                {{ item.name }}
              </h4>
              <ul
              v-if="viewItem"
                class="ml-8 pt-2 list-disc list-outside flex flex-col gap-[10px]"
              >
                <li
                  v-for="(subitem, i) in GET_ALL_CATEGORIES.filter(cat => cat.parent == item.id)"
                  :key="i"
                  class="text-[14px] hover:text-main anime cursor-pointer"
                >
                  <nuxt-link
                    :to="
                      `/all-analyzes/` + item.slug  + '/' + subitem.id 
                    "
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
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      viewAllAnalizes: true,
      viewItem: false,
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
      activeItem: ''
    }
  },
  methods: {
    viewSubMenu (item) {
      console.log(item.id)
      this.viewItem=!this.viewItem
    },
    ...mapActions(['GET_CATEGORIES_FROM_API'])
  },
  computed: {
    ...mapGetters(['GET_ALL_CATEGORIES']),
    filteredRecipes () {
      this.GET_ALL_CATEGORIES.filter(item => item.parent == 0);
    }
  },
  mounted () {
    this.GET_CATEGORIES_FROM_API()
  }
}
</script>

<style>
a.nuxt-link-active {
  color: #54acd2;
}
</style>
