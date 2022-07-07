<template>
  <div class="">
    <div
      class="fixed bg-[#343434]/40  w-screen h-screen left-0 top-0 pt-[13px] z-[11]"
      @click="closeLogin()"
    ></div>
    <div
      class="bg-white absolute overflow-hidden p-[24px] right-0 top-0 w-full  max-w-[370px] shadow-md rounded-bl-[5px] z-[999999]"
    >
      

      <form action="" class="flex flex-col gap-4">
        <span class="w-full text-right pb-4">Вход в личный кабинет</span>
        <div class="flex flex-col items-start justify-start gap-2 w-full ">
          <!-- <label for="login" class="text-[14px]">Логин</label> -->
          <input
            type="text"
            placeholder="Логин"
            value="ofis_my"
            v-model="login"
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
            v-model="password"
            class="w-full bg-white p-2 border-[1px] border-[#AEAEAE] rounded-[5px] focus:outline-[#8a8a8a]"
            id="pass"
          />
        </div>
        <div class="flex flex-col items-center justify-center gap-2">
          <button
            class="rounded-[5px] border border-main h-[49px] hover:bg-main  anime text-main hover:text-white w-full flex justify-center items-center py-2 text-[16px]"
          >
            Войти
          </button>
          <button class="text-[#343434] w-full text-center">Регистрация</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    closeLogin () {
      this.$emit('loginView')
    }
  }
}
</script>

<style></style>
