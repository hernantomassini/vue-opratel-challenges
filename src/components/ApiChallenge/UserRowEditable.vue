<template>
  <div>
    <th scope="row">{{ position }}</th>
    <td>
      <input type="text" placeholder="Nombre" v-model="user.name">
    </td>
    <td>
      <input type="text" placeholder="Apellido" v-model="user.lastname">
    </td>
    <td>
      <input type="text" placeholder="Email" v-model="user.email">
    </td>
    <td>
      <input type="text" placeholder="Teléfono" v-model="user.phone">
    </td>
    <td>e</td>
    <td>f</td>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import User from '../../models/user.model';

@Component
export default class UserRowEditable extends Vue {
  @Prop() private position!: number;
  @Prop() private user!: User;
}
</script>

<style scoped lang="scss">
</style>
