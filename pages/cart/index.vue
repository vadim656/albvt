<template>
  <div
    class="container w-full pt-[47px] mt-[47px] sm:mt-0 flex flex-col gap-8 justify-center items-center h-full "
  >
    <!-- <span class="w-full text-center text-[24px]" v-if="step == 0">Авторизация</span> -->
    <span class="w-full text-center text-[24px]" v-if="step == 1">Ваш пол</span>
    <span class="w-full text-center text-[24px]" v-if="step == 2"
      >Карта клиента</span
    >
    <span class="w-full text-center text-[24px]" v-if="step == 3"
      >Место и дата сдачи анализов</span
    >
    <span class="w-full text-center text-[24px]" v-if="step == 4"
      >Оформление заказа</span
    >
    <div
      class="flex flex-col justify-center gap-[20px] items-center w-full max-w-[620px]"
      v-if="step == 0"
    >
      <div
        v-show="!this.$auth.loggedIn"
        class="bg-white  shadow-md rounded-[5px] p-[24px] flex justify-center items-center  mt-24px"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-[#A75F4F] mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span
          >Для оформления заказа необходимо <br />
          <span>авторизоваться</span>
          или
          <button
            @click="register = true"
            class="underline underline-offset-2 text-[#A75F4F]"
          >
            зарегистрироваться.
          </button>
        </span>
      </div>
      <div
        v-if="this.$auth.loggedIn"
        class="capitalize bg-white  shadow-md rounded-[5px] p-[24px] flex flex-col items-start gap-4 mt-24px"
      >
        <div>
          Привет,
          <b
            >{{ this.$auth.$state.user.firstName }}
            {{ this.$auth.$state.user.lastName }}</b
          >
        </div>
      </div>
      <div
        v-if="register == false && !$auth.loggedIn"
        class="capitalize bg-white  shadow-md rounded-[5px] p-[24px] flex w-full mb-[24px] sm:w-1/2 flex-col justify-center items-center gap-4 mt-24px"
      >
        <span>Авторизация</span>
        <div>
          <tabs-login>
            <tab-login title="По телефону">
              <!-- телефон -->
              <form
                @submit.prevent="handleLoginSubmit3()"
                class="flex flex-col gap-4"
              >
                <div
                  class="flex flex-col items-start justify-start gap-2 w-full relative"
                >
                  <!-- <label for="login" class="text-[14px]">Логин</label> -->
                  <input
                    type="text"
                    value="ofis_my"
                    placeholder="+7(___)___−__−__*"
                    v-facade="'+7(###)###-##-##'"
                    v-model="credentials.username"
                    class="w-full bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    id="login"
                  />
                </div>
                <div
                  class="flex flex-col items-start justify-start gap-2 w-full relative"
                >
                  <!-- <label for="pass" class="text-[14px]">Пароль</label> -->
                  <input
                    :type="typePassword"
                    placeholder="Пароль"
                    value="ofis_my"
                    v-model="credentials.password"
                    class="w-full bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    id="pass"
                  />
                  <button
                    @click="show_hide_password()"
                    class="absolute right-[14px] top-[14px]"
                  >
                    <svg
                      v-if="typePassword == 'password'"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-[#343434]/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-[#343434]/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  </button>
                </div>
                <div class="flex flex-col items-center justify-center gap-2">
                  <button
                    type="submit"
                    class="rounded-[5px] border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
                  >
                    Войти
                  </button>
                  <div
                    v-if="loginError == true"
                    class="flex justify-center gap-1 items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-[#A75F4F] mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span class="text-[#A55B4A] uppercase text-[12px]"
                      >Неправильный логин или пароль</span
                    >
                  </div>
                </div>
              </form>
            </tab-login>
            <tab-login title="По Email">
              <!-- email -->
              <form
                @submit.prevent="handleLoginSubmit2()"
                class="flex flex-col gap-4"
              >
                <div
                  class="flex flex-col items-start justify-start gap-2 w-full "
                >
                  <!-- <label for="login" class="text-[14px]">Логин</label> -->
                  <input
                    type="text"
                    placeholder="email"
                    v-model="credentials2.username"
                    class="w-full bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    id="login2"
                  />
                </div>
                <div
                  class="flex flex-col items-start justify-start gap-2 w-full relative"
                >
                  <!-- <label for="pass" class="text-[14px]">Пароль</label> -->
                  <input
                    :type="typePassword"
                    placeholder="Пароль"
                    v-model="credentials2.password"
                    class="w-full bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
                    id="pass2"
                  />
                  <button
                    @click="show_hide_password()"
                    class="absolute right-[14px] top-[14px]"
                  >
                    <svg
                      v-if="typePassword == 'password'"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-[#343434]/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-[#343434]/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  </button>
                </div>
                <div class="flex flex-col items-center justify-center gap-2">
                  <button
                    type="submit"
                    class="rounded-[5px] border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
                  >
                    Войти
                  </button>
                  <div
                    v-if="loginError == true"
                    class="flex justify-center gap-1 items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-[#A75F4F] mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span class="text-[#A55B4A] uppercase text-[12px]"
                      >Неправильный логин или пароль</span
                    >
                  </div>
                  <div @click="closeLogin()">
                    <nuxt-link
                      to="/register"
                      class="text-[#343434] w-full text-center"
                      >Регистрация</nuxt-link
                    >
                  </div>
                </div>
              </form>
            </tab-login>
          </tabs-login>
        </div>
      </div>
      <div
        v-if="register == true"
        class=" bg-white  shadow-md rounded-[5px] p-[24px] flex w-full mb-[24px] flex-col justify-center items-center gap-4 mt-24px"
      >
        <span class="text-[20px] font-semibold">Регистрация</span>
        <!-- шан 2 -->
        <div class="flex justify-center gap-[20px] items-center w-full ">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="sm:col-span-2 flex flex-col gap-2">
              <span class="w-full text-center">Ваш пол</span>
              <div
                class="flex items-center gap-4 mt-2 flex-wrap sm:flex-nowrap"
              >
                <div class="flex items-center gap-2 w-full sm:w-1/2 ">
                  <input
                    type="radio"
                    checked="checked"
                    value="male"
                    v-model="formZakaz.gender"
                    id="gender1"
                    name="gender1"
                    class="cursor-pointer"
                  />
                  <label for="gender1" class="text-[14px] cursor-pointer"
                    >Мужчина</label
                  >
                </div>
                <div class="flex items-center gap-2 w-full sm:w-1/2 ">
                  <input
                    type="radio"
                    value="female"
                    v-model="formZakaz.gender"
                    id="gender2"
                    name="gender2"
                    class="cursor-pointer"
                  />
                  <label for="gender2" class="text-[14px] cursor-pointer"
                    >Женщина</label
                  >
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <label for="company-website" class="block text-[12px]">
                Фамилия
              </label>
              <div class="mt-1 flex rounded-[5px] shadow-sm">
                <input
                  type="text"
                  name="company-website"
                  id="company-website4"
                  class="input-med"
                  v-model="formCreate.family"
                  @input="doneformZakazZakaz()"
                  :class="[
                    this.formCreate.family.length == 0
                      ? '!focus:outline-[#A55B4A] !border-[#A55B4A]'
                      : '!border-[green] !focus:outline-[green]'
                  ]"
                />
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <label for="company-website" class="block text-[12px]">
                Имя
              </label>
              <div class="mt-1 flex rounded-[5px] shadow-sm">
                <input
                  type="text"
                  name="company-website"
                  id="company-websitess"
                  class="input-med"
                  v-model="formCreate.name"
                  @input="doneformZakazZakaz()"
                  :class="[
                    this.formCreate.name.length == 0
                      ? ' !focus:outline-[#A55B4A] !border-[#A55B4A]'
                      : '!border-[green] !focus:outline-[green]'
                  ]"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <label for="company-website" class="block text-[12px]">
                Отчество
              </label>
              <div class="mt-1 flex rounded-[5px] shadow-sm">
                <input
                  type="text"
                  name="company-website"
                  id="company-website"
                  class="input-med"
                  v-model="formCreate.otchestvo"
                  @input="doneformZakazZakaz()"
                  :class="[
                    this.formCreate.otchestvo.length == 0
                      ? ' !focus:outline-[#A55B4A] !border-[#A55B4A]'
                      : '!border-[green] !focus:outline-[green]'
                  ]"
                />
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <label for="company-website" class="block text-[12px]">
                Дата рождения
              </label>
              <div class="mt-1 flex rounded-[5px] shadow-sm">
                <input
                  @input="doneformZakazZakaz()"
                  required
                  type="text"
                  v-facade="'##.##.####'"
                  v-model="formZakaz.dataRozhdeniya"
                  :class="[
                    this.formZakaz.dataRozhdeniya.length !== 10
                      ? ' !focus:outline-[#A55B4A] !border-[#A55B4A]'
                      : '!border-[green] !focus:outline-[green]'
                  ]"
                  class=" input-med "
                />
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <label for="company-website" class="block text-[12px]">
                Паспорт (серия/номер)
              </label>
              <div class="mt-1 flex rounded-[5px] shadow-sm">
                <input
                  type="text"
                  name="company-website"
                  id="company-website"
                  class="input-med"
                  @input="doneformZakazZakaz()"
                  v-facade="'#### ######'"
                  v-model="formCreate.passportSeriya"
                  :class="[
                    this.formCreate.passportSeriya.length !== 11
                      ? ' !focus:outline-[#A55B4A] !border-[#A55B4A]'
                      : '!border-[green] !focus:outline-[green]'
                  ]"
                />
              </div>
            </div>
            <div></div>
            <div class="flex flex-col gap-1">
              <label for="company-website" class="block text-[12px]">
                Email
              </label>
              <div class="mt-1 flex flex-col gap-1 rounded-[5px] shadow-sm">
                <input
                  type="text"
                  name="company-website"
                  id="company-website"
                  class="input-med"
                  v-model="formCreate.email"
                  @input="doneformZakazZakaz()"
                  :class="[
                    this.formCreate.email.length <= 6
                      ? ' !focus:outline-[#A55B4A] !border-[#A55B4A]'
                      : '!border-[green] !focus:outline-[green]'
                  ]"
                />
                <span class="text-[12px] text-[#343434]/70"
                  >На эту почту будут отправлены результаты анализов</span
                >
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <label for="company-website" class="block text-[12px]">
                Телефон
              </label>
              <div class="mt-1 flex flex-col gap-1 rounded-[5px] shadow-sm">
                <input
                  type="text"
                  id="company-website"
                  class="input-med"
                  @input="doneformZakazZakaz()"
                  v-model="formCreate.phone"
                  name="phone"
                  placeholder="+7(___)___−__−__*"
                  v-facade="'+7(###)###-##-##'"
                  :class="[
                    this.formCreate.phone.length !== 16
                      ? ' !focus:outline-[#A55B4A] !border-[#A55B4A]'
                      : '!border-[green] !focus:outline-[green]'
                  ]"
                />
                <span class="text-[12px] text-[#343434]/70"
                  >Этот номер будет использоваться в качестве логина для доступа
                  в личный кабинет</span
                >
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <label for="company-website" class="block text-[12px]">
                Пароль
              </label>
              <div
                class="mt-1 flex flex-col gap-1 rounded-[5px] shadow-sm relative"
              >
                <input
                  :type="typePassword"
                  id="company-website"
                  class="input-med"
                  @input="doneformZakazZakaz()"
                  v-model="formCreate.password"
                  name="phone"
                  :class="[
                    formCreate.password.length <= 8
                      ? ' !focus:outline-[#A55B4A] !border-[#A55B4A]'
                      : '!border-[green] !focus:outline-[green]'
                  ]"
                />
                <button
                  @click="show_hide_password()"
                  class="absolute right-[14px] top-[14px]"
                >
                  <svg
                    v-if="typePassword == 'password'"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-[#343434]/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-[#343434]/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                </button>
                <span class="text-[12px] text-[#343434]/70"
                  >Пароль должен состоять из 8 и более символов</span
                >
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <label for="company-website" class="block text-[12px]">
                Повторите пароль
              </label>
              <div
                class="mt-1 flex flex-col gap-1 rounded-[5px] shadow-sm relative"
              >
                <input
                  :type="typePassword"
                  id="company-website"
                  class="input-med"
                  @input="doneformZakazZakaz()"
                  v-model="formCreate.ConfPassword"
                  name="phone"
                  :class="[
                    formCreate.password == formCreate.ConfPassword &&
                    formCreate.password.length >= 8
                      ? '!border-[green] !focus:outline-[green] '
                      : '!focus:outline-[#A55B4A] !border-[#A55B4A]'
                  ]"
                />
                <button
                  @click="show_hide_password()"
                  class="absolute right-[14px] top-[14px]"
                >
                  <svg
                    v-if="typePassword == 'password'"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-[#343434]/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-[#343434]/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          @click="RegisterUser()"
          :class="[
            formCreate.phone.length == 16 &&
            formCreate.password.length >= 8 &&
            formCreate.password == formCreate.ConfPassword &&
            formCreate.family.length > 1 &&
            formCreate.name.length > 1 &&
            formCreate.otchestvo.length > 1 &&
            formCreate.passportSeriya.length == 11
              ? ' cursor-pointer opacity-100 '
              : 'cursor-not-allowed opacity-30'
          ]"
          class="rounded-[5px] border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
        >
          Зарегистрироваться
        </button>
        <span class="" v-if="succesRegister == null">Введите данные</span>
        <span class="text-[green]" v-if="succesRegister == true">Успешно!</span>
        <span class="text-[#A75F4F]" v-if="succesRegister == false"
          >Попробуйте еще раз!</span
        >
      </div>
    </div>
    <!-- шан 1 -->
    <!-- <div
      class="flex flex-col justify-center gap-[40px] items-center w-full max-w-[620px]"
      v-if="step == 1"
    >
      <div class="flex justify-center gap-[20px] items-center w-full">
        <div
          class="flex flex-col gap-4 justify-center items-center"
          @click="formZakaz.gender = 'male'"
        >
          <div
            class="flex border-4 flex-col p-4 shadow-md rounded-[5px] cursor-pointer"
            :class="[
              formZakaz.gender == 'male'
                ? 'border-main/50 box-border'
                : ' border-white'
            ]"
          >
            <img src="/img/icons/male.svg" alt="" class="" />
          </div>
          <span
            :class="[
              formZakaz.gender == 'male'
                ? '  text-[#343434]'
                : ' text-[#343434]/50'
            ]"
            >Мужчина</span
          >
        </div>
        <div
          class="flex flex-col gap-4 justify-center items-center"
          @click="formZakaz.gender = 'female'"
        >
          <div
            class="flex border-4 flex-col p-4 shadow-md rounded-[5px] cursor-pointer"
            :class="[
              formZakaz.gender == 'female'
                ? 'border-main/50 box-border'
                : ' border-white'
            ]"
          >
            <img src="/img/icons/female.svg" alt="" class="" />
          </div>
          <span
            :class="[
              formZakaz.gender == 'female'
                ? '  text-[#343434]'
                : ' text-[#343434]/50'
            ]"
            >Женщина</span
          >
        </div>
      </div>

      <div class="flex items-center justify-center gap-2 w-full sm:w-2/4">
        <input
          type="checkbox"
          value="femalemale"
          id="gender3"
          v-model="formZakaz.genderDop"
          class=""
        />
        <label for="gender3" class="text-[14px]"
          >Пациент придёт с представителем</label
        >
      </div>
    </div> -->
    <!-- шан 2 -->
    <div
      class="flex justify-center gap-[20px] items-center w-full max-w-[620px]"
      v-if="step == 2"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="flex flex-col gap-1">
          <label for="company-website" class="block text-[12px]">
            Имя
          </label>
          <div class="mt-1 flex rounded-[5px] shadow-sm">
            <input
              type="text"
              name="company-website"
              id="company-website"
              class="input-med"
              v-model="formZakaz.name"
              @input="doneformZakazZakaz()"
              placeholder="Иван"
              :class="[
                this.formZakaz.name.length == 0
                  ? ' !focus:outline-[#A55B4A] !border-[#A55B4A]'
                  : '!border-[green] !focus:outline-[green]'
              ]"
            />
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <label for="company-website" class="block text-[12px]">
            Фамилия
          </label>
          <div class="mt-1 flex rounded-[5px] shadow-sm">
            <input
              type="text"
              name="company-website"
              id="company-website"
              class="input-med"
              v-model="formZakaz.family"
              @input="doneformZakazZakaz()"
              placeholder="Иванов"
              :class="[
                this.formZakaz.family.length == 0
                  ? ' !focus:outline-[#A55B4A] !border-[#A55B4A]'
                  : '!border-[green] !focus:outline-[green]'
              ]"
            />
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <label for="company-website" class="block text-[12px]">
            Отчество
          </label>
          <div class="mt-1 flex rounded-[5px] shadow-sm">
            <input
              type="text"
              name="company-website"
              id="company-website"
              class="input-med"
              v-model="formZakaz.otchestvo"
              @input="doneformZakazZakaz()"
              placeholder="Петрович"
              :class="[
                this.formZakaz.otchestvo.length == 0
                  ? ' !focus:outline-[#A55B4A] !border-[#A55B4A]'
                  : '!border-[green] !focus:outline-[green]'
              ]"
            />
          </div>
        </div>

        <div class="flex flex-col gap-1">
          <label for="company-website" class="block text-[12px]">
            Паспорт (серия/номер)
          </label>
          <div class="mt-1 flex rounded-[5px] shadow-sm">
            <input
              type="text"
              name="company-website"
              id="company-website"
              class="input-med"
              @input="doneformZakazZakaz()"
              placeholder="0000 000000"
              v-facade="'#### ######'"
              v-model="formZakaz.passportSeriya"
              :class="[
                this.formZakaz.passportSeriya.length !== 11
                  ? ' !focus:outline-[#A55B4A] !border-[#A55B4A]'
                  : '!border-[green] !focus:outline-[green]'
              ]"
            />
          </div>
        </div>

        <div class="flex flex-col gap-1">
          <label for="company-website" class="block text-[12px]">
            Email
          </label>
          <div class="mt-1 flex flex-col gap-1 rounded-[5px] shadow-sm">
            <input
              type="text"
              name="company-website"
              id="company-website"
              class="input-med"
              v-model="formZakaz.email"
              @input="doneformZakazZakaz()"
              :class="[
                this.formZakaz.email.length <= 6
                  ? ' !focus:outline-[#A55B4A] !border-[#A55B4A]'
                  : '!border-[green] !focus:outline-[green]'
              ]"
              placeholder="example@gmail.com"
            />
            <span class="text-[12px] text-[#343434]/70"
              >На эту почту будут отправлены результаты анализов</span
            >
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <label for="company-website" class="block text-[12px]">
            Телефон
          </label>
          <div class="mt-1 flex flex-col gap-1 rounded-[5px] shadow-sm">
            <input
              type="text"
              id="company-website"
              class="input-med"
              @input="doneformZakazZakaz()"
              v-model="formZakaz.phone"
              name="phone"
              placeholder="+7(___)___−__−__*"
              v-facade="'+7(###)###-##-##'"
              :class="[
                this.formZakaz.phone.length !== 16
                  ? ' !focus:outline-[#A55B4A] !border-[#A55B4A]'
                  : '!border-[green] !focus:outline-[green]'
              ]"
            />
            <span class="text-[12px] text-[#343434]/70"
              >Этот номер будет использоваться в качестве логина для доступа в
              личный кабинет</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- шан 3 -->
    <div
      class="flex flex-col justify-center gap-[20px] items-center w-full max-w-[620px]"
      v-if="step == 3"
    >
      <div
        class="flex flex-col sm:flex-row justify-between gap-[20px] w-full px-[20px]"
      >
        <div class="flex flex-col gap-2">
          <client-only>
            <label for="company-website" class="block text-[12px]">
              Выберите желаемую дату сдачи
            </label>
            <date-picker
              placeholder="dd.MM.YYYY"
              format="dd/MM/yyyy"
              :language="ru"
              v-model="date_today"
              class="input-med"
          /></client-only>
        </div>
        <div
          class="flex flex-col items-start justify-center gap-2 w-full"
          v-if="formZakaz.mesto == 'ofis_my'"
        >
          <label for="company-website" class="block text-[12px]">
            Если пациент младше 18 лет
          </label>
          <div class="flex items-center justify-start gap-2 w-full">
            <input
              type="checkbox"
              value="femalemale"
              id="gender3"
              v-model="formZakaz.genderDop"
              class=""
            />
            <label for="gender3" class="text-[14px] sm:text-[12px]"
              >Пациент придёт с представителем</label
            >
          </div>
        </div>
      </div>

      <div class=" flex flex-col gap-[20px] mt-[24px] px-[20px] w-full">
        <form @submit.prevent="oplata()" class="flex flex-col gap-4">
          <div class="flex flex-col">
            <div class=" py-[16px] flex flex-col gap-4 text-[16px] font-light">
              <div class="grid grid-cols-2 grid-rows-2 gap-4 ">
                <div
                  class="col-span-1 flex items-center justify-center gap-4 w-full  shadow-md p-4 rounded-[5px] border-4 cursor-pointer"
                  @click="formZakaz.mesto = 'ofis_my'"
                  :class="[
                    formZakaz.mesto == 'ofis_my'
                      ? 'border-main/50 box-border bg-main/10'
                      : ' border-white bg-white'
                  ]"
                >
                  <span class="text-center w-full">У нас в офисе</span>
                </div>
                <div
                  class="col-span-1 flex items-center justify-center gap-4 w-full  shadow-md p-4 rounded-[5px] border-4 cursor-pointer"
                  @click="formZakaz.mesto = 'sam'"
                  :class="[
                    formZakaz.mesto == 'sam'
                      ? 'border-main/50 box-border bg-main/10'
                      : ' border-white bg-white'
                  ]"
                >
                  <span class="text-center w-full">На дому</span>
                </div>
                <div
                  class="col-span-2 flex items-center justify-center gap-4  w-full  shadow-md p-4 rounded-[5px] border-4 cursor-pointer"
                  @click="formZakaz.mesto = 'ofic'"
                  :class="[
                    formZakaz.mesto == 'ofic'
                      ? 'border-main/50 box-border bg-main/10'
                      : ' border-white bg-white'
                  ]"
                >
                  <span class="w-full text-center"
                    >В офисе нашего партнера ИНВИТРО,<br />
                    но по <span class="text-main">НАШИМ</span> низким
                    ценам</span
                  >
                </div>
              </div>
            </div>
            <div>
              <div v-if="formZakaz.mesto == 'ofis_my'">
                <div
                  class=" py-[16px] flex flex-col gap-4 text-[16px] font-light"
                >
                  <div
                    class="input-med flex justify-between items-center h-[50px]"
                  >
                    <span class="text-[12px] sm:text-[14px]"
                      >г. Ростов-на-Дону, ул. Восточная, 11. (Кировский
                      р-он)</span
                    >
                    <a
                      href="https://2gis.ru/rostov/firm/70000001044917415"
                      target="_blank"
                      class="px-4 text-center border-l-[0.5px] text-[12px] sm:text-[14px] border-[#343434]/70 hover:text-main"
                      >На карте</a
                    >
                  </div>
                </div>
              </div>
              <div v-if="formZakaz.mesto == 'sam'">
                <div
                  class=" py-[16px] flex flex-col gap-4 text-[16px] font-light"
                >
                  <div class="w-full">
                    <!-- адрес -->
                    <div class="flex flex-col gap-1">
                      <label for="company-website" class="block text-[12px]">
                        Адрес проживания (г. Ростов-на-дону)
                      </label>
                      <div class="mt-1 flex rounded-[5px] shadow-sm">
                        <input
                          @input="doneformZakazZakaz()"
                          type="text"
                          name="company-website"
                          id="company-website"
                          class="input-med w-full"
                          v-model="formZakaz.ulitcha"
                          :class="[
                            this.formZakaz.ulitcha.length <= 24
                              ? ' !focus:outline-[#A55B4A] !border-[#A55B4A]'
                              : '!border-[green] !focus:outline-[green]'
                          ]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="formZakaz.mesto == 'ofic'">
                <div
                  class=" py-[16px] flex flex-col gap-4 text-[16px] font-light"
                >
                  <div class="relative">
                    <div
                      class="w-full mb-4  px-2  py-3 items-center border-[1px] border-[#AEAEAE] rounded-[5px] grid gap-[20px]"
                    >
                      <div
                        @click="formZakaz.showInvitro = !formZakaz.showInvitro"
                        class="cursor-pointer flex justify-between items-center"
                      >
                        <span class="text-[14px]">{{
                          formZakaz.invitroSelect
                        }}</span>
                        <img
                          v-if="formZakaz.showInvitro"
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
                        v-show="formZakaz.showInvitro"
                      >
                        <div
                          v-for="(item, i) in formZakaz.invitro"
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
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- корзина шаг 4 -->
    <div
      class="flex justify-center gap-[20px] items-center w-full sm:max-w-[420px]"
      v-if="step == 4"
    >
      <div>
        <div class="flex justify-end">
          <div class="w-full  bg-white    shadow-md rounded-[5px] ">
            <div
              v-if="CART.length >= 1"
              class="w-full justify-center  text-[16px] bg-[#EDEDED] h-[48px] flex items-center uppercase"
            >
              <span>корзина</span>
            </div>
            <div
              class="flex flex-col list-disc list-outside px-[24px] pt-[12px]"
            >
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
                  <span class="font-medium text-[12px] "
                    >- {{ item.name }}
                  </span>
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
                  v-if="formZakaz.mesto == 'ofis_my'"
                  class="text-[14px] font-bold text-[#A55B4A] underline underline-offset-2"
                >
                  У нас в офисе</span
                >
                <span
                  v-if="formZakaz.mesto == 'sam'"
                  class="text-[14px] font-bold text-[#A55B4A] underline underline-offset-2"
                >
                  На дому</span
                >
                <span
                  v-if="formZakaz.mesto == 'ofic'"
                  class="text-[14px]  font-bold text-[#A55B4A] underline underline-offset-2 text-right"
                >
                  В офисе партнера: <br />
                  <span
                    v-if="
                      formZakaz.invitroSelect !==
                        'Выберите ближайший офис нашего партнера ИНВИТРО:'
                    "
                  >
                    {{ formZakaz.invitroSelect }}
                  </span>
                </span>
              </div>

              <!-- v-f -->
              <div class="flex flex-col gap-[20px]">
                <button
                  @click="modalOrder()"
                  class="rounded-[5px]  border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
                >
                  Отправить заявку
                </button>
                <button
                  @click="addConsult()"
                  class="rounded-[5px] border bg-main h-[49px] hover:bg-[#4CBDEE]  anime  text-white w-full flex justify-center items-center py-2 text-[16px]"
                >
                  Получить консультацию
                </button>
              </div>

              <span class="w-full text-center text-[#768C9F]/60 text-[12px]">
                Оформляя заказ, Вы принимаете условия
                <nuxt-link
                  to="/soglashenie"
                  class="underline underline-offset-2 text-[#768C9F]/90 text-[12px]"
                  >Соглашения</nuxt-link
                >
                об обработке персональных данных
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- управление -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button
        @click="backStep()"
        v-if="step <= 4 && step > 2"
        class="text-[12px] sm:text-[14px] text-main bg-white hover:text-white hover:bg-main font-light px-[14px] py-[14px]  w-full min-w-[240px] max-w-[300px]  sm:flex sm:items-center sm:justify-center  border-[0.5px] border-main rounded-[5px] "
      >
        Назад
      </button>
      <!-- step-1-next -->
      <button
        @click="nextStep()"
        v-if="step == 1"
        class="text-[12px] sm:text-[14px] text-main bg-white hover:text-white hover:bg-main font-light px-[14px] py-[14px]  w-full min-w-[240px] max-w-[300px]  sm:flex sm:items-center sm:justify-center  border-[0.5px] border-main rounded-[5px] "
      >
        Дальше
      </button>
      <!-- step-2-next -->
      <div v-if="step == 2" class="w-full">
        <button
          @click="nextStep()"
          v-if="
            step == 2 &&
              formZakaz.phone.length == 16 &&
              formZakaz.family.length > 1 &&
              formZakaz.name.length > 1 &&
              formZakaz.email.length > 6 &&
              formZakaz.email.includes('@') &&
              formZakaz.email.includes('.') &&
              formZakaz.otchestvo.length > 1 &&
              formZakaz.passportSeriya.length == 11
          "
          class="text-[12px] sm:text-[14px] text-main bg-white hover:text-white hover:bg-main font-light px-[14px] py-[14px]  w-full min-w-[240px] max-w-[300px]  sm:flex sm:items-center sm:justify-center  border-[0.5px] border-main rounded-[5px] "
        >
          Дальше
        </button>
        <span v-else class="w-full min-w-[240px] max-w-[300px] text-danger"
          >Заполните все поля</span
        >
      </div>

      <!-- step-3-next -->
      <div v-if="step == 3" class="w-full">
        <!-- step-3-1-next -->
        <div>
          <button
            @click="nextStep()"
            v-if="formZakaz.mesto == 'ofis_my'"
            class="text-[12px] sm:text-[14px] text-main bg-white hover:text-white hover:bg-main font-light px-[14px] py-[14px]  w-full min-w-[240px] max-w-[300px]  sm:flex sm:items-center sm:justify-center  border-[0.5px] border-main rounded-[5px] "
          >
            Дальше
          </button>
        </div>
        <!-- step-3-2-next -->
        <div>
          <button
            @click="nextStep()"
            v-if="formZakaz.mesto == 'sam' && formZakaz.ulitcha.length > 6"
            class="text-[12px] sm:text-[14px] text-main bg-white hover:text-white hover:bg-main font-light px-[14px] py-[14px]  w-full min-w-[240px] max-w-[300px]  sm:flex sm:items-center sm:justify-center  border-[0.5px] border-main rounded-[5px] "
          >
            Дальше
          </button>
          <span
            v-if="formZakaz.mesto == 'sam' && formZakaz.ulitcha.length < 6"
            class="w-full min-w-[240px] max-w-[300px] text-danger"
            >Заполните Ваш адрес</span
          >
        </div>
        <!-- step-3-3-next -->
        <div>
          <button
            @click="nextStep()"
            v-if="
              formZakaz.mesto == 'ofic' &&
                formZakaz.invitroSelect !==
                  'Выберите ближайший офис нашего партнера ИНВИТРО:'
            "
            class="text-[12px] sm:text-[14px] text-main bg-white hover:text-white hover:bg-main font-light px-[14px] py-[14px]  w-full min-w-[240px] max-w-[300px]  sm:flex sm:items-center sm:justify-center  border-[0.5px] border-main rounded-[5px] "
          >
            Дальше
          </button>
          <span
            v-if="
              formZakaz.mesto == 'ofic' &&
                formZakaz.invitroSelect ==
                  'Выберите ближайший офис нашего партнера ИНВИТРО:'
            "
            class="w-full min-w-[240px] max-w-[300px] text-danger"
            >Выберите офис партнера</span
          >
        </div>
      </div>
    </div>
    <!-- инвитро -->
    <div
      v-if="
        modalInvitro == true &&
          formZakaz.invitroSelect !==
            'Выберите ближайший офис нашего партнера ИНВИТРО:'
      "
      @click="modalInvitroView()"
      class="fixed flex justify-center items-center bg-[#343434]/40  w-screen h-screen left-0 top-1  z-[99999999] backdrop-blur-sm"
    >
      <div
        class="w-[400px] h-full max-h-[500px] z-[6] bg-white p-4 rounded-[5px] shadow-md"
      >
        <div
          class="bg-white p-2 rounded-[5px] shadow-md flex flex-col gap-2 relative"
          v-if="
            formZakaz.mesto == 'ofic' &&
              formZakaz.invitroSelect !==
                'Выберите ближайший офис нашего партнера ИНВИТРО:'
          "
        >
          <button @click="modalInvitro = false" class="flex items-center justify-end gap-1 text-[12px]">
            Закрыть
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <span class="text-[#746F6F] text-[14px] w-full text-center"
            >Вы находитесь на сайте <br />
            нашего партнера ИНВИТРО</span
          >
          <span class="text-[#B07263] w-full text-center text-[14px]"
            >Ознакомьтесь с подробной информацией о работе данного офиса.</span
          >

          <iframe
            :src="formZakaz.invitroSite"
            height="340"
            align="left"
            class="w-full"
          >
            Ваш браузер не поддерживает плавающие фреймы!
          </iframe>
          <!-- <button
            @click="modalInvitroView()"
            class="text-[#746F6F] text-[14px] w-full text-center cursor-pointer"
            >Закрыть</button> -->
        </div>
      </div>
    </div>
    <div
      v-if="modalConsul == true"
      class="fixed flex justify-center items-center bg-[#343434]/40  w-screen h-screen left-0 top-0  z-[1] backdrop-blur-sm"
    >
      <div
        class="w-[400px] h-auto z-[8] bg-white p-4 rounded-[5px] shadow-md flex flex-col gap-4 justify-center items-center fixed"
      >
        <span class="w-full text-center text-[24px]"
          >Получить консультацию</span
        >
        <input
          type="text"
          placeholder="Имя"
          v-model="formZakaz.name"
          :class="[
            this.formZakaz.name.length <= 0
              ? ' !focus:outline-[#A55B4A] !border-[#A55B4A]'
              : '!border-[green] !focus:outline-[green]'
          ]"
          class=" input-med"
        />
        <input
          type="text"
          placeholder="+7(___)___−__−__*"
          v-facade="'+7(###)###-##-##'"
          v-model="formZakaz.phone"
          :class="[
            this.formZakaz.phone.length !== 16
              ? ' !focus:outline-[#A55B4A] !border-[#A55B4A]'
              : '!border-[green] !focus:outline-[green]'
          ]"
          class=" input-med "
        />
        <span v-if="status == true">Сообщение успешно отправлено</span>
        <span v-else-if="errors.length">{{ status }}</span>
        <button
          v-show="
            formZakaz.name.length !== 0 &&
              formZakaz.phone.length === 16 &&
              status == false
          "
          @click="ConsultZayavka()"
          class="rounded-[5px]  border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full max-w-[250px] flex justify-center items-center py-2 text-[16px]"
        >
          Отправить
        </button>
        <svg
          v-show="status == true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <span @click="modalConsul = !modalConsul" class="cursor-pointer"
          >Закрыть</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-tag'
