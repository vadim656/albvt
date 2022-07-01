<template>
  <div class="w-full h-full bg-main  pb-[26px] ">
    <header class="w-full fixed left-0 top-0 bg-main pt-[14px]">
      <div
        class="container grid grid-cols-4 grid-rows-[47px_20px_1fr] gap-[20px] "
      >
        <logo-main class="" />
        <header-search class="col-span-2" />
        <div class="col-span-1 flex gap-[10px] justify-between">
          <button
            class="text-[14px] xl:text-[16px] text-white font-light px-[14px] py-[14px] flex items-center  border-[0.5px] rounded-[5px] h-[47px]"
          >
            Результаты анализов
          </button>
          <div class="flex items-center gap-[10px] ">
            <button @click="cartView = true" class="flex gap-2 items-center relative">
              <img src="/img/icons/Shoppingbag.svg" alt="" class="w-8 xl:w-10 h-8 xl:h-10"/>
              <span
            class="bg-white w-5 h-5  rounded-full text-[10px] absolute -top-2 left-[1rem]  xl:left-[1.5rem] p-2 flex justify-center items-center"
            >{{ CART.length }}</span
          >
              <!-- <div  v-if="CART.length" class="flex flex-col justify-center items-start gap-1">
                <span

                  class="text-white text-[12px] text-left flex justify-start"
                  >{{ totalPrice.toLocaleString('ru-RU') }} ₽</span
                >
              </div> -->
            </button>
            <button>
              <img src="/img/icons/Addaccount.svg" alt="" class="w-8 xl:w-10 h-8 xl:h-10 "/>
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

        <cart-wrapper v-if="cartView == true" @cartView="cartCloseView" />
      </div>
    </header>
    <div class="container mt-[121px]">
      <header-group-items />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CartWrapper from './cart/CartWrapper.vue'
import HeaderGroupItems from './HeaderGroupItems.vue'
import HeaderSearch from './HeaderSearch.vue'
import LogoMain from './LogoMain.vue'

import TopMenu from './TopMenu.vue'
export default {
  components: {
    TopMenu,
    HeaderSearch,
    LogoMain,
    HeaderGroupItems,
    CartWrapper
  },
  data () {
    return {
      cartView: false
    }
  },
  methods: {
    cartCloseView () {
      this.cartView = false
    }
  },
  computed: {
    ...mapGetters(['CART']),
    totalPrice: function () {
      let result = this.CART.reduce((prev, item) => {
        return prev + parseInt(item.price)
      }, 0)
      return result
    }
  }
}
</script>

<style></style>
