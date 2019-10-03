<template>
  <div class="footer-container">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheFooter extends Vue {}
</script>

<style scoped lang="scss">
.footer-container {
  background-color: #42b983;
  padding: 25px;
}
</style>
