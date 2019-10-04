<template>
  <div>
    <div class="simple-container d-flex flex-column align-items-center mt-2 mb-3">
      <div class="pt-5 img-container">
        <img class="img-circle" v-bind:src="birthdayInfo.photo"/>
        <div class="favorite-icon" v-if="birthdayInfo.favorite">
          <FavoriteIcon/>
        </div>
      </div>
      <span class="name">{{ birthdayInfo.name }}</span>
      <UserBirthdayDate
        v-bind:highlight="birthdayInfo.highlight"
        v-bind:date="birthdayInfo.date"
        v-bind:proximityMsg="birthdayInfo.proximityMsg"
      />
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import UserBirthdayInfo from '../../models/user-birthday-info.model';
import UserBirthdayDate from './UserBirthdayDate.vue';
import FavoriteIcon from '@/assets/star.svg';

@Component({
  components: {
    FavoriteIcon,
    UserBirthdayDate,
  },
})
export default class UserBirthdayCard extends Vue {
  @Prop() private birthdayInfo!: UserBirthdayInfo;
}
</script>

<style scoped lang="scss">

.img-container {
  min-height: 240px;

  .img-circle {
    height: 150px;
    border-radius: 50%;
    z-index: 1;
  }

  .favorite-icon {
    height: 36px;
    width: 36px;
    position: relative;
    bottom: 50px;
    left: 110px;
    z-index: 2;
  }
}

.name {
  font-size: 2.3em;
}

.simple-container {
  min-height: 400px;
  min-width: 200px;
  max-width: 330px;
  border-color: #EAEAEA;
  border-style: solid;
}
</style>
