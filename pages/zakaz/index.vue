<template>
  <div
    class="container grid grid-cols-1 sm:grid-cols-[6fr,3fr,4fr] lg:grid-cols-[6fr,2fr,4fr] sm:gap-[20px] w-full pt-[47px] justify-between"
  >
    <div class="flex flex-col gap-[20px]">
      <div class="flex flex-col gap-[20px]">
        <h2 class="text-[24px] font-medium text-center sm:text-right">
          Заполните форму для подачи online заявки
        </h2>
        <div
          class="bg-white  shadow-md rounded-[5px] p-[24px] flex flex-col gap-[20px] mt-24px"
        >
          <form action="" class="flex flex-col gap-4">
            <div class="flex flex-col">
              <div
                class=" py-[16px] flex flex-col gap-4 text-[16px] font-light"
              >
                <span class="text-[#A55B4A] text-[16px] "
                  >Место сдачи анализов</span
                >
                <div class="flex gap-4 flex-wrap sm:flex-nowrap">
                  <div class="flex items-center gap-4 w-full sm:w-1/4">
                    <input
                      checked="checked"
                      type="radio"
                      value="ofis_my"
                      v-model="form.mesto"
                      id="mesto1"
                      class=""
                    />
                    <label for="mesto1" class="text-[14px]"
                      >У нас в офисе</label
                    >
                  </div>
                  <div class="flex items-center gap-4 w-full sm:w-1/4">
                    <input
                      type="radio"
                      value="sam"
                      v-model="form.mesto"
                      id="mesto2"
                      class=""
                    />
                    <label for="mesto2" class="text-[14px]">На дому</label>
                  </div>
                  <div class="flex items-center gap-4  w-full sm:w-2/4">
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
                    <span class="text-[#A55B4A] text-[16px] "
                      >Кто будет сдавать анализы?</span
                    >
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                      <input
                        required="required"
                        type="text"
                        placeholder="Фамилия"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        required="required"
                        type="text"
                        placeholder="Имя"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        required="required"
                        type="text"
                        placeholder="Отчество"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        required="required"
                        type="text"
                        placeholder="Дата рождения"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                    </div>
                    <div
                      class="flex items-center gap-4 mt-2 flex-wrap sm:flex-nowrap"
                    >
                      <div class="flex items-center gap-2 w-full sm:w-1/4">
                        <input
                          type="checkbox"
                          checked="checked"
                          value="male"
                         
                          id="gender1"
                          class=""
                        />
                        <label for="gender1" class="text-[14px]">Мужчина</label>
                      </div>
                      <div class="flex items-center gap-2 w-full sm:w-1/4">
                        <input
                          type="checkbox"
                          value="female"
                         
                          id="gender2"
                          class=""
                        />
                        <label for="gender2" class="text-[14px]">Женщина</label>
                      </div>
                      <div class="flex items-center gap-2 w-full sm:w-2/4">
                        <input
                          type="checkbox"
                          value="femalemale"
                         
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
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                      <input
                        type="text"
                        required="required"
                        placeholder="Паспорт (серия/номер)"
                        v-facade="'#### ######'"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        placeholder="Паспорт (дата выдачи) "
                         v-facade="'##/##/####'"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        placeholder="Паспорт (кем выдан)"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        placeholder="Дата сдачи анализов"
                         v-facade="'##/##/####'"
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
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                      <input
                        type="text"
                        required="required"
                        placeholder="E-mail"
                        v-mask="'##'"
                        id="us-phone-number-ex"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        id="us-phone-number-ex2"
                        name="phone"
                         placeholder="+7 (___) ___−__−__"
                        v-facade="'+7 (###) ###-##-##'"
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
                    <div class="grid  grid-cols-1 sm:grid-cols-2 gap-[20px]">
                      <input
                        type="text"
                        required="required"
                        placeholder="Фамилия"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        placeholder="Имя"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        placeholder="Отчество"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        placeholder="Дата рождения"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                    </div>
                    <div
                      class="flex items-center gap-4 mt-2 flex-wrap sm:flex-nowrap"
                    >
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
                    <div class="grid  grid-cols-1 sm:grid-cols-2 gap-[20px]">
                      <input
                        type="text"
                        required="required"
                        placeholder="г. Ростов-на-Дону"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        placeholder="Улица"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        placeholder="Номер дома"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        placeholder="Квартира(если есть)"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        placeholder="Паспорт (кем выдан)"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        placeholder="Дата сдачи анализов"
                         v-facade="'##/##/####'"
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
                    <div class="grid  grid-cols-1 sm:grid-cols-2 gap-[20px]">
                      <input
                        type="text"
                        required="required"
                        placeholder="E-mail"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        name="phone"
                         placeholder="+7 (___) ___−__−__"
                        v-facade="'+7 (###) ###-##-##'"
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
                        class="w-full mb-4  px-2  py-3 items-center border-[1px] border-[#AEAEAE] rounded-[5px] grid gap-[20px]"
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
                          class="rounded-[5px]  grid  grid-cols-1 sm:grid-cols-2 gap-[10px]"
                          v-show="form.showInvitro"
                        >
                          <div
                            v-for="(item, i) in form.invitro"
                            :key="i"
                            :id="item.name"
                            class="invitro px-2 border-[1px] border-[#AEAEAE]  rounded-[5px] flex justify-between items-center  h-[48px] hover:shadow-lg anime cursor-pointer text-[14px]"
                            @click="selectInvitroAdd(item)"
                          >
                            <span class="h-full flex items-center text-[12px]">{{
                              item.name
                            }}</span>
                            <span
                              class="border-l-[1px] border-[#AEAEAE] pl-2 h-full flex items-center text-[12px]"
                              >{{ item.time }}</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <span class="text-[#A55B4A] text-[16px] "
                      >Кто будет сдавать анализы?</span
                    >
                    <div class="grid  grid-cols-1 sm:grid-cols-2 gap-[20px]">
                      <input
                        type="text"
                        required="required"
                        placeholder="Фамилия"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        placeholder="Имя"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        placeholder="Отчество"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        placeholder="Дата рождения"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                    </div>
                    <div
                      class="flex items-center gap-4 mt-2 flex-wrap sm:flex-nowrap"
                    >
                      <div class="flex items-center gap-2 w-full sm:w-1/4">
                        <input
                          type="checkbox"
                          value="male"
                          
                          id="gender1"
                          class=""
                        />
                        <label for="gender1" class="text-[14px]">Мужчина</label>
                      </div>
                      <div class="flex items-center gap-2 w-full sm:w-1/4">
                        <input
                          type="checkbox"
                          value="female"
                         
                          id="gender2"
                          class=""
                        />
                        <label for="gender2" class="text-[14px]">Женщина</label>
                      </div>
                      <div class="flex items-center gap-2 w-full sm:w-2/4">
                        <input
                          type="checkbox"
                          value="femalemale"
                          
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
                    <div class="grid  grid-cols-1 sm:grid-cols-2 gap-[20px]">
                      <input
                        type="text"
                        required="required"
                        placeholder="Паспорт (серия/номер)"
                         v-facade="'#### ######'"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        placeholder="Паспорт (дата выдачи) "
                         v-facade="'##/##/####'"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        placeholder="Паспорт (кем выдан)"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        placeholder="Дата сдачи анализов"
                         v-facade="'##/##/####'"
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
                    <div class="grid  grid-cols-1 sm:grid-cols-2 gap-[20px]">
                      <input
                        type="text"
                        required="required"
                        placeholder="E-mail"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                      <input
                        type="text"
                        required="required"
                        name="phone"
                         placeholder="+7 (___) ___−__−__"
                        v-facade="'+7 (###) ###-##-##'"
                        class="bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- cart -->
    <div></div>
    <div>
      <div class="flex justify-end">
        <div class="w-full  bg-white    shadow-md rounded-[5px] ">
          <div
            v-if="CART.length >= 1"
            class="w-full justify-center  text-[16px] bg-[#EDEDED] h-[48px] flex items-center uppercase"
          >
            <span>к оплате</span>
          </div>
          <div class="flex flex-col list-disc list-outside px-[24px] pt-[12px]">
            <cart-item
              v-for="(item, index) in CART"
              :key="item.name"
              :itemInCart="item"
              @deleteFromCart="deleteFromCart(index)"
            />
          </div>
          <!-- dop to price -->
          <div
            class="bg-[#ECECEC] py-[18px] px-[24px] mt-[24px] flex flex-col gap-[24px]"
            v-if="CART.length >= 1"
          >
            <ul class="flex flex-col gap-2">
              <span
                class="text-[#A55B4A] text-[16px] font-medium w-full text-center"
                >+ Взятие биоматериала:
              </span>
              <li
                v-for="(item, index) in bioMaterialsComplete"
                :key="item.sku"
                class="flex justify-between items-start  text-[12px] text-[#909090]"
              >
                <span class="font-medium text-[12px] ">- {{ item.name }} </span>
                <span>{{ item.price }} руб.</span>
              </li>
            </ul>
            <span class="text-[#54ACD2] text-[14px] text-center"
              >Взятие биоматериала не входит в общую стоимость выбранных вами
              исследований. Оно требуется для выбранных Вами услуг.</span
            >
          </div>
          <div class="bg-white p-[24px] flex flex-col gap-[24px]" v-else>
            <span
              class="text-[#A55B4A] text-[16px] font-medium w-full text-center"
            >
              Ваша корзина пуста.
            </span>
            <span class="text-[14px]"
              >Впишите нужное исследование в поисковую строку или перейдите в
              раздел “Анализы”</span
            >
            <button>
              <nuxt-link
                to="/all-analyzes"
                class="rounded-[5px] border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
                >Анализы</nuxt-link
              >
            </button>
          </div>
          <!-- end dop to price -->
          <div
            class="px-[24px] my-[24px] flex flex-col gap-[24px]"
            v-show="CART.length >= 1"
          >
            <div
              v-if="medSestra == true"
              class="flex justify-between items-end"
            >
              <span class="text-[14px]">Выезд м/с на дом </span>
              <span>+ 400 руб</span>
            </div>

            <div class="flex justify-between items-end">
              <span class="text-[14px]">ИТОГОВАЯ СТОИМОСТЬ: </span>
              <span class="text-[16px] font-bold"
                >{{ totalPriceInCart.toLocaleString('ru-RU') }} руб.</span
              >
            </div>
            <div class="flex justify-between items-center">
              <span class="text-[14px]">Место сдачи анализа: : </span>
              <span
                v-if="form.mesto == 'ofis_my'"
                class="text-[14px] font-bold text-[#A55B4A] underline underline-offset-2"
              >
                У нас в офисе</span
              >
              <span
                v-if="form.mesto == 'sam'"
                class="text-[14px] font-bold text-[#A55B4A] underline underline-offset-2"
              >
                На дому</span
              >
              <span
                v-if="form.mesto == 'ofic'"
                class="text-[14px]  font-bold text-[#A55B4A] underline underline-offset-2 text-right"
              >
                В офисе партнера: <br />
                <span
                  v-if="
                    form.invitroSelect !==
                      'Выберите ближайший офис нашего партнера ИНВИТРО:'
                  "
                >
                  {{ form.invitroSelect }}
                </span>
              </span>
            </div>

            <div
              v-if="form.year.length != 0 && form.year.length != 0"
              class="flex flex-col gap-[20px]"
            >
              <button
                @submit.prevent="onSubmit"
                class="rounded-[5px]  border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
              >
                Предзаказ с оплатой
              </button>
              <button
                class="rounded-[5px] border bg-main h-[49px] hover:bg-[#4CBDEE]  anime  text-white w-full flex justify-center items-center py-2 text-[16px]"
              >
                Получить консультацию
              </button>
            </div>
            <!-- v-f -->
            <div class="flex flex-col gap-[20px]">
              <button
                @submit.prevent="onSubmit"
                class="rounded-[5px]  border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
              >
                Предзаказ с оплатой
              </button>
              <button
                class="rounded-[5px] border bg-main h-[49px] hover:bg-[#4CBDEE]  anime  text-white w-full flex justify-center items-center py-2 text-[16px]"
              >
                Получить консультацию
              </button>
            </div>
            <!-- v-f -->
            <span class="text-[12px]">
              <button class="text-[#A55B4A] underline underline-offset-2">
                Зарегистрируйтесь
              </button>
              для дальнейшего доступа в личный кабинет
            </span>
            <span class="w-full text-center text-[#768C9F]/60 text-[12px]">
              Оформляя заказ, Вы принимаете условия
              <nuxt-link
                to="/ww"
                class="underline underline-offset-2 text-[#768C9F]/90 text-[12px]"
                >Соглашения</nuxt-link
              >
              об обработке персональных данных
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- end cart -->
    <div v-if="modalInvitro == true &&  form.invitroSelect !== 'Выберите ближайший офис нашего партнера ИНВИТРО:'" @click="modalInvitro = !modalInvitro" class="fixed flex justify-center items-center bg-[#343434]/40  w-screen h-screen left-0 top-0  z-[1] backdrop-blur-sm">
      <div class="w-[400px] h-full max-h-[780px] z-[6] bg-white p-4 rounded-[5px] shadow-md">
        <div
          class="bg-white p-4 rounded-[5px] shadow-md flex flex-col gap-2"
          v-if="
            form.mesto == 'ofic' &&
              form.invitroSelect !==
                'Выберите ближайший офис нашего партнера ИНВИТРО:'
          "
        >
          <span class="text-[#746F6F] text-[14px] w-full text-center"
            >Вы находитесь на сайте нашего партнера ИНВИТРО</span
          >
          <span class="text-[#B07263] w-full text-center text-[14px]">Ознакомьтесь с подробной информацией о работе данного офиса.</span>
          
          <iframe
            :src="form.invitroSite"
            height="600"
            align="left"
            class="w-full"
          >
            Ваш браузер не поддерживает плавающие фреймы!
          </iframe>
          <span  @click="modalInvitro = !modalInvitro"  class="text-[#746F6F] text-[14px] w-full text-center cursor-pointer"
            >Закрыть</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CartItem from '~/components/cart/CartItem.vue'

