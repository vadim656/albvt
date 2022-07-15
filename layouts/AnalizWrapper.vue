<template>
  <div class="bg-[#F5F5F5]">
    <the-header />
    <div
      class="container grid grid-cols-1 sm:grid-cols-[1fr,3fr] py-[44px] gap-[20px]"
    >
      <sidebar-analiz :dataCat="character" @toCat="toCat" />
      <Nuxt />
    </div>

    <the-footer />
  </div>
</template>

<script>
import SidebarAnaliz from '~/components/Sidebars/SidebarAnaliz.vue'
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import gql from 'graphql-tag'

const GET_SUB_ANALIZES_CAT = gql`
  query GET_SUB_ANALIZES_CAT($parent: Int) {
    productCategories(where: { parent: $parent }, first: 20) {
      edges {
        node {
          databaseId
          name
          slug
          parentDatabaseId
        }
      }
    }
  }
`

export default {
  components: { TheHeader, TheFooter, SidebarAnaliz },
  data(){
    return {
      character: []
    }
  },
  methods: {
    async toCat (subcategory) {
      this.character = []
      const res = await this.$apollo.query({
        query: GET_SUB_ANALIZES_CAT,
        variables: {
          parent: subcategory
        }
      })

      const { character } = res.data.productCategories.edges

      return (
        {
          character
        },
        this.character = res.data.productCategories.edges
      )
    }
  }
}
</script>

<style></style>
