<template>
  <div class="">
    <div
      class="fixed bg-[#343434]/40  w-screen h-screen left-0 top-0 pt-[13px] z-[11]"
      @click="closeCart()"
    ></div>
    <div
      class="bg-white absolute overflow-hidden pt-[24px] right-0 top-0 w-full max-w-[370px] shadow-md rounded-bl-[5px] z-[999999]"
    >
      <span class="w-full flex justify-end pb-[24px] text-[16px] px-[24px]"
        >Корзина</span
      >
      <div class="flex flex-col list-disc list-outside px-[24px]">
        <cart-item
          v-for="(item, index) in CART"
          :key="item.sku"
          :itemInCart="item"
          @deleteFromCart="deleteFromCart(index)"
        />
      </div>
      <!-- dop to price -->
      <div
        class="bg-[#ECECEC] py-[18px] px-[24px] mt-[24px] flex flex-col gap-[24px]"
      >
        <ul class="flex flex-col gap-2">
          <span
            class="text-[#A55B4A] text-[16px] font-medium w-full text-center"
            >+ Взятие биоматериала:
          </span>
          <li
            v-for="(item, index) in dopItems"
            :key="item.sku"
            class="flex justify-between items-start px-[24px] text-[12px] text-[#909090]"
          >
            <span class="font-medium text-[14px]">- {{ item.name }} </span>
            <span>{{ item.price }} руб.</span>
          </li>
        </ul>
        <span class="text-[#54ACD2] text-[12px] text-center"
          >Взятие биоматериала не входит в общую стоимость выбранных вами
          исследований. Оно требуется для выбранных Вами услуг.</span
        >
      </div>
      <!-- end dop to price -->
      <div class="px-[24px] my-[24px] flex flex-col gap-[24px]">
        <div class="flex justify-between items-end">
          <span class="text-[14px]">ИТОГОВАЯ СТОИМОСТЬ: </span>
          <span class="text-[16px] font-medium"> 550 руб.</span>
        </div>
        <button
          class="rounded-[5px] border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
        >
          Оформить заказ
        </button>
        <div class="flex justify-between items-end text-[12px]">
          <button class="text-main hover:text-blue anime">
            Очистить корзину
          </button>
          <button @click="closeCart()">Закрыть корзину</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CartItem from './CartItem.vue'
export default {
  components: { CartItem },
  data () {
    return {
      dopItems: [
        {
          name: 'Венозная кровь',
          price: '150'
        },
        {
          name: 'Мазок        ',
          price: '160'
        },
        {
          name: 'Пробоподготовка',
          price: '150'
        }
      ]
    }
  },
  methods: {
    closeCart () {
      this.$emit('cartView')
    },
    ...mapActions(['DELETE_FROM_CART']),
    deleteFromCart (index) {
      this.DELETE_FROM_CART(index)
      console.log('delete: ' + index)
    }
  },
  computed: {
    ...mapGetters(['CART'])
  }
}
</script>

<style></style>