export default {
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
      modalInvitro: false,
      form: {
        family: '',
        name: '',
        otchestvo: '',
        passportSeriya: '',
        passportData: '',
        passportKem: '',
        gorod: '',
        ulitcha: '',
        dateAnaliz: '',
        email: '',
        phone: '',
        year: '',
        checkedNames: [],
        mesto: 'ofis_my',
        gender: 'male',
        invitroSelect: 'Выберите ближайший офис нашего партнера ИНВИТРО:',
        invitroSite: '',
        showInvitro: false,
        invitro: [
          {
            name: 'Днепровский, 105',
            time: '07:00 - 19:00',
            invitro:
              'https://www.invitro.ru/offices/rostovnadony/clinic.php?ID=32430'
          },
          {
            name: '1 Конной Армии, 29А',
            time: '07:00 - 19:00',
            invitro:
              'https://www.invitro.ru/offices/rostovnadony/clinic.php?ID=10929'
          },
          {
            name: '40 лет Победы, 89',
            time: '07:00 - 16:00',
            invitro:
              'https://www.invitro.ru/offices/rostovnadony/clinic.php?ID=23175'
          },
          {
            name: 'Богданова, 79',
            time: '07:00 - 19:00',
            invitro:
              'https://www.invitro.ru/offices/rostovnadony/clinic.php?ID=56318'
          },
          {
            name: ' Космонавтов, 6/13',
            time: '06:30 - 19:00',
            invitro:
              'https://www.invitro.ru/offices/rostovnadony/clinic.php?ID=8551'
          },
          {
            name: 'Б. Садовая, 130/30',
            time: '07:00 - 19:00',
            invitro:
              'https://www.invitro.ru/offices/rostovnadony/clinic.php?ID=64268'
          },
          {
            name: 'Ленина, 44/6',
            time: '07:00 - 19:00',
            invitro:
              'https://www.invitro.ru/offices/rostovnadony/clinic.php?ID=4964'
          },
          {
            name: 'Текучёва, 143',
            time: '07:00 - 16:00',
            invitro:
              'https://www.invitro.ru/offices/rostovnadony/clinic.php?ID=22955'
          },
          {
            name: 'Стачки, 26',
            time: '07:00 - 16:00',
            invitro:
              'https://www.invitro.ru/offices/rostovnadony/clinic.php?ID=23176'
          },
          {
            name: 'Миронова, 10',
            time: '07:00 - 16:00',
            invitro:
              'https://www.invitro.ru/offices/rostovnadony/clinic.php?ID=57266'
          },
          {
            name: 'Ерёменко, 97/29',
            time: '07:00 - 16:00',
            invitro:
              'https://www.invitro.ru/offices/rostovnadony/clinic.php?ID=52856'
          },
          {
            name: 'Таганрогская, 143',
            time: '07:00 - 16:00',
            invitro:
              'https://www.invitro.ru/offices/rostovnadony/clinic.php?ID=13119'
          },
          {
            name: 'Зорге, 52',
            time: '07:00 - 16:00',
            invitro:
              'https://www.invitro.ru/offices/rostovnadony/clinic.php?ID=13116'
          },
          {
            name: 'Станиславского, 54',
            time: '07:00 - 19:00',
            invitro:
              'https://www.invitro.ru/offices/rostovnadony/clinic.php?ID=3092'
          }
        ]
      },
      dopTest: [],
      totalCartPrice: null,
      prePrice: null,
      preMaterial: [],
      medSestra: false
    }
  },
  components: { CartItem },
  methods: {
    warn: function (message, event) {
      // теперь у нас есть доступ к нативному событию
      if (event) {
        event.preventDefault()
      }
      alert(message)
    },
    selectInvitroAdd (item) {
      this.form.invitroSelect = item.name
      this.form.invitroSite = item.invitro
      this.form.showInvitro = false
      this.modalInvitro = true
      // this.scrolltoInvitro()
    },
    // scrolltoInvitro () {
    //   var hiddenElement = document.getElementById('tut')
    //   hiddenElement.scrollIntoView({
    //     block: 'start',
    //     behavior: 'smooth'
    //   })
    // },
    closeCart () {
      this.$emit('cartView')
    },
    ...mapActions(['DELETE_FROM_CART', 'RESET_CART']),
    deleteFromCart (index) {
      this.DELETE_FROM_CART(index)
      console.log('delete: ' + index)
    },
    resetCart () {
      this.RESET_CART()
      console.log('reset cart is reset')
    }
  },
  computed: {
    ...mapGetters(['CART', 'GET_ALL_BIOMATERIALS']),
    totalPrice: function () {
      let result = this.CART.reduce((prev, item) => {
        return prev + parseInt(item.price)
      }, 0)
      return result
    },
    bioMaterialsActive: function () {
      let activeItem = this.dopItems.filter(item => item.active == true)
      return activeItem
    },
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
      if (totalPriceInCartReduce <= 1500 && this.form.mesto == 'sam') {
        this.medSestra = true
        return totalPriceInCartReduce + 400
      } else {
        this.medSestra = false
        return totalPriceInCartReduce
      }
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
  },
  layout: 'MainLayout'
}
</script>

<style>
input[type='radio'] {
  accent-color: #7c7c7c;
  padding: 4px;
}
</style>
