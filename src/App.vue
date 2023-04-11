<template>
  <div class="menu">
    <Logo />
    <nav>
      <router-link to="/">Início</router-link>
      -
      <router-link to="/basket">
        Carrinho ({{ productsInBag.length }})
      </router-link>
    </nav>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, useStore } from "vuex";
import Logo from "@/components/Logo/index.vue";

export default defineComponent({
  data: () => {
    return {
      store: useStore(),
    };
  },

  components: {
    Logo,
  },

  created() {
    this.store.dispatch("loadProducts");
    this.store.dispatch("loadBag");
  },

  computed: mapState(["productsInBag"]),
});
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: #2c3e50;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  margin: 0 30px;
  padding: 30px;
  color: #fff;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #ff3;
    }
  }
}
</style>
