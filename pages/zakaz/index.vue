<template>
  <div class="container grid grid-cols-[6fr,3fr,4fr] gap-[40px] w-full pt-[47px] justify-between">
    <div class="flex flex-col gap-[20px]">
      <h2 class="text-[24px] font-medium ">
        Заполните форму для подачи online заявки
      </h2>
      <div
        class="bg-white  shadow-md rounded-[5px] p-[24px] flex flex-col gap-[20px] mt-24px"
      >
        <form action="" class="flex flex-col gap-4">
          <div class="flex flex-col">
            <div class=" py-[16px] flex flex-col gap-4 text-[16px] font-light">
              <span class="text-[#A55B4A] text-[16px] "
                >Место сдачи анализов</span
              >
              <div class="flex gap-4">
                <div class="flex items-center gap-4 w-1/4">
                  <input
                    checked="checked"
                    type="radio"
                    value="ofis_my"
                    v-model="form.mesto"
                    id="mesto1"
                    class=""
                  />
                  <label for="mesto1" class="text-[14px]">У нас в офисе</label>
                </div>
                <div class="flex items-center gap-4 w-1/4">
                  <input
                    type="radio"
                    value="sam"
                    v-model="form.mesto"
                    id="mesto2"
                    class=""
                  />
                  <label for="mesto2" class="text-[14px]">На дому</label>
                </div>

                <div class="flex items-center gap-4 w-2/4">
                  <input
                    type="radio"
                    value="ofic"
                    v-model="form.mesto"
                    id="mesto3"
                    class=""
                  />
                  <label for="mesto3" class="text-[14px]"
                    >В офисе нашего партнера ИНВИТРО, но по
                    <span class="text-main">НАШИМ</span> низким ценам</label
                  >
                </div>
              </div>
            </div>
            <div>
              <div v-if="form.mesto == 'ofis_my'">
                <div
                  class=" py-[16px] flex flex-col gap-4 text-[16px] font-light"
                >
                  <div class="relative">
                    <div
                      class="w-full mb-4  px-2  py-2 items-center border-[1px] border-[#AEAEAE] rounded-[5px] grid grod-cols-2 gap-[20px]"
                    >
                      <div
                        @click="form.showInvitro = !form.showInvitro"
                        class="cursor-pointer flex justify-between items-center"
                      >
                        <span>{{ form.invitroSelect }}</span>
                        <img
                          v-if="form.showInvitro"
                          src="/img/icons/arrow.svg"
                          alt=""
                          class="rotate-90 mr-2"
                        />
                        <img
                          v-else
                          src="/img/icons/arrow.svg"
                          alt=""
                          class="mr-2"
                        />
                      </div>
                      <div
                        class="rounded-[5px]  grid grid-cols-2 gap-[10px]"
                        v-show="form.showInvitro"
                      >
                        <div
                          v-for="(item, i) in form.invitro"
                          :key="i"
                          :id="item.name"
                          class="px-2 border-[1px] border-[#AEAEAE] hover:border-none rounded-[5px] flex justify-between items-center  h-[40px] hover:shadow-md anime cursor-pointer text-[14px]"
                          @click="selectInvitroAdd(item)"
                        >
                          <span class="h-full flex items-center">{{
                            item.name
                          }}</span>
                          <span
                            class="border-l-[1px] border-[#AEAEAE] pl-2 h-full flex items-center"
                            >{{ item.time }}</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <span class="text-[#A55B4A] text-[16px] "
                    >Кто будет сдавать анализы?</span
                  >
                  <div class="grid grid-cols-2 gap-[20px]">
                    <input
                      type="text"
                      placeholder="Фамилия"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Имя"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Отчество"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Дата рождения"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                  </div>
                  <div class="flex items-center gap-4 mt-2">
                    <div class="flex items-center gap-2 w-1/4">
                      <input
                        type="radio"
                        value="male"
                        v-model="form.gender"
                        id="gender1"
                        class=""
                      />
                      <label for="gender1" class="text-[14px]">Мужчина</label>
                    </div>
                    <div class="flex items-center gap-2 w-1/4">
                      <input
                        type="radio"
                        value="female"
                        v-model="form.gender"
                        id="gender2"
                        class=""
                      />
                      <label for="gender2" class="text-[14px]">Женщина</label>
                    </div>
                    <div class="flex items-center gap-2 w-2/4">
                      <input
                        type="radio"
                        value="femalemale"
                        v-model="form.gender"
                        id="gender3"
                        class=""
                      />
                      <label for="gender3" class="text-[14px]"
                        >Пациент придёт с представителем</label
                      >
                    </div>
                  </div>
                </div>
                <div
                  class=" py-[16px] flex flex-col gap-4 text-[16px] font-light"
                >
                  <span class="text-[#A55B4A] text-[16px] "
                    >Укажите паспортные данные и желаемую дату сдачи
                    анализов</span
                  >
                  <div class="grid grid-cols-2 gap-[20px]">
                    <input
                      type="text"
                      placeholder="Паспорт (серия/номер)"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Паспорт (дата выдачи) "
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Паспорт (кем выдан)"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Дата сдачи анализов"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                  </div>
                </div>
                <div
                  class=" py-[16px] flex flex-col gap-4 text-[16px] font-light"
                >
                  <span class="text-[#A55B4A] text-[16px] "
                    >Контакты для связи с Вами</span
                  >
                  <div class="grid grid-cols-2 gap-[20px]">
                    <input
                      type="text"
                      placeholder="E-mail"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="+7"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                  </div>
                </div>
              </div>
              <div v-if="form.mesto == 'sam'">
                <div
                  class=" py-[16px] flex flex-col gap-4 text-[16px] font-light"
                >
                  <span class="text-[#A55B4A] text-[16px] "
                    >Кто будет сдавать анализы?</span
                  >
                  <div class="grid grid-cols-2 gap-[20px]">
                    <input
                      type="text"
                      placeholder="Фамилия"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Имя"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Отчество"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Дата рождения"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                  </div>
                  <div class="flex items-center gap-4 mt-2">
                    <div class="flex items-center gap-4 ">
                      <input
                        type="radio"
                        value="male"
                        v-model="form.gender"
                        id="gender1"
                        class=""
                      />
                      <label for="gender1" class="text-[14px]">Мужчина</label>
                    </div>
                    <div class="flex items-center gap-4 ">
                      <input
                        type="radio"
                        value="female"
                        v-model="form.gender"
                        id="gender2"
                        class=""
                      />
                      <label for="gender2" class="text-[14px]">Женщина</label>
                    </div>
                  </div>
                </div>
                <div
                  class=" py-[16px] flex flex-col gap-4 text-[16px] font-light"
                >
                  <span class="text-[#A55B4A] text-[16px] "
                    >Укажите Ваш адрес и желаемую дату сдачи анализов</span
                  >
                  <div class="grid grid-cols-2 gap-[20px]">
                    <input
                      type="text"
                      placeholder="г. Ростов-на-Дону"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Улица"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Номер дома"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Квартира(если есть)"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Паспорт (кем выдан)"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Дата сдачи анализов"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                  </div>
                </div>
                <div
                  class=" py-[16px] flex flex-col gap-4 text-[16px] font-light"
                >
                  <span class="text-[#A55B4A] text-[16px] "
                    >Контакты для связи с Вами</span
                  >
                  <div class="grid grid-cols-2 gap-[20px]">
                    <input
                      type="text"
                      placeholder="E-mail"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="+7"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                  </div>
                </div>
              </div>
              <div v-if="form.mesto == 'ofic'">
                <div
                  class=" py-[16px] flex flex-col gap-4 text-[16px] font-light"
                >
                  <div class="relative">
                    <div
                      class="w-full mb-4  px-2  py-2 items-center border-[1px] border-[#AEAEAE] rounded-[5px] grid grod-cols-2 gap-[20px]"
                    >
                      <div
                        @click="form.showInvitro = !form.showInvitro"
                        class="cursor-pointer flex justify-between items-center"
                      >
                        <span>{{ form.invitroSelect }}</span>
                        <img
                          v-if="form.showInvitro"
                          src="/img/icons/arrow.svg"
                          alt=""
                          class="rotate-90 mr-2"
                        />
                        <img
                          v-else
                          src="/img/icons/arrow.svg"
                          alt=""
                          class="mr-2"
                        />
                      </div>
                      <div
                        class="rounded-[5px]  grid grid-cols-2 gap-[10px]"
                        v-show="form.showInvitro"
                      >
                        <div
                          v-for="(item, i) in form.invitro"
                          :key="i"
                          :id="item.name"
                          class="px-2 border-[1px] border-[#AEAEAE] hover:border-none rounded-[5px] flex justify-between items-center  h-[40px] hover:shadow-md anime cursor-pointer text-[14px]"
                          @click="selectInvitroAdd(item)"
                        >
                          <span class="h-full flex items-center">{{
                            item.name
                          }}</span>
                          <span
                            class="border-l-[1px] border-[#AEAEAE] pl-2 h-full flex items-center"
                            >{{ item.time }}</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <span class="text-[#A55B4A] text-[16px] "
                    >Кто будет сдавать анализы?</span
                  >
                  <div class="grid grid-cols-2 gap-[20px]">
                    <input
                      type="text"
                      placeholder="Фамилия"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Имя"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Отчество"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Дата рождения"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                  </div>
                  <div class="flex items-center gap-4 mt-2">
                    <div class="flex items-center gap-2 w-1/4">
                      <input
                        type="radio"
                        value="male"
                        v-model="form.gender"
                        id="gender1"
                        class=""
                      />
                      <label for="gender1" class="text-[14px]">Мужчина</label>
                    </div>
                    <div class="flex items-center gap-2 w-1/4">
                      <input
                        type="radio"
                        value="female"
                        v-model="form.gender"
                        id="gender2"
                        class=""
                      />
                      <label for="gender2" class="text-[14px]">Женщина</label>
                    </div>
                    <div class="flex items-center gap-2 w-2/4">
                      <input
                        type="radio"
                        value="femalemale"
                        v-model="form.gender"
                        id="gender3"
                        class=""
                      />
                      <label for="gender3" class="text-[14px]"
                        >Пациент придёт с представителем</label
                      >
                    </div>
                  </div>
                </div>
                <div
                  class=" py-[16px] flex flex-col gap-4 text-[16px] font-light"
                >
                  <span class="text-[#A55B4A] text-[16px] "
                    >Укажите паспортные данные и желаемую дату сдачи
                    анализов</span
                  >
                  <div class="grid grid-cols-2 gap-[20px]">
                    <input
                      type="text"
                      placeholder="Паспорт (серия/номер)"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Паспорт (дата выдачи) "
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Паспорт (кем выдан)"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="Дата сдачи анализов"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                  </div>
                </div>
                <div
                  class=" py-[16px] flex flex-col gap-4 text-[16px] font-light"
                >
                  <span class="text-[#A55B4A] text-[16px] "
                    >Контакты для связи с Вами</span
                  >
                  <div class="grid grid-cols-2 gap-[20px]">
                    <input
                      type="text"
                      placeholder="E-mail"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                    <input
                      type="text"
                      placeholder="+7"
                      class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div>еще что то </div>
    <div>
      <div
        class="flex justify-end"
      >
      <div class="w-full  bg-white    shadow-md rounded-[5px] ">
        <div class="w-full justify-center  text-[16px] bg-[#EDEDED] h-[48px] flex items-center uppercase"
          >
          <span>к оплате</span> </div
        >
        <div class="flex flex-col list-disc list-outside px-[24px] pt-[12px]">
          <cart-item
            v-for="item in inCarts"
            :key="item.name"
            :itemInCart="item"
          />
        </div>
        <!-- dop to price -->
        <div
          class="bg-[#ECECEC] py-[18px] px-[24px] mt-[24px] flex flex-col gap-[24px]"
        >
          <ul class="flex flex-col gap-2">
            <span
              class="text-[#A55B4A] text-[14px] font-medium w-full text-center"
              >+ Взятие биоматериала:
            </span>
            <li
              v-for="(item, i) in dopItems"
              :key="i"
              class="flex justify-between items-start px-[24px] text-[14px] text-[#909090]"
            >
              <span class="font-medium">- {{ item.name }} </span>
              <span class="">{{ item.price }} руб.</span>
            </li>
          </ul>
          <span class="text-[#54ACD2] text-[14px] text-center"
            >Взятие биоматериала не входит в общую стоимость выбранных вами
            исследований. Оно требуется для выбранных Вами услуг.</span
          >
        </div>
        <!-- end dop to price -->
        <div class="px-[24px] my-[24px] flex flex-col gap-[24px]">
          <div class="flex justify-between items-end">
            <span class="text-[14px]">ИТОГОВАЯ СТОИМОСТЬ: </span>
            <span class="text-[16px] font-bold"> 550 руб.</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-[14px]">Место сдачи анализа: : </span>
            <span v-if="form.mesto == 'ofis_my'" class="text-[16px] font-bold text-[#A55B4A] underline underline-offset-2"> У нас в офисе</span>
            <span v-if="form.mesto == 'sam'" class="text-[16px] font-bold text-[#A55B4A] underline underline-offset-2"> На дому</span>
            <span v-if="form.mesto == 'ofic'" class="text-[16px] font-bold text-[#A55B4A] underline underline-offset-2 text-right"> В офисе партнера: <br>
            <span v-if="form.invitroSelect !== 'Выберите ближайший офис нашего партнера ИНВИТРО:'">
              {{ form.invitroSelect }}
            </span>
            </span>
          </div>
          <button
            class="rounded-[5px] mb-[24px] border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
          >
           Предзаказ с оплатой
          </button>

        </div>
      </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '~/components/cart/CartItem.vue'
