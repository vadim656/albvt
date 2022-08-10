<template>
  <div class="bg-[#fcfcfc]">
    <the-header  />
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
  data() {
    return {
      //  isMobile: false
    }
  },
  // beforeDestroy () {
  //   if (typeof window !== 'undefined') {
  //     window.removeEventListener('resize', this.onResize, { passive: true })
  //   }
  // },
  // methods: {
  //    onResize () {
  //     this.isMobile = window.innerWidth < 600
  //     console.log(this.$route.path);
  //   }
  // },
  // mounted () {
  //   this.onResize()
  //   window.addEventListener('resize', this.onResize, { passive: true })
  // }
}
</script>

<style></style>
