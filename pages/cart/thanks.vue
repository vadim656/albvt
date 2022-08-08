<template>
  <div
    class="container py-[47px] mt-[47px] flex justify-center flex-col items-center gap-[20px]"
  >
    Ваш заказ № <span class="text-main">{{id}}</span>  в обработке, наш менеджер свяжется с Вами в течении 15
    минут.
    <div class="flex gap-[20px]">
      <nuxt-link to="/my-account" class="underline">В личный кабинет</nuxt-link>
      <nuxt-link to="/" class="underline">На главную</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'MainLayout',
  data () {
    return {
      id: ''
    }
  },
  methods: {
    CurentInOrder () {
      this.id = this.$route.query.order
    }
  },
  created () {
    this.CurentInOrder()
  }
}
</script>

<style></style>
