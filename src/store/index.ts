import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { RequestApi } from '@/services/RequestApi'
import { Product } from '@/utils/interfaces/Product'

export interface State {
  products: Array<Product>,
  productsInBag: Array<Product>
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    products: [],
    productsInBag: []
  },

  getters: {
  },

  mutations: {
    loadProducts(state, products) {
      state.products = products
    },

    loadBag(state, products) {
      state.productsInBag = products
    },

    addToBag(state, product) {
      state.productsInBag.push(product)
      localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag))
    },

    removeFromBag(state, productId) {
      const updateBag = state.productsInBag.filter(
        (item) => productId != item.id,
      )
      state.productsInBag = updateBag
      localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag))
    },
  },

  actions: {
    async loadProducts({commit}) {
      commit('loadProducts', await new RequestApi().info)
    },

    loadBag({ commit }) {
      const produtcsInMemory = localStorage.getItem('productsInBag') as string
      if (localStorage.getItem('productsInBag')) {
        commit('loadBag', JSON.parse(produtcsInMemory))
      }
    },

    addToBag({commit}, product: Product) {
      commit('addToBag', product)
    },

    removeFromBag({ commit }, productId) {
      if (confirm('Tem certeza que quer remover o produto do carrinho?')) {
        commit('removeFromBag', productId)
      }
    },
  },

  modules: {
  }
})

export const useStore = () => {
  return baseUseStore(key)
}
