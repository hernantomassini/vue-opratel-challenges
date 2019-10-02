<template>
  <div class="header-container">
    <h1 class="header-title">¡Seleccione el Challenge!</h1>

    <b-button-group>
      <b-button variant="info">API Challenge</b-button>
      <b-button variant="warning">UI Challenge</b-button>
    </b-button-group>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

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
