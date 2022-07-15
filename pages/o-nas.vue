<template>
  <div class="container ">
    <div class="py-[47px] flex flex-col w-full gap-12">
      <heading-h-3>О нас</heading-h-3>
      <div class="flex flex-col w-full gap-4">
        <span class="font-medium">Наша лицензия</span>
        <div class="grid grid-cols-2 gap-[20px] lg:grid-cols-4 w-full">
          <div class="flex flex-col justify-center items-center gap-1 bg-white shadow-md py-2 rounded-[5px] ">
            <img src="/img/license-1-b-400x516.png" alt="" />
            <span class="w-full text-center text-[14px]">Лицензия Альба Вита (1 страница)</span>
          </div>
          <div class="flex flex-col justify-center items-center gap-1 bg-white shadow-md py-2 rounded-[5px] ">
            <img src="/img/license-2-b-400x516.png" alt="" />
            <span class="w-full text-center text-[14px]">Лицензия Альба Вита (2 страница)</span>
          </div>
           <div class="flex flex-col justify-center items-center gap-1 bg-white shadow-md py-2 rounded-[5px] ">
            <img src="/img/license-3-b-400x516.png" alt="" />
            <span class="w-full text-center text-[14px]">Лицензия Альба Вита (3 страница)</span>
          </div>
           <div class="flex flex-col justify-center items-center gap-1 bg-white shadow-md py-2 rounded-[5px] ">
            <img src="/img/license-4-b-400x516.png" alt="" />
            <span class="w-full text-center text-[14px]">Лицензия Альба Вита (4 страница)</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full gap-4">
        <span class="font-medium">Свидетельства ОГРН и ИНН</span>
        <div class="grid grid-cols-2 gap-[20px] lg:grid-cols-4 w-full">
          <div class="flex flex-col justify-center items-center gap-1 bg-white shadow-md py-2 rounded-[5px] ">
            <img src="/img/proof-ogrn-400x516.png" alt="" />
            <span class="w-full text-center text-[14px]">Свидетельство ОГРН Альба Вита</span>
          </div>
          <div class="flex flex-col justify-center items-center gap-1 bg-white shadow-md py-2 rounded-[5px] ">
            <img src="/img/proof-inn-400x516.png" alt="" />
            <span class="w-full text-center text-[14px]">Свидетельство ИНН Альба Вита</span>
          </div>
         <div></div>
         <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadingH3 from '~/components/HeadingH3.vue'
export default {
  components: { HeadingH3 },
  layout: 'MainLayout'
}
</script>

<style></style>