export default {
  data () {
    return {
      inCarts: [
        {
          name: 'Билирубин общий',
          subname: 'код-13,  Венозная кровь',
          price: 200
        },
        {
          name: 'Билирубин общий 2',
          subname: 'код-13,  Венозная кровь',
          price: 400
        },

        {
          name: 'Билирубин общий 2',
          subname: 'код-13,  Венозная кровь',
          price: 400
        },
        {
          name: 'Билирубин общий 2',
          subname: 'код-13,  Венозная кровь',
          price: 400
        },
        {
          name: 'Билирубин общий 2',
          subname: 'код-13,  Венозная кровь',
          price: 400
        },
        {
          name: 'Билирубин общий 2',
          subname: 'код-13,  Венозная кровь',
          price: 400
        }
      ],
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
      form: {
        year: '',
        checkedNames: [],
        mesto: 'ofis_my',
        gender: '',
        invitroSelect: 'Выберите ближайший офис нашего партнера ИНВИТРО:',
        showInvitro: false,
        invitro: [
          {
            name: 'Днепровский, 105',
            time: '07:00 - 19:00'
          },
          {
            name: '1 Конной Армии, 29А',
            time: '07:00 - 19:00'
          },
          {
            name: '40 лет Победы, 89',
            time: '07:00 - 16:00'
          },
          {
            name: 'Богданова, 79',
            time: '07:00 - 19:00'
          },
          {
            name: ' Космонавтов, 6/13',
            time: '06:30 - 19:00'
          },
          {
            name: 'Б. Садовая, 130/30',
            time: '07:00 - 19:00'
          },
          {
            name: 'Ленина, 44/6',
            time: '07:00 - 19:00'
          },
          {
            name: 'Текучёва, 143',
            time: '07:00 - 16:00'
          },
          {
            name: 'Стачки, 26',
            time: '07:00 - 16:00'
          },
          {
            name: 'Миронова, 10',
            time: '07:00 - 16:00'
          },
          {
            name: 'Ерёменко, 97/29',
            time: '07:00 - 16:00'
          },
          {
            name: 'Таганрогская, 143',
            time: '07:00 - 16:00'
          },
          {
            name: 'Зорге, 52',
            time: '07:00 - 16:00'
          },
          {
            name: 'Станиславского, 54',
            time: '07:00 - 19:00'
          }
        ]
      }
    }
  },
  components: { CartItem },
  methods: {
    selectInvitroAdd (item) {
      this.form.invitroSelect = item.name
      this.form.showInvitro = false
    },
       closeCart () {
      this.$emit('cartView')
    }
  },
  layout: 'MainLayout'
}
</script>

<style></style>
