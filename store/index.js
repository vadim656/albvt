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
  SET_PRODUCTS (state, array3) {
    state.products = array3
  },
  // set category
  SET_CATEGORIES (state, con_category) {
    state.categories = con_category
  },
  // set subcategory
  SET_SUBCATEGORIES (state, con_sub_category) {
    state.subCategory = con_sub_category
  },
  // set cart in store
  SET_CART (state, index) {
    state.cart.push(index)
  },
  // remove cart item in store
  REMOVE_FROM_CART (state, index) {
    state.cart.splice(index, 1)
  }
}

export const actions = {
  // get allproducts
  async GET_PRODUCTS_FROM_API ({ commit }) {
    const array3 = await this.$axios.$get(
      'https://foxsis.ru/alvd/wp-json/wc/v3/products',
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


    // const array3 = all_products.concat(all_products_2)
    commit('SET_PRODUCTS', array3)
  },
  // get category
  async GET_CATEGORIES_FROM_API ({ commit }) {
    const con_category = await this.$axios.$get(
      'https://foxsis.ru/alvd/wp-json/wc/v3/products/categories',
      {
        auth: {
          username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
          password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
        },
        params: {
          per_page: 20,
          parent: 61
        }
      }
    )

    // const con_category = all_categories.concat(dop_categories)
    commit('SET_CATEGORIES', con_category)
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

    // const con_sub_category = all_sub_categories.concat(dop_sub_categories)
    commit('SET_SUBCATEGORIES', all_sub_categories)
  },
  // add to cart item
  ADD_TO_CART ({ commit }, item) {
    commit('SET_CART', item)
  },
  // delete to cart item
  DELETE_FROM_CART ({ commit }, index) {
    commit('REMOVE_FROM_CART', index)
  }
}
