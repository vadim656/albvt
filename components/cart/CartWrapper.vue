<template>
  <div class="">
    <div
      class="fixed bg-[#343434]/40  w-screen h-screen left-0 top-0 pt-[13px] z-[11]"
      @click="closeCart()"
    ></div>
    <div
      class="bg-white fixed sm:absolute overflow-hidden pt-[24px] right-0 top-0 w-full h-screen sm:h-auto flex flex-col justify-between pb-[20px] sm:pb-0 sm:block   sm:max-w-[370px] shadow-md rounded-[5px] z-[999999]"
    >
      <span
        class="w-full sm:flex justify-end pb-[24px] text-[16px] px-[24px] hidden"
        >Корзина
      </span>
      <!-- max-h-[180px] sm:max-h-[380px]  -->
      <div
      v-if="CART.length >= 1"
        class="scrollbar-cart flex flex-col gap-4 list-disc list-outside px-[24px] h-full max-h-auto  sm:max-h-[180px] lg:max-h-[260px]  overflow-y-auto "
      >
        <cart-item
          v-for="(item, index) in CART"
          :key="index"
          :itemInCart="item"
          @deleteFromCart="deleteFromCart(index)"
        />
        <div class="flex flex-col gap-4 ">
          <span class="w-full py-2  border-b-2 border-[#DDEEF6]">Взятие биоматериала</span>
          <div class="flex flex-col gap-2 ">
             <cart-item-bio v-for="(item, i) in bioMaterialsComplete" 
          :key="i"
          :bio_data="item"
           />
          </div>
         
        </div>
      </div>
      <!-- dop to price -->

      <div class="bg-white p-[24px] flex flex-col gap-[24px]" v-else>
        <span class="text-[#A55B4A] text-[16px] font-medium w-full text-center">
          Ваша корзина пуста.
        </span>
        <span class="text-[14px]"
          >Впишите нужное исследование в поисковую строку или перейдите в раздел
          “Анализы”</span
        >
        <button @click="closeCart()">
          <nuxt-link
            to="/all-analyzes/gematologicheskie-issledovaniya/2849"
            class="rounded-[5px] border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
            >Анализы</nuxt-link
          >
        </button>
        <button @click="closeCart()">Закрыть</button>
      </div>

      <!-- end dop to price -->
      <div
        class="px-[24px] my-[24px] flex flex-col gap-4 sm:gap-[24px]"
        v-show="CART.length >= 1"
      >
        <div class="flex justify-between items-end">
          <span class="text-[14px]">ИТОГОВАЯ СТОИМОСТЬ: </span>
          <span class="text-[16px] font-medium"
            >{{ totalPriceInCart.toLocaleString('ru-RU') }} руб.</span
          >
        </div>
        <button @click="closeCart()">
          <nuxt-link
            to="/cart"
            class="rounded-[5px] border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
          >
            Оформить заказ
          </nuxt-link>
        </button>

        <div class="flex justify-between items-end text-[12px]">
          <button @click="resetCart()" class="text-main hover:text-blue anime">
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
          price: '150',
          active: true
        },
        {
          name: 'Мазок',
          price: '160',
          active: false
        },
        {
          name: 'Пробоподготовка',
          price: '150',
          active: false
        }
      ],
      dopTest: [],
      totalCartPrice: null,
      prePrice: null,
      preMaterial: []
    }
  },
  methods: {
    closeCart () {
      this.$emit('cartView')
    },
    ...mapActions([
      'DELETE_FROM_CART',
      'RESET_CART',
      'GET_BIOMATERIALS_FROM_API'
    ]),
    deleteFromCart (index) {
      this.DELETE_FROM_CART(index)
    },
    resetCart () {
      this.RESET_CART()
      console.log('reset cart is reset')
    }
  },
  computed: {
    ...mapGetters(['CART', 'GET_ALL_BIOMATERIALS']),
    // bioMaterialsActive: function () {
    //   let activeItem = this.dopItems.filter(item => item.active == true)
    //   return activeItem
    // },
    bioMaterialsComplete: function () {
      let chars = this.dopTest
      let uniqueChars = []
      chars.forEach(element => {
        element.forEach(subelement => {
          if (!uniqueChars.includes(subelement)) {
            uniqueChars.push(subelement)
          }
        })
      })

      return uniqueChars, (this.preMaterial = uniqueChars)
    },
    totalPriceInCart: function () {
      let result = this.CART.reduce((prev, item) => {
        return prev + parseInt(item.price)
      }, 0)
      this.prePrice = result
      let totalPriceInCartReduce = this.preMaterial.reduce((prev, item) => {
        return prev + parseInt(item.price)
      }, this.prePrice)
      return totalPriceInCartReduce
    }
  },
  mounted () {
    this.CART.forEach(element => {
      element.upsell_ids.forEach(element => {
        this.dopTest.push(
          this.GET_ALL_BIOMATERIALS.filter(item => item.id == element)
        )
      })
    })
  }
}
</script>

<style>
.scrollbar-cart::-webkit-scrollbar {
  width: 6px;
  background-color: #f9f9fd;
}

.scrollbar-cart::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: rgba(84, 172, 210, 1);
}

.scrollbar-cart::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
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
