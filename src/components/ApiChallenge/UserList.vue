<template>
  <div>
    <button type="button" class="btn btn-primary mb-3 mr-3" v-on:click="addingNewUser = true">Agregar usuario</button>
    <button type="button" class="btn btn-info mb-3" v-on:click="refreshList">Actualizar tabla</button>

    <div class="user-table">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Mail</th>
            <th scope="col">Teléfono</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>

          <UserRow
            v-for="(userInfo, index) in editableUsers"
            v-bind:key="userInfo.user._id"
            v-bind:position="index + 1"
            v-bind:user="userInfo.user"
            v-bind:canEdit="userInfo.updatingUser"
            v-on:edit-user="editUser"
            v-on:delete-user="deleteUser"
            v-on:discard-user-changes="revertAllUpdateUsers"
            v-on:save-user-changes="updateUser">
          </UserRow>

          <UserRow
            v-if="addingNewUser"
            v-bind:position="users.length + 1"
            v-bind:canEdit="true"
            v-on:save-user-changes="addUser"
            v-on:discard-user-changes="addingNewUser = false">
          </UserRow>

        </tbody>
      </table>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator';

import User from '../../models/user.model';
import UserRow from './UserRow.vue';

interface EditableUsers {
  user: User;
  updatingUser: boolean;
}

@Component({
  components: {
    UserRow,
  },
})
export default class UserList extends Vue {
  @Prop() private users!: User[];
  private editableUsers: EditableUsers[] = [];
  private addingNewUser: boolean = false;

  @Watch('users', { immediate: true })
  private onUsersChange(users: User[]) {
    this.editableUsers = users.map((x) => ({ user: x, updatingUser: false }));
  }

  @Emit('add-user')
  private addUser(user: User) {
    this.addingNewUser = false;
    return user;
  }

  @Emit('update-user')
  private updateUser(user: User) {
    this.editableUsers.forEach((x) => x.updatingUser = false);
    return user;
  }

  @Emit('delete-user')
  private deleteUser(user: User) {
    return user;
  }

  @Emit('refresh-list')
  private refreshList() {
    return;
  }

  private editUser(user: User) {
    this.editableUsers.forEach((x) => x.updatingUser = x.user === user);
  }

  private revertAllUpdateUsers() {
    this.editableUsers.forEach((x) => x.updatingUser = false);
  }
}
</script>

<style scoped lang="scss">
.user-table {
  margin-right: 20px;
}
</style>
