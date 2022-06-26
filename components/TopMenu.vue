<template>
  <div class="w-full text-white flex">
    <nav class=" w-full flex items-center">
      <ul class="flex w-full justify-between font-base text-[15px] ">
        <li v-for="(item, i) in topmenu" :key="i" class="relative">
          <nuxt-link
            v-if="item.sub == false"
            :to="item.link"
            class="!text-white hover:!text-[#d4d4d4] anime"
            >{{ item.name }}</nuxt-link
          >
          <div v-else class="flex items-center gap-1">
            <span
              
              @click="activesubmenu = !activesubmenu"
              class="cursor-pointer"
              >{{ item.name }}
            </span>
            <img src="/img/icons/arrow-white.svg" alt="" />
          </div>

          <div
            class="absolute top-6 -left-2 bg-white px-2 py-4 w-full min-w-[220px] z-[99999] shadow-md rounded-[5px]"
            v-if="activesubmenu && item.sub == true"
          >
            <ul class="flex flex-col gap-2">
              <li
                v-for="(submenu, i) in submenu"
                :key="i"
                @click="activesubmenu = !activesubmenu"
              >
                <span
                  v-if="submenu.active == false"
                  class="text-[#858585] cursor-default"
                >
                  {{ submenu.name }}
                </span>
                <nuxt-link
                  v-else
                  :to="submenu.link"
                  class="text-[#343434] hover:text-main anime"
                >
                  {{ submenu.name }}
                </nuxt-link>
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
          name: 'Неактивная ссылка',
          link: '/404',
          active: false
        },
        {
          name: 'Постановка капельниц',
          link: '/test-pages/one',
          active: true
        },
        {
          name: 'Справка для предоставления в ИФНС',
          link: '/test-pages/two',
          active: true
        },
        {
          name: 'Подготовка к анализам',
          link: '/podgotovka',
          active: true
        },
        {
          name: 'Оформление заказа',
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
