export const state = () => ({
  products: [],
  categories: [],
  subCategory: [],
  cart: []
})

export const getters = {
  GET_ALL_PRODUCTS: state => state.products,
  GET_ALL_CATEGORIES: state => state.categories,
  GET_ALL_SUBCATEGORIES: state => state.subCategory,
  CART: state => state.cart
}

export const mutations = {
  SET_PRODUCTS (state, all_products) {
    state.products = all_products
  },
  // set category
  SET_CATEGORIES (state, all_categories) {
    state.categories = all_categories
  },
  // set subcategory
  SET_SUBCATEGORIES (state, all_sub_categories) {
    state.subCategory = all_sub_categories
  },
  // set cart in store
  SET_CART (state, index) {
    state.cart.push(index)
  },
  // remove cart item in store
  REMOVE_FROM_CART (state, index) {
    state.cart.splice(state.cart.indexOf(index), 1)
  }
}

export const actions = {
  // get allproducts
  async GET_PRODUCTS_FROM_API ({ commit }) {
    const all_products = await this.$axios.$get(
      'https://foxsis.ru/alvd/wp-json/wc/v3/products',
      {
        auth: {
          username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
          password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
        },
        params: {
          per_page: 100
        }
      }
    )
    commit('SET_PRODUCTS', all_products)
  },
  // get category
  async GET_CATEGORIES_FROM_API ({ commit }) {
    const all_categories = await this.$axios.$get(
      'https://foxsis.ru/alvd/wp-json/wc/v3/products/categories',
      {
        auth: {
          username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
          password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
        },
        params: {
          per_page: 30,
          parent: 61
        }
      }
    )
    commit('SET_CATEGORIES', all_categories)
  },
  // get subcategory
  async GET_SUBCATEGORIES_FROM_API ({ commit }, subcategory) {
    const all_sub_categories = await this.$axios.$get(
      'https://foxsis.ru/alvd/wp-json/wc/v3/products/categories',
      {
        auth: {
          username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
          password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
        },
        params: {
          per_page: 20,
          parent: subcategory
        }
      }
    )
    commit('SET_SUBCATEGORIES', all_sub_categories)
  },
  // add to cart item
  ADD_TO_CART ({ commit }, item) {
    commit('SET_CART', item)
  },
  // delete to cart item
  DELETE_FROM_CART ({ commit, index }) {
    commit('REMOVE_FROM_CART', index)
  }
}
