<template>
  <div class="container mt-[47px] sm:mt-0">
    <!-- подумать об автозаполнии клиента исли был в офисе и потом захотел зарегистрироватся -->
    <div>
      <tabs-vk>
        <tab-vk title="Результаты исследований">
          <div
            class="grid grid-cols-1  sm:grid-cols-[3fr,9fr] my-[47px] gap-[20px]"
          >
            <div class=" bg-white rounded-[5px] shadow-md flex flex-col ">
              <div
                class="bg-[#EDEDED] p-4  flex flex-col gap-4 font-medium text-[18px]"
              >
                <span class="capitalize ">{{ dataMe.user.firstName }}</span>
                <span class="capitalize ">{{ dataMe.user.lastName }}</span>
                <!-- <span>{{ this.$auth.$state.user.client_data.otchestvo }}</span> -->
              </div>
              <div class="flex flex-col gap-4 h-full justify-between p-4">
                <!-- <div>Ваша скидка 0%</div> -->
                <button
                  @click="handleReload()"
                  class="rounded-[5px] border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
                >
                  Обновить информацию
                </button>
                <button
                  @click="handleLogout()"
                  class="rounded-[5px] border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
                >
                  Выйти
                </button>
              </div>
            </div>
            <div
              class="bg-white rounded-[5px] shadow-md p-4 flex flex-col gap-4"
            >
              <span class="w-full text-[18px] font-medium">Ваши заявки</span>
              <div
                class=" grid grid-cols-5 gap-[20px] w-full border-b-[0.5px] border-[#343434]/50 text-[14px] text-[#343434]/60 pb-2"
              >
                <span>Номер дата заявки</span>

                <span>Срок выполнения</span>
                <span>Статус</span>
                <span>Итого</span>
                <span>Результаты</span>
              </div>
              <div class=" flex flex-col" v-if="products_cart.length">
                <div
                  v-for="(item, i) in products_cart"
                  :key="i"
                  class="grid grid-cols-5 gap-[20px] w-full border-b-[0.5px] border-dashed py-4 items-center"
                >
                  <div class="flex flex-col gap-1">
                    <span class="font-medium">{{ item.node.databaseId }}</span>
                    <span class="text-[#343434]/70">{{
                      item.node.date.substring(10, 0)
                    }}</span>
                  </div>

                  <span>30 день</span>

                  <span v-if="item.node.status == 'PROCESSING'">Обработка</span>
                  <span
                    v-else-if="item.node.status == 'CANCELLED'"
                    class="text-[#A55B4A]"
                    >Отменен</span
                  >

                  <span
                    v-else-if="item.node.status == 'COMPLETED'"
                    class="text-[green]"
                    >Оплачен</span
                  >
                  <button
                    v-if="item.node.status == 'PENDING'"
                    @click="oplata(item.node.total)"
                    class="flex justify-center items-center border bg-white  border-main rounded-[5px] sm:py-2 text-main  hover:bg-main hover:text-white anime h-[40px] px-[8px] text-[14px]"
                  >
                    Оплатить
                  </button>
                  <div class="flex flex-col gap-1">
                    <span
                      class="line-through opacity-50"
                      v-if="item.node.discountTotal !== '0'"
                      >{{
                        parseInt(item.node.discountTotal) +
                          parseInt(item.node.total)
                      }}
                      ₽</span
                    >
                    <span
                      >{{
                        parseInt(item.node.total).toLocaleString('ru-RU')
                      }}
                      ₽</span
                    >
                  </div>
                  <button @click="DownloadResult(item.node.databaseId)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 hover:text-main anime"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </tab-vk>
        <tab-vk title="Выгодные предложения">
          <div class="container relative my-[47px]">
            <swiper
              class=" swiper-2  h-[300px] sm:h-[550px]"
              :spaceBetween="20"
              :slidesPerView="1"
              :pagination="true"
              :navigation="true"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              Virtual
              id="slider4"
            >
              <swiper-slide class="relative rounded-[5px]">
                <img
                  src="/img/slide1.jpg"
                  alt=""
                  class="w-full h-[300px] sm:h-[550px] object-cover rounded-[5px]"
                />
                <div
                  class="cursor-pointer border-[1px] border-white text-white font-medium text-[14px] rounded-full px-8 py-4 absolute bottom-10 left-10"
                >
                  Подробнее
                </div>
              </swiper-slide>
              <swiper-slide class="relative rounded-[5px]">
                <img
                  src="/img/slide2.jpg"
                  alt=""
                  class="w-full h-[300px] sm:h-[550px] object-cover rounded-[5px]"
                />
                <div
                  class="cursor-pointer border-[1px] border-white text-white font-medium text-[14px] rounded-full px-8 py-4 absolute bottom-10 left-10"
                >
                  Подробнее
                </div>
              </swiper-slide>
              <swiper-slide class="relative rounded-[5px]">
                <img
                  src="/img/slide3.jpg"
                  alt=""
                  class="w-full h-[300px] sm:h-[550px] object-cover rounded-[5px]"
                />
                <div
                  class="cursor-pointer border-[1px] border-white text-white font-medium text-[14px] rounded-full px-8 py-4 absolute bottom-10 left-10"
                >
                  Подробнее
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </tab-vk>
        <!-- <tab-vk title="Программа лояльности">
          <div class="grid grid-cols-[3fr,9fr] my-[47px] gap-[20px]">
            <div class=" bg-white rounded-[5px] shadow-md flex flex-col ">
              <div
                class="bg-[#EDEDED] p-4  flex flex-col gap-4 font-medium text-[18px]"
              >
                <span class="capitalize ">{{ this.$auth.$state.user.firstName }}</span>
                <span class="capitalize ">{{ this.$auth.$state.user.lastName }}</span>
              </div>
              <div class="flex flex-col h-full justify-between p-4">
                <div>Ваша скидка 10%</div>
                <button
                  @click="handleLogout"
                  class="rounded-[5px] border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
                >
                  Выйти
                </button>
              </div>
            </div>
            <div
              class="bg-white rounded-[5px] shadow-md p-4 flex flex-col gap-4"
            >
              <div class="flex flex-col gap-4">
                <h2 class="text-[30px]">Программа лояльности</h2>
                <p>
                  КАРТА ЗДОРОВЬЯ это то, что поможет сохранить Ваше время и
                  деньги! Она предоставляет систему скидок на все услуги
                  лаборатории, а так же позволяет создать персональный архив
                  результатов анализов в лабораторно-информационной системе
                  компании.
                </p>
                <br />
                <h2 class="text-[30px]">Правила использования</h2>
                <p>
                  Существует функция объединения Карт Здоровья в Семью. Клиент,
                  к которому происходит присоединение, называется Генеральным
                  носителем. Максимальное количество лиц, объединяемых в Семью,
                  составляет 10 человек. Присоединение осуществляется по любому
                  признаку на выбор клиента (родственники, друзья и т.д.).
                  Накопления клиентов, объединенных в Семью, суммируются и
                  увеличивают процент скидки по каждой Карте Здоровья данной
                  семьи.<br />
                  Для присоединения к карте Генерального носителя потребуется
                  один из вариантов критерий поиска: <br />
                  -9-ти значный номер карты Генерального носителя, <br />
                  -ФИО Генерального носителя<br />
                  -номер мобильного телефона Генерального носителя. <br />
                  На мобильный номер Генерального носителя поступит СМС
                  оповещение с подтверждающим кодом, который необходимо сообщить
                  администратору.
                </p>
              </div>
            </div>
          </div>
        </tab-vk> -->
        <tab-vk title="Личные данные">
          <div
            class="grid grid-cols-1 sm:grid-cols-[3fr,9fr] my-[47px] gap-[20px]"
          >
            <div class=" bg-white rounded-[5px] shadow-md flex flex-col ">
              <div
                class="bg-[#EDEDED] p-4  flex flex-col gap-4 font-medium text-[18px]"
              >
                <span class="capitalize ">{{ dataMe.user.firstName }}</span>
                <span class="capitalize ">{{ dataMe.user.lastName }}</span>
                <!-- <span>{{ this.$auth.$state.user.client_data.otchestvo }}</span> -->
              </div>
              <div class="flex flex-col h-full justify-between p-4">
                <!-- <div>Ваша скидка 10%</div> -->
                <button
                  @click="handleLogout"
                  class="rounded-[5px] border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
                >
                  Выйти
                </button>
              </div>
            </div>
            <div
              class="bg-white rounded-[5px] shadow-md p-4 flex flex-col gap-4"
            >
              <span class="text-[30px]">Личные данные</span>
              <form  @submit.prevent="updateUserInfo()" class="flex flex-col gap-[20px]">
                <div class="flex flex-col gap-[20px]">
                  <div
                    class="flex w-full flex-col sm:flex-row justify-between gap-[20px]"
                  >
                    <input
                      class="input-med w-full sm:w-1/2 "
                      type="text"
                      v-model="dataMe.user.client_data.nomerTelefona"
                      placeholder="+7 (___) ___−__−__*"
                      v-facade="'+7 (###) ###-##-##'"
                    />
                    <input
                      class="input-med w-full sm:w-1/2 "
                      type="text"
                      v-model="dataMe.user.email"
                      placeholder="e-mail"
                    />
                  </div>
                  <div
                    class="flex w-full flex-col sm:flex-row justify-between gap-[20px]"
                  >
                    <div class="flex w-full sm:w-1/2 flex-row">
                      <input
                        type="checkbox"
                        value="femalemale"
                        id="phoneda"
                        class=""
                      />
                      <label
                        for="phoneda"
                        class="text-[14px] pl-2 text-[#343434]/50"
                        >Я хочу получать информацию о выгодных акциях и
                        предложениях по СМС</label
                      >
                    </div>
                    <div class="flex w-full sm:w-1/2 flex-row">
                      <input
                        type="checkbox"
                        value="femalemale"
                        id="emailda"
                        class=""
                      />
                      <label
                        for="emailda"
                        class="text-[14px] pl-2 text-[#343434]/50"
                        >Я хочу получать информацию о выгодных акциях и
                        предложениях по e-mail</label
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="flex justify-between gap-[20px] flex-col sm:flex-row"
                >
                  <input
                    class="input-med w-full"
                    type="text"
                    v-model="pass"
                    placeholder="пароль"
                  />
                  <input
                    class="input-med w-full"
                    type="text"
                    v-model="passDetect"
                    placeholder="повторите пароль"
                  />
                </div>
                <div
                  class="flex justify-between gap-[20px] flex-col sm:flex-row"
                >
                  <input
                    class="input-med w-full"
                    type="text"
                    placeholder="Ростов на дону"
                  />
                  <input
                    class="input-med w-full"
                    type="text"
                    placeholder="улица"
                  />
                </div>
                <div
                  class="flex justify-between gap-[20px] flex-col sm:flex-row"
                >
                  <input
                    class="input-med w-full"
                    type="text"
                    v-model="dataMe.user.client_data.nomerDoma"
                    placeholder="дом"
                  />
                  <input
                    class="input-med w-full"
                    type="text"
                    v-model="dataMe.user.client_data.kvartira"
                    placeholder="квартира"
                  />
                </div>
                <div
                  class="flex justify-between gap-[20px] w-full text-[#343434]/50"
                >
                  <!-- <span class="w-1/2">Предпочитаемый офис</span> -->
                  <span class="w-full sm:w-1/2"
                    >Информация для врача консультанта</span
                  >
                </div>
                <div class="flex justify-between gap-[20px] w-full">
                  <div class="w-full sm:w-1/2 flex flex-col gap-[20px]">
                    <textarea
                      rows="5"
                      class="input-med w-full"
                      placeholder="Мои пожелания..."
                    ></textarea>
                    <div class="flex flex-col sm:flex-row gap-[20px] ">
                      <!-- <button
                        class="rounded-[5px]  border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
                      >
                        Отмена
                      </button> -->
                      <button
                        type="submit"
                        class="rounded-[5px]  border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
                      >
                        Сохранить изменения
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </tab-vk>
      </tabs-vk>
    </div>

    <!-- <div v-if="$auth.loggedIn" class="mt-4">
      ID пользователя:
      <span class="font-bold">{{ this.$auth.$state.user.id }}</span> 

    </div>
    <div v-else>
      не вошел
    </div> -->
    <div
      v-if="pdfView == true"
      class="fixed flex justify-center items-center bg-[#343434]/40  w-screen h-screen left-0 top-0  z-[1] backdrop-blur-sm"
    >
      <div
        class="w-[400px] h-auto z-[8] bg-[#FCFCFC] p-4 rounded-[5px] shadow-md flex flex-col gap-4 justify-center items-center fixed"
      >
        <span class="w-full text-center text-[24px]">Скачать результаты</span>
        <div class="flex flex-col gap-4">
          <div
            v-for="(item, i) in pdf"
            :key="i"
            class="bg-white p-4 rounded-[5px] shadow-md"
          >
            <a
              :href="item.guid.rendered"
              target="_blank"
              class="underline underline-offset-2"
              >Скачать результаты-{{ item.slug.substr(0, 5) }}-{{ i + 1 }}</a
            >
          </div>
        </div>

        <span
          @click="pdfView = false"
          class="text-[#343434] cursor-pointer hover:text-main anime"
          >Закрыть</span
        >
      </div>
    </div>
    <script
      type="text/javascript"
      src="https://auth.robokassa.ru/Merchant/bundle/robokassa_iframe.js"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/core.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/md5.js"></script>
  </div>
