<template>
  <tr>
    <th scope="row">{{ position }}</th>

    <td v-if="canEdit">
      <input type="text" placeholder="Nombre" v-model="userToUpdate.name" key="name-input">
    </td>
    <td v-else>
      {{ user.name }}
    </td>

    <td v-if="canEdit">
      <input type="text" placeholder="Apellido" v-model="userToUpdate.lastname" key="lastname-input">
    </td>
    <td v-else>
      {{ user.lastname }}
    </td>

    <td v-if="canEdit">
      <input type="text" placeholder="Email" v-model="userToUpdate.email" key="email-input">
    </td>
    <td v-else>
      {{ user.email }}
    </td>

    <td v-if="canEdit">
      <input type="text" placeholder="Teléfono" v-model="userToUpdate.phone" key="phone-input">
    </td>
    <td v-else>
      {{ user.phone }}
    </td>

    <td v-if="canEdit">
      <font-awesome-icon class="action-icon" v-on:click="discardChanges" icon="times" title="Descartar cambios"/>
    </td>
    <td v-else>
      <font-awesome-icon class="action-icon" v-on:click="editUser" icon="edit" title="Editar"/>
    </td>

    <td v-if="canEdit">
      <font-awesome-icon class="action-icon" v-on:click="saveChanges" icon="check" title="Guardar cambios"/>
    </td>
    <td v-else>
      <font-awesome-icon class="action-icon" v-on:click="deleteUser" icon="trash-alt" title="Borrar usuario"/>
    </td>
  </tr>

</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator';

import User from '../../models/user.model';

@Component
export default class UserRow extends Vue {
  @Prop() private position!: number;
  @Prop() private user!: User;
  @Prop() private canEdit!: boolean;

  private userToUpdate: User = new User();

  @Watch('canEdit')
  private onUpdateUserChange(canEdit: boolean) {
    this.userToUpdate = canEdit && this.user ? Object.assign({}, this.user) : new User();
  }

  @Emit('save-user-changes')
  private saveChanges() {
    return this.userToUpdate;
  }

  @Emit('discard-user-changes')
  private discardChanges() {
    return;
  }

  @Emit('edit-user')
  private editUser() {
    return this.user;
  }

  @Emit('delete-user')
  private deleteUser() {
    return this.user;
  }
}
</script>

<style scoped lang="scss">
.action-icon:hover {
  cursor: pointer;
}
</style>
