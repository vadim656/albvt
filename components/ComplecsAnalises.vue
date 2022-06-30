<template>
  <div class="flex flex-col gap-[58px]">
    <HeadingH3>Комплексы анализов</HeadingH3>
    <div class="grid grid-cols-5 gap-[20px]">
      <analises-item v-for="(item, i) in 5" :key="i" />
    </div>
  </div>
</template>

<script>
import AnalisesItem from './UI/AnalisesItem.vue'
export default {
  components: { AnalisesItem }
}
</script>

<style></style>