import { mapActions, mapGetters } from 'vuex'
import CartItem from '~/components/cart/CartItem.vue'
import TabLogin from '~/components/tabs/tab-login.vue'
import tabsLogin from '~/components/tabs/tabs-login.vue'
import { ru } from 'vuejs-datepicker/dist/locale'

const ME_USER = gql`
  query ME_USER($id: ID!) {
    user(id: $id, idType: DATABASE_ID) {
      client_data {
        kvartira
        nomerDoma
        nomerTelefona
        otchestvo
        datarozhdeniya
        pasport
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

export default {
  layout: 'MainLayout',
  components: { CartItem, tabsLogin, TabLogin },
  data () {
    return {
      date_today: new Date(),
      typePassword: 'password',
      ru: ru,
      step: 0,
      form: {
        gender: 'male'
      },
      modalInvitro: false,
      modalConsul: false,
      register: false,
      auth: false,
      formZakaz: {
        family: '',
        name: '',
        otchestvo: '',
        dataRozhdeniya: '',
        dataSdachi: '',
        passportSeriya: '',
        passportData: '',
        passportKem: '',
        gorod: '',
        ulitcha: 'г. Ростов-на-Дону, ',
        nomerDoma: '',
        kvartira: '',
        dateAnaliz: '',
        email: '',
        phone: '',
        year: '',
        checkedNames: [],
        mesto: 'ofis_my',
        gender: 'male',
        genderDop: false,
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
        ],
        done: false
      },
      formCreate: {
        family: '',
        name: '',
        otchestvo: '',
        passportSeriya: '',
        email: '',
        phone: '',
        password: '',
        ConfPassword: ''
      },
      dopTest: [],
      totalCartPrice: null,
      prePrice: null,
      preMaterial: [],
      medSestra: false,
      errors: [],
      status: false,
      modalOrderOpen: true,
      password: '',
      credentials: {
        username: '',
        password: ''
      },
      credentials2: {
        username: '',
        password: ''
      },
      okeyRegister: false,
      succes: '',
      succesRegister: null,
      dataMe: [],
      loginError: false,
      jjj22: []
    }
  },
  methods: {
    show_hide_password () {
      if (this.typePassword == 'password') {
        this.typePassword = 'text'
      } else {
        this.typePassword = 'password'
      }
      return false
    },
    nextStep () {
      if (this.step == 1) {
        this.validUserCheck()
        this.demotest()
      }
      this.step++

      window.scrollTo(0, -50)
    },
    backStep () {
      this.step--
      window.scrollTo(0, -50)
    },
    testButton () {
      this.$nuxt.refresh()
    },
    RegisterUser () {
      if (
        this.formCreate.phone.length == 16 &&
        this.formCreate.password.length >= 8 &&
        this.formCreate.password == this.formCreate.ConfPassword &&
        this.formCreate.family.length > 1 &&
        this.formCreate.name.length > 1 &&
        this.formCreate.otchestvo.length > 1 &&
        this.formCreate.passportSeriya.length == 11
      ) {
        const dsfdf33 = this.formCreate.phone.toString()
        const phoneForRegister = dsfdf33
          .replace('-', '')
          .replace('-', '')
          .replace('+7', '')
          .replace('(', '')
          .replace(')', '')
        const url = 'https://foxsis.ru/alvd/wp-json/wp/v2/users'
        const dataUserRegister = {
          first_name: this.formCreate.name,
          last_name: this.formCreate.family,
          password: this.formCreate.password,
          email: this.formCreate.email,
          username: phoneForRegister,
          acf: {
            otchestvo: this.formCreate.otchestvo,
            pasport: this.formCreate.passportSeriya,
            nomer_telefona: phoneForRegister
          }
        }

        this.$axios
          .post(url, dataUserRegister)
          .then(data => {
            // Result
            this.succesRegister = true
            console.log(data)
            this.dataNewUser = data
            this.register = false
            this.credentials.username = phoneForRegister
            this.credentials.password = this.formCreate.password
          })
          .catch(error => {
            // Error
            console.error(error)
            this.succesRegister = false
          })
      }
    },

    addConsult () {
      if (
        (this.formZakaz.name, length !== 0 && this.formZakaz.phone.length == 18)
      ) {
      } else {
        this.modalConsul = true
      }
    },
    ConsultZayavka () {
      const cartToMail = this.CART
      const finalCartToMail = cartToMail.map(
        element =>
          ' -- ' +
          element.name +
          ' Art: ' +
          element.attributes[2].options[0] +
          '\n'
      )
      const mestoSdachi = this.formZakaz.mesto.toString()
      // const convertCart = JSON.stringify(finalCartToMail)
      const convertCart = finalCartToMail.toString()
      console.log(convertCart)
      const emailBody = {
        'text-859': this.formZakaz.name,
        'text-893': this.formZakaz.phone,
        'your-message': convertCart,
        'text-785': mestoSdachi
      }

      const form = new FormData()
      for (const field in emailBody) {
        form.append(field, emailBody[field])
      }

      this.$axios
        .$post(
          'https://foxsis.ru/alvd/wp-json/contact-form-7/v1/contact-forms/11757/feedback',
          form
        )
        .then(response => {
          console.log(response)
          this.status = true
          this.errors = ''
        })
        .catch(error => {
          this.errors = error
        })
    },
    selectInvitroAdd (item) {
      this.formZakaz.invitroSelect = item.name
      this.formZakaz.invitroSite = item.invitro
      this.formZakaz.showInvitro = false
      this.modalInvitro = true
      // this.scrolltoInvitro()
    },
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
    },
    doneformZakazZakaz () {
      if (this.formZakaz.mesto == 'ofis_my') {
        if (
          this.formZakaz.family !== '' &&
          this.formZakaz.name !== '' &&
          this.formZakaz.otchestvo !== '' &&
          this.formZakaz.dataRozhdeniya.length == 10 &&
          this.formZakaz.email.length >= 5 &&
          this.formZakaz.phone.length == 16 &&
          this.formZakaz.passportSeriya.length == 11 &&
          this.formZakaz.passportData.length == 10 &&
          this.formZakaz.passportKem.length >= 1 &&
          this.formZakaz.dataSdachi.length == 10
        ) {
          this.formZakaz.done = true
        } else {
          this.formZakaz.done = false
        }
      }
      if (this.formZakaz.mesto == 'ofic') {
        if (
          this.formZakaz.family !== '' &&
          this.formZakaz.name !== '' &&
          this.formZakaz.otchestvo !== '' &&
          this.formZakaz.dataRozhdeniya.length == 10 &&
          this.formZakaz.email.length >= 5 &&
          this.formZakaz.phone.length == 16 &&
          this.formZakaz.passportSeriya.length == 11 &&
          this.formZakaz.passportData.length == 10 &&
          this.formZakaz.passportKem.length >= 1 &&
          this.formZakaz.dataSdachi.length == 10
        ) {
          this.formZakaz.done = true
        } else {
          this.formZakaz.done = false
        }
      }
      if (this.formZakaz.mesto == 'sam') {
        if (
          this.formZakaz.family !== '' &&
          this.formZakaz.name !== '' &&
          this.formZakaz.otchestvo !== '' &&
          this.formZakaz.dataRozhdeniya.length == 10 &&
          this.formZakaz.email.length >= 5 &&
          this.formZakaz.phone.length == 16 &&
          this.formZakaz.passportKem.length >= 1 &&
          this.formZakaz.dataSdachi.length == 10
        ) {
          this.formZakaz.done = true
        } else {
          this.formZakaz.done = false
        }
      }
    },
    createOrder () {
      const adress =
        this.formZakaz.ulitcha +
        ', ' +
        this.formZakaz.nomerDoma +
        ', ' +
        this.formZakaz.kvartira
      const orderCart = this.CART.map(item => item.id)
      const formedDataCart = []
      const bioMaterials = this.preMaterial.map(item => item.id)
      const SDSD_test =
        'gender' +
        '%' +
        this.formZakaz.gender +
        '$' +
        'dataRozhdeniya' +
        '%' +
        this.formZakaz.dataRozhdeniya +
        '$' +
        'dataSdachi' +
        '%' +
        this.formZakaz.dataSdachi +
        '$' +
        'passportSeriya' +
        '%' +
        this.formZakaz.passportSeriya +
        '$' +
        'passportData' +
        '%' +
        this.formZakaz.passportData +
        '$' +
        'passportKem' +
        '%' +
        this.formZakaz.passportKem +
        '$' +
        'ulitcha' +
        '%' +
        this.formZakaz.ulitcha +
        '$' +
        'dateAnaliz' +
        '%' +
        this.formZakaz.dateAnaliz +
        '$' +
        'year' +
        '%' +
        this.formZakaz.year +
        '$' +
        'mesto' +
        '%' +
        this.formZakaz.mesto +
        '$' +
        'otchestvo' +
        '%' +
        this.formZakaz.otchestvo +
        '$' +
        'invitroSelect' +
        '%' +
        this.formZakaz.invitroSelect

      const DonUlictsa = (
        this.formZakaz.ulitcha +
        ', ' +
        this.formZakaz.nomerDoma +
        ', ' +
        this.formZakaz.kvartira
      ).toString()

      const metaData = [
        {
          key: 'field_1',
          value: this.formZakaz.gender
        },
        {
          key: 'field_2',
          value: this.formZakaz.dataRozhdeniya
        },
        {
          key: 'field_3',
          value: this.date_today
        },
        {
          key: 'field_4',
          value: this.formZakaz.passportSeriya
        },
        {
          key: 'field_5',
          value: this.date_today
        },
        {
          key: 'field_6',
          value: this.formZakaz.passportKem
        },
        {
          key: 'field_7',
          value: DonUlictsa
        },
        {
          key: 'field_8',
          value: this.formZakaz.dateAnaliz
        },
        {
          key: 'field_9',
          value: this.formZakaz.genderDop.toString()
        },
        {
          key: 'field_10',
          value: this.formZakaz.mesto
        },
        {
          key: 'field_11',
          value: this.formZakaz.otchestvo
        },
        {
          key: 'field_12',
          value: this.formZakaz.invitroSelect
        }
      ]
      const setClientDone = SDSD_test.toString()
      const clientInfo = bioMaterials.forEach(element => {
        formedDataCart.push({
          product_id: element,
          quantity: 1
        })
      })

      orderCart.forEach(element => {
        formedDataCart.push({
          product_id: element,
          quantity: 1
        })
      })

      const data = {
        payment_method: 'bacs',
        payment_method_title: 'Direct Bank Transfer',
        customer_id: this.jjj22.user.databaseId,
        set_paid: false,
        status: 'on-hold',
        billing: {
          first_name: this.formZakaz.name,
          last_name: this.formZakaz.family,
          address_1: this.formZakaz.ulitcha,
          email: this.formZakaz.email,
          phone: this.formZakaz.phone
        },
        customer_note: setClientDone,
        line_items: formedDataCart,
        meta_data: metaData
      }
      this.$axios
        .$post('https://foxsis.ru/alvd/wp-json/wc/v3/orders', data)
        .then(response => {
          console.log(response)
          this.$router.push({
            path: '/cart/thanks',
            query: { order: response.id }
          })
          this.RESET_CART()
        })
        .catch(error => {
          this.errors = error.response.data.message
          this.errors = true
        })
    },
    modalOrder () {
      this.modalOrderOpen = !this.modalOrderOpen
      this.createOrder()
    },
    async handleLogoutZakaz () {
      this.$nuxt.$loading.start()
      await this.$auth.logout()
    },
    async handleLoginSubmit () {
      const phoneUser = this.formZakaz.phone
      const getPhone = phoneUser
        .replace('-', '')
        .replace('-', '')
        .replace('+7', '')
        .replace('(', '')
        .replace(')', '')
      this.formZakaz.phone = getPhone
      this.formBusy = true
      try {
        await this.$auth.loginWith('graphql', {
          username: getPhone,
          password: this.credentials.password
        })
        this.formBusy = false
        this.loginError = false
        this.fetchUserData()
        this.validUserCheck()
        this.demotest()
        // this.validUserCheck()
      } catch (errors) {
        this.formBusy = false
        this.loginError = true
        console.log(errors)
      }
    },
    demotest () {
      console.log('tut')
    },
    async handleLoginSubmit2 () {
      const emailUser = this.credentials2.username
      this.formBusy = true
      try {
        await this.$auth
          .login({
            username: emailUser,
            password: this.credentials2.password
          })
          .then(() => this.$toast.success('Logged In!'))
        // console.log(localStorage["auth._token.graphql"]);
        await this.$auth.fetchUser()
        this.fetchUserData()
        this.validUserCheck()
        this.formBusy = false
        this.loginError = false
        this.step = 1
      } catch (errors) {
        this.formBusy = false
        this.loginError = true
        console.log(errors)
      }
      location.reload()
    },
    async handleLoginSubmit3 () {
      const phoneUser = this.credentials.username
      const getPhone = phoneUser
        .replace('-', '')
        .replace('-', '')
        .replace('+7', '')
        .replace('(', '')
        .replace(')', '')
      this.credentials.username = getPhone
      console.log(getPhone)
      const credentials = this.credentials
      this.formBusy = true
      try {
        await this.$auth.loginWith('graphql', {
          username: getPhone,
          password: this.credentials.password
        })
        // console.log(localStorage["auth._token.graphql"]);

        await this.$auth.fetchUser()
        this.formBusy = false
        this.loginError = false
        this.step = 2
      } catch (errors) {
        this.formBusy = false
        this.loginError = true
        console.log(errors)
      }

      location.reload()
    },
    async onLogout () {
      await this.$apolloHelpers.onLogout()
      this.isAuthenticated = false
    },
    closeLogin () {
      this.$emit('loginView')
    },
    closeLogin () {
      this.$emit('loginView')
    },
    validUserCheck () {
      if (!this.$auth.loggedIn) {
        console.log('не авторизован')
      } else {
        console.log('blablabbla')
        this.reNameInput()
        this.step = 2
      }
    },
    reNameInput () {
      this.formZakaz.email = this.jjj22.user.email

      this.formZakaz.name = this.jjj22.user.firstName

      this.formZakaz.family = this.jjj22.user.lastName

      this.formZakaz.phone = this.jjj22.user.username

      this.formZakaz.otchestvo = this.jjj22.user.client_data.otchestvo

      // this.formZakaz.dataRozhdeniya = this.jjj22.user.client_data.datarozhdeniya

      this.formZakaz.passportSeriya = this.jjj22.user.client_data.pasport
    },
    reloadPage () {
      location.reload()
    },
    modalInvitroView () {
      this.modalInvitro = !this.modalInvitro
    },
    async fetchUserData (context) {
      const databaseId = context.app.$auth.$state.user.databaseId
      const client = context.app.apolloProvider.defaultClient

      //fetch user
      const resMe = await client.query({
        query: ME_USER,
        variables: {
          id: databaseId
        }
      })
      const jjj22 = resMe.data

      return { jjj22 }, this.reNameInput()
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
      if (totalPriceInCartReduce <= 1500 && this.formZakaz.mesto == 'sam') {
        this.medSestra = true
        return totalPriceInCartReduce + 400
      } else {
        this.medSestra = false
        return totalPriceInCartReduce
      }
    }
  },
  layout: 'MainLayout',
  mounted () {
    this.CART.forEach(element => {
      element.upsell_ids.forEach(element => {
        this.dopTest.push(
          this.GET_ALL_BIOMATERIALS.filter(item => item.id == element)
        )
      })
    }),
      this.validUserCheck()
  },
  async asyncData (ctx) {
    if (ctx.app.$auth.loggedIn) {
      const databaseId = ctx.app.$auth.$state.user.databaseId
      const client = ctx.app.apolloProvider.defaultClient

      //fetch user
      const resMe = await client.query({
        query: ME_USER,
        variables: {
          id: databaseId
        }
      })
      const jjj22 = resMe.data

      return { jjj22 }
    }
  }
}
</script>

<style></style>
