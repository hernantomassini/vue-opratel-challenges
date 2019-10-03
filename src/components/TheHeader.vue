<template>
  <div class="header-container">
    <h1 class="header-title">¡Seleccione el Challenge!</h1>

    <b-button-group>

      <router-link to="/ApiChallenge">
        <b-button variant="info">API Challenge</b-button>
      </router-link>

      <router-link to="/UIChallenge">
        <b-button variant="warning">UI Challenge</b-button>
      </router-link>

    </b-button-group>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheHeader extends Vue {}
</script>

<style scoped lang="scss">
.header-container {
  background-color: #42b983;
  padding: 25px;
}

.header-title {
  padding-bottom: 20px;
}
</style>
