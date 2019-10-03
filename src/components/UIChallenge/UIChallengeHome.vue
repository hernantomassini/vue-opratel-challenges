<template>
  <div class="container">
    <div class="row">
      <div class="col-6"
        v-for="user in usersBirthdayInfo"
        v-bind:key="user.id"
      >
        <UserBirthdayCard v-bind:birthdayInfo="user"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import UserBirthdayCard from './UserBirthdayCard.vue';
import UserBirthdayInfo from '../../models/user-birthday-info.model';

@Component({
  components: {
    UserBirthdayCard,
  },
})

export default class UIChallengeHome extends Vue {
  private usersBirthdayInfo: UserBirthdayInfo[] = [
    {
      id: 1, name: 'Luiggy', date: '04 - 04', photo: require('@/assets/image1.png'),
      favorite: true, highlight: true,
    },
    {
      id: 2, name: 'Matizze', date: '04 - 04', photo: require('@/assets/image2.png'),
      favorite: false, highlight: false,
    },
    {
      id: 3, name: 'Sebas', date: '07 - 01', photo: require('@/assets/image3.png'),
      favorite: false, highlight: false,
    },
    {
      id: 4, name: 'Nachito', date: '(?)', photo: require('@/assets/image4.png'),
      favorite: true, highlight: false,
    },
  ];
}
</script>

<style scoped lang="scss">
</style>
