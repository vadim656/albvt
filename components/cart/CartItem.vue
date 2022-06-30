<template>
  <div
    class=" flex  items-center justify-between py-[8px] border-b-[0.5px] border-b-[#D9D9D9]/50"
  >
    <div class="flex gap-[8px] items-center justify-between w-full">
      <div class="flex gap-2">
        <div class="flex flex-col">
          <span
            class="text-[16px]  cursor-pointer text-main anime test-text "
            :title="itemInCart.name"
            >{{ itemInCart.name }}</span
          >
          <span class="text-[12px] text-[#9A9A9A] pt-1"
            >{{ itemInCart.sku
            }}<span v-if="itemInCart.attributes[5]"
              >, {{ itemInCart.attributes[5].options['0'] }}</span
            >
          </span>
          <div class="flex items-center justify-between gap-[10px]  pt-2">
            <span class="text-[16px] text-[#717171] font-medium"
              >{{
                parseInt(itemInCart.price).toLocaleString('ru-RU')
              }}
              руб.</span
            >
          </div>
        </div>
      </div>
    </div>
    <button @click="deleteFromCart(itemInCart)">
      <img
        src="/img/icons/close_cart.svg"
        alt=""
        title="Удалить"
        class="cursor-pointer hover:scale-125 anime"
      />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    itemInCart: {
      type: Object,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    deleteFromCart () {
      this.$emit('deleteFromCart')
    }
  }
}
</script>

<style></style>
