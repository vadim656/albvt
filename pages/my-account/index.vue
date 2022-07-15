<template>
  <div class="container ">
    <div class="grid grid-cols-[3fr,9fr] my-[47px] gap-[20px]">
      <div class=" bg-white rounded-[5px] shadow-md flex flex-col">
        <div
          class="bg-[#EDEDED] p-4  flex flex-col gap-4 font-medium text-[18px]"
        >
          <span>{{ this.$auth.$state.user.firstName }}</span>
          <span>{{ this.$auth.$state.user.lastName }}</span>
          <!-- <span>{{ this.$auth.$state.user.client_data.otchestvo }}</span> -->
        </div>
        <div class="p-4">Ваша скидка 10%</div>
      </div>
      <div class="bg-white rounded-[5px] shadow-md p-4 flex flex-col gap-4">
        <span class="w-full text-[18px] font-medium">Ваши заявки</span>
        <div
          class=" grid grid-cols-5 gap-[20px] w-full border-b-[0.5px] border-[#343434]/50 text-[14px] text-[#343434]/60 pb-2"
        >
          <span>Номер заявки</span>
          <span>Дата посещения</span>
          <span>Срок выполнения</span>
          <span>Статус</span>
        </div>
        <div class=" flex flex-col">
          <div
            v-for="(item, i) in products_cart"
            :key="i"
            class="grid grid-cols-5 gap-[20px] w-full border-b-[0.5px] border-dashed py-4 items-center"
          >
            <span>{{ item.node.databaseId }}</span>
            <span>{{ item.node.date.substring(10, 0) }}</span>
            <span>Срок выполнения</span>
            <span>{{ item.node.status }}</span>
            <button
              class="flex justify-center items-center border bg-white  border-main rounded-[5px] sm:py-2 text-main  hover:bg-main hover:text-white anime h-[40px] px-[8px] text-[14px]"
            >
              Оплатить
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="$auth.loggedIn" class="mt-4">
      ID пользователя:
      <span class="font-bold">{{ this.$auth.$state.user.id }}</span>
    </div>
    <div v-else>
      не вошел
    </div>
    <button @click="handleLogout">Выйти</button>
    
  </div>
</template>

<script>
import { gql } from 'graphql-tag'

const ALL_PRODUCTS_CART = gql`
  query ALL_PRODUCTS_CART {
    orders {
      edges {
        node {
          databaseId
          status
          total(format: RAW)
          date
          billing {
            lastName
            firstName
          }
        }
      }
    }
  }
`

export default {
  layout: 'MainLayout',
  middleware: ['isAuth'],
  data () {
    return {
      products_cart: []
    }
  },
  //get-cart-user-only
  async asyncData (ctx) {
    const client = ctx.app.apolloProvider.defaultClient
    const res = await client.query({
      query: ALL_PRODUCTS_CART
    })
    const products_cart = res.data.orders.edges
    // console.log('100-my-account-- ' + products_cart)

    return {
      products_cart
    }
  },
  methods: {
    async handleLogout() {
      this.$nuxt.$loading.start()
      await this.$auth.logout()
    }
  },
}
</script>

<style>
.cartAll {
  transition: all 0.5s;
}

.todo-leave-active {
  position: absolute;
}

.todo-leave-to {
  transform: translateX(200px);
  opacity: 0;
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
