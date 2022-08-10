export const state = () => ({
  categories: '',
  biomaterials: [],
  cart: [],
  cartID: []
})

export const getters = {
  GET_ALL_BIOMATERIALS: state => state.biomaterials,
  CART: state => state.cart,
  CART_IDS: state => state.cartID,
  CATEGORY: state => state.categories
}

export const mutations = {
  // set category
  SET_PRODUCTS_BIOMATERIALS (state, biomaterials) {
    state.biomaterials = biomaterials
  },

  // set cart ID in store
  SET_CART (state, index) {
    state.cart.push(index)
    if (index.cross_sell_ids.length > 0) {
      index.cross_sell_ids.forEach((element) => {
        state.cartID.push(element)
      })
    }
    state.cartID.push(index.id)
    
    
  },// set cart in store
  SET_CATEGORY (state, subcategory) {
    state.categories = subcategory
  },
  // remove cart item in store
  REMOVE_FROM_CART (state, index) {
    state.cart.splice(index, 1),
    state.cartID.splice(index, 1)
  },
  // remove cart item in store
  REMOVE_All_CART (state) {
    state.cart = [],
    state.cartID = []
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
  // get category
  GET_CATEGORIES_FROM_JSON ({ commit }, subcategory) {
    commit('SET_CATEGORY', subcategory)
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
