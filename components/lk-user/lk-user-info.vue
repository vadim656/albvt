<template>
  <div class=" bg-white rounded-[5px] shadow-md flex flex-col ">
              <div
                class="bg-[#EDEDED] p-4  flex flex-col gap-4 font-medium text-[18px]"
              >
                <span class=" capitalize">{{ this.$auth.user.firstName }}</span>
                <span class=" capitalize">{{ this.$auth.user.lastName }}</span>
                <!-- <span class="capitalize ">{{ user.lastName }}</span>  -->
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
</template>

<script>
export default {
    methods: {
        handleReload(){
            this.$emit('handleReload')
        },
        handleLogout(){
            this.$emit('handleLogout')
        }
    }
}
</script>

<style>

</style>