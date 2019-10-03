<template>
  <div>
    <h1 class="challenge-title">API Challenge</h1>
    <UserList
      v-bind:users="users"
    ></UserList>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import HttpMixin from '../../mixins/http';
import User from '../../models/user.model';
import UserList from './UserList.vue';

@Component({
  components: {
    UserList,
  },
})
export default class ApiChallengeHome extends Mixins(HttpMixin) {

  private users: any[] = [];

  private async mounted() {
    await this.updateUserList();
  }

  private async addUser(user: User) {
    try {
      const response = await this.post('add', user);
      console.log('AddUserResponse', response);
      this.users.push(user);
      return response;
    } catch (ex) {
      console.warn('Error al agregar usuario', ex);
    }
  }

  private async deleteUser(user: User) {

    if (!user._id) {
      return;
    }

    try {
      const response = await this.delete(user._id);
      this.users = this.users.filter((x) => x._id !== user._id);
      return response;
    } catch (ex) {
      // console.warn('Error al borrar usuario', ex);
    }
  }

  private async updateUser(user: User) {
    try {
      const response = await this.put('update', user);
      // TODO Update user in array.
      return response;
    } catch (ex) {
      // console.warn('Error al actualizar usuario', ex);
    }
  }

  private async updateUserList() {
    this.users = await this.get('all');
  }
}
</script>

<style scoped lang="scss">
.challenge-title {
  margin-bottom: 20px;
}
</style>
