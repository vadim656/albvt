<template>
  <div class="container flex flex-col gap-[100px]">
    <the-block-one class="mt-[47px]" />
    <complecs-analises />
    <all-info/>
  </div>
</template>

<script>
import AllInfo from '../AllInfo.vue'
import ComplecsAnalises from '../ComplecsAnalises.vue'
import TheBlockOne from '../TheBlockOne.vue'
export default {
  components: { TheBlockOne, ComplecsAnalises, AllInfo }
}
</script>

<style></style>
