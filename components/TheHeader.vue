<template>
  <div class="w-full h-full bg-main  pb-[26px] ">
    <header
      class="w-full fixed left-0 top-0 bg-main  sm:pb-[14px]  lg:pb-[0px] pt-[14px]  z-[3]"
    >
      <transition name="fade">
        <div
          v-if="mobileMenu == true"
          class="mobile-menu  w-screen h-screen flex justify-center items-start absolute top-16 left-0 px-[1rem] bg-[#343434]/60 "
          @click="mobileMenu = false"
        >
          <div
            class="p-4 bg-white w-full max-h-[260px]  flex flex-col gap-4 rounded-md shadow-md "
          >
            <nuxt-link @click="mobileMenu = false" to="/o-nas">О нас</nuxt-link>
            <nuxt-link @click="mobileMenu = false" to="/reis">Услуги</nuxt-link>
            <nuxt-link
              @click="mobileMenu = false"
              to="/all-analyzes/gematologicheskie-issledovaniya/2849"
              >Анализы</nuxt-link
            >
            <nuxt-link
              @click="mobileMenu = false"
              to="/all-complecs/1-dlya-zhenshhin/2797"
              >Комплексы анализов</nuxt-link
            >
            <nuxt-link @click="mobileMenu = false" to="/contacts"
              >Контакты</nuxt-link
            >
            <nuxt-link
              @click="mobileMenu = false"
              to="/result"
              class="text-main px-4 py-2 block sm:hidde rounded-[5px] border-[0.5px] border-main text-center"
              >Результаты анализов</nuxt-link
            >
          </div>
        </div>
        <!-- /.mobile-menu -->
      </transition>

      <div
        class="container grid grid-cols-[2fr,3fr] sm:grid-cols-4 grid-rows-1 sm:grid-rows-[47px_20px] gap-x-[20px] gap-y-[16px] relative pb-[24px]"
      >
        <logo-main class="" />
        <transition name="fade">
          <!-- desctop -->
          <header-search
            class="hidden sm:block left-0 w-full  sm:col-span-2 "
            v-if="!isMobile"
            @mobSearchClose="mobSearchClose()"
          />
          <!-- mobile -->
          <header-search
            class="block sm:hidden absolute left-0 w-full  top-[40px]  sm:col-span-2  sm:relative "
            v-else-if="isMobile == true && showSearchMob == true"
            @mobSearchClose="mobSearchClose()"
          />
        </transition>

        <div class="col-span-1 flex gap-[10px] justify-between">
          <nuxt-link
            to="/result"
            class="text-[14px] xl:text-[16px] !text-white font-light px-[14px] py-[14px] hidden lg:w-full xl:max-w-[210px] sm:flex sm:items-center sm:justify-center  border-[0.5px] rounded-[5px] h-[47px]"
          >
            Результаты анализов
          </nuxt-link>
          <div
            class="flex w-full sm:w-[100px]  justify-between sm:justify-end items-center gap-[0px] sm:gap-[10px] "
          >
            <!-- icon search -->
            <button class="block sm:hidden" @click="reOpenmobSearch()">
              <img src="/img/icons/mob-search.svg" alt="" class="w-8  h-8 " />
            </button>
            <!-- icon call -->
            <button class="block sm:hidden">
              <a href="tel:88632418555"
                ><img src="/img/icons/mob-call.svg" alt="" class="w-8 h-8 "
              /></a>
            </button>
            <!-- icon cart -->
            <button
              @click="cartView = true"
              class="flex gap-2 items-center relative order-4 sm:order-1"
            >
              <img
                src="/img/icons/Shoppingbag.svg"
                alt=""
                class="w-8 xl:w-[2.5rem] h-8 xl:h-[2.5rem]"
              />
              <span
                class="bg-white w-5 h-5  rounded-full text-[10px] absolute -top-2 left-[1.2rem]  xl:left-[1.5rem] p-2 flex justify-center items-center"
                >{{ CART.length }}</span
              >
              <!-- <div  v-if="CART.length" class="flex flex-col justify-center items-start gap-1">
                <span

                  class="text-white text-[12px] text-left flex justify-start"
                  >{{ totalPrice.toLocaleString('ru-RU') }} ₽</span
                >
              </div> -->
            </button>
            <!-- icon user not loggin -->
            <nuxt-link
              to="/my-account"
              v-if="$auth.loggedIn"
              class="order-3 sm:order-last relative"
            >
              <img
                src="/img/icons/Addaccount.svg"
                alt=""
                class="w-8 xl:w-[2.5rem] h-8 xl:h-[2.5rem] "
              />
              <span
                class="w-3 h-3 rounded-full flex justify-center items-center bg-[#5cf07c] absolute -top-[0.3rem] left-[1.3rem]  xl:left-[1.6rem]"
              ></span>
            </nuxt-link>
            <!-- icon user  loggin -->
            <button
              v-else
              class="order-3 sm:order-last relative"
              @click="loginView = true"
            >
              <img
                src="/img/icons/Addaccount.svg"
                alt=""
                class="w-8 xl:w-[2.5rem] h-8 xl:h-[2.5rem] "
              />
            </button>
            <!-- icon menu -->
            <button
              class="block sm:hidden order-5"
              @click="mobileMenuDisplay()"
            >
              <img
                v-if="mobileMenu == false"
                src="/img/icons/mob-menu.svg"
                alt=""
                class="w-8 xl:w-10 h-8 xl:h-10 "
              />
              <img
                v-else
                src="/img/icons/mob-menu-close.svg"
                alt=""
                class="w-8 xl:w-10 h-8 xl:h-10 "
              />
            </button>
          </div>
        </div>
        <top-menu class="hidden sm:block col-span-2  col-end-4 " />
        <div
          class="hidden sm:flex justify-end items-center gap-[3px] col-span-1 row-span-1 text-white "
        >
          <a
            v-if="phone.length"
            :href="
              `tel:${phone
                .split(' ')
                .join('')
                .replaceAll('-', '')
                .replace('(', '')
                .replace(')', '')
                .replace('+7', '8')}`
            "
            class="font-semibold text-[16px]"
            >{{ phone }}</a
          >
        </div>

        <cart-wrapper
          v-if="cartView == true"
          @cartView="cartCloseView"
          ref="cart"
        />
        <login-header
          v-if="loginView == true && !$auth.loggedIn"
          @loginView="loginCloseView"
        />
      </div>
    </header>
    <div class="container mt-[121px] hidden sm:block">
      <header-group-items />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import LoginHeader from './account/loginHeader.vue'

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
    CartWrapper,
    LoginHeader
  },
  // props: {
  //   isMobile: {
  //     type: Boolean,
  //     default () {
  //       return false
  //     }
  //   }
  // },
  data () {
    return {
      cartView: false,
      loginView: false,
      searchView: false,
      WidhtDevice: 1920,
      mobileMenu: false,
      showSearchMob: false,
      isMobile: false,
      phone: ''
    }
  },

  methods: {
    ...mapActions(['GET_BIOMATERIALS_FROM_API']),
    mobSearchClose () {
      this.showSearchMob = !this.showSearchMob
      console.log('180')
    },
    reOpenmobSearch () {
      this.showSearchMob = !this.showSearchMob
      console.log('184')
    },
    cartCloseView () {
      this.cartView = false
    },
    loginCloseView () {
      this.loginView = false
    },
    mobileMenuDisplay () {
      this.mobileMenu = !this.mobileMenu
    },
    onResize () {
      this.isMobile = window.innerWidth < 600
    },
    async fetchSomethingPhone () {
      const phone = await this.$axios.$get(
        'https://foxsis.ru/alvd/wp-json/wp/v2/pages/11904'
      )
      this.phone = phone.acf.nomer_telefona
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
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
    this.fetchSomethingPhone()
    this.GET_BIOMATERIALS_FROM_API()
  }
}
</script>

<style></style>
