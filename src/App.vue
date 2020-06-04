<template>
  <div id="app">
    <b-container>
      <NavBar />
      <router-view :key="$route.fullPath" />
    </b-container>
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  components: { NavBar },
  methods: {}
};
</script>

<style lang="scss">
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

h1 {
  font-size: 50px;
  font-weight: 700;
}

.-sombra {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}
</style>
