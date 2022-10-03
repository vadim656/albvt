<template>
  <div v-if="data" class='' v-show='isActive'>
    <p  class="text-[14px] pt-4">{{replaceDAta}}</p> 
    <!-- <p v-html="data" ></p> -->
  </div>
</template>

<script>

var regex = /(&nbsp;|<([^>]+)>)/ig

  


export default {
  props: {
    title: {
      type: String,
      default: 'Tab'
    },
    data: {
      type: String,
    }
  },
  data () {
    return {
      isActive: true
    }
  },
  computed: {
    replaceDAta(){
      return this.data.replace(regex, "")
    }
  }
}
</script>