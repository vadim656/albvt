<template>
  <div class="bg-[#F5F5F5]">
    <the-header />
    <Nuxt 
    />
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
export default {
  components: { TheHeader, TheFooter },
}
</script>

<style></style>
