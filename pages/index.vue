<template>
  <div>
    <main-page-wrapper :data_wrap="data" />
  </div>
</template>

<script>
import MainPageWrapper from '~/components/pages/MainPageWrapper.vue'
export default {
  components: { MainPageWrapper },
  data () {
    return {
      data: [],
      dataInfo: []
    }
  },
  layout: 'MainLayout',
  async asyncData ({ $axios }) {
    let { data } = await $axios.get(
      'https://foxsis.ru/alvd/wp-json/wp/v2/posts',
      {
        auth: {
          username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
          password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
        },
        params: {
          per_page: 20
        }
      }
    )

    return { data }
  }
}
</script>
