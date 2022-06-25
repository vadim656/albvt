<template>
  <div class="flex flex-col gap-[58px]">
    <HeadingH3>Общая информация</HeadingH3>
    <div class="grid grid-cols-5 gap-[14px]">
      <info-item v-for="(item, i) in 5" :key="i" />
    </div>
  </div>
</template>

<script>
import InfoItem from './UI/InfoItem.vue'

export default {
  components: {InfoItem }
}
</script>

<style></style>
