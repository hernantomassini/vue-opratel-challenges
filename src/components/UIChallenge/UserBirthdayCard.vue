<template>
  <div>
    <div class="borders">
      <div>
        <img class="img-circle" v-bind:src="birthdayInfo.photo"/>
        Estrellita
      </div>
      <div>{{ birthdayInfo.name }}</div>
      <div>PRÓXIMO EN CUMPLIR</div>
      <div>Fecha: 07 - 01</div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import UserBirthdayInfo from '../../models/user-birthday-info.model';

@Component
export default class UserBirthdayCard extends Vue {
  @Prop() private birthdayInfo!: UserBirthdayInfo;
}
</script>

<style scoped lang="scss">
.img-circle {
  height: 80px;
  border-radius: 50%;
}

.borders {
  border-style: groove;
}
</style>
