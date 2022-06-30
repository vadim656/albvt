<template>
  <div class="w-full h-full bg-main pt-[14px] pb-[26px]">
    <header
      class="container grid grid-cols-4 grid-rows-[47px_20px_1fr] gap-[20px]"
    >
      <logo-main class="" />
      <header-search class="col-span-2" />
      <div class="col-span-1 flex gap-[10px] justify-between">
        <button
          class="text-[16px] text-white font-light px-[14px] py-[14px] flex items-center  border-[0.5px] rounded-[5px] h-[47px]"
        >
          Результаты анализов
        </button>
        <div class="flex items-center gap-[10px] ">
          <button @click="cartView = true">
            <img src="/img/icons/Shoppingbag.svg" alt="" />
          </button>
          <button>
            <img src="/img/icons/Addaccount.svg" alt="" />
          </button>
        </div>
      </div>
      <top-menu class=" col-span-2  col-end-4 " />
      <div
        class="flex justify-end items-center gap-[3px] col-span-1 row-span-1 text-white "
      >
        <img src="/img/icons/call.svg" alt="" />
        <a href="" class="font-medium text-[16px]">+7 (863) 241-85-55</a>
      </div>
      <div class="col-span-4 row-span-1">
        <header-group-items />
      </div>
      <cart-wrapper 
      v-if="cartView == true"
      @cartView="cartCloseView"
      />
    </header>
    
  </div>
</template>

<script>
import CartWrapper from './cart/CartWrapper.vue'
import HeaderGroupItems from './HeaderGroupItems.vue'
import HeaderSearch from './HeaderSearch.vue'
import LogoMain from './LogoMain.vue'

import TopMenu from './TopMenu.vue'
export default {
  components: { TopMenu, HeaderSearch, LogoMain, HeaderGroupItems, CartWrapper },
  data () {
    return {
      cartView: false
    }
  },
  methods: {
    cartCloseView(){
      this.cartView = false
    }
  }
}
</script>

<style></style>
