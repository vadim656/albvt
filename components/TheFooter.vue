<template>
  <div class="bg-[#EDEDED]">
    <div class="container mt-[100px]">
      <div class="grid grid-cols-[1fr,1fr,2fr] py-[44px] gap-[20px]">
        <div class="flex flex-col gap-[11px]">
          <span class="font-semibold text-[17px]">Пациентам</span>
          <ul class="flex flex-col gap-[14px]">
            <li v-for="(item, i) in footermenu" :key="i">
              <NuxtLink :to="item.link" class="cursor-pointer text-[13px] !text-[#343434] hover:!text-main">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-[11px]">
          <span class="font-semibold text-[17px]">О нас</span>
          <ul class="flex flex-col gap-[14px]">
            <li>
              <NuxtLink to="/" class="cursor-pointer text-[13px] !text-[#343434] hover:!text-main">
                Нормативные документы
              </NuxtLink>
            </li>
          </ul>
          <span class="font-semibold text-[17px]">Контакты</span>
          <div class="flex flex-col gap-[14px]">
            <div class="flex gap-[22px]">
              <img src="/img/icons/Marker.svg" alt=""  class="w-[18px] h-[18px] object-cover"/>
              <span class="text-[13px]">344022, г. Ростов-на-Дону,<br> ул. Восточная, 11</span>
            </div>
            <div class="flex gap-[22px]">
              <img src="/img/icons/Callsettings.svg" alt=""  class="w-[18px] h-[18px] object-cover"/>
              <span class="text-[13px]">+7 (863) 241 85 55</span>
            </div>
            <div class="flex gap-[22px]">
              <img src="/img/icons/Message.svg" alt=""  class="w-[18px] h-[18px] object-cover"/>
              <span class="text-[13px]">albavita2019@yandex.ru</span>
            </div>
          </div>
        </div>
        <div class="pyrder-2">
            <img src="/img/carta.jpg" alt="" class="h-full object-cover">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footermenu: [
        {
          name: 'Анализы и цены',
          link: '/'
        },
        {
          name: 'Результаты анализов',
          link: '/'
        },
        {
          name: 'Анализы на дому',
          link: '/'
        },
        {
          name: 'Комплексы анализов',
          link: '/'
        },
        {
          name: 'Часто задаваемые вопросы',
          link: '/'
        },
        {
          name: 'Политика обработки персональных данных',
          link: '/'
        },
        {
          name: 'Пользовательское соглашение',
          link: '/'
        },
        {
          name: 'Оплата и возврат',
          link: '/'
        }
      ]
    }
  }
}
</script>

<style></style>
