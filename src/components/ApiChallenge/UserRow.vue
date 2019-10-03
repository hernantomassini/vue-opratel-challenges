<template>
  <div>
    <th scope="row">{{ position }}</th>
    <td> {{ user.name }} </td>
    <td> {{ user.lastname }} </td>
    <td> {{ user.email }} </td>
    <td> {{ user.phone }} </td>
    <td>e</td>
    <td>f</td>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import User from '../../models/user.model';

@Component
export default class UserRow extends Vue {
  @Prop() private position!: number;
  @Prop() private user!: User;
}
</script>

<style scoped lang="scss">
</style>
