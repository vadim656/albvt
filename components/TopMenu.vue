<template>
  <div class="w-full text-white flex">
    <nav class=" w-full flex items-center">
      <ul class="flex w-full justify-start gap-[20px] font-base text-[16px] ">
        <li v-for="(item, i) in topmenu" :key="i" class="relative">
          <nuxt-link
            v-if="item.sub == false"
            :to="item.link"
            class="!text-white hover:!text-[#d4d4d4] anime"
            >{{ item.name }}</nuxt-link
          >
          <div v-else class="flex items-center gap-1">
            <span @click="activesubmenu = !activesubmenu" class="cursor-pointer"
              >{{ item.name }}
            </span>
            <img src="/img/icons/arrow-white.svg" alt="" />
          </div>

          <div
            class="absolute top-6 -left-2 bg-white  w-full min-w-[320px] z-[99999] shadow-xl rounded-[5px] overflow-hidden"
            v-if="activesubmenu && item.sub == true"
          >
            <ul class="flex flex-col bg-white">
              <li
                v-for="(submenu, i) in submenu"
                :key="i"
                @click="activesubmenu = !activesubmenu"
                class="hover:bg-[#f1f1f1] anime px-2 py-4"
              >
                <!-- <span
                  v-if="submenu.active == false"
                  class="text-[#858585] cursor-default"
                >
                  - {{ submenu.name }}
                </span> -->
                <div class="flex gap-2 items-start">
                    <span class="text-[#343434]">-</span>
                <nuxt-link
                  :to="submenu.link"
                  class="text-[#343434]  anime"
                >
                  {{ submenu.name }}
                </nuxt-link>
                </div>
                
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activesubmenu: false,
      submenu: [
        {
          name: 'Постановка капельниц',
          link: '/test-pages/one',
          active: true
        },
        {
          name: 'ЭКГ',
          link: '/test-pages/two',
          active: true
        },

        {
          name: 'Предрейсовые и послерейсовые медицинские осмотры',
          link: '/zakaz',
          active: true
        }
      ],
      topmenu: [
        {
          name: 'О нас',
          sub: false,
          link: '/404'
        },
        {
          name: 'Услуги',
          sub: true,
          link: ''
        },
        {
          name: 'Анализы',
          sub: false,
          link: '/all-analyzes'
        },
        {
          name: 'Комплексы анализов',
          sub: false,
          link: '/404'
        },
        {
          name: 'Контакты',
          sub: false,
          link: '/404'
        }
      ]
    }
  }
}
</script>

<style></style>
