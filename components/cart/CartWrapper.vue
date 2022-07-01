<template>
  <div class="">
    <div
      class="fixed bg-[#343434]/40  w-screen h-screen left-0 top-0 pt-[13px] z-[11]"
      @click="closeCart()"
    ></div>
    <div
      class="bg-white absolute overflow-hidden pt-[24px] right-0 top-0 w-full  max-w-[370px] shadow-md rounded-bl-[5px] z-[999999]"
    >
      <span class="w-full flex justify-end pb-[24px] text-[16px] px-[24px]"
        >Корзина</span
      >
      <div
        class="scrollbar-cart flex flex-col list-disc list-outside px-[24px] h-full max-h-[380px] overflow-y-auto "
      >
        <cart-item
          v-for="(item, index) in CART"
          :key="index"
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
          <span class="text-[16px] font-medium">{{ totalPrice.toLocaleString('ru-RU') }} руб.</span>
        </div>
        <nuxt-link
        to="/zakaz"
          class="rounded-[5px] border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
        >
          Оформить заказ
        </nuxt-link>
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
      ],
      totalCartPrice: null
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

<style>
.scrollbar-cart::-webkit-scrollbar {
  width: 4px;
  background-color: #f9f9fd;
}

.scrollbar-cart::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(84, 172, 210, 1);
}

.scrollbar-cart::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: #f9f9fd;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: #f9f9fd;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgb(196, 196, 196);
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #f9f9fd;
}
</style>
