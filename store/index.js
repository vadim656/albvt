export const state = () => ({
  products: [],
  categories: [],
  kom_categies: [],
  subCategory: [],
  biomaterials: [],
  cart: []
})

export const getters = {
  GET_ALL_PRODUCTS: state => state.products,
  GET_ALL_CATEGORIES: state => state.categories,
  GET_ALL_KOM_CATEGORIES: state => state.kom_categies,
  GET_ALL_SUBCATEGORIES: state => state.subCategory,
  GET_ALL_BIOMATERIALS: state => state.biomaterials,
  CART: state => state.cart
}

export const mutations = {
  // set category
  SET_PRODUCTS_BIOMATERIALS (state, biomaterials) {
    state.biomaterials = biomaterials
  },
  SET_PRODUCTS (state, array3) {
    state.products = array3
  },
  // set category
  SET_CATEGORIES (state, con_category) {
    state.categories = con_category
  },
  // set kom category
  SET_KOM_CATEGORIES (state, con_kom_category) {
    state.kom_categies = con_kom_category
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
  },
  // remove cart item in store
  REMOVE_All_CART (state) {
    state.cart = []
  }
}

export const actions = {
  // get biomaterials
  async GET_BIOMATERIALS_FROM_API ({ commit }) {
    const biomaterials = await this.$axios.$get(
      'https://foxsis.ru/alvd/wp-json/wc/v3/products',
      {
        auth: {
          username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
          password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
        },
        params: {
          per_page: 20,
          category: 4725,
          _fields: 'id,name,price'
        }
      }
    )

    // const array3 = all_products.concat(all_products_2)
    commit('SET_PRODUCTS_BIOMATERIALS', biomaterials)
  },
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
          per_page: 20,
          _fields: 'id,name,categories,sku,attributes,price,upsell_ids'
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
          per_page: 22,
          parent: 2822,
          _fields: 'id,name,parent'
        }
      }
    )

    // const con_category = all_categories.concat(dop_categories)
    commit('SET_CATEGORIES', con_category)
  },
  // get kompleks category
  async GET_KOM_CATEGORIES_FROM_API ({ commit }) {
    const con_kom_category = await this.$axios.$get(
      'https://foxsis.ru/alvd/wp-json/wc/v3/products/categories',
      {
        auth: {
          username: 'ck_85e44e8735261d45a19d8f7aaf012f8d640c2dac',
          password: 'cs_4261bb639f4e9a18c146851361d6317804a816fc'
        },
        params: {
          per_page: 22,
          parent: 2823,
          _fields: 'id,name,parent,slug'
        }
      }
    )

    // const con_category = all_categories.concat(dop_categories)
    commit('SET_KOM_CATEGORIES', con_kom_category)
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
          parent: subcategory,
          _fields: 'id,name,parent,slug'
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
  },
  // delete to cart item
  RESET_CART ({ commit }) {
    commit('REMOVE_All_CART')
  }
}
