export const state = () => ({
  products: [],
  categories: []
})

export const getters = {
  GET_ALL_PRODUCTS: (state) => state.products,
  GET_ALL_CATEGORIES: (state) => state.categories
  
}

export const mutations = {
  SET_PRODUCTS (state, all_products)  {
    state.products = all_products
  },
  // set category
  SET_CATEGORIES (state, all_categories)  {
    state.categories = all_categories
  }
}

export const actions = {
  async GET_PRODUCTS_FROM_API ({ commit}) {
    const all_products = await this.$axios.$get(
      'https://foxsis.ru/alvd/wp-json/wc/v3/products', {
        auth: {
          username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
          password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
        },
      }
    )
    commit('SET_PRODUCTS', all_products)
  },
  // get category
  async GET_CATEGORIES_FROM_API ({ commit}) {
    const all_categories = await this.$axios.$get(
      'https://foxsis.ru/alvd/wp-json/wc/v3/products/categories', {
        auth: {
          username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
          password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
        },
        params: {
          per_page: 100
        }
      }
    )
    commit('SET_CATEGORIES', all_categories)
  }
}
