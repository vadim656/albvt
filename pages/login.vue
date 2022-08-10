<template>
  <div>
    <div class="container w-full mx-auto flex justify-center pt-40">
      <form
        @submit.prevent="handleLoginSubmit"
        v-if="!isAuthenticated"
        class="flex flex-col gap-6"
      >
        <div class="flex justify-between gap-2 items-center">
          <label>Логин</label>
          <input
            class="border p-2 rounded-md"
            v-model="credentials.username"
            type="text"
            required
          />
        </div>
        <div class="flex justify-between gap-2 items-center">
          <label>Пароль</label>
          <input
            class="border p-2 rounded-md"
            type="password"
            v-model="credentials.password"
            required
          />
        </div>
        <div>
          <div v-if="submitting">Отправка ....</div>
          <button
            type="submit"
            class="bg-[#343434] text-white py-2 px-6  rounded-md"
          >
            Войти
          </button>
        </div>
      </form>
      <div v-else>
        <button type="button" class="bg-neutral-800 text-white py-2 px-6  rounded-md" @click="onLogout">Выйти</button>
      </div>
      <div style="color: red;" v-if="error">{{ error }}</div>
      <div v-if="successfulData" class="container">{{ successfulData }}</div>
    </div>
  </div>
</template>

<script>


export default {
  layout: 'MainLayout',
  head () {
    return {
      title: 'Войти в личный кабинет'
    }
  },
  data () {
    return {
      isAuthenticated: false,
      submitting: false,
      error: null,
      credentials: {
        username: 'admin',
        password: 'Dropestroke0013!'
      },
      successfulData: null
    }
  },
  mounted () {
    this.isAuthenticated = !!this.$apolloHelpers.getToken()

  },
  methods: {
   async handleLoginSubmit() {
      const credentials = this.credentials
      this.formBusy = true
      try {
        await this.$auth.loginWith('graphql', credentials)
        // console.log(localStorage["auth._token.graphql"]);
        this.formBusy = false
      } catch (errors) {
        this.formBusy = false
        console.log(errors);
      }
    },
    async onLogout () {
      await this.$apolloHelpers.onLogout()
      this.isAuthenticated = false
    }
  }
}
</script>
