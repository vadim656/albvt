<template>
  <div class="container flex flex-col pt-[47px] gap-20 justify-center items-center h-full">
      <heading-h-3>Поиск по результатам</heading-h-3>
       <input
          type="search"
          id="default-search2"
          class="block w-full xl:max-w-[600px] lg:max-w-[400px] pr-20 rounded-[5px]  bg-white pl-4   h-[47px] focus:outline-none text-[#979797] shadow-md"
          placeholder="Введите номер заказа"
          autocomplete="off"
        />
  </div>
</template>

<script>
import HeadingH3 from '~/components/HeadingH3.vue'
export default {
  components: { HeadingH3 },
    layout: 'MainLayout',
}
</script>

<style>

</style>