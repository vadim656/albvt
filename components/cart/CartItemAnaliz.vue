<template>
  <div
    class="bg-white shadow-md w-[270px] rounded-[5px] p-[20px] flex flex-col gap-[20px]"
  >
    <div class="flex flex-col gap-[4px] border-b-[0.5px] pb-[16px] border-b-main/50">
      <span class="text-[16px] font-semibold">{{ data.name }}</span>
      <span class="text-[12px] text-[#838383]"
        >Артикул (код) - {{ data.sku }}
      </span>
    </div>
    <div class="flex flex-col gap-[4px]">
      <div class="flex justify-between items-center">
          <span class="text-[16px]">Цена:</span>
          <span class="text-[#838383] text-[16px]">{{ data.price }} ₽</span>
      </div>
      <div  class="flex justify-between items-center">
          <span class="text-[14px] text-[#838383] font-thin">взятие крови из вены </span>
          <span class="text-[#838383] text-[16px] ">+150 ₽</span>
      </div>
    </div>
    <div class="flex flex-col gap-[4px]">
        <span class="text-[20px] text-main"> {{ parseInt(data.price) + 150 }} ₽</span>
        <span class="text-[#838383] text-[12px]"> {{ data.attributes[3].options[0] }} рабочих дня</span>
    </div>
    <button
      class="flex justify-center items-center border  border-main rounded-[5px] py-2 text-main  hover:bg-main hover:text-white anime h-[40px] px-[8px] text-[14px]"
    >
      В корзину
    </button>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style></style>