</template>

<script>
import { gql } from 'graphql-tag'
import tabsVk from '~/components/tabs/tabs-vk.vue'
import TabVk from '~/components/tabs/tab-vk.vue'


import { Navigation, Pagination, Autoplay } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Autoplay])

const ALL_PRODUCTS_CART = gql`
  query ALL_PRODUCTS_CART($customerId: Int) {
    orders(where: { customerId: $customerId }) {
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
          discountTotal(format: RAW)
        }
      }
    }
  }
`

// const ALL_PRODUCTS_CART = gql`
//   query ALL_PRODUCTS_CART($customerId: Int) {
//     orders(where: { customerId: $customerId }) {
//       edges {
//         node {
//           databaseId
//           status
//           total(format: RAW)
//           date
//           billing {
//             lastName
//             firstName
//           }
//           discountTotal(format: RAW)
//         }
//       }
//     }
//   }
// `


const ME_USER = gql`
  query ME_USER($id: ID!) {
    user(id: $id, idType: DATABASE_ID) {
      client_data {
        kvartira
        nomerDoma
        nomerTelefona
        otchestvo
      }
      firstName
      lastName
      username
      email
      id
      databaseId
      jwtRefreshToken
    }
  }
`

const UPDATE_USER = gql`
  mutation UPDATE_USER(
    $email: String!
    $id: ID!
    $kvartira: String!
    $nomerDoma: String!
    $nomerTelefona: String!
    $password: String!
  ) {
    updateUser(
      input: {
        id: $id
        email: $email
        kvartira: $kvartira
        nomerDoma: $nomerDoma
        nomerTelefona: $nomerTelefona
        password: $password
      }
    ) {
      user {
        client_data {
          kvartira
          nomerDoma
          nomerTelefona
        }
        id
        email
      }
    }
  }
`

