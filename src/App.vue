<template>
  <div id="app">
    <TheHeader/>

    <div class="app-child-container">
      <router-view></router-view>
    </div>

    <TheFooter/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

@Component({
  components: {
    TheHeader,
    TheFooter,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-child-container {
  margin-top: 25px;
  margin-left: 25px;
  margin-right: 25px;
}
</style>
