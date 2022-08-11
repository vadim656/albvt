<template>
  <div
    class="bg-white shadow-md rounded-[5px] p-[20px] flex flex-col gap-[20px]"
  >
    <div class="grid grid-cols-3 items-center">
      <span class="text-main text-[14px] font-semibold col-span-1"
        >№ {{ item.node.databaseId }}
      </span>
      <div class="flex items-end gap-1 col-span-1">
        <img src="/img/icons/time.svg" alt="" />
        <span class="text-[14px] text-[#8B8B8B]">{{
          item.node.date.substring(10, 0)
        }}</span>
      </div>
      <!-- <button
        @click="openItemInfo(item.node.databaseId)"
        class="flex justify-end items-center gap-1 text-[14px] font-semibold col-span-1"
      >
        Подробнее
        <img
          v-if="item.node.databaseId !== itemID"
          src="/img/icons/arrow-right.svg"
          alt=""
        />
        <img v-else src="/img/icons/arrow-right.svg" alt="" class="rotate-90" />
      </button> -->
    </div>
    <div class="grid grid-cols-3 grid-rows-1 gap-y-4">
      <div class="col-span-1 flex flex-col justify-center items-start gap-2">
        <span class="w-full  text-[14px] font-semibold"
          >Результаты анализов</span
        >
        <button class="flex items-center gap-2 text-[14px] text-main uppercase">
          Скачать
          <img src="/img/icons/download-results.svg" alt="" />
        </button>
      </div>
      <div class="col-span-1 flex flex-col justify-center items-start gap-2">
        <span class="w-full  text-[14px] font-semibold">Срок выполнения:</span>
        <div class="text-[14px] ">
          <span>{{ sortedDataDay }} </span>
          <span v-if="sortedDataDay >= 5 && sortedDataDay <= 20">дней</span>
          <span v-if="sortedDataDay >= 2 && sortedDataDay < 5">дня</span>
          <span v-if="sortedDataDay == 1 || sortedDataDay == 21">день</span>
        </div>
      </div>
      <div class="col-span-1 w-full flex justify-center">
        <span
          v-if="item.node.status == 'PROCESSING'"
          class="text-[14px] text-white bg-[#5A5A5A] font-light px-[14px] py-[14px]  w-full max-w-[220px]  sm:flex sm:items-center sm:justify-center  border-[0.5px] border-main rounded-[5px]"
          >Обработка</span
        >
        <span
          v-else-if="item.node.status == 'CANCELLED'"
          class="text-[14px] text-white bg-[#AB6757]  font-light px-[14px] py-[14px]  w-full max-w-[220px]  sm:flex sm:items-center sm:justify-center  border-[0.5px] border-main rounded-[5px]"
          >Отменен</span
        >

        <span
          v-else-if="item.node.status == 'COMPLETED'"
          class="text-[14px] text-white bg-[#1EA750] font-light px-[14px] py-[14px]  w-full max-w-[220px]  sm:flex sm:items-center sm:justify-center  border-[0.5px] border-main rounded-[5px]"
          >Оплачен</span
        >
        <button
          @click="oplata()"
          v-else
          class="text-[14px] text-white bg-main hover:text-main hover:bg-white font-light px-[14px] py-[14px]  w-full max-w-[220px]  sm:flex sm:items-center sm:justify-center  border-[0.5px] border-main rounded-[5px]"
        >
          Оплатить
          {{
            parseInt(item.node.total.replace('₽', '')).toLocaleString('ru-RU')
          }}
          ₽
        </button>
      </div>
    </div>
  </div>
  <!-- <div>tut</div> -->
</template>

<script>
export default {
  props: {
    item: Object,
    itemID: Number
  },
  methods: {
    openItemInfo () {
      this.$emit('openItemInfo')
    },
    oplata () {
      this.$emit('oplata')
    }
  },
  computed: {
    sortedDataDay: function () {
      const days = this.item.node.lineItems.edges
      //    const dayValue = days.map(item => parseInt(item.node.attributes.edges[0].node.options[0]))
      const dayValue = days.map(item =>
        parseInt(item.node.product.node.attributes.edges[0].node.options[0])
      )
      return Math.max.apply(null, dayValue)
      // return dayValue
    }
  }
}
</script>

<style></style>
