<template>
  <div class="w-full text-white flex">
    <nav class=" w-full flex items-center">
      <ul class="flex w-full justify-between font-base text-[15px]">
        <li v-for="(item, i) in topmenu" :key="i" class="hover:underline">
          {{ item.name }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      topmenu: [
        {
          name: 'О нас',
          link: '/'
        },
        {
          name: 'Услуги',
          link: '/'
        },
        {
          name: 'Анализы',
          link: '/'
        },
        {
          name: 'Комплексы анализов',
          link: '/'
        },
        {
          name: 'Контакты',
          link: '/'
        }
      ]
    }
  }
}
</script>

<style></style>
