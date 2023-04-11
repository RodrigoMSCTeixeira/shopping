<template>
  <nav>
    <router-link to="/">Início</router-link>
    -
    <router-link to="/basket">
      Carrinho ({{ productsInBag.length }})
    </router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, useStore } from 'vuex'

export default defineComponent({
  data: () => {
    return {
      store: useStore(),
    }
  },
  created() {
    this.store.dispatch('loadProducts')
    this.store.dispatch('loadBag')
  },

  computed: mapState(['productsInBag']),
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
