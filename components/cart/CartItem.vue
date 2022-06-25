<template>
  <div
    class=" flex items-center justify-between py-[8px] border-b-[0.5px] border-b-[#54ACD2]/50"
  >
    <div class="flex gap-[8px] items-center">
      <span>-</span>
      <div class="flex flex-col">
        <span class="text-[13px] font-medium cursor-pointer hover:text-main anime"
          >{{ itemInCart.name }}</span
        >
        <span class="text-[12px] text-[#9A9A9A]">{{ itemInCart.subname }} </span>
      </div>
    </div>
  <div class="flex items-center justify-between gap-[10px]">
     <span class="text-[13px] text-[#717171]">{{ itemInCart.price }} руб.</span>
     <img src="/img/icons/close_cart.svg" alt="">
  </div>
   
  </div>
</template>

<script>
export default {
  props: ['itemInCart'],
  data () {
    return {}
  }
}
</script>

<style></style>
