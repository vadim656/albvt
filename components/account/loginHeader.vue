<template>
  <div class="">
    <div
      class="fixed bg-[#343434]/40  w-screen h-screen left-0 top-0 pt-[13px] z-[11]"
      @click="closeLogin()"
    ></div>
    <div
      class="bg-white absolute overflow-hidden p-[24px] right-0 top-0 w-full  max-w-[370px] shadow-md rounded-bl-[5px] z-[999999]"
    >
    <span class="w-full text-right pb-4">Вход в личный кабинет</span>
    <tabs-login>
      <tab-login title="По телефону">
         <!-- телефон -->
      <form @submit.prevent="handleLoginSubmit()" class="flex flex-col gap-4">
        
        <div class="flex flex-col items-start justify-start gap-2 w-full ">
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
        <div class="flex flex-col items-start justify-start gap-2 w-full ">
          <!-- <label for="pass" class="text-[14px]">Пароль</label> -->
          <input
            type="password"
            placeholder="Пароль"
            value="ofis_my"
            v-model="credentials.password"
            class="w-full bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
            id="pass"
          />
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
            <nuxt-link to="/register" class="text-[#343434] w-full text-center"
              >Регистрация</nuxt-link
            >
          </div>
        </div>
      </form>
      </tab-login>
      <tab-login title="По Email">
         <!-- email -->
      <form @submit.prevent="handleLoginSubmit()" class="flex flex-col gap-4">
        
        <div class="flex flex-col items-start justify-start gap-2 w-full ">
          <!-- <label for="login" class="text-[14px]">Логин</label> -->
          <input
            type="text"
            placeholder="email"
            v-model="credentials2.username"
            class="w-full bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
            id="login2"
          />
        </div>
        <div class="flex flex-col items-start justify-start gap-2 w-full ">
          <!-- <label for="pass" class="text-[14px]">Пароль</label> -->
          <input
            type="password"
            placeholder="Пароль"
            v-model="credentials2.password"
            class="w-full bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
            id="pass2"
          />
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
            <nuxt-link to="/register" class="text-[#343434] w-full text-center"
              >Регистрация</nuxt-link
            >
          </div>
        </div>
      </form>
      </tab-login>
    </tabs-login>

   
     
    </div>
    
  </div>
</template>

<script>
import TabLogin from '../tabs/tab-login.vue'
import tabsLogin from '../tabs/tabs-login.vue'
export default {
  components: { tabsLogin, TabLogin },
  data () {
    return {
      isAuthenticated: false,
      submitting: false,
      error: null,
      credentials: {
        username: '',
        password: ''
      },
       credentials2: {
        username: '',
        password: ''
      },
      successfulData: null,
      loginError: false
    }
  },
  mounted () {
    this.isAuthenticated = !!this.$apolloHelpers.getToken()
  },
  methods: {
    async handleLoginSubmit () {
      const phoneUser = this.credentials.username
      const getPhone = phoneUser.replace('-','').replace('-','').replace('+7','').replace('(','').replace(')','')
      this.credentials.username = getPhone
      console.log(getPhone);
      const credentials = this.credentials
      this.formBusy = true
      try {
        await this.$auth.loginWith('graphql', {
        username: getPhone,
        password: this.credentials.password
      })
        // console.log(localStorage["auth._token.graphql"]);
        this.formBusy = false
        this.loginError = false
      } catch (errors) {
        this.formBusy = false
        this.loginError = true
        console.log(errors)
      }
    },
    async handleLoginSubmit2 () {
      const emailUser = this.credentials2.username
      this.formBusy = true
      try {
        await this.$auth.loginWith('graphql', {
        username: emailUser,
        password: this.credentials2.password
      })
        // console.log(localStorage["auth._token.graphql"]);
        this.formBusy = false
        this.loginError = false
      } catch (errors) {
        this.formBusy = false
        this.loginError = true
        console.log(errors)
      }
    },
    async onLogout () {
      await this.$apolloHelpers.onLogout()
      this.isAuthenticated = false
    },
    closeLogin () {
      this.$emit('loginView')
    }
  }
}
</script>

<style></style>