export default {
  components: { tabsVk, TabVk, Swiper, SwiperSlide },
  layout: 'MainLayout',
  middleware: ['isAuth'],
  data () {
    return {
      products_cart: [],
      selected: '',
      pdf: [],
      pdfView: false,
      dataMe: [],
      pass: '',
      passDetect: '',
      meResUograde: []
    }
  },

  //get-cart-user-only
  async asyncData (ctx) {
    const client = ctx.app.apolloProvider.defaultClient
    const databaseId = ctx.app.$auth.$state.user.databaseId

    const res = await client.query({
      query: ALL_PRODUCTS_CART,
      variables: {
        customerId: databaseId
      }
    })
    const products_cart = res.data.orders.edges

    //fetch user
    const resMe = await client.query({
      query: ME_USER,
      variables: {
        id: databaseId
      }
    })
    const dataMe = resMe.data

    return { products_cart, dataMe }
  },
  methods: {
    oplata (total) {
      console.log(total)
      const sum = total.toString()
      const test = 'MerchantLogin:OutSum:InvId:Пароль#1'
      var value = ('albvt:' + sum + ':1:' + 'kZqrav14Gq6afwQ7OaD5').toString()
      var result = CryptoJS.MD5(value)
      console.log('865  ' + result + ' / ' + sum + ' / ' + value)
      Robokassa.StartPayment({
        MerchantLogin: 'albvt',
        OutSum: sum,
        InvId: 1,
        Description: '',
        Culture: 'ru',
        Encoding: 'utf-8',
        SignatureValue: result
      })
    },
    async handleLogout () {
      this.$nuxt.$loading.start()
      await this.$auth.logout()
    },
    onSwiper (swiper) {
      console.log(swiper)
    },
    onSlideChange () {
      console.log('slide change')
    },
    handleReload () {
      location.reload()
    },
    async DownloadResult (id) {
      const requestSearh = 11816
      const url =
        'https://foxsis.ru/alvd/wp-json/wp/v2/media?search=' + requestSearh
      const pdf = await this.$axios.$get(url)
      this.pdfView = true
      this.pdf = pdf
    },
    updateUserInfo () {
        const phoneUser = this.dataMe.user.client_data.nomerTelefona
        const getPhone = phoneUser.replace('-','').replace('-','').replace('+7','').replace('(','').replace(')','')

     this.$apollo.mutate({
        mutation: UPDATE_USER,
        variables: {
          id: this.dataMe.user.id,
          email: this.dataMe.user.email,
          kvartira: this.dataMe.user.client_data.kvartira,
          nomerDoma: this.dataMe.user.client_data.nomerDoma,
          nomerTelefona: getPhone,
          password: this.pass
        }
      })
     
    }
  }
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
