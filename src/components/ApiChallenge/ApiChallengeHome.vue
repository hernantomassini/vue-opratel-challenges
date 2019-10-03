<template>
  <div>
    <h1 class="challenge-title">Api Challenge</h1>

    <div>
      Notas:

      <ul>
        <li>
          El botón Actualizar tabla realiza un GET /all.
        </li>
        <li>
          Al editar un contacto (POST /update/:id) el request queda en Pending de manera indefinida, por lo cual la promesa nunca llega a finalizarse.
          Actualizar la lista con el botón para ver el cambio.
        </li>
      </ul>
    </div>

    <UserList
      v-bind:users="users"
      v-on:refresh-list="refreshList"
      v-on:add-user="addUser"
      v-on:update-user="updateUser"
      v-on:delete-user="deleteUser"
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
    await this.refreshList();
  }

  private async addUser(user: User) {
    try {
      await this.post('add', user);
      await this.refreshList();
    } catch (ex) {
      console.warn('Error al agregar usuario', ex);
    }
  }

  private async updateUser(user: User) {
    if (!user._id) {
      return;
    }

    const { name, lastname, email, phone } = user;
    const userToSend = { name, lastname, email, phone };
    const url = 'update/' + user._id;

    try {
      // TODO: Esto debería ser un Put.. ¯\_(ツ)_/¯
      await this.post(url, userToSend);
      await this.refreshList();
    } catch (ex) {
      console.warn('Error al actualizar usuario', ex);
    }
  }

  private async deleteUser(user: User) {
    if (!user._id) {
      return;
    }

    try {
      // TODO: Esto debería ser un Delete ¯\_(ツ)_/¯
      await this.get('delete/' + user._id);
      await this.refreshList();
    } catch (ex) {
      console.warn('Error al borrar usuario', ex);
    }
  }

  private async refreshList() {
    this.users = await this.get('all');
  }
}
</script>

<style scoped lang="scss">
.challenge-title {
  margin-bottom: 20px;
}
</style>
