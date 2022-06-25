<template>
  <div class="bg-[#F5F5F5]">
    <the-header />
    <div class="container grid grid-cols-[1fr,3fr] py-[44px] gap-[20px]">
      <sidebar-analiz/>
      <Nuxt />
    </div>
    
    <the-footer/>
  </div>
</template>

<script>
import SidebarAnaliz from '~/components/Sidebars/SidebarAnaliz.vue'
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
export default {
  components: { TheHeader, TheFooter, SidebarAnaliz }
}
</script>

<style></style>
