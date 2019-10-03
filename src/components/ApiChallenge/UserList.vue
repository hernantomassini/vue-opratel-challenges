<template>
  <div>
    <button type="button" class="btn btn-primary mb-3 mr-3" v-on:click="addingNewUser = true">Agregar usuario</button>
    <button type="button" class="btn btn-info mb-3">Actualizar tabla</button>

    <div>
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
          <tr
            v-for="(userInfo, index) in editableUsers"
            v-bind:key="userInfo.user._id">

              <UserRowEditable v-if="userInfo.updatingUser"
                v-bind:position="index + 1"
                v-bind:user="userInfo.user">
              </UserRowEditable>

              <UserRow v-else
                v-bind:position="index + 1"
                v-bind:user="userInfo.user">
              </UserRow>

          </tr>

          <tr v-if="addingNewUser">
            <UserRowEditable
              v-bind:position="users.length + 1">
            </UserRowEditable>
          </tr>

        </tbody>
      </table>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import User from '../../models/user.model';
import UserRow from './UserRow.vue';
import UserRowEditable from './UserRowEditable.vue';

interface EditableUsers {
  user: User;
  updatingUser: boolean;
}

@Component({
  components: {
    UserRowEditable,
    UserRow,
  },
})
export default class UserList extends Vue {
  @Prop() private users!: User[];
  private editableUsers: EditableUsers[] = [];
  private addingNewUser: boolean = false;

  @Watch('users')
  private onUsersChange(users: User[]) {
    this.editableUsers = users.map((x) => ({ user: x, updatingUser: false }));
  }
}
</script>

<style scoped lang="scss">
</style>
