<template>
  <div class="grid w-full grid-cols-[3fr,1fr] gap-[20px]">
    <div>
      <div class="flex flex-col gap-[8px]">
        <h1 class="font-medium pb-[8px] underline underline-main underline-offset-4 text-[13px]  block overflow-hidden">
          {{ subcategory.name }}:
        </h1>
        <h3 class="font-medium pb-4  text-[13px]">{{ products.name }}</h3>
      </div>

      <div class="flex flex-col gap-[20px] ">
        <div class="flex flex-col gap-[20px]">
          <span class="text-[13px] font-semibold">Анализы и цены</span>
          <div class="w-full border-b border-main font-medium text-[13px]">
            <button class="py-2 px-4 text-main border-b-[4px] border-main">Описание</button>
            <button class="py-2 px-4">Подготовка</button>
          </div>
          <div>
            <div v-html="products.description" class="text-[13px]"></div>
            <div>{{ products.attributes[2].options[0] }}</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <cart-item-analiz
      :data="products"
      />
    </div>
  </div>
</template>

<script>
import CartItemAnaliz from '~/components/cart/CartItemAnaliz.vue'
export default {
  components: {CartItemAnaliz},
  layout: 'AnalizWrapper',
  data () {
    return {
      title: ''
    }
  },

  async asyncData ({ $axios, params }) {
    const title = params.id
    let products = await $axios.$get(
      `https://foxsis.ru/alvd/wp-json/wc/v3/products/` + params.id,
      {
        auth: {
          username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
          password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
        }
      }
    )
    let subcategory = await $axios.$get(
      `https://foxsis.ru/alvd/wp-json/wc/v3/products/categories/` + params.sht,
      {
        auth: {
          username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
          password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
        }
      }
    )
    return { products, title, subcategory }
  }
}
</script>

<style></style>
