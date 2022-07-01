<template>
  <div class="grid grid-cols-4 gap-[20px]">
    <div
      v-for="(item, i) in itemsgroup"
      :key="i"
      class="bg-white rounded-[5px] h-[122px] xl:h-[172px] flex justify-center items-center flex-col gap-[11px] hover:shadow-xl anime"
    >
      <img :src='item.img' alt="уу" class="w-[48px] h-auto" />
      <NuxtLink :to="item.link" class="font-medium text-[14px] text-[#343434]">
        {{ item.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      itemsgroup: [
        {
          img: '/img/icons/Group950.svg',
          name: 'Анализы по группам',
          link: '/all-analyzes'
        },
        {
          img: '/img/icons/Group951.svg',
          name: 'Комплексы анализов',
          link: '/404'
        },
        {
          img: '/img/icons/Group952.svg',
          name: 'Анализы на дому',
          link: '/404'
        },
        {
          img: '/img/icons/Group953.svg',
          name: 'Подготовка к анализам',
          link: '/podgotovka'
        }
      ]
    }
  }
}
</script>

<style></style>
